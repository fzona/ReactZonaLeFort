import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={"Bienvenido a la mejor página de camisetas del mundo, por ahora no tenemos ninguna :P"}/> 
    </>
   );
}

export default App;
