export default function Button({ textColor, bgColor, handlerClick, children }) {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
      }}
      onClick={handlerClick}
    >
      {children}
    </button>
  );
}
