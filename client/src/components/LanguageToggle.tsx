import { useLang } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export default function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md p-0.5",
        className
      )}
      role="group"
      aria-label="Language toggle"
    >
      <button
        onClick={() => setLang("ja")}
        className={cn(
          "px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200",
          lang === "ja"
            ? "bg-white text-ocean shadow-sm"
            : "text-white/80 hover:text-white"
        )}
        aria-pressed={lang === "ja"}
      >
        日本語
      </button>
      <button
        onClick={() => setLang("en")}
        className={cn(
          "px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200",
          lang === "en"
            ? "bg-white text-ocean shadow-sm"
            : "text-white/80 hover:text-white"
        )}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
