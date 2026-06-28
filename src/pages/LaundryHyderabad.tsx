import { useEffect, useState } from "react";
import { SEO } from "@/components/SEO";
import { AppStoreButtons } from "@/components/AppStoreButtons";
import {
  Truck,
  ShieldCheck,
  CreditCard,
  MapPin,
  Zap,
  Download,
  CalendarClock,
  Sparkles,
  Shirt,
  Wind,
  Footprints,
  Layers,
  Blinds,
  ChevronDown,
  Wallet,
  Clock,
  Star,
} from "lucide-react";

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.skawsh.user";
const APP_STORE_URL = "https://apps.apple.com/in/app/skawsh/id6771059253";

// GA event helper (safe no-op if gtag isn't loaded)
const track = (event: string, params: Record<string, unknown> = {}) => {
  try {
    // @ts-expect-error gtag is injected by GA script when present
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      // @ts-expect-error see above
      window.gtag("event", event, params);
    }
  } catch {
    /* noop */
  }
};

const goToStore = () => {
  const ua = (navigator.userAgent || navigator.vendor || "").toLowerCase();
  if (/iphone|ipad|ipod/.test(ua)) {
    track("ios_download_click", { source: "primary_cta" });
    window.location.href = APP_STORE_URL;
  } else if (/android/.test(ua)) {
    track("android_download_click", { source: "primary_cta" });
    window.location.href = GOOGLE_PLAY_URL;
  } else {
    track("android_download_click", { source: "primary_cta_desktop" });
    window.open(GOOGLE_PLAY_URL, "_blank", "noopener,noreferrer");
  }
};

const trustItems = [
  { icon: Truck, label: "Doorstep Pickup & Delivery" },
  { icon: ShieldCheck, label: "Verified Laundry Partners" },
  { icon: CreditCard, label: "Secure Online Payments" },
  { icon: MapPin, label: "Live Order Tracking" },
  { icon: Zap, label: "Same-Day Express Available" },
];

const steps = [
  { icon: Download, title: "Download the Skawsh App", desc: "Free on iOS and Android. Sign up in seconds." },
  { icon: CalendarClock, title: "Schedule Pickup in Seconds", desc: "Pick a slot that suits you — today or tomorrow." },
  { icon: Sparkles, title: "Get Fresh Clothes Delivered", desc: "Cleaned by trusted partners and delivered to your door." },
];

const services = [
  { icon: Shirt, title: "Laundry", desc: "Wash & fold for everyday clothes, picked up and delivered fresh." },
  { icon: Sparkles, title: "Dry Cleaning", desc: "Professional dry cleaning for suits, sarees, and delicates." },
  { icon: Wind, title: "Ironing", desc: "Crisp, ready-to-wear ironing for shirts, trousers and more." },
  { icon: Footprints, title: "Shoe Cleaning", desc: "Deep cleaning for sneakers, leather and everyday footwear." },
  { icon: Layers, title: "Carpet Cleaning", desc: "Deep, hygienic carpet cleaning by trained professionals." },
  { icon: Blinds, title: "Curtain Cleaning", desc: "Fresh, dust-free curtains without taking them off yourself." },
];

const benefits = [
  { icon: ShieldCheck, title: "Professional Laundry Partners" },
  { icon: Wallet, title: "Affordable Pricing" },
  { icon: Truck, title: "Doorstep Pickup" },
  { icon: Zap, title: "Fast Delivery" },
  { icon: CalendarClock, title: "Easy Scheduling" },
  { icon: CreditCard, title: "Secure Payments" },
  { icon: MapPin, title: "Live Order Tracking" },
];

const locations = ["Raidurg", "Gachibowli", "Wipro Circle", "Kothaguda", "Shaikpet"];

const faqs = [
  {
    q: "How does laundry pickup work?",
    a: "Download the Skawsh app, choose your service, pick a slot, and our partner will collect your clothes from your doorstep in Hyderabad — no calls, no queues.",
  },
  {
    q: "When will my clothes be delivered?",
    a: "Standard delivery is typically within 24–48 hours. Same-day express is available on most services depending on your area and pickup time.",
  },
  {
    q: "How do I pay for my order?",
    a: "Pay securely inside the Skawsh app using UPI, cards, or net banking. All payments are encrypted and there are no hidden charges.",
  },
  {
    q: "Which areas do you serve?",
    a: "Skawsh currently serves Raidurg, Gachibowli, Wipro Circle, Kothaguda and Shaikpet in Hyderabad, with more locations coming soon.",
  },
  {
    q: "Can I schedule a pickup anytime?",
    a: "Yes. Book a pickup slot that suits you — same-day, next-day, or later in the week — directly from the Skawsh app.",
  },
];

