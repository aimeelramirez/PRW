import "./modal.css";
import Button from "./../button/mainButton";
import { FiSend, FiX } from "react-icons/fi";

const Modal = ({ handleSubmit, handleClose, show, children, onSubmit }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <form id="modal-form" onSubmit={onSubmit}>
          {children}
          <div id="buttons-modal">
            <Button type="button" onClick={handleClose}>
              <strong> Close</strong>
              <FiX />
            </Button>
            <Button type="button" onClick={handleSubmit}>
              <strong> Submit</strong>
              <FiSend />
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Modal;
