import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const CategoryBar = observer(() => {
    const { product } = useContext(Context);

    return (
        <ListGroup>
            
            <ListGroup.Item 
                active={!product.selectedCategory.id} 
                onClick={() => product.setSelectedCategory({ id: null, name: 'Все' })}
                style={{
                    backgroundColor: !product.selectedCategory.id ? 'black' : 'inherit',
                    color: !product.selectedCategory.id ? '#fff' : 'inherit',
                    cursor: 'pointer'
                }}
            >
                Все
            </ListGroup.Item>
            {product.category.map(category => (
                <ListGroup.Item 
                    active={category.id === product.selectedCategory.id}
                    onClick={() => product.setSelectedCategory(category)}
                    key={category.id}
                    style={{
                        backgroundColor: category.id === product.selectedCategory.id ? 'black' : 'inherit',
                        color: category.id === product.selectedCategory.id ? '#fff' : 'inherit',
                        cursor: 'pointer'
                    }}
                >
                    {category.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
});

export default CategoryBar;
