import { useContext } from "react";
import './CartWidget.css';
import { CartContext } from "../../context/CartContext";
import LogoImage from '../assets/Shopping_cart_font_awesome.png';
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { count } = useContext(CartContext);
    const totalCount = count.reduce((acc, item) => acc + item.quantity, 0);
    console.log(count);

    return (
        <Link to="/cart">
            <div className="cart-widget">
                <img 
                    src={LogoImage}
                    alt="cart"
                    height="25"
                    className="d-inline-block align-top"
                />
                <span className="item-count">{totalCount}</span>
            </div> 
        </Link>
    );
}

    export default CartWidget;