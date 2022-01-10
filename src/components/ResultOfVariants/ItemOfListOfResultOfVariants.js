function ItemOfListOfResultOfVariants({ quantity, order }) {
  return (
    <li className="quantity-order-item">
      <span className="quantity">{quantity}</span>
      <span>:</span>
      <span className="order">{order}</span>
    </li>
  );
}

export default ItemOfListOfResultOfVariants;
