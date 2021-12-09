<<<<<<< HEAD
import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props {
    title?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props ) => {

    const { product } = useContext( ProductContext );
=======
import { useContext } from 'react';
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'


export interface Props {
    className?: string 
    title?: string, 
    activeClass?: string;
    style?: React.CSSProperties 
}

export const ProductTitle = ({ title, className, style }: Props) => {

    const { product } = useContext( ProductContext )
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4

    return (
        <span 
            className={ `${ styles.productDescription } ${ className }` }
            style={ style }
<<<<<<< HEAD
        >{ title ? title : product.title }</span> 

=======
        >
            { title ? title : product.title }
        </span>
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
    );
}