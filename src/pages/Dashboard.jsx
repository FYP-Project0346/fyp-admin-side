import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaUsers, FaBox, FaComments } from 'react-icons/fa';
import Sidebar from '../components/sidebar';
import { getUsers } from '../services/server';
import { getAllProducts } from '../services/product_service';
import { getFeedbacks } from '../services/feedback';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState("Loading...");
    const [products, setProducts] = useState("Loading...");
    const [feedbacks, setFeedbacks] = useState("Loading...");

    const run = async ()=>{
        const users_data = await getUsers();
        setUsers(users_data.length.toString())

        const products_data = await getAllProducts("", 0, 0, 0, 0, []);
        setProducts(products_data.length.toString())

        const feedback_data = await getFeedbacks();
        setFeedbacks(feedback_data.length.toString())
        
    }

    useEffect(()=>{
run();
    })


    return (
        <div className='d-flex'>
            <Sidebar selectedItem={"Dashboard"}/>
            <Container className="mt-5">
            <Row className="mb-4">
                <Col>
                    <h1 className="text-center">Dashboard</h1>
                </Col>
            </Row>
            <Row>
                <Col md={4} onClick={()=>{
                    navigate("/users")
                }}>
                    <Card className="text-center shadow-sm mb-4">
                        <Card.Body>
                            <FaUsers size={50} className="mb-3" />
                            <Card.Title>Users Registered</Card.Title>
                            <Card.Text>
                                <h2>{users}</h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} onClick={()=>{
                    navigate("/products")
                }}>
                    <Card className="text-center shadow-sm mb-4">
                        <Card.Body>
                            <FaBox size={50} className="mb-3" />
                            <Card.Title>Products Added</Card.Title>
                            <Card.Text>
                                <h2>{products}</h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} onClick={()=>{
                    navigate("/feedback")
                }}>
                    <Card className="text-center shadow-sm mb-4">
                        <Card.Body>
                            <FaComments size={50} className="mb-3" />
                            <Card.Title>Feedbacks Received</Card.Title>
                            <Card.Text>
                                <h2>{feedbacks}</h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>


        </div>
    );
}

export default Dashboard;
