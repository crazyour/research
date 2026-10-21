export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-mark" aria-label="Research Compass">
      <span className="brand-symbol" aria-hidden="true"><i /><b /></span>
      {!compact && <span className="brand-copy"><strong>Research Compass</strong><small>日本大学院研究指导</small></span>}
    </span>
  );
}
