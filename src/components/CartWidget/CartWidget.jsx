
import LogoImage from "../assets/cart-shopping-solid.svg";
import './CartWidget.css';

const CartWidget = ({ itemCount }) => {
    return (
        <div className="cart-widget">
            <img
                src={LogoImage}
                alt="cart"
                height="20"
                className="d-inline-block align-top"
            />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

export default CartWidget;