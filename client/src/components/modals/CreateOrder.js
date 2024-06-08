import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createOrder, deleteAllBasketProducts } from '../../http/productAPI';
import { Context } from 'D:/easy bake/client/src/index.js';  

const CreateOrder = ({ show, onHide, productName, productId, productPrice, totalAmount, quantity, products }) => {
  const { setUserId } = useContext(Context);
  const userId = localStorage.getItem('userId');
  const [paymentOption, setPaymentOption] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToOrders = () => {
    try {
    const formData = new FormData(); 
    const productsString = products.map(product => `${product.name} - ${product.quantity} шт.`).join(', ');
    formData.append('products', productsString);
    formData.append('totalPrice', totalAmount);
    formData.append('userId', userId)
    createOrder(formData).then(data => onHide());
    console.log(formData)
  }
  catch (e) {
    // eslint-disable-next-line no-undef
    console.log(message(e))
  }
  }
  useEffect(() => {
    if (orderPlaced) {
      window.location.reload(); 
    }
  }, [orderPlaced]);

  const deleteProductsFromBasket = async (userId) => {
    try {
      await deleteAllBasketProducts(userId);
      console.log('Товары успешно удалены из корзины');
      setOrderPlaced(true); 
    } catch (error) {
      console.error('Ошибка при удалении товаров из корзины:', error);
    }
  };

  const handleCardPayment = () => {
    setPaymentOption('card');
  };

  const handleCashOnDelivery = () => {
    setPaymentOption('cash');
  };

  const makeOrder = async (userId) => {
    await addToOrders();
    await deleteProductsFromBasket(userId);
  };
 
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Оплатить заказ
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <h5>Сумма заказа</h5>
          <Form.Control
            value={totalAmount}
            disabled
          />
         <Form.Group
         value={products}
         >
  <Form.Label>Товары в заказе:</Form.Label>
  <ul>
  {products.map(product => (
  <li key={product.name}>
    {product.name} - {product.quantity} шт.
  </li>
))}

  </ul>
</Form.Group>

          <Button
            variant={paymentOption === 'card' ? 'dark' : 'outline-dark'}
            onClick={handleCardPayment}
          >
            Оплата картой
          </Button>{' '}
          <Button
            variant={paymentOption === 'cash' ? 'dark' : 'outline-dark'}
            onClick={handleCashOnDelivery}
          >
            Оплата при получении
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={() => makeOrder(userId)}>Оплатить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateOrder;
