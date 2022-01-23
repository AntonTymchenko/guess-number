import { useSelector, useDispatch } from "react-redux";
import {
  changeStatus,
  guessedNum,
} from "../../redux/numbers-table-helper-reducer";

function TableNumber() {
  const numbers = useSelector((state) => state.numbers.numbers);
  const dispatch = useDispatch();

  const onListOfNumberClick = (id) => {
    dispatch(changeStatus(id));
  };
  const doubleClickNumber = (id) => {
    dispatch(guessedNum(id));
  };
  return (
    <div className="numberRow">
      <ul>
        {numbers.map(({ id, checked, guessedNum }) => (
          <li
            key={id}
            data-num={id}
            onClick={() => onListOfNumberClick(id)}
            className={
              checked ? "crossNumber" : guessedNum ? "guessedNum" : null
            }
            onDoubleClick={() => doubleClickNumber(id)}
          >
            {id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableNumber;