const LaundryHyderabad = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // page_view + scroll depth tracking
  useEffect(() => {
    track("download_page_view", { page: "/laundry-hyderabad" });

    const fired = { 50: false, 90: false };
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop + window.innerHeight) / h.scrollHeight;
      if (!fired[50] && scrolled >= 0.5) {
        fired[50] = true;
        track("scroll_50");
      }
      if (!fired[90] && scrolled >= 0.9) {
        fired[90] = true;
        track("scroll_90");
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleFaq = (i: number) => {
    setOpenFaq((cur) => {
      const next = cur === i ? null : i;
      if (next !== null) track("faq_expand", { index: i, question: faqs[i].q });
      return next;
    });
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Skawsh",
      description:
        "Doorstep laundry pickup and dry cleaning service in Hyderabad. Wash, dry cleaning, ironing, shoe, carpet and curtain cleaning.",
      areaServed: locations.map((l) => ({ "@type": "Place", name: `${l}, Hyderabad` })),
      address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Laundry Pickup & Dry Cleaning in Hyderabad — Skawsh App"
        description="Book doorstep laundry pickup and dry cleaning in Hyderabad in under a minute. Wash, ironing, shoe, carpet and curtain cleaning from trusted local partners."
        path="/laundry-hyderabad"
        keywords="laundry near me, dry cleaners near me, laundry pickup Hyderabad, laundry service Hyderabad, dry cleaning Hyderabad, doorstep laundry, laundry app"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:pt-20 sm:pb-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary">
            <MapPin className="h-3.5 w-3.5" /> Now serving Hyderabad
          </span>
          <h1 className="mt-5 text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Doorstep Laundry Pickup & Dry Cleaning in Hyderabad
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Book laundry pickup in under a minute. Wash, Dry Cleaning, Ironing, Shoe Cleaning, Carpet Cleaning and Curtain
            Cleaning from trusted local laundry partners.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <button
              onClick={goToStore}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base sm:text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="h-5 w-5" />
              Download Skawsh
            </button>
            <AppStoreButtons className="justify-center" />
            <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <Star className="h-4 w-4 fill-primary text-primary" />
              <Star className="h-4 w-4 fill-primary text-primary" />
              <Star className="h-4 w-4 fill-primary text-primary" />
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="ml-2">Trusted by hundreds of Hyderabad households</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {trustItems.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm sm:text-base">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h2 className="text-center text-3xl sm:text-4xl font-bold">How Skawsh Works</h2>
        <p className="mt-3 text-center text-muted-foreground">Doorstep laundry pickup and delivery in 3 simple steps.</p>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Step {i + 1}
              </span>
              <span className="mx-auto mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <s.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* SERVICES */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl sm:text-4xl font-bold">Laundry Services in Hyderabad</h2>
          <p className="mt-3 text-center text-muted-foreground">
            Everything your wardrobe needs — picked up and delivered to your door.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SKAWSH */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h2 className="text-center text-3xl sm:text-4xl font-bold">Why Choose Skawsh</h2>
        <p className="mt-3 text-center text-muted-foreground">
          Built for busy people who want laundry done right, without the hassle.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <b.icon className="h-5 w-5" />
              </span>
              <span className="font-medium">{b.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE LOCATIONS */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Service Locations in Hyderabad</h2>
          <p className="mt-3 text-muted-foreground">
            We currently offer laundry pickup and delivery in these neighborhoods:
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {locations.map((l) => (
              <li
                key={l}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-4 py-2 text-sm font-medium shadow-sm"
              >
                <MapPin className="h-4 w-4 text-primary" />
                {l}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">More locations across Hyderabad coming soon.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <h2 className="text-center text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => toggleFaq(i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={open}
                >
                  <h3 className="text-base sm:text-lg font-semibold">{f.q}</h3>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && <p className="px-5 pb-5 text-sm sm:text-base text-muted-foreground">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 sm:py-20 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Clock className="mx-auto h-10 w-10 opacity-90" />
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">Ready to Skip Laundry Day?</h2>
          <p className="mt-4 text-base sm:text-lg opacity-90">
            Download Skawsh and book your first pickup today.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <button
              onClick={goToStore}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-base sm:text-lg font-semibold text-primary shadow-lg hover:bg-background/90 transition-all hover:-translate-y-0.5"
            >
              <Download className="h-5 w-5" />
              Download Skawsh
            </button>
            <AppStoreButtons className="justify-center" />
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur p-3 md:hidden">
        <button
          onClick={goToStore}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-md"
        >
          <Download className="h-5 w-5" />
          Download Skawsh
        </button>
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </div>
  );
};

export default LaundryHyderabad;
