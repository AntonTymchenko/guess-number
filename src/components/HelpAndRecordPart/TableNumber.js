function TableNumber() {
  const arrOfNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const onListOfNumberClick = (e) => {
    if (e.target.className === "crossNumber") {
      e.target.className = "";
      return;
    } else {
      e.target.className = "crossNumber";
    }
  };
  return (
    <div className="numberRow">
      <ul onClick={onListOfNumberClick}>
        {arrOfNumber.map((item, i) => (
          <li key={i} data-num={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableNumber;
