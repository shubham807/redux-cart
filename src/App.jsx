import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart'
import Layout from './components/Layout';

function App() {
   const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Dashboard />}/>
      <Route path='/cart' element={<Cart />}/>
    </Route>
   ))
  return (
    <>
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
     
    </>
  )
}

export default App
