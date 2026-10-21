export function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  const lines = title.split(/\\n|\n/);
  return <div className={`section-heading ${center ? "center" : ""}`}><span className="section-kicker">{eyebrow}</span><h2>{lines.map((line, index) => <span key={line}>{line}{index < lines.length - 1 && <br />}</span>)}</h2>{text && <p>{text}</p>}</div>;
}
