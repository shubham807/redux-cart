import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartProducts = useSelector(state => state.cart)
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark" style={{height: "70px"}}>
        <Container>
          <NavLink to="/"><span className='badge bg-light text-dark fs-4'>Redux-cart</span></NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none mx-3 text-white">Products</NavLink>
          </Nav>
          <NavLink to="/cart">
          <Badge badgeContent={cartProducts.length} color="primary">
        <ShoppingCartIcon className='text-white' color="action"/>
       </Badge>
          </NavLink>
          
        </Container>
        
      </Navbar>
    </>
  )
}

export default Header