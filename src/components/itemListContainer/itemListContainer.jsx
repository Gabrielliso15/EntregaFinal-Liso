
import './itemListContainer.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { LoadingComponent } from '../Loader/LoadingComponent';

const ItemListContainer = ({productsData }) => {


    return (
        <div className="item-list-container">

            <div className="product-list">

                { productsData.length <=0 ? <LoadingComponent/> : 
                productsData.map((products) => {
                        return (
                            <Card key= {products.id} className="product-card" style={{ width: '18rem',height : '400px' }}>
                                <Link to={`/item/${products.id}`}><Card.Img variant="top" src={products.thumbnail} style={{ height: '200px' }}/></Link>
                                <Card.Body>
                                    <Card.Title>{products.title}</Card.Title>
                                    <Card.Text>{products.description}</Card.Text>      
                                    <Card.Text style={{ backgroundColor: 'black', color : 'white' }}>${products.price}</Card.Text>      
                                </Card.Body>
                            </Card>
                        );
                    })}
            </div>
        </div>
    )
}

export default ItemListContainer