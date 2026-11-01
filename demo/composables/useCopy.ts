import { nextTick, onBeforeUnmount, ref } from "vue";

// Copies text and exposes a short status message for an aria-live region.
export const useCopy = () => {
  const copyStatus = ref("");
  const resetTimer = ref<number>();

  const copyText = async (text: string, label: string) => {
    // Clear first so a repeated identical message is announced again.
    copyStatus.value = "";
    await nextTick();
    try {
      await navigator.clipboard.writeText(text);
      copyStatus.value = `${label} copied to the clipboard.`;
    } catch {
      copyStatus.value = `Copying failed. Select the ${label.toLowerCase()} and copy it by hand.`;
    }
    window.clearTimeout(resetTimer.value);
    resetTimer.value = window.setTimeout(() => {
      copyStatus.value = "";
    }, 3000);
  };

  onBeforeUnmount(() => window.clearTimeout(resetTimer.value));

  return { copyStatus, copyText };
};
