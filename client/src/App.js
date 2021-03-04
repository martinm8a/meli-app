import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar.js"
import ProductCard from "./components/ProductCard.js"
import Catalogo from "./components/Catalogo.js"

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <ProductCard/>
    
    </div>
  );
}

export default App;
