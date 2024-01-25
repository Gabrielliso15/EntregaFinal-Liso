//componentes
import { MainRouter } from './router/MainRouter';
import { useEffect } from 'react';
import {CartProvider } from './context/CartContext';
// estilos
import './App.css';
//boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
//

function App() {

  useEffect(() => {
    document.title = "ClickTechStore";
  })

  return (
      <div style={{width: '100vw', height : '100vh'}}>
        <CartProvider>
          <MainRouter/>
        </CartProvider>
    </div>
  );
};

export default App;
