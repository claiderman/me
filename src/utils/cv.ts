import type { CV } from "@types/cv";
import cvDataEN from "../data/cv.en.json";
import cvDataES from "../data/cv.json";

const cvDataMap = {
  es: cvDataES,
  en: cvDataEN,
};

export default function getCVData(locale: "es" | "en" = "es"): CV {
  return cvDataMap[locale] as CV;
}
