import React from "react";

const ProductCard = () => {

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1>ProductCard Component Demo</h1>
            <p>Responsive Product Cards - 1 Hour Implementation</p>

            <div className="row mt-4">
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
                       className="card-img-top p-3" alt="Headphones"
                       style={{height: "250px", objectFit: "contain"}} />
                  <div className="card-body d-flex flex-column">
                    <small className="text-muted text-uppercase mb-1">Electronics</small>
                    <h5 className="card-title mb-2">Premium Wireless Headphones</h5>
                    <p className="card-text text-muted small mb-3">High-quality wireless headphones with noise cancellation...</p>
                    <div className="mb-2">
                      <span className="text-warning">★★★★★</span>
                      <small className="text-muted ms-1">(128)</small>
                    </div>
                    <div className="mb-3 mt-auto">
                      <h4 className="text-primary mb-0">$199.99</h4>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent">
                    <button className="btn btn-primary w-100">
                      <i className="fa fa-shopping-cart me-2"></i>Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                       className="card-img-top p-3" alt="T-Shirt"
                       style={{height: "250px", objectFit: "contain"}} />
                  <div className="card-body d-flex flex-column">
                    <small className="text-muted text-uppercase mb-1">Clothing</small>
                    <h5 className="card-title mb-2">Cotton T-Shirt</h5>
                    <p className="card-text text-muted small mb-3">Comfortable 100% cotton t-shirt available in multiple colors...</p>
                    <div className="mb-2">
                      <span className="text-warning">★★★★☆</span>
                      <small className="text-muted ms-1">(89)</small>
                    </div>
                    <div className="mb-3">
                      <select className="form-select form-select-sm mb-2">
                        <option>Small - $29.99</option>
                        <option>Medium - $32.99</option>
                        <option>Large - $34.99</option>
                      </select>
                    </div>
                    <div className="mb-3 mt-auto">
                      <h4 className="text-primary mb-0">$29.99</h4>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent">
                    <button className="btn btn-primary w-100">
                      <i className="fa fa-shopping-cart me-2"></i>Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="position-relative">
                    <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
                         className="card-img-top p-3" alt="Out of Stock"
                         style={{height: "250px", objectFit: "contain"}} />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                      <span className="badge bg-danger">Out of Stock</span>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <small className="text-muted text-uppercase mb-1">Fashion</small>
                    <h5 className="card-title mb-2">Out of Stock Item</h5>
                    <p className="card-text text-muted small mb-3">This product is currently out of stock...</p>
                    <div className="mb-2">
                      <span className="text-warning">★★★★☆</span>
                      <small className="text-muted ms-1">(67)</small>
                    </div>
                    <div className="mb-3 mt-auto">
                      <h4 className="text-primary mb-0">$89.99</h4>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent">
                    <button className="btn btn-secondary w-100" disabled>
                      Out of Stock
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
