/**
 * Faceted power gem. Colour is driven entirely by the `color` prop so a row
 * of these reads as a spectrum. `lit` controls the glow and saturation.
 */
export function Gem({
  color,
  size = 44,
  lit = true,
}: {
  color: string;
  size?: number;
  lit?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 40 44"
      fill="none"
      aria-hidden="true"
      style={{
        filter: lit
          ? `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 14px ${color}88)`
          : "none",
        opacity: lit ? 1 : 0.35,
        transition: "filter 0.35s ease, opacity 0.35s ease",
      }}
    >
      {/* Body */}
      <polygon
        points="20,1.5 34.5,11 34.5,33 20,42.5 5.5,33 5.5,11"
        fill={color}
        fillOpacity={lit ? 0.32 : 0.18}
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Crown facets */}
      <polygon
        points="20,1.5 34.5,11 20,17 5.5,11"
        fill={color}
        fillOpacity={lit ? 0.55 : 0.25}
      />
      {/* Pavilion facets */}
      <polyline
        points="5.5,11 20,17 34.5,11"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.85"
        fill="none"
      />
      <polyline
        points="20,17 20,42.5"
        stroke={color}
        strokeWidth="0.9"
        strokeOpacity="0.6"
        fill="none"
      />
      <polyline
        points="5.5,33 20,17 34.5,33"
        stroke={color}
        strokeWidth="0.9"
        strokeOpacity="0.5"
        fill="none"
      />
      {/* Specular highlight */}
      <polygon
        points="12,8.5 19,5 15.5,12"
        fill="#ffffff"
        fillOpacity={lit ? 0.5 : 0.15}
      />
    </svg>
  );
}
