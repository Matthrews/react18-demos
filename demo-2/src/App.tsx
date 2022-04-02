import React, { useState, useTransition } from "react";

import ProductList from "./components/ProductList";

function generateProducts() {
  const products = [];
  for (let i = 0; i < 10000; i++) {
    products.push(`Product ${i + 1}`);
  }
  return products;
}

const dummyProducts = generateProducts();

function filterProducts(filterTerm: string) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}

function App() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState("");

  const filteredProducts = filterProducts(filterTerm);

  // function updateFilterHandler(e: { target: HTMLInputElement }) {
  function updateFilterHandler(e: React.ChangeEvent<HTMLInputElement>) {
    // setFilterTerm(e.target.value);

    startTransition(() => {
      setFilterTerm(e.target.value);
    });
  }

  return (
    <div id="app">
      <input type="text" onChange={updateFilterHandler} />
      {isPending && <p>Updating List...</p>}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
