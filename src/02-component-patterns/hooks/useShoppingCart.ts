<<<<<<< HEAD
import  { useState } from 'react'
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});    

    const onProductCountChange = ({ count, product }: { count:number, product: Product }) => {

        console.log({ count });

        setShoppingCart( oldShoppingCart => {

            if ( count === 0 ) {

                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                console.log({ toDelete })

=======
import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';



export const useShoppingCart = () => {

    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart  }>({});

    const onProductCountChange = ({ count, product }: { count:number, product: Product }) => {
        
        console.log({ count })

        setShoppingCart( oldShoppingCart => {

            if( count === 0 ) {
                const {  [product.id]: toDelete, ...rest  } = oldShoppingCart;
>>>>>>> 3eea1822f4901fe08a1f0e37b1cc02cd71bc1320
                return rest;
            }

            return {
                ...oldShoppingCart,
                [ product.id ]: { ...product, count }
            }
<<<<<<< HEAD
        } )
=======
        })

>>>>>>> 3eea1822f4901fe08a1f0e37b1cc02cd71bc1320
    }

    return {
        shoppingCart,
<<<<<<< HEAD
        onProductCountChange
    }
}
=======
        onProductCountChange,
    }

}
>>>>>>> 3eea1822f4901fe08a1f0e37b1cc02cd71bc1320
