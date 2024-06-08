import React, {useContext, useState} from 'react';
import Container  from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink, useLocation, useNavigate  } from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from '../utils/consts'
import banner from '../Images/loginban.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { login, registration } from '../http/userAPI';

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleRegisterClick = () => {
    {isLogin ? 
    navigate(REGISTRATION_ROUTE)
    :
    navigate(LOGIN_ROUTE)
  }};

 
  const click = async () => {
    try {
        let data;
        if (isLogin) {
            data = await login(email, password, user.setUserId);
        } else {
            data = await registration(email, password);
        }
        user.setUser(user)
        user.setIsAuth(true)
        navigate(SHOP_ROUTE)
    } catch (e) {
        console.log(e);
        alert(e.response.data.message)
    }
}
  return (
    <>
    
    <img src={banner} style={{maxWidth: '100%', maxHeight: '50vh', objectFit: 'contain'}} />
   <Container className='d-flex justify-content-center'
   style={{height: window.innerHeight - 54, width: window.innerWidth}}>
    <Row className='w-100 d-flex justify-content-center mt-5' style={{maxHeight: '70%'}}>
      <Col className='d-flex justify-content-center ' style={{borderRight: '1px solid gray', minWidth: '50%'}}>
<Form>
{isLogin ? 
<>
  <h2 style={{maxWidth: '80%', color: 'black', fontWeight: '700'}}>Вход по электронной почте</h2>
  <div className='form-group'>
  <label for='emailEnter' className='mt-3 form-control' style={{border: 'none', fontSize: '1.3em'}}>Электронная почта </label>
  <Form.Control type='email' id='emailEnter' style={{width: '70%', border: 'none', borderBottom: '1px solid black', 
  backgroundColor: 'transparent', color: 'inherit', outline: 'none'}}
 value = {email}
onChange={e => setEmail(e.target.value)}
  />
  </div>
  <div className='form-group'>
  <label for='passEnter' className='mt-4 form-control' style={{border: 'none', fontSize: '1.3em'}}>Пароль </label>
  <Form.Control  type='password' id='passEnter' style={{width: '70%', border: 'none', borderBottom: '1px solid black',
   backgroundColor: 'transparent', color: 'inherit', outline: 'none'}}
   value = {password}
onChange={e => setPassword(e.target.value)}
   />
  </div>
  <Button variant='outline-dark' style={{ maxWidth: '20vw', marginTop: '1.9em' }}
   onClick={click}
  >Войти в аккаунт
  </Button>
  </>
  :
  <>
  <h2 style={{maxWidth: '65%', color: 'black', fontWeight: '700'}}>Регистрация аккаунта пользователя</h2>
  <div className='form-group'>
  <label for='emailEnter' className='mt-4 form-control' style={{border: 'none', fontSize: '1.3em'}}>Электронная почта </label>
  <Form.Control type='email' id='emailEnter' style={{width: '70%', border: 'none', borderBottom: '1px solid black', 
  backgroundColor: 'transparent', color: 'inherit', outline: 'none'}}
  value = {email}
  onChange={e => setEmail(e.target.value)}
  />
  </div>
  <div className='form-group'>
  <label for='passEnter' className='mt-4 form-control' style={{border: 'none', fontSize: '1.3em'}}>Пароль </label>
  <Form.Control type='password' id='passEnter' style={{width: '70%', border: 'none', borderBottom: '1px solid black',
   backgroundColor: 'transparent', color: 'inherit', outline: 'none'}}
   value = {password}
   onChange={e => setPassword(e.target.value)}
   />
  </div>
  <Button variant='outline-dark' style={{ maxWidth: '20vw', marginTop: '1.9em' }} onClick={click}>Создать аккаунт
  </Button>
  </>
}
  </Form>
</Col>
<Col className='d-flex flex-column' style={{marginLeft: '2em'}}>
{isLogin ? 
  <>
  <h2 style={{color: 'black', fontWeight: '700'}}>Создать аккаунт</h2>
  <label className='mt-5' style={{color: 'black', maxWidth: '75%', fontSize: '1.3em'}}>Создайте свой аккаунт и сэкономьте время для Ваших заказов, получайте бонусы и эксклюзивные предложения</label>
  <Button variant='outline-dark' style={{ maxWidth: '20vw', marginTop: '1.9em' }} onClick={handleRegisterClick}>Зарегистрироваться
  </Button>
  </>
:
<>
<h2 style={{color: 'black', fontWeight: '700'}}>Уже есть аккаунт?</h2>
  <Button variant='outline-dark' style={{ maxWidth: '20vw', marginTop: '1.9em' }} onClick={handleRegisterClick}>Войти в аккаунт
  </Button>
</>
}
</Col>
</Row>
   </Container>
   </>
);
})

export default Auth;