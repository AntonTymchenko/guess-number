function BestResultAndRulePart({ bestResult }) {
  console.log("bestResult Length", bestResult.length);

  return (
    <>
      <div className="best-result-div">
        <p>
          Ваш лучший результат{" "}
          {bestResult.length !== 0 ? Math.min(...bestResult) : 0}
        </p>
      </div>
      <div className="rules-div">
        <h2>Правила игры</h2>
        <ol className="list-of-rules">
          <li>Генерируете число для искуственного интелекта нажав на кнопку</li>
          <li>
            Вводите целое число длина которого 4 символа, цифры в числе не
            повторяются
          </li>
          <li>
            В колонке "Quantity" количество чисел, которые вы угадали и они есть
            у искуственного интелекта
          </li>
          <li>
            В колонке "order" количество угаданных порядков, т.е. если число 2,
            какие 2 числа стоят в том же порядке, что и у искуственного
            интелекта{" "}
          </li>
          <li>
            Когда quantity и order равны по 4 каждая, то вы вычеслили число
          </li>
        </ol>
      </div>
    </>
  );
}

export default BestResultAndRulePart;
