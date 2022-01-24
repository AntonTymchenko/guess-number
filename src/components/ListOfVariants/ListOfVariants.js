import { useSelector } from "react-redux";
import ItemListOfVariants from "./ItemListOfVariants";

function ListOfVariants() {
  const variantsFromState = useSelector((state) => state.variants.variants);

  return (
    <div>
      <ul>
        {variantsFromState &&
          variantsFromState.map((variant, i) => (
            <ItemListOfVariants
              key={i}
              className="list-of-variants-item"
              variant={variant}
            />
          ))}
      </ul>
    </div>
  );
}
export default ListOfVariants;
