/** The hexagonal "C" field-mark. size in px. */
export default function Mark({ size = 38, stroke = 3.5 }: { size?: number; stroke?: number }) {
  return (
    <svg
      viewBox="0 0 100 110"
      width={(size / 110) * 100}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon
        points="50,6 90,30 90,80 50,104 10,80 10,30"
        fill="none"
        stroke="#cf9a3a"
        strokeWidth={stroke}
      />
      <text
        x="50"
        y="70"
        fontFamily="Georgia,serif"
        fontSize="50"
        fontWeight="600"
        fill="#ece7db"
        textAnchor="middle"
      >
        C
      </text>
    </svg>
  );
}
