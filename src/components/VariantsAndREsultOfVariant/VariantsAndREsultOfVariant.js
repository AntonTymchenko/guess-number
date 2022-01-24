import { useEffect } from "react";
import { useSelector } from "react-redux";
import { creatObjWithVariantsAndResult } from "../../utils/creatObjWithVariantsAndResult";

function VariantsAndREsultOfVariant() {
  const variants = useSelector((state) => state.variants.variants);
  const resultOfVariants = useSelector(
    (state) => state.variants.resultOfVariants
  );
  let combineVariantsAndResults = creatObjWithVariantsAndResult(
    variants,
    resultOfVariants
  );

  return (
    <>
      {combineVariantsAndResults.map(({ variant, quantity, order, id }) => (
        <tr key={id}>
          <td>{variant}</td>
          <td>{quantity}</td>
          <td>{order}</td>
        </tr>
      ))}
    </>
  );
}

export default VariantsAndREsultOfVariant;
