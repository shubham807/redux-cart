import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { add, remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import Spinner from "./Spinner";

const Product = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const addToCart = (item) => {
    dispatch(add(item));
  };


  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <h1 className='text-center mt-3'>Products Dashboard</h1>
      <Row className="mx-5 mt-5">
        {product.map((item, index) => (
          <Col key={index} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <div className="text-center">
                <Card.Img variant="top" src={item.image} style={{ width: "100px", height: "130px" }} className="mt-3"/>
              </div>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  INR: {item.price}
                </Card.Text>
                <div className="text-center">
                  <Button className="" variant="primary" onClick={() => addToCart(item)}>Add to Cart</Button>
                  {/* <Button className="mt-2" variant="danger" onClick={() => removeFromCart(item)}>Remove</Button> */}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Product;
