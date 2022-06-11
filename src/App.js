import "./App.css";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  const onAdd = (count) => {
    alert(`Agregaste ${count} productos a tu carrito`);
  };

  return (
    <>
      <Navbar />
      <ItemDetailContainer />
    </>
  );
}

export default App;
