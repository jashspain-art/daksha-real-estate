"use client";

import { Languages } from "lucide-react";
import { localeLabels, supportedLocales } from "@/lib/i18n";

export function LanguageSwitcher() {
  return (
    <label className="hidden items-center gap-1 text-xs text-slate-500 sm:flex">
      <Languages className="h-4 w-4" />
      <span className="sr-only">Language</span>
      <select
        aria-label="Language"
        className="bg-transparent text-xs outline-none"
        defaultValue="en"
        onChange={(event) => {
          document.cookie = `daksha_locale=${event.target.value}; path=/; max-age=31536000; samesite=lax`;
        }}
      >
        {supportedLocales.map((locale) => <option key={locale} value={locale}>{localeLabels[locale]}</option>)}
      </select>
    </label>
  );
}
