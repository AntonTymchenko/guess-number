import { useSelector } from "react-redux";
import Switch from "@mui/material/Switch";
import { useState } from "react";

function BestResultAndRulePart() {
  const arrOfResult = useSelector((state) => state.result.countOfMoves);
  const [textTranslator, setTextTranslator] = useState(true);

  const onSwitchClick = () => {
    setTextTranslator(!textTranslator);
  };

  return (
    <>
      <div className="best-result-div">
        <p>
          {textTranslator ? "Ваш лучший результат:" : "Your best score:"}{" "}
          <span>{arrOfResult.length !== 0 ? Math.min(...arrOfResult) : 0}</span>
        </p>
        <div className="switch-division">
          <p>RU</p>
          <Switch onClick={onSwitchClick} />
          <p>ENG</p>
        </div>
      </div>
      <div className="rules-div">
        {textTranslator ? (
          <>
            <h2>Правила игры</h2>
            <ol className="list-of-rules">
              <li>
                Сгенерируйте число для искусственного интеллекта нажав на кнопку
              </li>
              <li>
                Вводите целое число длина которого 4 символа, цифры в числе не
                повторяются
              </li>
              <li>В колонке "Quantity" количество чисел, которые вы угадали</li>
              <li>
                В колонке "order" количество угаданных порядков, т.е. если число
                2, то какие-то 2 числа стоят в том же порядке, что и у
                искусственного интеллекта{" "}
              </li>
              <li>
                Когда quantity и order равны по 4 каждая, то вы вычислили число
              </li>
            </ol>
          </>
        ) : (
          <>
            <h2>Rules of the game</h2>
            <ol className="list-of-rules">
              <li>
                Generate a number for artificial intelligence by clicking on the
                button
              </li>
              <li>
                Enter an integer with a length of 4 characters, digits are not
                repeated in the number
              </li>
              <li>
                In the 'Quantity' column, the number of numbers you guessed
              </li>
              <li>
                In the 'order' column, the number of guessed orders, i.e. if the
                number is 2, some 2 numbers are in the same order as the
                artificial intelligence{" "}
              </li>
              <li>
                When quantity and order are 4 each, then you have computed a
                number
              </li>
            </ol>
          </>
        )}
      </div>
    </>
  );
}

export default BestResultAndRulePart;
