"use client";

import { useState } from "react";
import Calendar from "../components/Calendar/Calendar";

const getNotesKey = (year, month, start, end) => {
  const fmt = (d) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  if (start && end) return `${fmt(start)}_${fmt(end)}`;
  if (start) return fmt(start);
  return `${year}_${month}`;
};

export default function Home() {
  const [currentDate, setCurrentDate]     = useState(new Date());
  const [selectedStart, setSelectedStart] = useState(null);
  const [selectedEnd, setSelectedEnd]     = useState(null);
  const [notesDict, setNotesDict]         = useState({});
  const [hoveredDate, setHoveredDate]     = useState(null);

  const currentMonth = currentDate.getMonth();      // 0-indexed
  const currentYear  = currentDate.getFullYear();

  const currentKey = getNotesKey(currentYear, currentMonth, selectedStart, selectedEnd);
  const currentNotes = notesDict[currentKey] || "";

  const handleSetNotes = (text) => {
    setNotesDict(prev => ({ ...prev, [currentKey]: text }));
  };

  return (
    <Calendar
      currentDate={currentDate}
      setCurrentDate={setCurrentDate}
      currentMonth={currentMonth}
      currentYear={currentYear}
      selectedStart={selectedStart}
      setSelectedStart={setSelectedStart}
      selectedEnd={selectedEnd}
      setSelectedEnd={setSelectedEnd}
      notes={currentNotes}
      setNotes={handleSetNotes}
      hoveredDate={hoveredDate}
      setHoveredDate={setHoveredDate}
    />
  );
}
