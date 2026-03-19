import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          background:
            "radial-gradient(circle at 20% 0%, rgba(109,224,255,0.22), transparent 32%), linear-gradient(180deg, #0a0f18 0%, #0c1322 52%, #091018 100%)",
          color: "#edf4ff",
          padding: "52px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 24,
            borderRadius: 36,
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -80,
            bottom: -110,
            height: 320,
            width: 320,
            borderRadius: 999,
            background: "radial-gradient(circle, rgba(219,255,102,0.32), transparent 68%)",
            filter: "blur(6px)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontSize: 18,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(237,244,255,0.64)",
              }}
            >
              <span>MiniMax M2.7</span>
              <span style={{ color: "#dbff66" }}>Guide</span>
            </div>
            <div
              style={{
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "10px 18px",
                fontSize: 18,
                color: "rgba(237,244,255,0.74)",
              }}
            >
              minimax-m2-7.lol
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 860 }}>
            <div style={{ fontSize: 78, lineHeight: 0.94, fontWeight: 700, letterSpacing: "-0.06em" }}>
              Complex coding, agent workflows, and official access paths for MiniMax M2.7.
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.5, color: "rgba(237,244,255,0.72)", maxWidth: 780 }}>
              Benchmarks, highlights, FAQ, and developer entry points in one premium guide.
            </div>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {["56.22% SWE-Pro", "57.0% Terminal Bench 2", "55.6% VIBE-Pro"].map((item) => (
              <div
                key={item}
                style={{
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                  padding: "12px 20px",
                  fontSize: 22,
                  color: "rgba(237,244,255,0.88)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
