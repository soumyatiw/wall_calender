"use client";

import { useState } from "react";
import Calendar from "../components/Calendar/Calendar";

export default function Home() {
  const [currentDate, setCurrentDate]     = useState(new Date());
  const [selectedStart, setSelectedStart] = useState(null);
  const [selectedEnd, setSelectedEnd]     = useState(null);
  const [notes, setNotes]                 = useState("");
  const [hoveredDate, setHoveredDate]     = useState(null);

  const currentMonth = currentDate.getMonth();      // 0-indexed
  const currentYear  = currentDate.getFullYear();

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
      notes={notes}
      setNotes={setNotes}
      hoveredDate={hoveredDate}
      setHoveredDate={setHoveredDate}
    />
  );
}
