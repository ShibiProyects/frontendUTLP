import { useEffect, useState } from "react";

function useFetch<T>({ url }: { url: string }) {
  const [fetchData, setFetchData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [controller, setController] = useState<AbortController | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);
    setLoading(true);

    fetch(url, { signal: abortController.signal })
      .then((res) => res.json())
      .then((res) => setFetchData(res))
      .catch((err) => {
        if (err.name == "AbortError") {
          console.log("Request Cancelled");
        }
        setError(err);
      })
      .finally(() => setLoading(false));

    return () => abortController.abort();
  }, [url]);

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError("Request cancelled");
    }
  };

  return { fetchData, loading, error, handleCancelRequest };
}
export default useFetch;
