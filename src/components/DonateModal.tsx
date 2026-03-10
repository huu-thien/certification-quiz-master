import { useEffect, useState } from "react";

export default function DonateModal({ onClose }: { onClose: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `rgba(0,0,0,${visible ? 0.6 : 0})`,
        backdropFilter: visible ? "blur(6px)" : "blur(0px)",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
        padding: "1rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "linear-gradient(145deg, #ffffff 0%, #f8f6ff 100%)",
          borderRadius: "24px",
          padding: "clamp(1.25rem, 4vw, 2rem)",
          width: "min(92vw, 400px)",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow:
            "0 32px 64px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.8) inset",
          transform: visible
            ? "scale(1) translateY(0)"
            : "scale(0.85) translateY(40px)",
          opacity: visible ? 1 : 0,
          transition:
            "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "none",
            background: "rgba(0,0,0,0.08)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            color: "#666",
            transition: "background 0.2s",
            lineHeight: 1,
            flexShrink: 0,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(0,0,0,0.15)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(0,0,0,0.08)")
          }
        >
          ✕
        </button>

        {/* Heart icon */}
        <div
          style={{
            fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
            marginBottom: "0.4rem",
          }}
        >
          💖
        </div>

        {/* Title */}
        <h2
          style={{
            margin: "0 0 0.25rem",
            fontSize: "clamp(1.1rem, 4vw, 1.4rem)",
            fontWeight: 800,
            background: "linear-gradient(135deg, #6c3fc5, #e040a0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.5px",
          }}
        >
          Ủng hộ tác giả
        </h2>
        <p
          style={{
            margin: "0 0 1rem",
            fontSize: "clamp(0.78rem, 2.5vw, 0.875rem)",
            color: "#555",
            lineHeight: 1.5,
          }}
        >
          Quét mã QR để ủng hộ và tiếp thêm động lực phát triển ứng dụng 🚀
        </p>

        {/* QR Code */}
        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "clamp(0.6rem, 2vw, 1rem)",
            display: "inline-block",
            boxShadow:
              "0 4px 20px rgba(108,63,197,0.12), 0 0 0 1px rgba(108,63,197,0.1)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <img
            src="/qr.jpg"
            alt="QR Code ủng hộ tác giả"
            style={{
              width: "100%",
              maxWidth: "350px",
              aspectRatio: "1 / 1",
              objectFit: "contain",
              display: "block",
              margin: "0 auto",
              borderRadius: "8px",
            }}
          />
        </div>

        {/* Thank you note */}
        <p
          style={{
            margin: "1rem 0 0",
            fontSize: "clamp(0.72rem, 2vw, 0.8rem)",
            color: "#555",
          }}
        >
          Cảm ơn bạn rất nhiều! ✨
        </p>
      </div>
    </div>
  );
}
