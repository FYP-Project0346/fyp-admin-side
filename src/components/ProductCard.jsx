import React from 'react';
import { Card } from 'react-bootstrap';
import { IoStar } from "react-icons/io5";

const ProductCard = ({ product }) => {

    const renderStars = (rating) => {
        const stars = []
        for (let i = 0; i < 5; i++) {
          if (i < rating) {
            stars.push(<IoStar color='gold' />)
          } else {
            stars.push(<IoStar color='gray' />)
          }
        }
        return stars
      }

    return (
        
            <Card className="m-3 product-card-shadow" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.images[0]} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className='d-flex flex-column align-items-start'>
                    <div>
                        <strong>Price:</strong> ${product.price}
                    </div> 
                    <div>
                        <strong>Site:</strong> {product.site}
                    </div>
                    <div>
                        <strong>Rating:</strong>
                        {
                           renderStars(product.ratings)
                        }
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
