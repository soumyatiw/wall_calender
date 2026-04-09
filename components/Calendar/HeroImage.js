/* ── Month metadata ──────────────────────────────────────── */

const MONTH_IMAGES = [
  { url: "https://picsum.photos/seed/wintersnow/800/500", alt: "Snow-covered winter landscape", theme: "#84A7D3" }, // Jan
  { url: "https://picsum.photos/seed/frostblue/800/500", alt: "Frosty February morning", theme: "#fcd66dff" }, // Feb
  { url: "https://picsum.photos/seed/cherryblossom/800/500", alt: "Cherry blossoms in full bloom", theme: "#9dca5dff" }, // Mar
  { url: "https://picsum.photos/seed/springflowers/800/500", alt: "Colorful spring flowers", theme: "#8CB89F" }, // Apr
  { url: "https://picsum.photos/seed/greenmeadow/800/500", alt: "Green meadow in May", theme: "#fcd66dff" }, // May
  { url: "https://picsum.photos/seed/beachsummer/800/500", alt: "Sunny summer beach", theme: "#D4A86C" }, // Jun
  { url: "https://picsum.photos/seed/blueocean/800/500", alt: "Deep blue ocean in July", theme: "#78A2CC" }, // Jul
  { url: "https://picsum.photos/seed/goldensunset/800/500", alt: "Golden sunset in August", theme: "#4a5e8bff" }, // Aug
  { url: "https://picsum.photos/seed/autumnleaves/800/500", alt: "Autumn leaves falling", theme: "#B8895D" }, // Sep
  { url: "https://picsum.photos/seed/fallforest/800/500", alt: "Fall forest in October", theme: "#7977c0ff" }, // Oct
  { url: "https://picsum.photos/seed/mistywood/800/500", alt: "Misty November fog", theme: "#8D9CAE" }, // Nov
  { url: "https://picsum.photos/seed/christmassnow/800/500", alt: "Christmas winter wonderland", theme: "#a68865ff" }, // Dec
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function getMonthTheme(month) {
  return MONTH_IMAGES[month]?.theme ?? "#1a73e8";
}

export default function HeroImage({ currentMonth, currentYear }) {
  const { url, alt, theme } = MONTH_IMAGES[currentMonth];

  // If theme is undefined, default to our standard blue
  const activeColor = theme || "#1a8fe8";

  return (
    <div className="hero-section hero-flip" key={url}>
      <img
        src={url}
        alt={alt}
        className="hero-img"
      />

      {/* SVG Chevron Overlay */}
      <svg className="chevron-overlay" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="0,100 100,100 100,20 50,80 0,20" fill={activeColor} />
        <polygon points="0,20 50,80 100,20 100,10 50,70 0,10" fill="rgba(255,255,255,0.4)" />
      </svg>

      <div className="month-label">
        <span className="year">{currentYear}</span>
        <span className="month-name">{MONTH_NAMES[currentMonth]}</span>
      </div>
    </div>
  );
}

