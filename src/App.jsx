//
import "./App.css";
import Navbar from "./assets/components/Navbar";
import { Convertidor } from "./assets/components/Convertidor";
import Api from '../src/helper/FetchApi'


 

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Convertidor />
      <Api/>
      
    </div>
  );
}

export default App;
