import { useState, useEffect } from "react";

function useFetch(url, initialValue) {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}

export { useFetch };
