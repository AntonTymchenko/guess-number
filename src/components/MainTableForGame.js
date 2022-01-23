import InputForNumberAndStartGames from "./InputForNumberAndStartGames";
import ListOfVariants from "./LitOfVariants.js/ListOfVariants";
import ResultOfVariants from "./ResultOfVariants/ResultOfVariants";
import Modal from "./Modal/Modal";
import { useSelector } from "react-redux";

function MainTableForGame() {
  const modalStatus = useSelector((state) => state.result.isModalOpen);

  return (
    <div className="mainTableWrapper">
      <InputForNumberAndStartGames />
      <div className="listOfVariants">
        <ListOfVariants />
        <ResultOfVariants />
      </div>
      {modalStatus && <Modal />}
    </div>
  );
}

export default MainTableForGame;
