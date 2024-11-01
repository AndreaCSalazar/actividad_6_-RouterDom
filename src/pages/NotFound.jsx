import { Link } from "react-router-dom";
import NotFoundImage from '../assets/images/imgNotFound.jpg';

const NotFound = () => {
    return (
        <div>
            <h1>404: Not Found</h1>

            <p>Page not found</p>

            <img  src={NotFoundImage}alt="Not Found"/>

            <Link to="/">Comeback Home</Link>
        </div>
    );
};

export default NotFound;