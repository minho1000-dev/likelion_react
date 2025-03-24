import { useParams } from "react-router";

import useFetchProduct from "../../hooks/useFetchProduct";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { productId } = useParams();

  const { product, isProductLoading, isProductError } =
    useFetchProduct(productId);

  if (isProductLoading) {
    return <div>Loading...</div>;
  }

  if (isProductError) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <div className={styles.productContainer}>
        {/* https://picsum.photos/200 */}
        <img src={product.image} />
        <div className={styles.productInfo}>
          <div className={styles.category}>{product.category}</div>
          <h2>{product.name}</h2>
          <div className={styles.price}>{product.price.toLocaleString()}원</div>
          <button>구매하기</button>
        </div>
      </div>
      <hr />
      <p className={styles.description}>{product.description}</p>
      <h3>리뷰({product.reviews.length})</h3>
      <hr />

      {product.reviews.length > 0 ? (
        product.reviews.map((review) => {
          return (
            <div key={review.id} className={styles.reviewItem}>
              <div className={styles.reviewHeader}>
                <div>{review.username}</div>
                <div>({review.rating}/5)</div>
              </div>
              <div className={styles.text}>{review.text}</div>
            </div>
          );
        })
      ) : (
        <div className={styles.reviewEmpty}>등록된 리뷰가 없습니다.</div>
      )}
    </div>
  );
};

export default ProductDetail;
