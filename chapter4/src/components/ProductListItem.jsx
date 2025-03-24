const ProductListItem = ({ name, price, imgUrl }) => {
  return (
    <div class="product-list-item">
      <img
        src={imgUrl}
        width="200"
        height="200"
        alt={name}
        class="product-image"
      />
      <div class="product-name">{name}</div>
      <div class="product-price">{price}</div>
      <button class="product-button">장바구니에 넣기</button>
    </div>
  );
};

export default ProductListItem;
