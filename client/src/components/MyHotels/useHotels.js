import { useState, useEffect } from "react";
import axios from "axios";

const useHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const result = await axios.get("http://127.0.0.1:5000/app/hotel/getHotels");
        setHotels(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return { hotels, loading, error };
};

export default useHotels;
