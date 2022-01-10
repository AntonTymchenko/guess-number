import { useState } from "react";
import InputForNumberAndStartGames from "./InputForNumberAndStartGames";
import ListOfVariants from "./LitOfVariants.js/ListOfVariants";
import ResultOfVariants from "./ResultOfVariants/ResultOfVariants";
import Modal from "./Modal/Modal";

function MainTableForGame({ setBestResult }) {
  const [numberCreated, setNumberCreated] = useState(""); //цифра которую создал и нужно угадать результат ввиде массива из цифр
  const [numberArrOfForm, setNumberArrOfForm] = useState([]); //массив из вариантов цифр  тип строка
  const [arrOfQuantityAndOrder, setArrOfQuantityAndOrder] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [resetState, setResetState] = useState(false);
  const [countActions, setCountActions] = useState([]);
  const [btnStatus, setBtnStatus] = useState(false);

  console.log("countActions", countActions);

  console.log("numberCreated", numberCreated);

  return (
    <div className="mainTableWrapper">
      <InputForNumberAndStartGames
        setNumberCreated={setNumberCreated}
        numberCreated={numberCreated}
        setNumberArrOfForm={setNumberArrOfForm}
        numberArrOfForm={numberArrOfForm}
        setArrOfQuantityAndOrder={setArrOfQuantityAndOrder}
        setResetState={setResetState}
        setBtnStatus={setBtnStatus}
        btnStatus={btnStatus}
      />
      <div className="listOfVariants">
        <ListOfVariants
          variants={numberArrOfForm}
          numberCreated={numberCreated}
        />
        <ResultOfVariants
          numberArrOfForm={numberArrOfForm}
          numberCreated={numberCreated}
          setShowModal={setShowModal}
          showModal={showModal}
          resetState={resetState}
          setCountActions={setCountActions}
          setBestResult={setBestResult}
        />
      </div>
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          setResetState={setResetState}
          setNumberCreated={setNumberCreated}
          setNumberArrOfForm={setNumberArrOfForm}
          countActions={countActions}
          setBtnStatus={setBtnStatus}
        />
      ) : null}
    </div>
  );
}

export default MainTableForGame;
