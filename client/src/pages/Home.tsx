import { useLang } from "@/contexts/LanguageContext";
import { t, type Bi } from "@/lib/translations";
import LanguageToggle from "@/components/LanguageToggle";
import { useReveal } from "@/hooks/useReveal";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Globe,
  Users,
  Calendar,
  Monitor,
  Gift,
  Building2,
  GraduationCap,
  Sparkles,
  MessageCircle,
  Handshake,
  Award,
  Video,
  MapPin,
  Clock,
  Wifi,
  ArrowRight,
  Quote,
  ImageIcon,
} from "lucide-react";

// ============================================================
// Mirai Eduventure Design System v1.0
// Primary: Terracotta #C04840
// Dark:    Brown Dark #5C2A1E
// Bg:      Cream White #FDFAF6
// Font:    Inter (400/500 only)
// ============================================================

// MEI brand gradient: Brown Dark → Terracotta
const MEI_GRADIENT =
  "linear-gradient(135deg, #5C2A1E 0%, #6B3324 40%, #A04038 75%, #C04840 100%)";

// MEI hero gradient: Brown Dark with terracotta glow — strong for text readability on mobile
const MEI_HERO =
  "linear-gradient(180deg, rgba(92,42,30,0.92) 0%, rgba(92,42,30,0.75) 40%, rgba(92,42,30,0.90) 100%)";

// Works on the Manus site and when deployed below the GitHub Pages repository path.
const asset = (fileName: string) => `${import.meta.env.BASE_URL}manus-storage/${fileName}`;

// Indonesia section card images
const IND_IMAGES = [
  asset("indonesia-megacity_7d9a3d55.jpg"),
  asset("indonesia-g20_c9f89bd1.jpg"),
  asset("indonesia-sns_1c7e5ee0.jpg"),
  asset("indonesia-population_d3ee152d.jpg"),
  asset("indonesia-religion_570efaaf.jpg"),
];

// Benefits section card images
const BENEFIT_IMAGES = [
  asset("benefit-communication_c39725ca.jpg"),
  asset("IMG_3845_1ef54620.webp"),
  asset("benefit-future_fbeea7fe.jpg"),
];

function L({ children }: { children: Bi }) {
  const { lang } = useLang();
  return <>{children[lang]}</>;
}

function Section({
  id,
  children,
  className = "",
  bg = "",
  style,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bg?: string;
  style?: React.CSSProperties;
}) {
  const { ref, visible } = useReveal();
  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal ${visible ? "visible" : ""} ${bg} ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}

// Photo placeholder component for user-uploaded images
function PhotoPlaceholder({ label, aspect = "aspect-[3/2]" }: { label: string; aspect?: string }) {
  return (
    <div className={`${aspect} rounded-lg border border-mei-border bg-mei-cream-dark flex flex-col items-center justify-center gap-2`} style={{ borderStyle: "dashed", borderWidth: "2px" }}>
      <ImageIcon className="w-8 h-8 text-mei-ink-faint" style={{ opacity: 0.3 }} />
      <span className="text-xs text-mei-ink-faint font-medium text-center px-4" style={{ opacity: 0.5 }}>{label}</span>
    </div>
  );
}

