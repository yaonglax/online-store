import React, { useContext, useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import CreateBasketProduct from './modals/CreateBasketProduct';
import { Context } from '..';

const ProductItem = ({ product }) => {
    const [basketProductVisible, setBasketProductVisible] = useState(false);
    const navigate = useNavigate();

  

    return (
        <Col md={3} className='mt-3'>
            <Card style={{ width: '201px', border: 'light', cursor: 'pointer', height: '15em'}} className='d-flex flex-column'>
                <Image 
                    style={{ width: '200px', height: '200px', borderRadius: '4px' }} 
                    src={'http://localhost:5000/' + product.img} 
                    onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}
                />
                <div className='mt-1 d-flex justify-content-center align-items-center'>
                    <div>{product.name}</div>
                </div>
            </Card>
        </Col>
    );
};

export default ProductItem;
