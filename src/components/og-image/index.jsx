/** biome-ignore-all lint/performance/noImgElement: ImageResponse renders native img elements. */

export function OgImage({ src, subtitle, title, buttonText }) {
  return (
    <div
      style={{
        fontFamily: "Inter Tight",
        fontWeight: 600,
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "hidden",
        background: "black",
        position: "relative",
      }}
    >
      <img
        src={src}
        width={500}
        height={500}
        alt="currentImage"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />

      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          padding: "70px 120px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
          gap: 30,
          alignItems: "flex-start",
        }}
      >
        <span
          style={{
            fontFamily: "DM Mono",
            fontWeight: 400,
            color: "white",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          {subtitle}
        </span>

        <span
          style={{
            fontFamily: "Inter Tight",
            fontWeight: 400,
            maxWidth: "650px",
            color: "white",
            fontSize: "54px",
          }}
        >
          {title}
        </span>

        {buttonText && (
          <span
            style={{
              background: "white",
              fontFamily: "DM Mono",
              padding: "15px",
              fontWeight: 400,
              color: "black",
              letterSpacing: "2px",
            }}
          >
            {buttonText}
          </span>
        )}
      </div>
    </div>
  );
}
