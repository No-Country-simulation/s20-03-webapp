"use client";
// Este componente solo existe para probar ReactHookForm; por favor, eliminarlo

import axios from "axios";
import { useEffect, useState } from "react";

const URL = `https://restcountries.com/v3.1/name/venezuela`;

export const TestFetch = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(URL).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <h2>{`</TestFetch>`}</h2>
      <div className="max-w-sm bg-red-200 p-2 overflow-x-auto">
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </>
  );
};
