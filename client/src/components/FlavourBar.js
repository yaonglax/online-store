import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const FlavourBar = observer(() => {
    const { product } = useContext(Context);

    return (
        <Row className='d-flex'>
            
            <Card 
                active={!product.selectedFlavour.id} 
                onClick={() => product.setSelectedFlavour({ id: null, name: 'Все' })} 
                className='p-2'
                style={{
                    backgroundColor: !product.selectedFlavour.id ? 'black' : 'inherit',
                    color: !product.selectedFlavour.id ? '#fff' : 'inherit',
                    cursor: 'pointer'
                }}
            >
                Все
            </Card>
            {product.flavour.map(flavour => (
                <Card 
                    active={flavour.id === product.selectedFlavour.id}
                    onClick={() => product.setSelectedFlavour(flavour)}
                    key={flavour.id}
                    className='p-2'
                    style={{
                        backgroundColor: flavour.id === product.selectedFlavour.id ? 'black' : 'inherit',
                        color: flavour.id === product.selectedFlavour.id ? '#fff' : 'inherit',
                        cursor: 'pointer'
                    }}
                >
                    {flavour.name}
                </Card>
            ))}
        </Row>
    );
});

export default FlavourBar;
