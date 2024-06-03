import './css/login.css';
import './css/register.css';
import './css/users.css';
import './css/admins.css';
import './css/add_site.css';
import './css/sidebar.css';
import './css/style.css';
import './css/product.css';
import Dashboard from './pages/Dashboard';
import LoginAdmin from './pages/Login';
import RegisterAdmin from './pages/RegisterAdmin';
import UserList from './pages/Users';
import Admin from './pages/Admins';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AddSite from './pages/AddSite';
import Site from './pages/Sites';
import Feedback from './pages/Feedback';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products';
import Product from './pages/Product';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>  
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/users' element={<UserList/>}/>
        <Route path='/' element={<LoginAdmin/>}/>
        <Route path='/add-admin' element={<RegisterAdmin/>}/>
        <Route path='/admins' element={<Admin/>}/>
        <Route path='/add-site' element={<AddSite/>}/>
        <Route path='/sites' element={<Site/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<Product/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
