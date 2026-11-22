"use client";

import { useSyncExternalStore } from "react";
import type { Lang } from "@/content/site";

// Idioma guardado en localStorage. Por defecto inglés.
const KEY = "lang";
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

function getSnapshot(): Lang {
  try {
    return localStorage.getItem(KEY) === "es" ? "es" : "en";
  } catch {
    return "en";
  }
}

function getServerSnapshot(): Lang {
  return "en";
}

export function setLang(lang: Lang) {
  try {
    localStorage.setItem(KEY, lang);
  } catch {}
  document.documentElement.lang = lang;
  listeners.forEach((l) => l());
}

export function useLang() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
