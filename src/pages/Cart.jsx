import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Cart.css';

export const Cart = () => {
    const [products, setProducts] = useState([]);
    const { count } = useContext(CartContext);

    useEffect(() => {
        const fetchProducts = async () => {
            const db = getFirestore();
            const productPromises = count.map(async (item) => {
                const docRef = doc(db, "products", item.id);
                const productDoc = await getDoc(docRef);
                const productData = { id: productDoc.id, ...productDoc.data() };
                return { ...productData, quantity: item.quantity };
            });

            const productsData = await Promise.all(productPromises);

            // Agrupar productos por id
            const groupedProducts = productsData.reduce((acc, product) => {
                const existingProduct = acc.find((p) => p.id === product.id);
                if (existingProduct) {
                    existingProduct.quantity += product.quantity;
                } else {
                    acc.push(product);
                }
                return acc;
            }, []);

            setProducts(groupedProducts);
        };

        fetchProducts();
    }, [count]);

    // total de la compra
    const total = products.reduce((acc, product) => {
        return acc + product.price * product.quantity;
    }, 0);

    const handleCheckout = () => {
        toast.success("¡Compra exitosa! Redirigiendo a la página de pago.");
    };

    return (
        <div className="divprincipal">
            {count.length === 0 ? (
                <h1>No hay productos en el carrito</h1>
            ) : (
                <div>
                    {products.map((product) => (
                        <div key={product.id} className="product-item">
                            <img src={product.thumbnail} alt={product.title} />
                            <div className="product-details">
                                <h2>{product.title}</h2>
                                <p>Cantidad: {product.quantity}</p>
                            </div>
                        </div>
                    ))}
                    <div className="total">
                        <p className="totaltext">Total: ${total}</p>
                        <button className="botoncheck" onClick={handleCheckout}>Ir a Pagar</button>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};
