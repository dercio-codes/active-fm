export default function SectionHeader({ text }) {
  return (
    <div
      style={{
        fontSize: "24px",
        color: "#eee",
        textTransform: "uppercase",
        fontWeight: "600",
        marginTop: "16px",
        marginBottom: "8px",
      }}
    >
      {text}

      <div
        style={{
          width: "80px",
          height: "2px",
          background: "#aa2329;",
          marginTop: "16px",
        }}
      ></div>
    </div>
  );
}
