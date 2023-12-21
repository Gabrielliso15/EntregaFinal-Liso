
import ItemListContainer from '../components/itemListContainer/itemListContainer';
import { useGetProducts } from '../hooks/useProducts';
import { useEffect } from 'react';

export const Home = () => {
    useEffect(() => {
        document.title = "ClickTechStore - Home";
    })

    const { productsData } = useGetProducts (15);

    return (
        <ItemListContainer greeting = "ClickTechStore en proceso!" productsData = {productsData}/>
    )
}

