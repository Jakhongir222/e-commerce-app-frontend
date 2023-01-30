import React, { useEffect, useState } from "react";

const useShoes = (baseURL) => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    if (!shoes.length) {
      fetch(baseURL)
        .then((response) => response.json())
        .then((data) => setShoes(data));
    }
  }, [shoes, baseURL]);

  return shoes;
};

export default useShoes;