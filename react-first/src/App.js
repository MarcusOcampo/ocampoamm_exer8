import Navbar from "./components/navBar";
import Products from "./components/products";

function App() {
  return (
    <div>
        <div>
        {/* show navbar then products */}
        <Navbar/> 
        <Products/>
      </div>
    </div>
  );
}

export default App;
