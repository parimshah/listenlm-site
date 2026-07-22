import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Same sound-wave mark as app/icon.tsx, scaled up. No border-radius here —
 * iOS applies its own corner mask to apple-touch-icons. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#c2410c",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 24, height: 56, borderRadius: 12, background: "#ffffff" }} />
          <div style={{ width: 24, height: 108, borderRadius: 12, background: "#ffffff" }} />
          <div style={{ width: 24, height: 74, borderRadius: 12, background: "#ffffff" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
