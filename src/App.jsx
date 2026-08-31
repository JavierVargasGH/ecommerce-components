import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import products from "./data/products";
import "./App.css";

function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (term) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="app">
      <Header />
      <main>
        <SearchBar onSearch={handleSearch} />
        <ProductList products={filteredProducts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;