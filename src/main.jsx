import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
//import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import AddProduct from './Components/AddProduct.jsx';
import EditProduct from './Components/EditProduct.jsx';
import ViewProduct from './Components/ViewProduct.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='App'>
      <Router>
    <Navbar/>
  
      <Routes>
    <Route exact path="/" element ={<Home/>}/>
    <Route exact path="/addproduct" element ={<AddProduct/>}/>
    <Route exact path="/editproduct/:id" element ={<EditProduct/>}/>
    <Route exact path="/viewproduct/:id" element ={<ViewProduct/>}/>
    </Routes>
    </Router>
    </div>
  </StrictMode>,
)