// MEI Badge component (pill shape per design system)
function MeBadge({ children, variant = "terracotta" }: { children: React.ReactNode; variant?: "terracotta" | "brown" | "japan" | "indonesia" }) {
  const styles: Record<string, string> = {
    terracotta: "bg-[#F5EAE9] text-[#C04840]",
    brown: "bg-[rgba(92,42,30,0.10)] text-[#5C2A1E]",
    japan: "bg-[rgba(44,74,124,0.10)] text-[#2C4A7C]",
    indonesia: "bg-[rgba(46,125,50,0.10)] text-[#2E7D32]",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[variant]}`}
      style={{ borderRadius: "100px", fontSize: "12px", fontWeight: 500 }}
    >
      {children}
    </span>
  );
}

export default function Home() {
  const { lang } = useLang();
  const nav = t.nav;
  const hero = t.hero;
  const sa = t.studyAbroad;
  const ov = t.overview;
  const ind = t.indonesia;
  const ben = t.benefits;
  const m1 = t.month1;
  const m2 = t.month2;
  const tes = t.testimonial;
  const par = t.partners;
  const cta = t.cta;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfQjRLdDFcDm2d3KhSytexdleKms541jf69XvkAAqRRu9LFaQ/viewform?usp=dialog";

  const handleApply = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ===== NAV — Brown Dark #5C2A1E per MEI design system ===== */}
      <header
        className="fixed top-0 left-0 right-0 z-50 shadow-md"
        style={{ backgroundColor: "#5C2A1E", height: "52px" }}
      >
        <div className="container flex items-center justify-between h-full" style={{ padding: "0 20px" }}>
          {/* Dual logo: 唐津東高校 × Mirai Eduventure */}
          <div className="flex items-center gap-2">
            <img
              src={asset("karatsu-logo_999b414e.jpg")}
              alt="佐賀県立唐津東高等学校"
              className="w-9 h-9 rounded-full object-cover flex-shrink-0"
            />
            <span className="text-[#C96B5A] text-sm font-light hidden sm:inline">×</span>
            <img
              src={asset("mirai-eduventure-indonesia-logo_06de27ed.png")}
              alt="Mirai Eduventure Indonesia"
              className="h-9 w-[112px] rounded-md object-contain object-left flex-shrink-0 sm:w-[142px]"
            />
            <span className="font-medium text-xs tracking-tight hidden md:block text-[#FDFAF6] ml-1" style={{ fontSize: "13px", fontWeight: 500 }}>
              Discover a New World
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-5" style={{ fontSize: "13px", fontWeight: 400 }}>
            <button onClick={() => scrollTo("overview")} className="text-[rgba(253,250,246,0.65)] hover:text-[#FDFAF6] transition-colors">
              {nav.overview[lang]}
            </button>
            <button onClick={() => scrollTo("indonesia")} className="text-[rgba(253,250,246,0.65)] hover:text-[#FDFAF6] transition-colors">
              {nav.indonesia[lang]}
            </button>
            <button onClick={() => scrollTo("benefits")} className="text-[rgba(253,250,246,0.65)] hover:text-[#FDFAF6] transition-colors">
              {nav.benefits[lang]}
            </button>
            <button onClick={() => scrollTo("curriculum")} className="text-[rgba(253,250,246,0.65)] hover:text-[#FDFAF6] transition-colors">
              {nav.curriculum[lang]}
            </button>
            <button onClick={() => scrollTo("partners")} className="text-[rgba(253,250,246,0.65)] hover:text-[#FDFAF6] transition-colors">
              {nav.partners[lang]}
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <Button
              size="sm"
              onClick={handleApply}
              className="btn-cta border-0 text-white font-medium"
              style={{ backgroundColor: "#C04840", borderRadius: "8px", fontSize: "12px", fontWeight: 500, padding: "0 12px", height: "28px" }}
            >
              {nav.apply[lang]}
            </Button>
          </div>
        </div>
      </header>

      {/* ===== HERO — Full image + bottom gradient + minimal text ===== */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh", paddingTop: "52px" }}>
        {/* Full-screen background image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={asset("hero-students-beach-v2_71beda5c.png")}
            alt=""
            className="w-full"
            style={{ objectFit: "cover", objectPosition: "50% 0%", transform: "scale(1.1)", transformOrigin: "top center", height: "100%" }}
          />
        </div>

        {/* Bottom gradient overlay — transparent top → dark bottom for text legibility */}
        <div className="absolute inset-0 z-1" style={{
          background: "linear-gradient(180deg, rgba(92,42,30,0.85) 0%, rgba(92,42,30,0.5) 25%, rgba(92,42,30,0) 45%, rgba(92,42,30,0) 100%)"
        }} />

        {/* Minimal text at bottom */}
        <div className="relative z-10 flex items-start justify-center" style={{ minHeight: "calc(100vh - 52px)" }}>
          <div className="container text-center text-[#FDFAF6]" style={{ maxWidth: "560px", paddingTop: "clamp(12px, 2vh, 24px)" }}>
            {/* Eyebrow pill */}
            <div
              className="inline-block px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(253,250,246,0.95)", color: "#5C2A1E", fontSize: "clamp(13px, 3vw, 15px)", fontWeight: 500 }}
            >
              {hero.eyebrow[lang]}
            </div>
            {/* Decorative line accent */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <div style={{ width: "clamp(24px, 8vw, 48px)", height: "2px", background: "linear-gradient(90deg, transparent, #E8A090)" }} />
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#E8A090" }} />
              <div style={{ width: "clamp(24px, 8vw, 48px)", height: "2px", background: "linear-gradient(90deg, #E8A090, transparent)" }} />
            </div>

            {/* Title + subtitle only — minimal */}
            <h1 className="font-normal mb-2 leading-tight" style={{ fontSize: "clamp(32px, 8vw, 52px)", fontWeight: 600, lineHeight: 1.15, color: "#FDFAF6", textShadow: "0 2px 16px rgba(0,0,0,0.6), 0 0 40px rgba(201,107,90,0.3)" }}>
              {lang === "ja" ? (
                <>世界と出会う<br className="hidden md:block" />２ヶ月間</>
              ) : (
                hero.title[lang]
              )}
            </h1>
            <p className="mb-1" style={{ fontSize: "clamp(20px, 5vw, 28px)", fontWeight: 600, color: "#E8A090", textShadow: "0 2px 12px rgba(0,0,0,0.5), 0 0 24px rgba(201,107,90,0.2)" }}>
              {hero.programName[lang]}
            </p>
            <p className="mb-5" style={{ fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 400, color: "rgba(253,250,246,0.90)", textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
              {hero.programType[lang]} / {hero.subtitle[lang]}
            </p>

            {/* CTA + badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
              <MeBadge variant="terracotta">
                <Gift className="w-3 h-3 mr-1 inline" style={{ width: "12px", height: "12px" }} />
                {hero.freeBadge[lang]}
              </MeBadge>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full"
                style={{ backgroundColor: "rgba(253,250,246,0.2)", color: "#FDFAF6", fontSize: "12px", fontWeight: 500, borderRadius: "100px", backdropFilter: "blur(4px)" }}
              >
                <Calendar className="w-3 h-3" style={{ width: "12px", height: "12px" }} />
                {hero.deadline[lang]}
              </span>
            </div>

            <Button
              onClick={handleApply}
              size="lg"
              className="btn-cta border-0 text-white w-full"
              style={{ backgroundColor: "#C04840", borderRadius: "8px", fontSize: "clamp(15px, 3.5vw, 17px)", fontWeight: 500, height: "48px", padding: "0 24px", boxShadow: "0 4px 16px rgba(192,72,64,0.4)" }}
            >
              {hero.cta[lang]}
              <ArrowRight className="w-4 h-4 ml-2" style={{ width: "16px", height: "16px" }} />
            </Button>
          </div>
        </div>

        {/* Wave divider at very bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ display: "block", height: "32px" }}>
            <path d="M0,30 C240,55 480,5 720,25 C960,45 1200,8 1440,30 L1440,60 L0,60 Z" fill="#FDFAF6" />
          </svg>
        </div>
      </section>

      {/* ===== SECTION 2: STUDY ABROAD INTRO ===== */}
      <Section id="intro" className="py-16 md:py-20" bg="bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="mb-5 leading-tight" style={{ fontSize: "24px", fontWeight: 500, color: "#1A0F0A", lineHeight: 1.3 }}>
                  {lang === "ja" ? (
                    <>これからの「留学」は、<br className="hidden md:block" />自宅から始まる。</>
                  ) : (
                    sa.title[lang]
                  )}
                </h2>
                <p className="leading-relaxed" style={{ fontSize: "15px", fontWeight: 400, color: "#4A3028", lineHeight: 1.7 }}>
                  {lang === "ja" ? (
                    <>
                      Zoomをつなげば、そこはもう海外。インドネシアの同世代の高校生とチームを組み、英語を使って一つのプロジェクトに取り組みます。<br /><br />
                      「英語を話したい」「海外に友達が欲しい」「自分の視野を広げたい」——そんなあなたのためのプログラムです。
                    </>
                  ) : (
                    sa.body[lang]
                  )}
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[3/2] rounded-lg overflow-hidden shadow-md" style={{ borderRadius: "14px" }}>
                  <img
                    src={asset("zoom-study_f6c81d64.png")}
                    alt={lang === "ja" ? "自宅からオンラインで参加" : "Join online from home"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-3 -left-3 px-4 py-2 rounded-lg shadow-md"
                  style={{ backgroundColor: "#C04840", color: "#FDFAF6", fontSize: "13px", fontWeight: 500, borderRadius: "8px" }}
                >
                  {lang === "ja" ? "Zoomでつながる" : "Connect on Zoom"}
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-12">
              {sa.quotes[lang].map((q, i) => (
                <div
                  key={i}
                  className="rounded-lg p-5 text-center border"
                  style={{ backgroundColor: "#F5EAE9", borderColor: "rgba(192,72,64,0.20)", borderRadius: "14px" }}
                >
                  <Quote className="w-4 h-4 mx-auto mb-2" style={{ color: "#C04840", width: "16px", height: "16px" }} />
                  <p className="font-medium" style={{ fontSize: "14px", fontWeight: 500, color: "#5C2A1E" }}>{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ===== SECTION 3: PROGRAM OVERVIEW ===== */}
      <Section id="overview" className="py-16 md:py-20" bg="bg-mei-cream-dark">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="mb-4" style={{ fontSize: "24px", fontWeight: 500, color: "#1A0F0A" }}>
                {ov.title[lang]}
              </h2>
              <p className="max-w-2xl mx-auto" style={{ fontSize: "15px", fontWeight: 400, color: "#4A3028", lineHeight: 1.7 }}>
                {lang === "ja" ? (
                  <>
                    唐津東高等学校とインドネシアの高校生をオンラインでつなぐ、2ヶ月間のバーチャル交流プログラムです。
                  </>
                ) : (
                  ov.intro[lang]
                )}
              </p>
            </div>

            {/* MEI Program Card style: Brown header + cream body */}
            <div className="rounded-lg overflow-hidden shadow-md border" style={{ borderRadius: "14px", borderColor: "#DDD4C4", borderWidth: "0.5px" }}>
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: "#5C2A1E" }}>
                    {ov.table.headers[lang].map((h, i) => (
                      <th key={i} className="px-5 py-3 text-left" style={{ fontSize: "13px", fontWeight: 500, color: "#FDFAF6" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ov.table.rows.map((row, i) => {
                    const icons = [Users, Calendar, Monitor, Gift, Building2];
                    const Icon = icons[i];
                    return (
                      <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#FDFAF6" : "#F0EAE0" }}>
                        <td className="px-5 py-3" style={{ fontSize: "14px", fontWeight: 500, color: "#5C2A1E" }}>
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4" style={{ color: "#C04840", width: "16px", height: "16px" }} />
                            {row.label[lang]}
                          </div>
                        </td>
                        <td className="px-5 py-3" style={{ fontSize: "14px", fontWeight: 400, color: "#4A3028" }}>
                          {row.value[lang]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== SECTION 4: INDONESIA ===== */}
      <Section id="indonesia" className="py-16 md:py-20" bg="bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="mb-2" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", color: "#C04840" }}>
                {ind.label[lang]}
              </p>
              <h2 className="mb-4 leading-tight" style={{ fontSize: "24px", fontWeight: 500, color: "#1A0F0A", lineHeight: 1.3 }}>
                {lang === "ja" ? (
                  <>交流相手を知ろう：<br className="sm:hidden" />インドネシアってどんな国？</>
                ) : (
                  ind.title[lang]
                )}
              </h2>
              <p className="max-w-2xl mx-auto" style={{ fontSize: "15px", fontWeight: 400, color: "#4A3028", lineHeight: 1.7 }}>
                {lang === "ja" ? (
                  <>
                    バリ島などのリゾートだけでなく、著しい経済成長と多様な文化を持つアジアのリーダーです。
                  </>
                ) : (
                  ind.intro[lang]
                )}
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md mb-10" style={{ borderRadius: "14px" }}>
              <img
                src={asset("indonesia-jakarta_f713c7d8.png")}
                alt="Jakarta, Indonesia"
                className="w-full h-full object-cover"
                style={{ aspectRatio: "16/9" }}
              />
            </div>

            {/* 5 feature cards with background images + overlay text */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ind.points.map((p, i) => {
                const icons = [Building2, Globe, Sparkles, Users, Handshake];
                const Icon = icons[i];
                return (
                  <div
                    key={i}
                    className="relative rounded-lg overflow-hidden shadow-sm group hover:shadow-md transition-shadow"
                    style={{ minHeight: "200px", borderRadius: "14px" }}
                  >
                    <img
                      src={IND_IMAGES[i]}
                      alt={p.title[lang]}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Dark gradient overlay for text readability */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(180deg, rgba(26,15,10,0.25) 0%, rgba(26,15,10,0.70) 55%, rgba(26,15,10,0.88) 100%)",
                      }}
                    />
                    <div className="relative z-10 p-5 flex flex-col justify-end h-full" style={{ minHeight: "200px" }}>
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                        style={{ backgroundColor: "rgba(192,72,64,0.90)", borderRadius: "8px" }}
                      >
                        <Icon className="w-4 h-4 text-white" style={{ width: "18px", height: "18px", color: "#FDFAF6" }} />
                      </div>
                      <h3 className="font-medium mb-2" style={{ fontSize: "14px", fontWeight: 500, color: "#FDFAF6" }}>
                        {p.title[lang]}
                      </h3>
                      <p style={{ fontSize: "12px", fontWeight: 400, color: "rgba(253,250,246,0.85)", lineHeight: 1.5 }}>
                        {p.body[lang]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* ===== SECTION 5: 3 BENEFITS — Brown Dark bg per MEI design system ===== */}
      <Section
        id="benefits"
        className="py-16 md:py-20"
        style={{ backgroundColor: "#5C2A1E" }}
      >
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="mb-4" style={{ fontSize: "24px", fontWeight: 500, color: "#FDFAF6" }}>
                {lang === "ja" ? (
                  <>このプログラムで得られる<br className="hidden md:block" />3つの武器</>
                ) : (
                  ben.title[lang]
                )}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {ben.items.map((item, i) => {
                const icons = [MessageCircle, Users, Award];
                const Icon = icons[i];
                return (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden shadow-md"
                    style={{ borderRadius: "14px", border: "0.5px solid rgba(253,250,246,0.15)" }}
                  >
                    {/* Image at top */}
                    <div className="aspect-[3/2] overflow-hidden">
                      <img
                        src={BENEFIT_IMAGES[i]}
                        alt={item.title[lang]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Content — dark card style per MEI design system */}
                    <div className="p-5" style={{ backgroundColor: "#5C2A1E" }}>
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                        style={{ backgroundColor: "rgba(253,250,246,0.15)", borderRadius: "8px" }}
                      >
                        <Icon className="w-5 h-5" style={{ color: "#C96B5A", width: "20px", height: "20px" }} />
                      </div>
                      <h3 className="font-medium mb-3 leading-tight" style={{ fontSize: "16px", fontWeight: 500, color: "#FDFAF6", lineHeight: 1.4 }}>
                        {item.title[lang]}
                      </h3>
                      <p style={{ fontSize: "13px", fontWeight: 400, color: "rgba(253,250,246,0.70)", lineHeight: 1.6 }}>
                        {item.body[lang]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* ===== SECTION 6 & 7: CURRICULUM ===== */}
      <Section id="curriculum" className="py-16 md:py-20" bg="bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Month 1 */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <MeBadge variant="terracotta">{m1.label[lang]}</MeBadge>
                <div className="h-px flex-1" style={{ backgroundColor: "#DDD4C4" }} />
              </div>
              <h2 className="mb-3" style={{ fontSize: "20px", fontWeight: 500, color: "#1A0F0A" }}>
                {m1.title[lang]}
              </h2>
              <p className="mb-6 max-w-2xl" style={{ fontSize: "15px", fontWeight: 400, color: "#4A3028", lineHeight: 1.7 }}>
                {lang === "ja" ? (
                  <>
                    最初の1ヶ月は、各自自宅から参加し、週2回・各90分の集中クラスで英語を使う自信を一気に高めます。
                  </>
                ) : (
                  m1.intro[lang]
                )}
              </p>

              {/* Photo placeholder for Month 1 */}
              <div className="mb-8">
                <img
                  src={asset("pasted_file_nshaeq_image_2db66d2b.png")}
                  alt={lang === "ja" ? "Month 1 英会話集中トレーニング" : "Month 1 intensive English training"}
                  className="rounded-lg w-full object-cover aspect-[3/2]"
                  style={{ borderRadius: "12px" }}
                />
              </div>

              <p className="mb-4" style={{ fontSize: "13px", fontWeight: 500, color: "#C04840" }}>
                {m1.roadmapTitle[lang]}
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {m1.weeks.map((w, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-5 border"
                    style={{ backgroundColor: "#F0EAE0", borderColor: "#DDD4C4", borderWidth: "0.5px", borderRadius: "14px" }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="px-2 py-0.5 rounded-md text-white"
                        style={{ backgroundColor: "#5C2A1E", fontSize: "12px", fontWeight: 500, borderRadius: "4px" }}
                      >
                        {w.week[lang]}
                      </span>
                    </div>
                    <h3 className="mb-3" style={{ fontSize: "14px", fontWeight: 500, color: "#1A0F0A" }}>
                      {w.title[lang]}
                    </h3>
                    <div className="space-y-2" style={{ fontSize: "12px" }}>
                      <div>
                        <p className="mb-0.5" style={{ fontWeight: 500, color: "#7A5A4E" }}>
                          {lang === "ja" ? "トピック" : "Topics"}
                        </p>
                        <p style={{ fontWeight: 400, color: "#4A3028" }}>{w.topics[lang]}</p>
                      </div>
                      <div>
                        <p className="mb-0.5" style={{ fontWeight: 500, color: "#7A5A4E" }}>
                          {lang === "ja" ? "活動" : "Activities"}
                        </p>
                        <p style={{ fontWeight: 400, color: "#4A3028" }}>{w.activities[lang]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Month 2 */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MeBadge variant="terracotta">{m2.label[lang]}</MeBadge>
                <div className="h-px flex-1" style={{ backgroundColor: "#DDD4C4" }} />
              </div>
              <h2 className="mb-3" style={{ fontSize: "20px", fontWeight: 500, color: "#1A0F0A" }}>
                {m2.title[lang]}
              </h2>
              <p className="mb-6 max-w-2xl" style={{ fontSize: "15px", fontWeight: 400, color: "#4A3028", lineHeight: 1.7 }}>
                {lang === "ja" ? (
                  <>
                    後半は、インドネシアの生徒とチームを組み、デジタルツールを駆使して「一つの作品」を作り上げます。
                  </>
                ) : (
                  m2.intro[lang]
                )}
              </p>

              {/* Photo placeholder for Month 2 */}
              <div className="mb-8">
                <img
                  src={asset("pasted_file_Q8AsiY_image_7a4f98ec.png")}
                  alt={lang === "ja" ? "Month 2 協働プロジェクト" : "Month 2 collaborative project"}
                  className="rounded-lg w-full object-cover aspect-[3/2]"
                  style={{ borderRadius: "12px" }}
                />
              </div>

              <div
                className="flex flex-wrap gap-4 mb-8 rounded-lg p-4 border"
                style={{ backgroundColor: "#F0EAE0", borderColor: "#DDD4C4", borderWidth: "0.5px", borderRadius: "14px" }}
              >
                <div className="flex items-center gap-2" style={{ fontSize: "12px" }}>
                  <MapPin className="w-4 h-4" style={{ color: "#C04840", width: "16px", height: "16px" }} />
                  <span style={{ fontWeight: 500, color: "#5C2A1E" }}>{lang === "ja" ? "場所" : "Location"}:</span>
                  <span style={{ fontWeight: 400, color: "#4A3028" }}>{m2.info.location[lang]}</span>
                </div>
                <div className="flex items-center gap-2" style={{ fontSize: "12px" }}>
                  <Clock className="w-4 h-4" style={{ color: "#C04840", width: "16px", height: "16px" }} />
                  <span style={{ fontWeight: 500, color: "#5C2A1E" }}>{lang === "ja" ? "時間" : "Time"}:</span>
                  <span style={{ fontWeight: 400, color: "#4A3028" }}>{m2.info.time[lang]}</span>
                </div>
                <div className="flex items-center gap-2" style={{ fontSize: "12px" }}>
                  <Wifi className="w-4 h-4" style={{ color: "#C04840", width: "16px", height: "16px" }} />
                  <span style={{ fontWeight: 500, color: "#5C2A1E" }}>{lang === "ja" ? "必要環境" : "Required"}:</span>
                  <span style={{ fontWeight: 400, color: "#4A3028" }}>{m2.info.required[lang]}</span>
                </div>
              </div>

              <p className="mb-3" style={{ fontSize: "13px", fontWeight: 500, color: "#C04840" }}>
                {m2.themesTitle[lang]}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {m2.themes.map((theme, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg"
                    style={{ backgroundColor: "rgba(192,72,64,0.08)", border: "0.5px solid rgba(192,72,64,0.20)", fontSize: "12px", fontWeight: 500, color: "#C04840", borderRadius: "8px" }}
                  >
                    {theme[lang]}
                  </span>
                ))}
              </div>

              <p className="mb-4" style={{ fontSize: "13px", fontWeight: 500, color: "#C04840" }}>
                {m2.roadmapTitle[lang]}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {m2.weeks.map((w, i) => (
                  <div
                    key={i}
                    className="relative rounded-lg p-4 shadow-sm border"
                    style={{ backgroundColor: "#FDFAF6", borderColor: "#DDD4C4", borderWidth: "0.5px", borderRadius: "14px" }}
                  >
                    <span className="block mb-1" style={{ fontSize: "12px", fontWeight: 500, color: "#C04840" }}>
                      {w.week[lang]}
                    </span>
                    <h3 className="mb-2" style={{ fontSize: "14px", fontWeight: 500, color: "#1A0F0A" }}>
                      {w.title[lang]}
                    </h3>
                    <p style={{ fontSize: "12px", fontWeight: 400, color: "#4A3028", lineHeight: 1.5 }}>
                      {w.body[lang]}
                    </p>
                    {i < m2.weeks.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#DDD4C4", width: "16px", height: "16px" }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== SECTION 8: TESTIMONIAL ===== */}
      <Section id="testimonial" className="py-16 md:py-20" bg="bg-mei-cream-dark">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-2" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", color: "#C04840" }}>
              {tes.label[lang]}
            </p>
            <h2 className="mb-8" style={{ fontSize: "24px", fontWeight: 500, color: "#1A0F0A" }}>
              {tes.title[lang]}
            </h2>
            <div
              className="rounded-lg overflow-hidden shadow-sm border"
              style={{ backgroundColor: "#FDFAF6", borderColor: "#DDD4C4", borderWidth: "0.5px", borderRadius: "14px" }}
            >
              <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                <iframe
                  src="https://www.youtube.com/embed/oCqMRX0OmYE"
                  title="Testimonial Video"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== SECTION 9: PARTNERS ===== */}
      <Section id="partners" className="py-16 md:py-20" bg="bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="mb-2" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", color: "#C04840" }}>
                {par.label[lang]}
              </p>
              <h2 style={{ fontSize: "24px", fontWeight: 500, color: "#1A0F0A" }}>
                {par.title[lang]}
              </h2>

              {/* Dual logos prominently displayed */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <img
                  src={asset("karatsu-logo_999b414e.jpg")}
                  alt="佐賀県立唐津東高等学校"
                  className="rounded-full object-cover shadow-sm"
                  style={{ width: "64px", height: "64px", borderRadius: "50%" }}
                />
                <span className="text-2xl font-light" style={{ color: "#DDD4C4" }}>×</span>
                <img
                  src={asset("mirai-eduventure-indonesia-logo_06de27ed.png")}
                  alt="Mirai Eduventure Indonesia"
                  className="rounded-md object-contain shadow-sm"
                  style={{ width: "176px", height: "64px", borderRadius: "6px" }}
                />
              </div>
            </div>

            {/* MEI intro with photo placeholder */}
            <div
              className="rounded-lg p-6 md:p-8 mb-6 border"
              style={{ backgroundColor: "#F0EAE0", borderColor: "#DDD4C4", borderWidth: "0.5px", borderRadius: "14px" }}
            >
              <div className="grid md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2">
                  <h3 className="mb-3" style={{ fontSize: "16px", fontWeight: 500, color: "#1A0F0A" }}>
                    {par.meiTitle[lang]}
                  </h3>
                  <p className="mb-4" style={{ fontSize: "14px", fontWeight: 400, color: "#4A3028", lineHeight: 1.7 }}>
                    {lang === "ja" ? (
                      <>
                        インドネシア・日本・ベトナムを繋ぐ教育事業を展開する、ジャカルタ拠点の教育会社です。2023年の創業後、佐賀学園高等学校との協定を皮切りに、2024年よりインドネシア人高校生向けの短期留学プログラムを開始しました。今年は6名のインドネシア人高校生が佐賀県・福岡県で短期留学を経験しました。
                      </>
                    ) : (
                      par.meiBody[lang]
                    )}
                  </p>
                  <blockquote
                    className="pl-4 italic"
                    style={{ borderLeft: "3px solid #C04840", fontSize: "13px", fontWeight: 400, color: "#4A3028", lineHeight: 1.6 }}
                  >
                    {lang === "ja" ? (
                      <>
                        私たちが大切にしているのは、<strong style={{ fontWeight: 500 }}>「本物との関わりが、変化を生む。」</strong>ということ。観光でも、テンプレート通りの交流でもなく、同世代の生徒同士が本気で向き合う時間だからこそ、人は変わります。
                      </>
                    ) : (
                      par.meiBelief[lang]
                    )}
                  </blockquote>
                </div>
                <div>
                  <img
                    src={asset("IMG_3712_699e7a89.webp")}
                    alt={lang === "ja" ? "Mirai Eduventure チーム写真" : "Mirai Eduventure team photo"}
                    className="rounded-lg w-full object-cover aspect-[3/4]"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
              </div>
            </div>

            {/* Why Karatsu */}
            <div
              className="rounded-lg p-6 md:p-8 mb-6 shadow-sm border"
              style={{ backgroundColor: "#FDFAF6", borderColor: "#DDD4C4", borderWidth: "0.5px", borderRadius: "14px" }}
            >
              <h3 className="mb-3" style={{ fontSize: "16px", fontWeight: 500, color: "#1A0F0A" }}>
                {par.whyTitle[lang]}
              </h3>
              <p className="mb-4" style={{ fontSize: "14px", fontWeight: 400, color: "#4A3028", lineHeight: 1.7 }}>
                {lang === "ja" ? (
                  <>
                    今回の提携の背景には、Mirai Eduventure共同代表の一人が唐津出身であるという縁があります。「お世話になった唐津に恩返しがしたい」「唐津の若者たちにも世界とつながる機会を届けたい」という思いから、2026年、唐津東高等学校とのパートナーシップが実現しました。
                  </>
                ) : (
                  par.whyBody[lang]
                )}
              </p>
              <blockquote
                className="pl-4 italic"
                style={{ borderLeft: "3px solid #5C2A1E", fontSize: "13px", fontWeight: 500, color: "#5C2A1E", lineHeight: 1.6 }}
              >
                {lang === "ja" ? (
                  <>
                    知らなかった世界に出会うたびに、人生の可能性が広がっていく。これが私たちMirai Eduventureのパーパスです。このプログラムの名前「Discover a New World（世界と出会う）」も、この想いから生まれました。
                  </>
                ) : (
                  par.purpose[lang]
                )}
              </blockquote>
            </div>

            {/* Who organizes — with photo placeholder */}
            <div
              className="rounded-lg p-6 md:p-8 mb-6 shadow-sm border"
              style={{ backgroundColor: "#FDFAF6", borderColor: "#DDD4C4", borderWidth: "0.5px", borderRadius: "14px" }}
            >
              <div className="grid md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2">
                  <h3 className="mb-3" style={{ fontSize: "16px", fontWeight: 500, color: "#1A0F0A" }}>
                    {par.whoOrgTitle[lang]}
                  </h3>
                  <p style={{ fontSize: "14px", fontWeight: 400, color: "#4A3028", lineHeight: 1.7 }}>
                    {lang === "ja" ? (
                      <>
                        Mirai Eduventure (MEI)：インドネシア・ジャカルタを拠点に、日本・インドネシア・ベトナムを繋ぐ教育事業を展開。2023年11月設立。
                      </>
                    ) : (
                      par.whoOrgBody[lang]
                    )}
                  </p>
                </div>
                <div>
                  <img
                    src={asset("ChatGPTImageAug3,2026,03_22_51PM_25bd5399.png")}
                    alt={lang === "ja" ? "運営チームの写真" : "Organizers' photo"}
                    className="rounded-lg w-full object-cover aspect-[3/4]"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
              </div>
            </div>

            {/* Who teaches — Eka & Gaby first, Sampoerna as background */}
            <div className="mb-6">
              <h3 className="mb-4" style={{ fontSize: "16px", fontWeight: 500, color: "#1A0F0A" }}>
                {par.whoTeachTitle[lang]}
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {par.teachers.map((teacher, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-5 shadow-md"
                    style={{ backgroundColor: "#5C2A1E", borderRadius: "14px" }}
                  >
                    <div className="flex items-start gap-4">
                      {i === 0 ? (
                        <img
                          src={asset("pasted_file_b4LEA0_image_39648847.png")}
                          alt={teacher.name[lang]}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                          style={{ borderRadius: "10px" }}
                        />
                      ) : (
                        <img
                          src={asset("pasted_file_pK8iiS_image_f6e5d4b1.png")}
                          alt={teacher.name[lang]}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                          style={{ borderRadius: "10px" }}
                        />
                      )}
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 style={{ fontSize: "16px", fontWeight: 500, color: "#FDFAF6" }}>{teacher.name[lang]}</h4>
                          <span
                            className="px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: "#C04840", color: "#FDFAF6", fontSize: "11px", fontWeight: 500, borderRadius: "100px" }}
                          >
                            {teacher.tag[lang]}
                          </span>
                        </div>
                        <p className="mb-1" style={{ fontSize: "12px", fontWeight: 500, color: "rgba(253,250,246,0.70)" }}>
                          {teacher.role[lang]}
                        </p>
                        <p className="mb-2" style={{ fontSize: "11px", fontWeight: 400, color: "rgba(253,250,246,0.50)" }}>
                          {teacher.affiliation[lang]}
                        </p>
                        <p style={{ fontSize: "12px", fontWeight: 400, color: "rgba(253,250,246,0.80)", lineHeight: 1.5 }}>
                          {teacher.body[lang]}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Sampoerna note — as background context, not as co-organizer */}
              <p className="mt-4 leading-relaxed max-w-3xl" style={{ fontSize: "12px", fontWeight: 400, color: "#7A5A4E", lineHeight: 1.5 }}>
                {par.sampoernaNote[lang]}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== SECTION 10: CTA / FOOTER — Brown Dark bg per MEI design system ===== */}
      <section
        id="apply"
        className="relative py-16 md:py-20 overflow-hidden"
        style={{ backgroundColor: "#5C2A1E" }}
      >
        {/* Decorative circle per MEI design system */}
        <div
          className="absolute top-0 right-0 rounded-full"
          style={{
            width: "140px",
            height: "140px",
            backgroundColor: "#C04840",
            opacity: 0.12,
            transform: "translate(40%, -40%)",
          }}
        />
        <div className="relative z-10 container">
          <div className="max-w-3xl mx-auto text-center" style={{ color: "#FDFAF6" }}>
            <h2 className="mb-4 leading-tight" style={{ fontSize: "24px", fontWeight: 500, color: "#FDFAF6", lineHeight: 1.3 }}>
              {lang === "ja" ? (
                <>世界への一歩を、<br className="hidden md:block" />ここから踏み出そう。</>
              ) : (
                cta.title[lang]
              )}
            </h2>
            <p className="mb-8" style={{ fontSize: "15px", fontWeight: 400, color: "rgba(253,250,246,0.60)", lineHeight: 1.7 }}>
              {lang === "ja" ? (
                <>
                  興味がある人は、まずは話を聞きに来てください。国際交流担当の先生が待っています！
                </>
              ) : (
                cta.body[lang]
              )}
            </p>

            <div
              className="inline-flex flex-wrap gap-3 mb-8 rounded-lg p-4"
              style={{ backgroundColor: "rgba(253,250,246,0.08)", borderRadius: "14px" }}
            >
              {cta.table.headers[lang].map((header, i) => (
                <div key={i} className="text-center px-4">
                  <p className="mb-1" style={{ fontSize: "12px", fontWeight: 400, color: "rgba(253,250,246,0.60)" }}>{header}</p>
                  <p style={{ fontSize: "14px", fontWeight: 500, color: "#FDFAF6" }}>{cta.table.values[i][lang]}</p>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <Button
                onClick={handleApply}
                size="lg"
                className="btn-cta border-0 text-white"
                style={{ backgroundColor: "#C04840", borderRadius: "8px", fontSize: "16px", fontWeight: 500, height: "44px", padding: "0 24px" }}
              >
                {cta.applyBtn[lang]}
                <ArrowRight className="w-4 h-4 ml-2" style={{ width: "16px", height: "16px" }} />
              </Button>
              <p className="mt-3" style={{ fontSize: "12px", fontWeight: 400, color: "rgba(253,250,246,0.50)" }}>{cta.applyNote[lang]}</p>
            </div>

            <p className="mb-2" style={{ fontSize: "14px", fontWeight: 400, color: "rgba(253,250,246,0.70)" }}>
              {cta.contact[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* Footer — Brown Dark per MEI design system */}
      <footer className="py-8" style={{ backgroundColor: "#5C2A1E", borderTop: "0.5px solid rgba(253,250,246,0.15)" }}>
        <div className="container">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-3">
              <img
                src={asset("karatsu-logo_999b414e.jpg")}
                alt="唐津東高校"
                className="rounded-full object-cover"
                style={{ width: "28px", height: "28px", borderRadius: "50%" }}
              />
              <span className="text-sm font-light" style={{ color: "rgba(253,250,246,0.40)" }}>×</span>
              <img
                src={asset("mirai-eduventure-indonesia-logo_06de27ed.png")}
                alt="Mirai Eduventure Indonesia"
                className="rounded-md object-contain object-left"
                style={{ width: "88px", height: "28px", borderRadius: "6px" }}
              />
              <span className="font-medium text-sm" style={{ color: "#FDFAF6", fontSize: "13px", fontWeight: 500 }}>Mirai Eduventure</span>
            </div>
            <p style={{ fontSize: "12px", fontWeight: 400, color: "rgba(253,250,246,0.50)" }}>{cta.poweredBy[lang]}</p>
            <p style={{ fontSize: "12px", fontWeight: 400, color: "rgba(253,250,246,0.40)" }}>{cta.copyright[lang]}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
