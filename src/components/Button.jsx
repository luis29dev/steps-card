export default function Button({
  textColor,
  bgColor,
  handlerClick,
  text,
  emoji,
}) {
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
      <span>{emoji}</span>
      {text}
    </button>
  );
}
