const MAX_CHARS = 500;

/** Formats a Date as "Apr 9" */
function formatDate(date) {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function Notes({ notes, setNotes, selectedStart, selectedEnd }) {
  const count     = notes.length;
  const nearLimit = count >= MAX_CHARS * 0.8; // warn at 80 %

  /* Build the date-range subheading */
  let rangeLabel = null;
  if (selectedStart && selectedEnd) {
    rangeLabel = `${formatDate(selectedStart)} – ${formatDate(selectedEnd)}`;
  } else if (selectedStart) {
    rangeLabel = formatDate(selectedStart);
  }

  return (
    <div className="cal-notes">
      {/* Heading */}
      <div className="cal-notes__header">
        <h3 className="cal-notes__title">Notes</h3>
        {rangeLabel && (
          <span className="cal-notes__range">{rangeLabel}</span>
        )}
      </div>

      {/* Textarea */}
      <textarea
        className="cal-notes__textarea"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        maxLength={MAX_CHARS}
        placeholder="Add notes for this period…"
        aria-label="Calendar notes"
      />

      {/* Character counter */}
      <p className={`cal-notes__counter${nearLimit ? " is-near-limit" : ""}`}>
        {count} / {MAX_CHARS}
      </p>
    </div>
  );
}
