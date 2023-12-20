import{BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from '../pages/Home';
import NavBar from '../components/NavBar/NavBar';
import { ItemDetailContainer } from '../pages/ItemDetailContainer';



export const MainRouter = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path ='/' element={ <Home/> }/>
                <Route path ='/item/:id' element={ <ItemDetailContainer/> }/>
            </Routes>
        </BrowserRouter>
    )
}

