import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Sound-wave mark on the brand's rust-orange, tying the icon to "Listen"
 * without needing a legible letterform at 16-32px. */
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
          borderRadius: 7,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
          <div style={{ width: 4, height: 10, borderRadius: 2, background: "#ffffff" }} />
          <div style={{ width: 4, height: 19, borderRadius: 2, background: "#ffffff" }} />
          <div style={{ width: 4, height: 13, borderRadius: 2, background: "#ffffff" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
