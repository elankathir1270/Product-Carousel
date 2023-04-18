import './App.css';
import Carousel_component from './carousel/Carousel';
import {ProductData, ProductData2} from "./productdata/ProductData"

function App() {

  return (

    <div className="App">

        <h1 className='head'>PRODUCT CAROUSEL</h1>

      <Carousel_component data= {ProductData} />
      <Carousel_component data= {ProductData2} />

    </div>

  );
}

export default App;
