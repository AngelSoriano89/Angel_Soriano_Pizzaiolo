import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const useApi = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetchIndex, setRefetchIndex] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(url, {
        baseURL: import.meta.env.VITE_API_URL,
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });
      setData(response.data);
      setError(null);
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Error al cargar los datos';
      setError(errorMessage);
      throw errorMessage;
    } finally {
      setLoading(false);
    }
  }, [url, JSON.stringify(options)]);

  const refetch = useCallback(() => {
    setRefetchIndex((prevIndex) => prevIndex + 1);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData, refetchIndex]);

  return { data, loading, error, refetch };
};

export const useMutation = (url, options = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const mutate = async (data, config = {}) => {
    try {
      setLoading(true);
      const response = await axios({
        url,
        baseURL: import.meta.env.VITE_API_URL,
        method: options.method || 'POST',
        data,
        ...config,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
          ...config.headers,
        },
      });
      setData(response.data);
      setError(null);
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Error en la petición';
      setError(errorMessage);
      throw errorMessage;
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading, error, data };
};
