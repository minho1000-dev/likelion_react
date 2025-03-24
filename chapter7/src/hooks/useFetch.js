import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(url);

        const json = await res.json();

        setData(json);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    hasError,
  };
};

export default useFetch;
