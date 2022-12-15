//
import "./App.css";
import Navbar from "./assets/components/Navbar";
import { Convertidor } from "./assets/components/Convertidor";
//import FetchApi from '../src/helper/FetchApi'


 

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Convertidor/>
    </div>
  );
}

export default App;
