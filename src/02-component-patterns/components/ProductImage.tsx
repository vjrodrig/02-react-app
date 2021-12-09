<<<<<<< HEAD
import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
=======
import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg';
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4

export interface Props {
    img?: string;
    className?: string;
<<<<<<< HEAD
    style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {

    const { product } = useContext( ProductContext );
    let  imgToShow: string;

    if ( img ) {
        imgToShow = img;        
    } else if  ( product.img ) {
=======
    style?: React.CSSProperties 
}


export const ProductImage = ({ img, className, style }: Props ) => {

    const { product } = useContext( ProductContext );
    let imgToShow: string;

    if ( img ) {
        imgToShow = img;
    } else if ( product.img ) {
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
        imgToShow = product.img
    } else {
        imgToShow = noImage;
    }

<<<<<<< HEAD
    return (
        <img 
            alt="Product imge"
            className={ `${styles.productImg} ${ className }` } 
            src={ imgToShow } 
            style={{
                boxShadow: '10px 10px 10px rgba( 0,0,0,0.2 )'
            }}
=======

    return (
        <img 
            className={ `${ styles.productImg } ${ className }` } 
            src={ imgToShow } 
            style={ style }
            alt="Product" 
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
        />
    );
}