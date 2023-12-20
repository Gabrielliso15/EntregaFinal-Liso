
import LogoImage from "../assets/Shopping_cart_font_awesome.svg";
import './CartWidget.css';

const CartWidget = ({ itemCount }) => {
    return (
        <div className="cart-widget">
            <img 
                src={LogoImage}
                alt="cart"
                height="25"
                className="d-inline-block align-top"
            />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

export default CartWidget;