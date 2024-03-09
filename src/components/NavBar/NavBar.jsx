import CartWidget from "../CardWidget/CardWidget";
import { Link } from "react-router-dom";


const NavBar = () => {

    return (
        <nav>
            <h1>MercadoLibre Sin Impuestos</h1>
            <section>
                <Link to={"/category/celular"}>Celulares</Link>
                <Link to={"/category/tablet"}>Tablet</Link>
                <Link to={"/category/Computers"}>Computadoras</Link>
            </section>
            <CartWidget />
        </nav>
    );
}
export default NavBar