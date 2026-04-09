/* ── Month metadata ──────────────────────────────────────── */

const MONTH_IMAGES = [
  { url: "https://picsum.photos/seed/wintersnow/800/500", alt: "Snow-covered winter landscape", theme: "#5c8dd6" }, // Jan
  { url: "https://picsum.photos/seed/frostblue/800/500", alt: "Frosty February morning", theme: "#7b68ee" }, // Feb
  { url: "https://picsum.photos/seed/cherryblossom/800/500", alt: "Cherry blossoms in full bloom", theme: "#e8748a" }, // Mar
  { url: "https://picsum.photos/seed/springflowers/800/500", alt: "Colorful spring flowers", theme: "#4caf7d" }, // Apr
  { url: "https://picsum.photos/seed/greenmeadow/800/500", alt: "Green meadow in May", theme: "#43a862" }, // May
  { url: "https://picsum.photos/seed/beachsummer/800/500", alt: "Sunny summer beach", theme: "#f4a225" }, // Jun
  { url: "https://picsum.photos/seed/blueocean/800/500", alt: "Deep blue ocean in July", theme: "#1a73e8" }, // Jul
  { url: "https://picsum.photos/seed/goldensunset/800/500", alt: "Golden sunset in August", theme: "#e8622a" }, // Aug
  { url: "https://picsum.photos/seed/autumnleaves/800/500", alt: "Autumn leaves falling", theme: "#d47c2f" }, // Sep
  { url: "https://picsum.photos/seed/fallforest/800/500", alt: "Fall forest in October", theme: "#c0522f" }, // Oct
  { url: "https://picsum.photos/seed/mistywood/800/500", alt: "Misty November fog", theme: "#7a8fa6" }, // Nov
  { url: "https://picsum.photos/seed/christmassnow/800/500", alt: "Christmas winter wonderland", theme: "#c0392b" }, // Dec
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/* ── Named export — used by CalendarGrid for accent colours ─ */
export function getMonthTheme(month) {
  return MONTH_IMAGES[month]?.theme ?? "#1a73e8";
}

/* ── Component ───────────────────────────────────────────── */
export default function HeroImage({ currentMonth, currentYear }) {
  const { url, alt } = MONTH_IMAGES[currentMonth];

  return (
    <div className="hero-section">
      <img
        src={url}
        alt={alt}
        className="hero-img"
        key={url}
      />

      {/* SVG Chevron Overlay */}
      <svg className="chevron-overlay" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="0,100 100,100 100,20 50,80 0,20" fill="#1a8fe8" />
        <polygon points="0,20 50,80 100,20 100,10 50,70 0,10" fill="rgba(255,255,255,0.4)" />
      </svg>

      <div className="month-label">
        <span className="year">{currentYear}</span>
        <span className="month-name">{MONTH_NAMES[currentMonth]}</span>
      </div>
    </div>
  );
}

