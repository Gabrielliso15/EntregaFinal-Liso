
import ItemListContainer from '../components/itemListContainer/itemListContainer';
import { useGetProducts } from '../hooks/useProducts';
import { useEffect } from 'react';

export const Home = () => {
    useEffect(() => {
        document.title = "ClickTechStore - Home";
    })

    const { productsData } = useGetProducts ('products');


    return (
        <ItemListContainer productsData = {productsData}/>
    )
}

