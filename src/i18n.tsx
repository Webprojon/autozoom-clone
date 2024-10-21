import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
//import languageDetector from "i18next-browser-languageDetector";
import i18next from "i18next";
import enTranslation from "../public/locales/en.json";
import ruTranslation from "../public/locales/ru.json";

const language =
	typeof window !== "undefined"
		? localStorage.getItem("i18nextLng") || "en"
		: "en";

i18next
	.use(Backend)
	//.use(languageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "en",
		lng: language,
		debug: true,
		resources: {
			en: { translation: enTranslation },
			ru: { translation: ruTranslation },
		},
	});

export default i18next;
