import React, { useEffect, useState } from 'react';

function EcomTask() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [price, setPrice] = useState(500);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        const uniqueCategories = ['All', ...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    filterProducts(e.target.value, category, price, rating);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    filterProducts(search, e.target.value, price, rating);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
    filterProducts(search, category, e.target.value, rating);
  };

  const handleRating = (e) => {
    setRating(e.target.value);
    filterProducts(search, category, price, e.target.value);
  };

  const resetFilters = () => {
    setSearch('');
    setCategory('All');
    setPrice(500);
    setRating(0);
    setFilteredProducts(products);
  };

  const filterProducts = (searchTerm, categoryTerm, priceTerm, ratingTerm) => {
    let filtered = products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (categoryTerm !== 'All') {
      filtered = filtered.filter((item) => item.category === categoryTerm);
    }

    filtered = filtered.filter((item) => item.price <= priceTerm);
    filtered = filtered.filter((item) => item.rating.rate >= ratingTerm);

    setFilteredProducts(filtered);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">E-commerce Product Catalog</h1>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={handleSearch}
          className="border p-2 rounded"
        />

        <select value={category} onChange={handleCategory} className="border p-2 rounded">
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="range"
          min="0"
          max="500"
          value={price}
          onChange={handlePrice}
          className="w-full"
        />
        <span>Price: ${price}</span>

        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={rating}
          onChange={handleRating}
          className="w-full"
        />
        <span>Rating: {rating}+</span>

        <button onClick={resetFilters} className="bg-blue-500 text-white p-2 rounded">
          Reset Filters
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="h-40 w-full object-cover" />
            <h2 className="text-lg font-bold mt-2">{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EcomTask;
