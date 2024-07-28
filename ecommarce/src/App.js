
import './App.css';
import Navbar from './Components/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import About from './Pages/About';
import Content from './Pages/Content';

import Footer from './Components/footer';







function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/Login' element={<Login/>}></Route>
       <Route path='/Product' element={<Product/>}></Route>
       <Route path='/About' element={<About/>}></Route>
       <Route path='/Content' element={<Content/>}></Route>

       <Route path='/Login' element={<Login/>}></Route>
      


      
    
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>

    
  );
}

export default App;
