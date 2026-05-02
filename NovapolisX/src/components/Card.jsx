function Card({ title, subtitle, extra, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <p>{extra}</p>
    </div>
  );
}

export default Card;