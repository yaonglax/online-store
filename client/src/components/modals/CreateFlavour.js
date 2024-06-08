import React, { useState } from 'react';
import {Modal, Button, Form} from 'react-bootstrap'
import { createFlavour } from '../../http/productAPI';
const CreateFlavour= ({show, onHide}) =>  {
  const [value, setValue] = useState('')
  const addFlavour = () => {
    createFlavour({name: value}).then(data => {
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
          Добавить начинку
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control placeholder={'Введите название начинки'}
             value = {value}
             onChange = {e => setValue(e.target.value)}
            >

            </Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={addFlavour}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateFlavour;
