import React, { useEffect, useState } from "react";
import ProductCards from "../components/ProductCards";

import { baseURL } from "../../constants";

function OtherBooks() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/books/all-books`)
      .then((response) => response.json())
      .then((data) => setProducts(data.books.slice(0, 8)));
  }, []);
  return (
    <div>
      <ProductCards products={products} headline="Latest Products" />
    </div>
  );
}

export default OtherBooks;
