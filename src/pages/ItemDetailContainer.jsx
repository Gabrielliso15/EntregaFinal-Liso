
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useGetProductById } from '../hooks/useProducts';
import { useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount';
import './itemDetailContainer.css';


export const ItemDetailContainer = () => {

    const { id } = useParams();

    const { productData } = useGetProductById("products", id);

    return (
        <div className="div-principal">
            <div key= {productData.id} className="div-secundario">
                <img variant="top" src={productData.thumbnail} />
            </div>
            <div className='body'>
                    <h1>{productData.title}</h1>
                    <h3 className='textodesc'>
                    {productData.description}
                    </h3>
                    <h4> price : $
                    {productData.price}
                    </h4>
                    <ItemCount productId = {productData.id}/>
                </div>
        </div>

    )
}