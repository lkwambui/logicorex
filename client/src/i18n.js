import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "footer.theSpark": "The Spark Behind Innovation",
      // add other keys you need
    },
  },
  fr: {
    translation: {
      "footer.theSpark": "L'étincelle derrière l'innovation",
    },
  },
  sw: {
    translation: {
      "footer.theSpark": "Cheche nyuma ya Ubunifu",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("logicorex_language") || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;