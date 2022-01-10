import ItemOfListOfResultOfVariants from "./ItemOfListOfResultOfVariants";
import { v4 as uuidv4 } from "uuid";

function ListOfResultOfVariants({ result = [] }) {
  return (
    <ul className="list-quantity-order">
      {result.map((item) => (
        <ItemOfListOfResultOfVariants
          key={uuidv4()}
          quantity={item.quantity}
          order={item.order}
        />
      ))}
    </ul>
  );
}

export default ListOfResultOfVariants;
