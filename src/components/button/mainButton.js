import "./Button.css";

const MainButton = ({ handleClose, children }) => {
  // const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <button className="alr-button" onClick={handleClose}>
      {children}
    </button>
  );
};

export default MainButton;
