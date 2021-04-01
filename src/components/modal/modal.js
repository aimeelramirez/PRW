import "./modal.css";


const Modal = ({ handleSubmit, handleClose, show, children, onSubmit }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
      </section>
    </div>
  );
};

export default Modal;
