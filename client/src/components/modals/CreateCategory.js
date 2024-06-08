import React, { useState } from 'react';
import {Modal, Button, Form} from 'react-bootstrap'
import { createCat } from '../../http/productAPI';
const CreateCategory= ({show, onHide}) =>  {
    const [value, setValue] = useState('')
const addCat = () => {
createCat({name: value}).then(data => {
  setValue('')
  onHide();
})
}

  return (
<Modal
    show = {show}
    onHide = {onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить категорию
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control placeholder={'Введите название категории'}
            value = {value}
            onChange = {e => setValue(e.target.value)}
            >

            </Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={addCat}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateCategory;
