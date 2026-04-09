const MONTH_NAMES = [
  "January", "February", "March",     "April",   "May",      "June",
  "July",    "August",   "September", "October", "November", "December",
];

export default function CalendarHeader({ currentDate, setCurrentDate, setFlipKey }) {
  const month = currentDate.getMonth();
  const year  = currentDate.getFullYear();

  function goToPrevMonth() {
    setCurrentDate(new Date(year, month - 1, 1));
    setFlipKey((k) => k + 1);
  }

  function goToNextMonth() {
    setCurrentDate(new Date(year, month + 1, 1));
    setFlipKey((k) => k + 1);
  }

  return (
    <div className="nav-row">
      <button
        className="nav-btn"
        onClick={goToPrevMonth}
        aria-label="Previous month"
      >
        &#8249;
      </button>

      <h2 className="nav-title">
        {MONTH_NAMES[month]} {year}
      </h2>

      <button
        className="nav-btn"
        onClick={goToNextMonth}
        aria-label="Next month"
      >
        &#8250;
      </button>
    </div>
  );
}
