import { useEffect, useState } from "react";

function useFetchProduct(prodcutId) {
  const [product, setProduct] = useState(null);
  const [isProductLoading, setIsProductLoading] = useState(true);
  const [isProductError, setIsProductError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsProductLoading(true);

        const response = await fetch(
          `http://localhost:3000/products/${prodcutId}?_embed=reviews`
        );

        if (!response.ok) {
          throw new Error();
        }

        const json = await response.json();

        setProduct(json);
        setIsProductLoading(false);
      } catch {
        setIsProductError(true);
        setIsProductLoading(false);
      }
    }

    fetchProducts();
  }, [prodcutId]);

  return {
    product,
    isProductLoading,
    isProductError,
  };
}

export default useFetchProduct;
