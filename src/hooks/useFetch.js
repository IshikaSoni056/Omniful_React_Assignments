import { useState } from "react";

function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Network error");

      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err.message || "Fetch failed");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}

export default useFetch;
