import { React, useState, useEffect } from "react"
import axios from "axios";

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(Object.values(response.data).sort((a, b) => {
          if (a.nombre < b.nombre) {
            return -1;
          }
          if (a.nombre > b.nombre) {
            return 1;
          }
          return 0;
        }));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    useEffect(() => {
      fetchData();
    }, [url]);
  
    return { data, loading, error };
  
}

export default useFetchData