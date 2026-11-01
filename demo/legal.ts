import { createApp } from "vue";
import LegalApp from "./LegalApp.vue";
import { isLegalPageKey } from "./data/legalPages";
import "./styles/index";

// Each legal HTML entry names its page on <body data-page="...">.
const pageKey = document.body.dataset.page;

if (isLegalPageKey(pageKey)) {
  createApp(LegalApp, { pageKey }).mount("#app");
}
