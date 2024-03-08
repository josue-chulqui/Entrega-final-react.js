import CartWidget from "../CardWidget/CardWidget";

const NavBar = () => {

    return (
        <nav>
            <h1>eComerce</h1>
            <section>
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Computadoras</button>
            </section>
            <CartWidget />
        </nav>
    );
}
export default NavBar