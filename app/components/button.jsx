const Button = ({ content, onClick }) => {
  return (
    <button className="btn bg-gradient-TS text-white" onClick={onClick}>
      {" "}
      {content}{" "}
    </button>
  );
};

export default Button;
