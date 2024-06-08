import React, { useContext, useEffect } from 'react';
import Slider from '../components/Slider'
import {Container, Row, Col, Form, Nav, Button} from 'react-bootstrap'
import img1 from '../Images/1.png'
import {CATEGORIES_ROUTE, LOGIN_ROUTE} from '../utils/consts'
import {useLocation, useNavigate} from "react-router-dom";
import CardSlider from '../components/CardSlider'
import Footer from '../components/Footer'
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import cat1 from '../Images/cat1.jpg'
import cat2 from '../Images/cat2.jpg'
import cat3 from '../Images/cat3.jpg'


const Shop = observer(() => {
  const {product} = useContext(Context)
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE
  const handleRegisterClick = () => { 
    navigate(CATEGORIES_ROUTE)}
  return (
  <>
  <Slider />
 <Container className='d-flex flex-column justify-content-center align-items-center' style={{marginTop:'3em'}}>
    <h2 style={{fontWeight: '400', color: 'black', textAlign: 'center'}}>НАШИ ТОРТЫ</h2>
    <Container className='mt-5'>
    <CardSlider />
    </Container>
    <Container style={{marginBottom: '3em'}}> 
    <hr style={{width: '80%', border:'1px solid black'}}/> </Container>
    <h2 style={{fontWeight: '400', color: 'black', textAlign: 'center'}}>ПОПУЛЯРНЫЕ КАТЕГОРИИ</h2>
      <Row>
        <Col>
          <div className='d-flex flex-column justify-content-center'>
            <Nav.Link  onClick={() => {navigate(CATEGORIES_ROUTE)}}><img src={cat1} style={{width: '100%', height: '300px', border: '1px solid black', objectFit: 'cover'}}/></Nav.Link>
            <p style={{border: '1px solid black', borderTop: 'none', padding: '1em'}}>В разделе "Торты" представлен широкий выбор изысканных десертов, 
            от классических шоколадных до изысканных фруктовых композиций. Насладитесь неповторимым вкусом и изысканным дизайном каждого торта, 
            который станет настоящим украшением вашего стола на любое торжество или повседневное утреннее чаепитие.</p>
          </div>
        </Col>
        <Col>
          <div className='d-flex flex-column justify-content-center'>
            <Nav.Link  onClick={() => {navigate(CATEGORIES_ROUTE)}}><img src={cat2} style={{width: '100%', height: '300px', border: '1px solid black', objectFit: 'cover'}}/></Nav.Link>
            <p style={{border: '1px solid black', borderTop: 'none', padding: '1em'}}>В разделе "Чизкейки" представлены изысканные десерты, которые завоюют ваше внимание своим нежным вкусом 
            и неповторимым ароматом. От классических вариантов до утонченных комбинаций с фруктами и ягодами — каждый чизкейк в нашем ассортименте 
            приготовлен с особым вниманием к деталям и с любовью к кондитерскому искусству. </p>
          </div>
        </Col>
        <Col>
          <div className='d-flex flex-column justify-content-center'>
            <Nav.Link  onClick={() => {navigate(CATEGORIES_ROUTE)}}><img src={cat3} style={{width: '100%', height: '300px', border: '1px solid black', objectFit: 'cover'}}/></Nav.Link>
            <p style={{border: '1px solid black', borderTop: 'none', padding: '1em'}}>
Каждый кекс в этой категории приготовлен с особым вниманием к ингредиентам и деталям, предлагая разнообразие от классики до экспериментов, чтобы насладиться их вкусом и ароматом во время вашего вечернего чаепития. Погрузитесь в атмосферу уюта и радости, делясь этими вкусными лакомствами с близкими и друзьями.






</p>
          </div>
        </Col>
      </Row>
    </Container>
          <Col className="mt-4 pb-5 accordion-collapse d-flex justify-content-center">
            <Button variant='outline-dark' onClick={handleRegisterClick} style={{width: '10em', borderRadius: '5px', display: 'block', height: '3em', fontSize: '1.1em'}}>Смотреть ещё</Button>
          </Col>
      <Footer />
    </>
  );
})

export default Shop;  