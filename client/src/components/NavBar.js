import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite"; 
import { Context } from "../index";
import { Nav, Navbar, Container, Button, Col, Row } from 'react-bootstrap';
import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, CATEGORIES_ROUTE } from "../utils/consts";
import img1 from '../Images/logo.png'
import CreateBasketProduct from "./modals/CreateBasketProduct";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const role = localStorage.getItem('userrole');

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    navigate(SHOP_ROUTE);
    console.log("isAuth is now:", user.isAuth);
  }

  useEffect(() => {
    console.log("isAuth in Nav.Link:", user.isAuth); 
  }, [user.isAuth]);


  return (
    <>
      <Navbar bg="white" data-bs-theme="light" style={{ height: '140px' }} fixed="top">
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
          <Row className="w-100 d-flex justify-content-center align-items-center">
          <Col className="d-flex justify-content-between align-items-center">
  {user.isAuth && role === 'ADMIN' ? (
    <Nav className="w-100 justify-content-between">
      <Nav.Link onClick={() => {navigate(BASKET_ROUTE)}}>Корзина</Nav.Link>
      <Nav.Link onClick={() => {navigate(ADMIN_ROUTE);}}>Админ панель</Nav.Link>
    </Nav>
  ) : user.isAuth && role === 'USER' ? (
    <Nav className="w-100 justify-content-between">
      <Nav.Link href={SHOP_ROUTE}>Главная</Nav.Link>
      <Nav.Link onClick={() => {navigate(BASKET_ROUTE)}}>Корзина</Nav.Link>
    </Nav>
  ) : <Nav className="w-100 justify-content-between">
  <Nav.Link href={SHOP_ROUTE}>Главная</Nav.Link>
  <Nav.Link onClick={() => {navigate(CATEGORIES_ROUTE)}}> Категории</Nav.Link>
</Nav>}
</Col>

            <Col xs={5} className="d-flex justify-content-center align-items-center">
              <NavLink to={SHOP_ROUTE}><img src={img1} alt="EASY BAKE Logo" style={{ width: '260px', height: '135px' }} /></NavLink>
            </Col>
            <Col className="d-flex justify-content-between align-items-center">
              {user.isAuth ? 
                <Nav className="w-100 justify-content-between">
                  <Nav.Link>О нас</Nav.Link>
                  <Nav.Link onClick={logOut}>Выйти</Nav.Link>
                </Nav>
                : 
                <Nav className="w-100 justify-content-between">
                  <Nav.Link>О нас</Nav.Link>
                  <Nav.Link onClick={() =>  navigate(LOGIN_ROUTE)}>Вход</Nav.Link>
                </Nav>
              }
            </Col>
          </Row>
        </Container>
      </Navbar>
      
      {user.showCart && <CreateBasketProduct />}  {/* Компонент корзины */}
    </>
  );
});

export default NavBar;
