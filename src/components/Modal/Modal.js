import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({
  setShowModal,
  setResetState,
  setNumberCreated,
  setNumberArrOfForm,
  countActions,
  setBtnStatus,
  numberCreated,
}) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.code === "Escape") {
        setShowModal(false);
        setResetState(true);
        setBtnStatus(false);
        setNumberCreated("");
        setNumberArrOfForm([]);
        window.removeEventListener("keydown", handleKeyDown);
      }
      return;
    },
    [setShowModal]
  );

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      setShowModal(false);
      setResetState(true);
      setBtnStatus(false);
      setNumberCreated("");
      setNumberArrOfForm([]);
      window.removeEventListener("keydown", handleKeyDown);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <div className={s.textDivision}>
          <p className={s.text}>
            Вы отгадали число {numberCreated} за{" "}
            <span className={s.numberTry}>
              {countActions[countActions.length - 1]}
            </span>{" "}
            раза
          </p>
        </div>
        <div className={s.divBtn}>
          <button
            type="button"
            onClick={handleBackdropClick}
            className={s.modalButton}
          >
            OK
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
