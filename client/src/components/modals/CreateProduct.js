import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import {Modal, Button, Form, Dropdown, Row, Col} from 'react-bootstrap'
import { createProduct, fetchCat, fetchFlavour, fetchProduct } from '../../http/productAPI';
import { Context } from "D:/easy bake/client/src/index.js";
const CreateProduct = observer(({show, onHide}) =>  {
const {product} = useContext(Context);
const [info, setInfo] = useState([])
const [name, setName] = useState('')
const [price, setPrice] = useState(0)
const [file, setFile] = useState(null)
const [flavour, setFlavour] = useState(null)
const [category, setCategory] = useState(null)
const addInfo = () =>
{
    setInfo([...info, {title: '', description: '', number: Date.now()}])
}
const deleteInfo = (number) =>
{
    setInfo(info.filter(i => i.number !== number))
}
const selectFile = e => {
  setFile(e.target.files[0])
}
const changeInfo = (key, value, number) => {
  setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
}
const addProduct = () => {
  const formData = new FormData();
  formData.append('name', name)
  formData.append('price', `${price}`)
  formData.append('img', file)
  formData.append('flavourId', product.selectedFlavour.id)
  formData.append('categoryId', product.selectedCategory.id)
  
  formData.append('info', JSON.stringify(info))
  createProduct(formData).then(data => {
    onHide(); 
    setName(''); 
    setPrice(0); 
    setFile(null); 
    setFlavour(null); 
    setCategory(null); 
    setInfo([]); 
  });
}
useEffect(() => {
  fetchFlavour().then(data => product.setFlavours(data))
  fetchCat().then(data => product.setCategories(data))

    }, []
    )

  return (
<Modal
    show = {show}
    onHide = {onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить позицию
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className='mt-4'>
            <Dropdown.Toggle variant='dark'>{product.selectedCategory.name || 'Выберите категорию'}</Dropdown.Toggle>
            <Dropdown.Menu>
                {product.category.map(category =>
                    <Dropdown.Item onClick={() => product.setSelectedCategory(category)} key={category.id}>
                        {category.name}
                    </Dropdown.Item>
                    )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mt-4' >
            <Dropdown.Toggle variant='dark'> {product.selectedFlavour.name || 'Выберите начинку'}</Dropdown.Toggle>
            <Dropdown.Menu>
                {product.flavour.map(flavour =>
               <Dropdown.Item onClick={() => { 
                product.setSelectedFlavour(flavour); 
                console.log(flavour.id);  
            }} key={flavour.id}>
                        {flavour.name}
                    </Dropdown.Item>
                    )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control 
          className='mt-3'
          placeholder='Введите название позиции'
          value={name}
          onChange={e => setName(e.target.value)}
          />
          <Form.Control 
          className='mt-3'
          placeholder='Введите цену на позицию'
          type='number'
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
          />
          <Form.Control 
          className='mt-3'
          type='file'
          onChange={selectFile}
          />
          <hr />
            <Button
            variant={"outline-dark"}
            onClick={addInfo}>Добавить новое свойство</Button>
            {info.map(i =>
            <Row className="mt-4" key={i.number}>
            <Col md={4}>
                <Form.Control
                value = {i.title}
                  onChange ={(e) => changeInfo('title', e.target.value, i.number)}
                    placeholder="Введите название свойства"
                />
            </Col>
            <Col md={4}>
                <Form.Control
                value = {i.description}
                      onChange ={(e) => changeInfo('description', e.target.value, i.number)}
                    placeholder="Введите описание свойства"
                />
            </Col>
            <Col md={4}>
                <Button
                    onClick={() => deleteInfo(i.number)}
                    variant={"outline-danger"}
                >
                    Удалить
                </Button>
            </Col>
        </Row>
    )}
</Form>
      </Modal.Body>
      <Modal.Footer>
      <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={addProduct}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateProduct;
