import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../context/CartContext"



const ItemCount = ({productId}) => {

    const [countItem, setCountItem] = useState(1)

    const { count, setCount} = useContext(CartContext);

    const handleAdd = () => {

        setCountItem (countItem + 1)
    
    }

    const handleRemove = () => {
        setCountItem(countItem - 1 >= 1 ? countItem - 1 : 1);
    };

    const handleAddProductToCart = () => {
        // Validar productId antes de continuar
        if (!productId) {
            console.error("ProductId no válido");
            return;
        }

        // Actualizar el carrito con la nueva cantidad
        const existingProductIndex = count.findIndex((item) => item.id === productId);

        if (existingProductIndex !== -1) {
            const updatedCart = [...count];
            updatedCart[existingProductIndex].quantity += countItem;
            setCount(updatedCart);
        } else {
            const newProduct = {
                id: productId,
                quantity: countItem,
            };
            setCount([...count, newProduct]);
        }

        // Restablecer la cantidad a 1 después de agregar al carrito
        setCountItem(1);
    };




    return (
        <div style={{width: '100%',margin : 'auto'}}>
            <div style={{width: '50%',display : 'flex', alignItems: 'center',justifyContent : 'space-between',margin : 'auto'}}>
            {/* <Button onClick={handleRemove} >-</Button>
            <span>{countItem}</span>
            <Button onClick={handleAdd}>+</Button> */}
            </div>
        <div style={{marginTop : '10px'}}>
            <Button onClick={handleAddProductToCart }>Agregar Al Carrito</Button>
        </div>
        </div>
    )
}

export default ItemCount;
