import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { isModalOpen } from "../../redux/resultOfGame";
import { resetStateForVariantsReducer } from "../../redux/input-reducer";
import { resetStateOfNumbers } from "../../redux/numbers-table-helper-reducer";

const modalRoot = document.querySelector("#modal-root");

export default function Modal() {
  const dispatch = useDispatch();
  const numberCreated = useSelector((state) => state.variants.createdNumber);
  const countActions = useSelector((state) => state.result.countOfMoves);

  const handleKeyDown = useCallback((e) => {
    if (e.code === "Escape") {
      dispatch(isModalOpen(false));
      dispatch(resetStateForVariantsReducer());
      dispatch(resetStateOfNumbers());
      window.removeEventListener("keydown", handleKeyDown);
    }
    return;
  }, []);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      dispatch(isModalOpen(false));
      dispatch(resetStateForVariantsReducer());
      dispatch(resetStateOfNumbers());
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
            Вы отгадали число <span>{numberCreated}</span> за
            <span className={s.numberTry}>
              {countActions[countActions.length - 1]}
            </span>{" "}
            раз(a)
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
