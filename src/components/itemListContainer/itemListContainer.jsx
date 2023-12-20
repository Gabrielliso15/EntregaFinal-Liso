
import './itemListContainer.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemListContainer = ({ greeting, productsData }) => {

    console.log(productsData)
    return (
        <div className="item-list-container">
            {greeting}
            <div className="product-list">
                {productsData.map((products) => {
                        return (
                            <Card key= {products.id} className="product-card" style={{ width: '18rem' }}>
                                <Link to={`/item/${products.id}`}><Card.Img variant="top" src={products.thumbnail} /></Link>
                                <Card.Body>
                                    <Card.Title>{products.title}</Card.Title>
                                    <Card.Text>{products.description}</Card.Text>
                                    <Button variant="primary">{products.price}</Button>
                                </Card.Body>
                            </Card>
                        );
                    })}
            </div>
        </div>
    )
}

export default ItemListContainer