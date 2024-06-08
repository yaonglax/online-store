import React, {useState, useEffect} from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import CreateCategory from '../components/modals/CreateCategory';
import CreateFlavour from '../components/modals/CreateFlavour';
import CreateProduct from '../components/modals/CreateProduct';
import { fetchOrder, deleteOrder } from '../http/productAPI';


const Admin = () => {

  const [categoryVisible, setCategoryVisible] = useState(false)
  const [flavourVisible, setFlavourVisible] = useState(false)
  const [productVisible, setProductVisible] = useState(false)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const fetchedOrders = await fetchOrder();
        setOrders(fetchedOrders);
        console.log(fetchedOrders)
      } catch (error) {
        console.error('Ошибка при загрузке заказов:', error);
      }
    };
  
    fetchAllOrders();
  }, []);
  
  const deleteOrderList = async (orderId) => {
    try {
      await deleteOrder(orderId);
      const updatedOrderList = orders.filter(item => item.orderId !== orderId);
      setOrders(updatedOrderList);
      console.log('Заказ удалён')
      window.location.reload(); 
    } catch (error) {
      console.error('Error deleting product from basket:', error);
    }
  };
  return (
    <>
    <Container className='d-flex flex-column w-50' style={{marginTop: '10em'}}>
      <Button className='mt-2' variant='outline-dark' onClick={() => setFlavourVisible(true)}>Добавить начинку</Button>
      <Button className='mt-2' variant='outline-dark' onClick={() => setProductVisible(true)}>Добавить продукт</Button>
      <Button className='mt-2' variant='outline-dark' onClick={() => setCategoryVisible(true)}>Добавить категорию</Button>
      <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)} />
      <CreateFlavour show={flavourVisible} onHide={() => setFlavourVisible(false)}/>
      <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
    </Container>
    <h2 style={{textAlign: 'center', marginTop: '1em'}}>Заказы</h2>
    <Container className='mt-2 '>
    {orders.map(order => (
      <div key={order.id} className='mt-3' style={{ marginLeft: '3em'}}>
        <Card style={{padding: '1em', width: '20em', minHeight: '15em'}}>
        <p>Номер заказа: {order.id+'-'+order.createdAt.slice(0,10) + '-' + order.userId}</p>
        <p>Продукты в заказе: {order.products}</p>
        <p>Сумма заказа: {order.totalPrice} p.</p>
        <Button variant='outline-success' onClick={() => deleteOrderList(order.id)} style={{position: 'absolute', bottom: 10, width: '90%'}}>Принять в обработку</Button>
        </Card>
      </div>
    ))}

    </Container>
    </>
  );
}

export default Admin;
