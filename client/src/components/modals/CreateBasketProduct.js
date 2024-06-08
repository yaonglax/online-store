import React, { useState, useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createBasketProduct } from '../../http/productAPI';
import { Context } from 'D:/easy bake/client/src/index.js';  

const CreateBasketProduct = ({ show, onHide, productName, productId, productPrice }) => {
  const { setUserId } = useContext(Context);
  const [quantity, setQuantity] = useState(1);
  const userId = localStorage.getItem('userId');
if (!userId) {
  console.error('User ID is not available');
  return;
}
  const addToBasket = () => {
    try {
    const formData = new FormData(); 
    formData.append('quantity', quantity);
    formData.append('price', productPrice);
    formData.append('productId', productId);
    formData.append('userId', userId);
   
    
    createBasketProduct(formData).then(data => onHide());
  }
  catch (e) {
    // eslint-disable-next-line no-undef
    console.log(message(e))
  }
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить в корзину
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control 
            placeholder={'Введите количество'}
            value={quantity}
            type='number'
            onChange={e => setQuantity(e.target.value)}
          />
          <Form.Control 
            placeholder={'Название продукта'}
            value={productName}
            type='text'
            disabled
          />
          <Form.Control 
            placeholder={'Цена за одну позицию'}
            value={productPrice}
            type='number'
            disabled
          />
        </Form>
         
        
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={addToBasket}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBasketProduct;
