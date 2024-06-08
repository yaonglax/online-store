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
            <Card style={{ width: '190px', border: 'light', cursor: 'pointer', height: '17.5em', padding: '5px' }} className='d-flex flex-column '>
                <Image 
                    style={{ width: '180px', height: '180', borderRadius: '4px',  }} 
                    src={'http://localhost:5000/' + product.img} 
                    onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}
                />
                <div className='mt-1 d-flex justify-content-between align-items-center'>
                    <div>{product.name}</div>
                    <div>{product.price}p.</div>
                    
                        <Button variant='outline-dark' type="button" onClick={() => setBasketProductVisible(true)} style={{position: 'absolute', height: '2em', bottom: 10, fontSize: '0.9em', width: '80%', left: '10%'}}>В корзину</Button>
                        <CreateBasketProduct 
                            show={basketProductVisible} 
                            onHide={() => setBasketProductVisible(false)} 
                            productName={product.name} 
                            productId={product.id} 
                            productPrice = {product.price}

                        />
                   
                </div>
            </Card>
        </Col>
    );
};

export default ProductItem;
