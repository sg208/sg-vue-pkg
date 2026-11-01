import { computed, onBeforeUnmount, onMounted, ref } from "vue";

export type ThemeChoice = "system" | "light" | "dark";

const STORAGE_KEY = "sg208-theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";

const readSavedTheme = (): ThemeChoice => {
  try {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : "system";
  } catch {
    return "system";
  }
};

const saveTheme = (choice: ThemeChoice) => {
  try {
    if (choice === "system") {
      localStorage.removeItem(STORAGE_KEY);
      return;
    }
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Storage blocked: the choice still applies for this visit.
  }
};

// Shared across components so the toggle and the playground agree.
const themeChoice = ref<ThemeChoice>("system");
const isSystemDark = ref(false);

const applyTheme = (choice: ThemeChoice) => {
  const root = document.documentElement;
  if (choice === "system") {
    delete root.dataset.theme;
    root.dataset.sgTheme = "auto";
    return;
  }
  root.dataset.theme = choice;
  root.dataset.sgTheme = choice;
};

export const useTheme = () => {
  const mediaQuery = window.matchMedia(DARK_QUERY);

  const handleSystemChange = (event: MediaQueryListEvent) => {
    isSystemDark.value = event.matches;
  };

  onMounted(() => {
    themeChoice.value = readSavedTheme();
    isSystemDark.value = mediaQuery.matches;
    mediaQuery.addEventListener("change", handleSystemChange);
  });

  onBeforeUnmount(() => {
    mediaQuery.removeEventListener("change", handleSystemChange);
  });

  const setTheme = (choice: ThemeChoice) => {
    themeChoice.value = choice;
    applyTheme(choice);
    saveTheme(choice);
  };

  const isDark = computed(
    () =>
      themeChoice.value === "dark" ||
      (themeChoice.value === "system" && isSystemDark.value),
  );

  return { themeChoice, isDark, setTheme };
};
