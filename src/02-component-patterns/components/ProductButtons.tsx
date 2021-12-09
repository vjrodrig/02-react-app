import { useContext } from "react";
import { ProductContext } from "./ProductCard";
<<<<<<< HEAD
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    style?: React.CSSProperties;
}

export const ProductButtons = ( { className, style }: Props ) => {
=======

import styles from '../styles/styles.module.css'

export interface Props {
    className?: string;
    style?: React.CSSProperties 
}

export const ProductButtons = ({ className, style }: Props) => {
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4

    const { increaseBy, counter } = useContext( ProductContext );

    return (
        <div 
<<<<<<< HEAD
            className={ `${ styles.buttonsContainer } ${ className }` }
            style={ style }
        >
                <button
                    className={ styles.buttonMinus }
                    onClick={ () => increaseBy( -1 ) }
                    >-</button>
                <div
                    className={ styles.countLabel }>{ counter }</div>
                <button
                    className={ styles.buttonAdd }
                    onClick={ () => increaseBy( +1 ) }
                    >+</button>
            </div>    

=======
            className={ `${ styles.buttonsContainer} ${ className }` }
            style={ style }
        >
            <button
                className={ styles.buttonMinus }
                onClick={ () => increaseBy( -1 ) }> - </button>

            <div className={ styles.countLabel }> { counter } </div>

            <button
                className={ styles.buttonAdd }
                onClick={ () => increaseBy( +1 ) }> + </button>
        </div>
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
    );
}