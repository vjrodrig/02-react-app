import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
<<<<<<< HEAD
    value?: number; 
=======
    value?: number;
>>>>>>> 3eea1822f4901fe08a1f0e37b1cc02cd71bc1320
}


export const ProductCard = ({ children, product, className, style, onChange, value }: Props ) => {

<<<<<<< HEAD
    const { counter, increaseBy } = useProduct( { onChange, product, value } );
=======
    const { counter, increaseBy } = useProduct({ onChange, product, value });
>>>>>>> 3eea1822f4901fe08a1f0e37b1cc02cd71bc1320

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >
                { children }
            </div>
        </Provider>
    )
}
