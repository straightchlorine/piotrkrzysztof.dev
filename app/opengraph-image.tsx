import { ImageResponse } from "next/og";

export const alt = "Piotr Krzysztof";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f0e8",
          color: "#3d2e1e",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700 }}>Piotr Krzysztof</div>
        <div style={{ fontSize: 28, color: "#8a7a6a", marginTop: 16 }}>
          Software, written deliberately.
        </div>
      </div>
    ),
    { ...size },
  );
}
