import { Routes, Route } from 'react-router-dom';

import Dashboard from './gestion_routage/dashboard';
import ProductDetails from './gestion_routage/productDetails';
import About from './gestion_routage/compenents/about';
import Question from './gestion_routage/compenents/question';
import Panie from './gestion_routage/compenents/panie';

import data from './data.js';

{/**

import Pc1 from './assets/pc1.png'; 
import Pc2 from './assets/pc2.png'; 
import Pc3 from './assets/pc3.png'; 
import Pc4 from './assets/pc4.png'; 
import Pc5 from './assets/pc5.png'; 
import Pc6 from './assets/pc6.png'; 

  [
    {id: 1, img: Pc1, title: 'ordinateur-portable-hp-laptop-15', price: 7000},
    {id: 2, img: Pc5, title: 'ordinateur-portable-dell-latitude-9440', price: 6350},
    {id: 3, img: Pc3, title: 'ordinateur-portable-lenovo-ideapad', price: 6000},
    {id: 4, img: Pc4, title: 'ordinateur-portable-maroc', price: 4000},
    {id: 5, img: Pc2, title: 'pc-portable-lenovo-i7-13620h', price: 8500},
    {id: 6, img: Pc6, title: 'pc-portable/l409/+fv889', price: 10000}
  ]

*/}

function App() {

  return (
    <Routes>
      <Route path="/" element={<Dashboard data={ data } />} />
      <Route path="/produit/:id" element={<ProductDetails data={ data } />} />
      <Route path="/panie" element={<Panie />} />
      <Route path="/about" element={<About />} />
      <Route path="/question" element={<Question />} />
    </Routes>
  );
}

export default App;


