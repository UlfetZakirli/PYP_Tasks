import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div className="products">
      <div className="productsNav">
        <Link to="/products/search"> Adminheader </Link>
        <Link to="/products/list"> Admincontent  </Link>
        <Link to="/products/add"> adminfooter  </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Products;