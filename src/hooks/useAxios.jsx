import { useState, useEffect } from "react";
import axios from 'axios';

const useAxios = (resource) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
  
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
  
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    getData();
  }, [resource]);

  return { data, isLoading, error };
};

export default useAxios;
