import { useState, useEffect, useCallback } from "react";

export const useFetch = (url, setTours) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      throw new Error("useFetch: Can't access url");
    }
  }, [url, setTours]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return { loading, data };
};
