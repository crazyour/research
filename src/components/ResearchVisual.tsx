import Image from "next/image";

type ResearchVisualProps = {
  id: string;
  title: string;
};

const imageById: Record<string, string> = {
  "ai-ml": "/images/research/ai-ml.webp",
  "cv-mm": "/images/research/cv-mm.webp",
  "nlp-speech": "/images/research/nlp-speech.webp",
  hci: "/images/research/hci.webp",
  vr: "/images/research/vr.webp",
  "edu-ai": "/images/research/edu-ai.webp",
  data: "/images/research/data.webp",
  interdisciplinary: "/images/research/interdisciplinary.webp",
};

export function ResearchVisual({ id, title }: ResearchVisualProps) {
  return (
    <div className={`research-visual research-visual-${id}`}>
      <Image
        className="research-visual-image"
        src={imageById[id] ?? imageById.interdisciplinary}
        alt={`${title}研究方向的抽象场景插画`}
        fill
        sizes="(max-width: 720px) 100vw, (max-width: 1180px) 50vw, 560px"
      />
      <div className="research-visual-shade" aria-hidden="true" />
      <div className="research-visual-status" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
