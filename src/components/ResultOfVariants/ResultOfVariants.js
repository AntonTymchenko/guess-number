import ListOfResultOfVariants from "./ListOfResultOfVariants";
import quantityOfMatchesNumbers from "../../utils/quantityOfMatchesNumbers";
import orderMatches from "../../utils/orderMatches";
import { useEffect, useState } from "react";

function ResultOfVariants({
  numberArrOfForm,
  numberCreated,
  showModal,
  setShowModal,
  resetState,
  setCountActions,
  setBestResult,
}) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (resetState) {
      setResult([]);
      return;
    }
    const quantity = quantityOfMatchesNumbers(
      numberArrOfForm[numberArrOfForm.length - 1],
      numberCreated
    );
    const order = orderMatches(
      numberArrOfForm[numberArrOfForm.length - 1],
      numberCreated
    );

    if (quantity && order) {
     
      if (order.order === 4 && quantity.quantity === 4) {
        setBestResult((prev) => [...prev, result.length + 1]);
        setCountActions((prev) => [...prev, result.length + 1]);
        setShowModal(!showModal);
      }
      setResult((prev) => [...prev, { ...quantity, ...order }]);
    }
  }, [numberArrOfForm]);

  

  return (
    <div className="table-of-result">
      <div className="table-of-result-titles">
        <h2>Quantity</h2>
        <h2>Order</h2>
      </div>
      <ListOfResultOfVariants result={result} />
    </div>
  );
}

export default ResultOfVariants;
