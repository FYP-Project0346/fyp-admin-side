import React, { useState } from 'react';
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/sidebar';
import { useEffect } from 'react';
import { getAllProducts, getProductById } from '../services/product_service';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchByIdTerm, setSearchByIdTerm] = useState('');
    const [products, setProducts] = useState([]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchProducts = () => {
        run(searchTerm)
    }

    const handleSearchByIdChange = async ()=>{
        if(searchByIdTerm === ""){
            run("");
        }else{
            const result = await getProductById(searchByIdTerm)
            setProducts([result])
        }
    }

    useEffect(()=>{
        run("");
    }, [])

    const run = async (search)=>{
        const response = await getAllProducts(search, 15, 0, 0, 0, []); 
        setProducts(response)
    }

    return (
        <div style={{display: "flex", backgroundColor: "white"}}>
        <Sidebar selectedItem={'Products'}/>

        <Container>
            <Row className="my-4">
                <Col className='d-flex'>
                        <FormControl
                            type="text"
                            placeholder="Search for products..."
                            className="mr-sm-2 mr-1"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <button className='btn btn-primary mr-5'
                        onClick={handleSearchProducts}
                        >Search</button>
                </Col>
                <Col className='d-flex'>
                        <FormControl
                            type="text"
                            placeholder="Search Product By Id..."
                            className="mr-sm-2 mr-1"
                            value={searchByIdTerm}
                            onChange={(e)=>{
                                setSearchByIdTerm(e.target.value)
                            }}
                        />
                        <button className='btn btn-primary mr-5'
                        onClick={handleSearchByIdChange}
                        >Search</button>
                </Col>
            </Row>
            <Row>
                {products.map(product => (
                    <Col key={product._id} onClick={()=>{
                        navigate(`/product/${product._id}`)
                    }}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
        </div>
    );
}

export default Products;
