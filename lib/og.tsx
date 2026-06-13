import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export function ogCard(title: string, eyebrow: string) {
  const fontSize = title.length > 55 ? 54 : title.length > 35 ? 66 : 80;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f5f0e8",
          color: "#3d2e1e",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#776550",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </div>
        <div style={{ display: "flex", fontSize, fontWeight: 700, lineHeight: 1.12 }}>
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            fontSize: 26,
            color: "#776550",
          }}
        >
          <div style={{ display: "flex" }}>piotrkrzysztof.dev</div>
          <div style={{ display: "flex" }}>Soli Deo Gloria</div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
