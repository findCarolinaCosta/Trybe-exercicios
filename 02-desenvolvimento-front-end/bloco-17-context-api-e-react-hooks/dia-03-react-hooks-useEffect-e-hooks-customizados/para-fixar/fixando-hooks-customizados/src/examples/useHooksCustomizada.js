import { useEffect, useState } from "react";

export function useHookCustomizada1(defaultValue) {
  const [variavel, setVariável] = useState(defaultValue);

  return { variavel, setVariável };
}

export function useHookCustomizada2(defaultValue) {
  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('url')
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}
