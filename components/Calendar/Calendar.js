import { useState } from "react";
import "./Calendar.css";
import HeroImage, { getMonthTheme } from "./HeroImage";
import Notes from "./Notes";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";

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
  const themeColor = getMonthTheme(currentMonth);

  return (
    <main className="cal-page">
      <div 
        className="cal-card flipping" 
        key={flipKey}
        style={{ '--theme-color': themeColor }}
      >
        <div className="spiral-bar">
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} className="spiral-coil"></div>
          ))}
        </div>

        <HeroImage
          currentMonth={currentMonth}
          currentYear={currentYear}
        />

        <CalendarHeader
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          currentMonth={currentMonth}
          currentYear={currentYear}
          setFlipKey={setFlipKey}
        />

        <div className="bottom-section">
          <Notes
            notes={notes}
            setNotes={setNotes}
            selectedStart={selectedStart}
            selectedEnd={selectedEnd}
          />
          <CalendarGrid
            currentMonth={currentMonth}
            currentYear={currentYear}
            selectedStart={selectedStart}
            setSelectedStart={setSelectedStart}
            selectedEnd={selectedEnd}
            setSelectedEnd={setSelectedEnd}
            hoveredDate={hoveredDate}
            setHoveredDate={setHoveredDate}
          />
        </div>
      </div>
    </main>
  );
}
