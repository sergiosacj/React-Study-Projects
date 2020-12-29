import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error("useFetch: Can't access url");
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return [loading, data];
};
