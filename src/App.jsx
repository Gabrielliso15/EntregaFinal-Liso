//componentes
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';

// estilos

import './App.css'

//boostrap

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div style={{width: '100vw', height : '100vh'}}>
        <NavBar/>
        <ItemListContainer greeting = "ClickTechStore en proceso!"/>
    </div>
  );
}

export default App
