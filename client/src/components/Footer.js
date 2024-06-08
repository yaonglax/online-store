import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from "../index";
import {Container, Image} from "react-bootstrap";
import { fetchOneProduct } from '../http/productAPI';
import { fetchCat, fetchFlavour, fetchProduct } from '../http/productAPI';
import ProductList from './ProductList';
import truck from '../Images/truck.png'
import bag from '../Images/bag.png'
import darkLogo from '../Images/mini dark logo.png'
import phone from '../Images/phone.png'
import card from '../Images/card.png'

const Footer = () => {

    return (
       <>
         <div style={{width: '100%', backgroundColor: 'black', height: '130px', marginTop: '5em'}} className='d-flex flex-row justify-content-around '>
         <img src={truck} style={{width: '128px', height: '128px'}} />
         <img src={bag} style={{width: '128px', height: '128px'}} />
        <img src={darkLogo} style={{width: '128px', height: '128px'}} />
        <img src={phone} style={{width: '128px', height: '128px'}} />
        <img src={card} style={{width: '128px', height: '128px'}} />
        </div>
         </>
)};

export default Footer;
