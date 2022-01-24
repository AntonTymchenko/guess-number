import InputForNumberAndStartGames from "./InputForNumberAndStartGames";
import ListOfVariants from "./ListOfVariants/ListOfVariants";
import ResultOfVariants from "./ResultOfVariants/ResultOfVariants";
import Modal from "./Modal/Modal";
import { useSelector } from "react-redux";

function MainTableForGame() {
  const modalStatus = useSelector((state) => state.result.isModalOpen);

  return (
    <div className="mainTableWrapper">
      <InputForNumberAndStartGames />
      <div className="table-wrapper">
        <table>
          <thead>
            <tr className="table-head">
              <th>Variants</th>
              <th className="second-child">Quantity</th>
              <th>Order</th>
            </tr>
          </thead>
          <tbody>
            <ResultOfVariants />
          </tbody>
        </table>
      </div>
      {modalStatus && <Modal />}
    </div>
  );
}

export default MainTableForGame;
