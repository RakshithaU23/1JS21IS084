import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const productdetailpage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    const response = await axios.get(`API_ENDPOINT/${id}`);
    setProduct(response.data.product);
  };
  return (
    <div>
      {product ? (
        <div>
          <h1>{product.NAME}</h1>
          <p>{product.COMPANY}</p>
          <p>{product.CATEGORY}</p>
          <p>{product.PRICE}</p>
          <p>{product.RATINGS}</p>
          <p>{product.AVAILABLE ? 'Available' : 'Not Available'}</p>
        </div>
      ) : (
        <p>Its Loading...!</p>
      )}
    </div>
  );
};
export default productdetailpage;
