import "./Button.css";

const Button = ({ onClick, children }) => {
  // const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <button className="alr-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
