import { useState } from "react";
import { Link } from "react-router";

import useFetchProducts from "../../hooks/useFetchProducts";

import styles from "./Home.module.css";

function App() {
  const { products, isProductsLoading, isProductsError } = useFetchProducts();
  const [selectedCategory, setSelectedCategory] = useState("전체");

  if (isProductsLoading) {
    return <div>Loading...</div>;
  }

  if (isProductsError) {
    return <div>Error...</div>;
  }

  const filteredProducts = products.filter(({ category }) => {
    if (selectedCategory === "전체") {
      return true;
    }

    return category === selectedCategory;
  });

  return (
    <>
      <ul className={styles.categoryList}>
        {["전체", "상의", "하의", "신발", "가방", "악세서리"].map(
          (category) => {
            return (
              <li
                key={category}
                className={
                  selectedCategory === category ? styles.selected : null
                }
                onClick={() => {
                  setSelectedCategory(category);
                }}
              >
                {category}
              </li>
            );
          }
        )}
      </ul>
      <h3>상품 목록({filteredProducts.length})</h3>
      <div className={styles.productList}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(({ id, image, category, name, price }) => (
            <Link
              key={id}
              to={`/products/${id}`}
              className={styles.productListItem}
            >
              <div>
                {/* https://picsum.photos/200 */}
                <img src={image} className={styles.image} />
                <div className={styles.productInfo}>
                  <div className={styles.productCategory}>{category}</div>
                  <div className={styles.productName}>{name}</div>
                  <div className={styles.productPrice}>
                    {price.toLocaleString()}원
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className={styles.productsEmpty}>상품이 없습니다.</div>
        )}
      </div>
    </>
  );
}

export default App;
