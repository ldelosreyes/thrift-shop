import { useState } from "react";

export default useApi = (apiFunction) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunction(...args);
    setLoading(false);

    if (!response.ok) return setError(!response.ok);

    setError(!response.ok);
    setData(response.data);
  };

  return {
    data,
    error,
    loading,
    request,
  };
};
