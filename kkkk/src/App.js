import './App.css';
import Navs from './Navs';
import Navtwo from './navtwo'; 
import Navthre from "./Navthre"
import Navfou from './Navfou'
import Navfic from './Navfic'
import Navsix from './Navsix';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Odering from './Odering';
import Pay from './Pay';
import Delivery from './Delivery';
import Foot from './Foot';
import Nav2 from './Nav2';
import Your from './Your';

import Fis from './Fis';

function App() {
 
  return(
  
  <div>
 <Navs />
    <Navtwo />
    <br></br> 
    
   <Navthre />
    <br></br>

    <Navfou />
   
    <Navfic />
    <br></br>
        <br></br>
            <br></br>    <br></br>
          
    <Navsix />
    <br></br>
    <br>
    </br>
    {/* <BrowserRouter>
      <Routes>
  
      <Route path='/delivery' element={<Delivery />}></Route>
      </Routes>
    </BrowserRouter> */}
    <br ></br>
    <br></br>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Fis />}></Route>
        <Route path='/nav2' element={<Nav2 />}></Route>
        <Route path='/your' element={<Your />}></Route> 
        <Route path='/delivery' element={<Delivery />}></Route>
         <Route path='/m' element={<Odering />}></Route>
        <Route path='/pay' element={<Pay />}></Route>
      </Routes>
    </BrowserRouter>
    <Foot />

  </div>
  ) 
}
export default App;
