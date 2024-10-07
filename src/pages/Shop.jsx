import React, { useEffect, useState } from "react";
import ShopCard from "../component/ShopCard";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("default sorting");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products"); // Adjust this URL to your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = [...products];
  
  // Implement sorting logic based on sortOption
  switch (sortOption) {
    case "sort-by-popularity":
      sortedProducts.sort((a, b) => b.popularity - a.popularity);
      break;
    case "sort-by-average-rating":
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break;
    case "sort-by-latest":
      sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case "low-to-high":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "high-to-low":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }

  if (loading) {
    return (
      <main className="main-container">
        <section className="flex items-center justify-center my-5">
          <p className="text-muted">Loading products...</p>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="main-container">
        <section className="flex items-center justify-center my-5">
          <p className="text-muted">Error: {error}</p>
        </section>
      </main>
    );
  }

  return (
    <main className="main-container">
      <section className="w-full flex items-center justify-between my-5">
        <p className="text-muted">Showing {products.length} results</p>
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="py-2 px-4 w-56 bg-accent1 text-light rounded-md"
        >
          <option value="default sorting">Default sorting</option>
          <option value="sort-by-popularity">Sort by Popularity</option>
          <option value="sort-by-average-rating">Sort by Average Rating</option>
          <option value="sort-by-latest">Sort by Latest</option>
          <option value="low-to-high">Sort by Price: Low to High</option>
          <option value="high-to-low">Sort by Price: High to Low</option>
        </select>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center my-5">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ShopCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-muted">No products available.</p>
        )}
      </section>
    </main>
  );
}

export default Shop;
