import { useState } from "react";
import "./Calendar.css";
import HeroImage      from "./HeroImage";
import Notes          from "./Notes";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid   from "./CalendarGrid";

export default function Calendar({
  currentDate,
  setCurrentDate,
  currentMonth,
  currentYear,
  selectedStart,
  setSelectedStart,
  selectedEnd,
  setSelectedEnd,
  notes,
  setNotes,
  hoveredDate,
  setHoveredDate,
}) {
  const [flipKey, setFlipKey] = useState(0);
  return (
    <main className="cal-shell">
      {/* Left panel — hero image + notes */}
      <aside className="cal-panel cal-panel--left">
        <HeroImage
          currentMonth={currentMonth}
          currentYear={currentYear}
        />
        <Notes
          notes={notes}
          setNotes={setNotes}
          selectedStart={selectedStart}
          selectedEnd={selectedEnd}
        />
      </aside>

      {/* Right panel — header (nav) + date grid */}
      <section className="cal-panel cal-panel--right">
        <CalendarHeader
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          currentMonth={currentMonth}
          currentYear={currentYear}
          setFlipKey={setFlipKey}
        />
        <CalendarGrid
          key={flipKey}
          currentMonth={currentMonth}
          currentYear={currentYear}
          selectedStart={selectedStart}
          setSelectedStart={setSelectedStart}
          selectedEnd={selectedEnd}
          setSelectedEnd={setSelectedEnd}
          hoveredDate={hoveredDate}
          setHoveredDate={setHoveredDate}
        />
      </section>
    </main>
  );
}
