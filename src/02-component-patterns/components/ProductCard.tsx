<<<<<<< HEAD
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

=======
import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

<<<<<<< HEAD
export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
=======


export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties 
}


export const ProductCard = ({ children, product, className, style }: Props ) => {
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4

    const { counter, increaseBy } = useProduct();

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
<<<<<<< HEAD
                {/* <ProductImage img={ product.img }/>
                <ProductTitle title={ product.title }/>
                <ProductButtons increaseBy={ increaseBy } counter={ counter }/> */}
                   
            </div>
        </Provider>
        
    )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
=======
            </div>
        </Provider>
    )
}
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
