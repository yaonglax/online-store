import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import { fetchBasketProduct, fetchOneProduct, deleteBasketProduct } from '../http/productAPI';
import { Card, Image, Button, Container } from 'react-bootstrap';
import { RiDeleteBin5Line } from "react-icons/ri";
import CreateOrder from '../components/modals/CreateOrder';
import display from '../Images/display.jpg'


const Basket = () => {
  const { userId } = useContext(Context); 
  const [basketProducts, setBasketProducts] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [orderVisible, setOrderVisible] = useState(false);
  const [quantityProd, setQuantityProd] = useState();

  useEffect(() => {
    const fetchBasketProducts = async () => {
      try {
        const localStorageUserId = localStorage.getItem('userId');
        if (!localStorageUserId) {
          console.error('User ID not found in localStorage');
          return;
        }
        const products = await fetchBasketProduct(localStorageUserId);
        setBasketProducts(products);
      } catch (error) {
        console.error('Error fetching basket products:', error);
      }
    };

    fetchBasketProducts();
  }, []);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const productsDataPromises = basketProducts.map(item => fetchOneProduct(item.productId));
        const productsData = await Promise.all(productsDataPromises);
        setProductsData(productsData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductsData();
  }, [basketProducts]);

  const deleteProductFromBasket = async (productId) => {
    try {
      const localStorageUserId = localStorage.getItem('userId');
      if (!localStorageUserId) {
        console.error('User ID not found in localStorage');
        return;
      }
      await deleteBasketProduct(localStorageUserId, productId);
      const updatedBasketProducts = basketProducts.filter(item => item.productId !== productId);
      setBasketProducts(updatedBasketProducts);
    } catch (error) {
      console.error('Error deleting product from basket:', error);
    }
  };

  const increaseQuantity = (index) => {
    const updatedBasketProducts = [...basketProducts];
    updatedBasketProducts[index].quantity += 1;
    setBasketProducts(updatedBasketProducts);
  };

  const decreaseQuantity = (index) => {
    const updatedBasketProducts = [...basketProducts];
    updatedBasketProducts[index].quantity -= 1;
    setBasketProducts(updatedBasketProducts);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    basketProducts.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  };

  return (
    <>
      {productsData.length !== 0 ? (
        <>
          <h1 style={{ marginTop: '5em', textAlign: 'center', fontFamily: 'Times New ROman' }}>Корзина</h1>
          <hr style={{width: '80%', border:'1px solid black',margin: '20px auto'}}/>
          <Container className='d-flex flex-row w-100'>
          <Card style={{ minWidth: '28em', marginLeft: '1em', border: '1px solid white'}}>
            {productsData.map((productData, index) => (
              <div key={index}>
                <Container className='d-flex align-items-center p-2'>
                  <Image src={'http://localhost:5000/' + productData.img}
                    width='120'
                    style={{ borderRadius: '4px', marginRight: '1em' }}
                  />
                  {productData.name}
                  <Button className='d-flex align-items-center' variant='outline-dark' style={{ marginLeft: '2em', marginRight: '0.7em', height: '1.5em', fontSize: '0.9em' }} onClick={() => increaseQuantity(index)}>+</Button>
                  {basketProducts[index]?.price * basketProducts[index]?.quantity}
                  {basketProducts[index]?.quantity === 1 ?
                    <Button className='d-flex align-items-center' variant='outline-dark' style={{ marginLeft: '0.7em', height: '1.5em', fontSize: '0.9em' }} onClick={() => decreaseQuantity(index)} disabled >-</Button> :
                    <Button className='d-flex align-items-center' variant='outline-dark' style={{ marginLeft: '0.7em', height: '1.5em', fontSize: '0.9em' }} onClick={() => decreaseQuantity(index)} >-</Button>}
                  <Button variant='outline-danger' style={{ marginLeft: '4em', height: '2.8em' }} onClick={() => deleteProductFromBasket(basketProducts[index]?.productId)}>
                    <RiDeleteBin5Line />
                  </Button>
                </Container>
              </div>
            ))}<hr style={{width: '100%', border:'1px solid black'}}/>
          </Card>
          
          <Container className='d-flex flex-row' style={{width: '70%'}}>
      <div>
        <h1 style={{width: '40%', fontFamily: 'Times New Roman', marginLeft: '80px', fontWeight: '800', textAlign: 'left'}}>Пару слов о наших творениях...</h1>
        <p style={{maxWidth: '70%', marginLeft: '80px'}}>Наши кондитерские шедевры - это не просто десерты, это настоящие произведения искусства, созданные с любовью и вниманием к 
        каждой детали. Каждый десерт представляет собой гармоничное сочетание изысканных вкусов, неповторимых ароматов и изысканного дизайна. 
         Доверьте нам заботу о вашем настроении, и мы обещаем, что наши творения станут настоящим украшением вашего
         стола и источником радости для вас и ваших близких.</p>
      </div>
      <div>
        <Image width={300} height={300} src={display} />
      </div>
    </Container>
    </Container>
          <Container className='d-flex justify-content-center ' style={{paddingBottom: '3em'}}>
            <Button variant='outline-dark' style={{ minWidth: '5em', minHeight: '2em', fontSize: '1.2em', marginTop: '2em' }} onClick={() => setOrderVisible(true)} >Оплатить</Button>
            <CreateOrder
  show={orderVisible}
  onHide={() => setOrderVisible(false)}
  totalAmount={calculateTotalPrice()} 
  products={basketProducts.map((item, index) => ({
    name: productsData[index].name, 
    quantity: item.quantity
  }))}
/>

          </Container>
        </>
      ) :
        <h2 style={{ marginTop: '5em', textAlign: 'center' }}>Корзина пустая</h2>
      }
      
    </>
  );
};

export default Basket;
