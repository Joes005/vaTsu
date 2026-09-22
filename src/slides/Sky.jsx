export default function Sky() {
  return (
    <div className="slide-inner">
      <p className="eyebrow enter">Still under the same sky</p>
      <h2 className="enter" style={{ animationDelay: ".08s" }}>
        2023 to 2026 . One sky
      </h2>
      <svg
        className="sky enter"
        style={{ animationDelay: ".2s" }}
        viewBox="0 0 560 200"
        role="img"
        aria-label="Two points on a horizon, connected by an arc with a glowing sun between them"
      >
        <line
          x1="30"
          y1="150"
          x2="530"
          y2="150"
          stroke="var(--line)"
          strokeWidth="1.5"
        />
        <path
          d="M 70 150 Q 280 10 490 150"
          fill="none"
          stroke="var(--accent-soft)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <circle cx="70" cy="150" r="5" fill="var(--accent-deep)" />
        <circle cx="490" cy="150" r="5" fill="var(--accent-deep)" />
        <circle
          className="pulse-sun"
          cx="280"
          cy="52"
          r="7"
          fill="var(--accent)"
        />
        <text
          x="70"
          y="176"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="11"
          letterSpacing="1"
          fill="var(--ink-soft)"
        >
          2023
        </text>
        <text
          x="490"
          y="176"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="11"
          letterSpacing="1"
          fill="var(--ink-soft)"
        >
          2026
        </text>
      </svg>
      <p className="sky-caption enter" style={{ animationDelay: ".3s" }}>
        Tonight, whatever you're looking up at — I'm probably looking at the
        same sky, just a little behind or ahead of you.
      </p>
    </div>
  );
}
