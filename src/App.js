import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';


function App() {
    const onAdd = (count) => {
    alert (`Agregaste ${count} productos a tu carrito`);
  }


  return (
    <>
    <Navbar/>
    <ItemCount inicial={1} stock={7} onAdd={onAdd}/>
    <ItemListContainer greeting={"Bienvenido a la mejor página de camisetas del mundo, por ahora tenemos unas pocas :P"}/> 
    </>
   );
}

export default App;
