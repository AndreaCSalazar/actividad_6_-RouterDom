import { Link, useLocation } from "react-router-dom";
import ProductsApi from "../pages/ProductsApi";

const ProductDetails = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get('id');

    const { products, loading, error } = ProductsApi();

    const product = products.find(p => p.id === parseInt(productId)); 

    if (loading) return <p>Loading product...</p>;
    if (error) return <p>Error: {error}</p>;

    
    return (
        <div>
            <h1>Product Details</h1>
            {productId ? (
               <div className="productCard">
                <p>Product ID: {product.id}</p>
                <p>Name: {product.name}</p>
                <p>Description: {product.description}</p>
               </div>
               ) : (
           <p> ID not found.</p>
       )}
            
            <Link to="/products" className={location.pathname === "/products" ? "select" : ""}>
                Comeback products
            </Link>
        </div>
    );
};

export default ProductDetails;

