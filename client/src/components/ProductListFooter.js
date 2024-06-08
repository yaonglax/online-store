
import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ProductFooter from './ProductFooter';
import Row from 'react-bootstrap/Row'
const ProductList= observer(() =>  {
    const { product } = useContext(Context);

  return (
      <Row className='d-flex '>
          {product.product.map(product =>
              <ProductFooter key={product.id} product={product} />
          )}
      </Row>
  );
});

export default ProductList;
