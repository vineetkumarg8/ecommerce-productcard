import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import toast from "react-hot-toast";
import "./ProductCardSimple.css";

const ProductCardSimple = ({ product, variants = [], showVariants = false }) => {
  const [selectedVariant, setSelectedVariant] = useState(variants[0] || null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const isOutOfStock = product.quantity === 0;
  const getCurrentPrice = () => selectedVariant?.price || product.price;

  const handleAddToCart = async () => {
    if (isOutOfStock) return;
    setLoading(true);
    try {
      const productToAdd = { ...product, price: getCurrentPrice(), selectedVariant };
      dispatch(addCart(productToAdd));
      toast.success("Added to cart!");
    } catch (error) {
      toast.error("Failed to add to cart");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow-sm product-card">
        <div className="position-relative">
          <img className="card-img-top p-3" src={product.image} alt={product.title}
               style={{ height: "250px", objectFit: "contain" }} />

          {isOutOfStock && (
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
              <span className="badge bg-danger">Out of Stock</span>
            </div>
          )}

          {product.discount && (
            <span className="position-absolute top-0 end-0 m-2 badge bg-success">
              {product.discount}% OFF
            </span>
          )}
        </div>

        <div className="card-body d-flex flex-column">
          <small className="text-muted text-uppercase mb-1">{product.category}</small>
          <h5 className="card-title mb-2">{product.title?.substring(0, 50)}...</h5>
          <p className="card-text text-muted small mb-3">{product.description?.substring(0, 80)}...</p>
          
          {/* Rating */}
          {product.rating && (
            <div className="mb-2">
              <span className="text-warning">
                {"★".repeat(Math.floor(product.rating.rate))}
                {"☆".repeat(5 - Math.floor(product.rating.rate))}
              </span>
              <small className="text-muted ms-1">
                ({product.rating.count})
              </small>
            </div>
          )}
          
          {/* Variants Dropdown */}
          {showVariants && variants.length > 0 && (
            <div className="mb-3">
              <select 
                className="form-select form-select-sm"
                value={selectedVariant?.id || ''}
                onChange={(e) => {
                  const variant = variants.find(v => v.id === e.target.value);
                  setSelectedVariant(variant);
                }}
              >
                {variants.map((variant) => (
                  <option key={variant.id} value={variant.id}>
                    {variant.name} - ${variant.price}
                  </option>
                ))}
              </select>
            </div>
          )}
          
          {/* Price */}
          <div className="mb-3 mt-auto">
            <h4 className="text-primary mb-0">
              ${getCurrentPrice()}
              {product.originalPrice && (
                <small className="text-muted text-decoration-line-through ms-2">
                  ${product.originalPrice}
                </small>
              )}
            </h4>
          </div>
        </div>

        {/* Card Footer */}
        <div className="card-footer bg-transparent">
          <div className="d-grid gap-2">
            {/* Add to Cart Button */}
            <button
              className={`btn ${isOutOfStock ? 'btn-secondary' : 'btn-primary'}`}
              onClick={handleAddToCart}
              disabled={isOutOfStock || loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Adding...
                </>
              ) : isOutOfStock ? (
                'Out of Stock'
              ) : (
                <>
                  <i className="fa fa-shopping-cart me-2"></i>
                  Add to Cart
                </>
              )}
            </button>
            
            {/* View Details */}
            <Link
              to={`/product/${product.id}`}
              className="btn btn-outline-secondary btn-sm"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSimple;
