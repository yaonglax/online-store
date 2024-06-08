import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Button, Row, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOneProduct } from '../http/productAPI';
import CreateBasketProduct from '../components/modals/CreateBasketProduct';
import Footer from '../components/Footer'
import ProductListFooter from '../components/ProductListFooter'
import display from '../Images/display.jpg'

function ProductPage() {
  const [product, setProduct] = useState({ info: [] });
  const [selectedProductId, setSelectedProductId] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    fetchOneProduct(id).then(data => setProduct(data));
  }, [id]); 
  const [basketProductVisible, setBasketProductVisible] = useState(false)

  const handleAddToBasket = () => {
    setSelectedProductId(product.id);
    setBasketProductVisible(true);
  };

  return (
    <>
    <Container style={{ marginTop: '10em' }} className='d-flex flex-column'>
      <Row className='d-flex flex-row justify-content-evenly w-100'>
        <Col md={6}>
          <Image width={400} height={400} src={'http://localhost:5000/' + product.img} style={{borderRadius: '4px', marginLeft: '5em'}}/>
        </Col>
        <Col md={6}>
         <h2 style={{ fontFamily: 'Times New Roman', fontWeight: '800' }}>{product.name}</h2>
         <hr style={{width: '50%', border:'1px solid black'}}/>
          <p style={{ maxWidth: '25em' }}>
            <Row className='d-flex flex-column' style={{ paddingLeft: '0.6em' }}>
              {product.info.map((info) => (
                <Row key={info.id}>
                  {info.title} {info.description}
                </Row>
              ))}
            </Row>
          </p>
          <h3>{product.price} р.</h3>
          <Button variant='outline-dark' onClick={handleAddToBasket}>Добавить в корзину</Button>
          <CreateBasketProduct 
            show={basketProductVisible} 
            onHide={() => setBasketProductVisible(false)} 
            productId={selectedProductId} 
            productName={product.name} 
            productPrice={product.price} 
          />
        </Col>
      </Row>
    </Container>
    <hr style={{width: '80%', border:'1px solid black',margin: '50px auto'}}/>
    <Container className='d-flex flex-row' style={{width: '70%'}}>
      <div>
        <h1 style={{width: '40%', fontFamily: 'Times New Roman', margin: '20px 80px', fontWeight: '800', textAlign: 'left'}}>Пару слов о наших творениях...</h1>
        <p style={{margin: '10px 80px'}}>В нашей кондитерской мы создаем настоящие шедевры в мире сладостей. Каждый наш десерт — это уникальное сочетание великолепного вкуса и изысканного дизайна. 
        Мы уделяем особое внимание каждой детали, чтобы каждый наш клиент мог насладиться не только неповторимым вкусом, но и красотой наших творений. Добро пожаловать в мир вкуса и удовольствия вместе с нами!</p>
      </div>
      <div>
        <Image width={350} height={350} src={display} />
      </div>
    </Container>
    <hr style={{width: '80%', border:'1px solid black',margin: '50px auto'}}/>
    <h1 style={{width: '40%', fontFamily: 'Times New Roman', margin: '20px 250px', fontWeight: '800'}}>Вам также может понравиться...</h1>
    <Container className='d-flex flex-column justify-content-around' style={{width: '70%'}}>
      <ProductListFooter/>
    </Container>
   <Footer />
    </>
  );
}

export default ProductPage;
  