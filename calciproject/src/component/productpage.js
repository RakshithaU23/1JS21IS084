import React, { useState, useEffect } from 'react';
import axios from 'axios';

const productpage = () => {
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState({ CATEGORY: '', COMPANY: '', RATINGS: 0, PRICE: [0, 100], AVAILABLE: true });
  const [sort, setSort] = useState({ KEY: 'price', ORDERS: 'asc' });
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [filter, sort, page]);

  const fetchProduct = async () => {
    const response = await axios.get('API_ENDPOINT', { params: { ...filter, sort, page } });
    setProduct(response.data.product);
  };
  return (
    <div>
      {/* Filter and Sorting UI */}
      {/* Product List */}
    </div>
  );
};

export default productpage;
