import "./modal.css";
import MainButton from "./../button/mainButton";
import { FiSend, FiX } from "react-icons/fi";

const Modal = ({ handleSubmit, handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div id="buttons-modal">
          <MainButton type="button" handleClose={handleClose}>
            <strong> Close</strong>
            <FiX />
          </MainButton>
          <MainButton type="button" handleClose={handleSubmit}>
            <strong> Submit</strong>
            <FiSend />
          </MainButton>
        </div>
      </section>
    </div>
  );
};

export default Modal;
