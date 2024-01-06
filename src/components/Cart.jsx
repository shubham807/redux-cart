import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { add, remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.cart)

  const removeFromCart = (item) => {
    dispatch(remove(item));
  };
  return (
    <>
     <Row className="mx-5 mt-5">
      {product.map((item, index) => (
        <Col key={index} sm={6} md={4} lg={4} className="mb-4">
          <Card>
            <div className="text-center">
            <Card.Img variant="top" src={item.image} style={{width: "100px",height: "130px"}} className="mt-3"/>
            </div>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                INR: {item.price}
              </Card.Text>
              <div className="text-center">
              <Button className="" variant="danger" onClick={() => removeFromCart(item)}>Remove Item</Button>
              </div>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Cart