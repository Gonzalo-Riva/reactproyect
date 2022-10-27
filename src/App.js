import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget.js";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer />

      <CartWidget />

    </div>

  )
}


export default App;