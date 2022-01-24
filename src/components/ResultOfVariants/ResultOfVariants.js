import ListOfResultOfVariants from "./ListOfResultOfVariants";
import quantityOfMatchesNumbers from "../../utils/quantityOfMatchesNumbers";
import orderMatches from "../../utils/orderMatches";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resultOfVariants } from "../../redux/input-reducer";
import { v4 as uuidv4 } from "uuid";
import { countOfMoves, isModalOpen } from "../../redux/resultOfGame";
import VariantsAndREsultOfVariant from "../VariantsAndREsultOfVariant/VariantsAndREsultOfVariant";

function ResultOfVariants() {
  const dispatch = useDispatch();
  const numberCreatedFromState = useSelector(
    (state) => state.variants.createdNumber
  );
  const variantsFromState = useSelector((state) => state.variants.variants);

  useEffect(() => {
    const quantity = quantityOfMatchesNumbers(
      variantsFromState[variantsFromState.length - 1],
      numberCreatedFromState
    );
    const order = orderMatches(
      variantsFromState[variantsFromState.length - 1],
      numberCreatedFromState
    );

    if (quantity && order) {
      if (order.order === 4 && quantity.quantity === 4) {
        dispatch(countOfMoves(variantsFromState));
        dispatch(isModalOpen(true));
      }
      const result = { id: uuidv4(), ...quantity, ...order };
      dispatch(resultOfVariants(result));
    }
  }, [variantsFromState]);

  return <VariantsAndREsultOfVariant />;
}

export default ResultOfVariants;
