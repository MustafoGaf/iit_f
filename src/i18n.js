import i18next from "i18next";
import en from "./locales/en/en.json";
import ru from "./locales/ru/ru.json";
import tj from "./locales/tj/tj.json";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: en,
  },
  tj: {
    translation: tj,
  },
  ru: {
    translation: ru,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: JSON.parse(localStorage.getItem("language")),
  fallbacking: "ru",
});
export default i18next;
