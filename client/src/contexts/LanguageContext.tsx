import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Language = "ja" | "en";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("vep-lang");
      if (stored === "ja" || stored === "en") return stored;
      const browser = navigator.language.toLowerCase();
      if (browser.startsWith("ja")) return "ja";
    }
    return "ja";
  });

  useEffect(() => {
    localStorage.setItem("vep-lang", lang);
    document.documentElement.lang = lang === "ja" ? "ja" : "en";
  }, [lang]);

  const toggle = () => setLang((prev) => (prev === "ja" ? "en" : "ja"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
