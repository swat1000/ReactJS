import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LandingPage() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProduct(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {product.length !== 0 ? (
          product.map((element) => (
            <div className="col-md-4 mb-4" key={element.id}>
              <div className="card">
                <img src={element.thumbnail} className="card-img-top" alt="Product Thumbnail" />
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text">{element.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Brand: {element.brand}</li>
                  <li className="list-group-item">Category: {element.category}</li>
                  <li className="list-group-item">Price: ${element.price}</li>
                  <li className="list-group-item">Rating: {element.rating}</li>
                  <li className="list-group-item">Stock: {element.stock}</li>
                  <li className="list-group-item">Discount: {element.discountPercentage}%</li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div>No Data Available</div>
        )}
      </div>
    </div>
  );
}
