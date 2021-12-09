import { ProductCard as ProductCardHOC } from './ProductCard';
<<<<<<< HEAD
import { ProductButtons } from './ProductButtons';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductCardHOCProps } from '../interfaces/interfaces';

=======
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

<<<<<<< HEAD
=======

>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
<<<<<<< HEAD

});
=======
})


export default ProductCard;
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4

