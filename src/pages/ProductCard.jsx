import React from "react";
import { Navbar, Footer } from "../components";
import ProductCardSimple from "../components/ProductCardSimple";

const ProductCard = () => {
  // Sample data for demo
  const sampleProducts = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      category: "Electronics",
      rating: { rate: 4.5, count: 128 },
      quantity: 15,
      discount: 20
    },
    {
      id: 2,
      title: "Cotton T-Shirt",
      description: "Comfortable 100% cotton t-shirt available in multiple colors and sizes.",
      price: 29.99,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      category: "Clothing",
      rating: { rate: 4.2, count: 89 },
      quantity: 25
    },
    {
      id: 3,
      title: "Out of Stock Item",
      description: "This product is currently out of stock.",
      price: 89.99,
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      category: "Fashion",
      rating: { rate: 4.0, count: 67 },
      quantity: 0 // Out of stock
    }
  ];

  const variants = [
    { id: 'small', name: 'Small', price: 29.99 },
    { id: 'medium', name: 'Medium', price: 32.99 },
    { id: 'large', name: 'Large', price: 34.99 }
  ];

  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h1 className="display-4">ProductCard Component</h1>
            <p className="lead">Responsive Product Cards Demo</p>
          </div>
        </div>

        {/* Product Cards Demo */}
        <div className="row">
          {sampleProducts.map((product) => (
            <ProductCardSimple
              key={product.id}
              product={product}
            />
          ))}

          {/* Card with Variants */}
          <ProductCardSimple
            product={sampleProducts[1]}
            showVariants={true}
            variants={variants}
          />
        </div>


      </div>
      <Footer />
    </div>
  );
};

export default ProductCard;
