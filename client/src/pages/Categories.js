import React, { useContext, useEffect, useState } from 'react';
import CategoryBar from '../components/CategoryBar'
import FlavourBar from '../components/FlavourBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductList from '../components/ProductList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import Pages from '../components/Pages';
import Footer from '../components/Footer'
import { fetchCat, fetchFlavour, fetchProduct } from '../http/productAPI';

const Categories = observer(() => {
  const {product} = useContext(Context);

  useEffect(() => {
    fetchFlavour().then(data => product.setFlavours(data))
    fetchCat().then(data => product.setCategories(data))
    fetchProduct(null, null, 1, 4).then(data => {
        product.setProducts(data.rows)
        product.setTotalCount(data.count)
       
    })
      }, [])

  useEffect(() => {
    fetchProduct(product.selectedFlavour.id, product.selectedCategory.id,  product.page, 4).then(data => {
        product.setProducts(data.rows)
        product.setTotalCount(data.count)
    })
}, [product.page, product.selectedFlavour, product.selectedCategory,])
  return (
    <>
    <Container  style={{marginTop: '8em'}}>
        <Row className='w-100' style={{marginTop: '2em'}}>
            <Col md={3}>
   <CategoryBar />
   <div style={{marginTop: '1em', width: '92%', marginLeft: '0.8em'}} >
   <FlavourBar />
 </div>
   </Col>
   <Col md={9} >
  
    <ProductList/>
   </Col>
   </Row>
   </Container>
   <Container className='position-absolute  start-50 translate-middle-x mt-3'>
   <Pages/>
      </Container>
      <Footer />
      </>
  );
})

export default Categories;
