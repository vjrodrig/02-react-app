<<<<<<< HEAD
// import { ReactElement } from 'react';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImgProps } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductButtons';
=======
import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4


export interface Product {
    id: string;
<<<<<<< HEAD
    title: string;
    img?: string;
=======
    img?: string;
    title: string;
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
}

export interface ProductContextProps {
    counter: number;
<<<<<<< HEAD
    increaseBy: ( value: number ) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ( Props: ProductTitleProps ) => JSX.Element,
    Image: (Props: ProductImgProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element

}
=======
    product: Product;
    increaseBy: ( value: number ) => void;
}


export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Buttons: ( Props: ProductButtonsProps ) => JSX.Element,
    Image:   ( Props: ProductImageProps ) => JSX.Element,
    Title:   ( Props: ProductTitleProps ) => JSX.Element,
}


>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
