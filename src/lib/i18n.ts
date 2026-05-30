export const supportedLocales = ["en", "hi", "mr"] as const;
export type Locale = (typeof supportedLocales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  hi: "हिन्दी",
  mr: "मराठी",
};

export const messages = {
  en: {
    browseProperties: "Browse Properties",
    whatsappUs: "WhatsApp Us",
    scheduleVisit: "Schedule Visit",
  },
  hi: {
    browseProperties: "प्रॉपर्टी देखें",
    whatsappUs: "व्हाट्सऐप करें",
    scheduleVisit: "विज़िट बुक करें",
  },
  mr: {
    browseProperties: "प्रॉपर्टी पहा",
    whatsappUs: "व्हॉट्सअॅप करा",
    scheduleVisit: "भेट ठरवा",
  },
} satisfies Record<Locale, Record<string, string>>;

export function getMessages(locale: Locale = "en") {
  return messages[locale];
}
