import ItemNav from "./ItemNav";


const Navbar = () => {
    return (
        <nav className="nav">
            <ul>
                <ItemNav route="/" text="Home" />
                <ItemNav route="/products" text="Productos" />
            </ul>
        </nav>
    );
};

export default Navbar;