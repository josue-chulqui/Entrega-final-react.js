import './NavBar.css'
import CartWidget from "../CardWidget/CardWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
return (
  <nav className="NavBar">
    <Link className='logo2' to={"/"}> <h1>MercadoLivre</h1> </Link>
    <section className='Categories'>
      <NavLink
        to={"/category/celular"}
        className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
      >
        Celulares
      </NavLink>
      <NavLink
        to={"/category/tablet"}
        className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
      >
        Tablets
      </NavLink>
      <NavLink
        to={"/category/computers"}
        className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
      >
        Computadoras
      </NavLink>
    </section>
    <CartWidget />
  </nav>
);
}

export default NavBar;