import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = ({ onClose }) => {
  return (
    <div onClick={onClose} className={classes["backdrop"]}></div>
  )
}

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes["modal"]}>
      <div>{children}</div>
    </div>
  )
}

const portal = document.getElementById("overlays");

const Modal = ({ onClose, children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portal)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portal)}
    </>
  )
}

export default Modal;
