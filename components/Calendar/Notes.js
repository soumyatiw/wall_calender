const MAX_CHARS = 500;

function formatDate(date) {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function Notes({ notes, setNotes, selectedStart, selectedEnd }) {
  const count = notes.length;
  const nearLimit = count >= MAX_CHARS * 0.8;

  /* Build the date-range subheading */
  let rangeLabel = null;
  if (selectedStart && selectedEnd) {
    rangeLabel = `${formatDate(selectedStart)} – ${formatDate(selectedEnd)}`;
  } else if (selectedStart) {
    rangeLabel = formatDate(selectedStart);
  }

  return (
    <div className="notes-col">
      <div className="notes-label">Notes {rangeLabel && `(${rangeLabel})`}</div>
      <div className="notes-line" />
      <div className="notes-line" />
      <div className="notes-line" />
      <textarea
        className="notes-textarea"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        maxLength={MAX_CHARS}
        placeholder="Write your notes here..."
        aria-label="Calendar notes"
        rows={8}
      />
    </div>
  );
}
