import ar from "./ar.json";
import en from "./en.json";

export function getContent(locale: string) {
  return locale === "ar" ? ar : en;
}