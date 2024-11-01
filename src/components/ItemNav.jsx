import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemNav = ({ route, text }) => {
    return (
        <li>
            <Link to={route}>{text}</Link>
        </li>
    );
};

ItemNav.propTypes = {
    route: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default ItemNav;