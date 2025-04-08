import { useState, useCallback } from "react";

export const useFetchRandomImage = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchImage = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      const data = await response.json();
      setImageUrl(data[0].url);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return { fetchImage, imageUrl, loading, error };
};

export default useFetchRandomImage;
