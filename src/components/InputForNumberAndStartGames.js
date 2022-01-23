import { useState } from "react";
import creatorNumber from "../utils/creatorNumber";
import uniqueNumbersCheck from "../utils/uniqueNumbersCheck";
import {
  createdNumber,
  addVariants,
  startBtnStatus,
} from "../redux/input-reducer";
import { useDispatch, useSelector } from "react-redux";

function InputForNumberAndStartGames() {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const numberCreatedFromState = useSelector(
    (state) => state.variants.createdNumber
  );
  const isStartBtnDisabled = useSelector(
    (state) => state.variants.startBtnStatus
  );

  const onInputChange = (e) => {
    if (numberCreatedFromState) {
      setInputVal(e.target.value);
    } else {
      alert("Нажмите на старт для начала.)");
    }
  };

  const onStartClick = () => {
    if (numberCreatedFromState) {
      alert("Игра уже идет! Введите число");
      return;
    } else {
      let number = creatorNumber();
      dispatch(createdNumber(number));
      dispatch(startBtnStatus(true));
    }
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!uniqueNumbersCheck(inputVal)) {
      alert("Введите число из 4 уникальных цифр!! Не больше чем 4 символа");
      return;
    } else {
      dispatch(addVariants(inputVal));
      setInputVal("");
    }
  };

  return (
    <div className="inputPart">
      <form>
        <input
          placeholder="Enter 4 unique numbers"
          onChange={onInputChange}
          value={inputVal}
          type="number"
          pattern={"[0-9]{4}"}
        />
        <button
          type="button"
          className="formBtn"
          disabled={!isStartBtnDisabled}
          onClick={onFormSubmit}
        >
          Введите номер
        </button>
      </form>
      <button
        type="button"
        className="start"
        disabled={isStartBtnDisabled}
        onClick={onStartClick}
      >
        {!isStartBtnDisabled ? "СТАРТ ИГРЫ" : "ТЕПЕРЬ УГАДАЙТЕ ЧИСЛО :)"}
      </button>
    </div>
  );
}

export default InputForNumberAndStartGames;
