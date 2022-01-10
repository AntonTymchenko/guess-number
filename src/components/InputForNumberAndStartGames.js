import { useState } from "react";
import creatorNumber from "../utils/creatorNumber";
import uniqueNumbersCheck from "../utils/uniqueNumbersCheck";

function InputForNumberAndStartGames({
  setNumberCreated,
  numberCreated,
  setNumberArrOfForm,
  numberArrOfForm,
  setResetState,
  btnStatus,
  setBtnStatus,
}) {
  const [inputVal, setInputVal] = useState("");

  const onInputChange = (e) => {
    if (numberCreated) {
      setInputVal(e.target.value);
    } else {
      alert("Нажмите на старт для начала.)");
    }
  };

  const onStartClick = () => {
    if (numberCreated) {
      alert("Игра уже идет! Введите число");
      return;
    } else {
      let number = creatorNumber();
      setNumberCreated(number);
      setBtnStatus(true);
    }
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!uniqueNumbersCheck(inputVal)) {
      alert("Введите число из 4 уникальных цифр!! Не больше чем 4 символа");
      return;
    } else {
      setNumberArrOfForm((prev) => [...prev, inputVal]);
      setResetState(false);
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
          disabled={!btnStatus}
          onClick={onFormSubmit}
        >
          Введите номер
        </button>
      </form>
      <button
        type="button"
        className="start"
        disabled={btnStatus}
        onClick={onStartClick}
      >
        {!btnStatus ? "НАЧАЛО ИГРЫ" : "ТЕПЕРЬ УГАДАЙТЕ ЧИСЛО :)"}
      </button>
    </div>
  );
}

export default InputForNumberAndStartGames;
