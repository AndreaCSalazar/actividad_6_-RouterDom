import Layout from '../components/Layout';
import { Link } from "react-router-dom";
import ProductsApi from './ProductsApi';
import '../pages/products.css';

const Products = () => {
    const { products, loading, error } = ProductsApi();

    if (loading) return <p>Loading product...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Layout>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.price} USD</p>
                        <img src={product.image} alt={product.title} />
                        <Link to={`/products?id=${product.id}`}>See details</Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export default Products;
