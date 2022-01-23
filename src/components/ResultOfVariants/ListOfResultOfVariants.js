import ItemOfListOfResultOfVariants from "./ItemOfListOfResultOfVariants";
import { useSelector } from "react-redux";

function ListOfResultOfVariants() {
  const result = useSelector((state) => state.variants.resultOfVariants);

  return (
    <ul className="list-quantity-order">
      {result &&
        result.map((item) => (
          <ItemOfListOfResultOfVariants
            key={item.id}
            quantity={item.quantity}
            order={item.order}
          />
        ))}
    </ul>
  );
}

export default ListOfResultOfVariants;
