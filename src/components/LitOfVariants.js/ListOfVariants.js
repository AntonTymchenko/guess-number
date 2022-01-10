import ItemListOfVariants from "./ItemListOfVariants";

function ListOfVariants({ variants }) {
  return (
    <div className="variants">
      <h2>Your variants</h2>
      <ul>
        {variants.map((variant, i) => (
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
