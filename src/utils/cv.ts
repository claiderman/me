import cvDataES from '../data/cv.json';
import cvDataEN from '../data/cv.en.json';
import type { CV } from '@types/cv';

const cvDataMap = {
  es: cvDataES,
  en: cvDataEN,
};

export default function getCVData(locale: 'es' | 'en' = 'es'): CV {
  return cvDataMap[locale] as CV;
}