import './CartWidget.css'
import cart from "../../assets/tienda.ico";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useCart();
  return (
    <Link to="/cart" className="CartWidget">
      <img
        src={cart}
        alt="cart-widget"
        className='CartImg'
      />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;