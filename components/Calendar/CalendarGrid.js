const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* ── Date helpers ────────────────────────────────────────── */

/** Returns true if two Date objects fall on the same calendar day */
function isSameDay(a, b) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth()    === b.getMonth()    &&
    a.getDate()     === b.getDate()
  );
}

/** Returns true if `date` is strictly between `start` and `end` (inclusive of neither) */
function isBetween(date, start, end) {
  if (!start || !end) return false;
  const t = date.getTime();
  return t > start.getTime() && t < end.getTime();
}

/**
 * Builds a 42-cell (6-week) array of Date objects for the given month.
 * Cells before the 1st and after the last day are filled from adjacent months.
 */
function getCalendarDays(year, month) {
  const firstDay = new Date(year, month, 1);
  const startOffset = firstDay.getDay(); // 0 (Sun) – 6 (Sat)

  const days = [];

  // Pad with days from the previous month
  for (let i = startOffset - 1; i >= 0; i--) {
    days.push(new Date(year, month, -i));
  }

  // Days of the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(new Date(year, month, d));
  }

  // Pad with days from the next month to reach 42
  let next = 1;
  while (days.length < 42) {
    days.push(new Date(year, month + 1, next++));
  }

  return days;
}

/* ── Component ───────────────────────────────────────────── */

export default function CalendarGrid({
  currentMonth,
  currentYear,
  selectedStart,
  setSelectedStart,
  selectedEnd,
  setSelectedEnd,
  hoveredDate,
  setHoveredDate,
}) {
  const year  = currentYear;
  const month = currentMonth;
  const today = new Date();
  const days  = getCalendarDays(year, month);

  /* Determine the effective range end (hover preview when end not yet set) */
  const rangeEnd = selectedEnd ?? (selectedStart ? hoveredDate : null);

  /* Normalise so rangeStart is always the earlier of the two */
  const rangeStart =
    rangeEnd && selectedStart && rangeEnd < selectedStart
      ? rangeEnd
      : selectedStart;
  const rangeEndNorm =
    rangeEnd && selectedStart && rangeEnd < selectedStart
      ? selectedStart
      : rangeEnd;

  /* ── Click handler ───────────────────────────────────────── */
  function handleDayClick(date) {
    if (!selectedStart || (selectedStart && selectedEnd)) {
      // No start yet, or both already picked → reset and pick new start
      setSelectedStart(date);
      setSelectedEnd(null);
    } else {
      // Start is set, no end yet → set end (swap if before start)
      if (date < selectedStart) {
        setSelectedEnd(selectedStart);
        setSelectedStart(date);
      } else {
        setSelectedEnd(date);
      }
      setHoveredDate(null);
    }
  }

  /* ── Class builder ───────────────────────────────────────── */
  function getDayClasses(date) {
    const classes = ["cal-grid__day"];

    if (isSameDay(date, today))          classes.push("is-today");
    if (isSameDay(date, selectedStart))  classes.push("is-selected-start");
    if (isSameDay(date, selectedEnd))    classes.push("is-selected-end");
    if (isBetween(date, rangeStart, rangeEndNorm)) classes.push("is-in-range");
    if (date.getMonth() !== month)       classes.push("is-other-month");

    const dow = date.getDay();
    if (dow === 0 || dow === 6)          classes.push("is-weekend");

    return classes.join(" ");
  }

  /* ── Render ──────────────────────────────────────────────── */
  return (
    <div
      className="cal-grid"
      onMouseLeave={() => setHoveredDate(null)}
    >
      {/* Day-name header row */}
      {DAY_NAMES.map((name) => (
        <div key={name} className="cal-grid__day-name">
          {name}
        </div>
      ))}

      {/* 42 day cells */}
      {days.map((date, idx) => (
        <button
          key={idx}
          className={getDayClasses(date)}
          onClick={() => handleDayClick(date)}
          onMouseEnter={() => setHoveredDate(date)}
          aria-label={date.toDateString()}
          aria-pressed={
            isSameDay(date, selectedStart) || isSameDay(date, selectedEnd)
          }
        >
          {date.getDate()}
        </button>
      ))}
    </div>
  );
}
