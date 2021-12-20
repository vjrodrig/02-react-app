import { useEffect, useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
}

<<<<<<< HEAD
export const useProduct = ( { onChange, product, value = 0 }: useProductArgs ) => {

    const [ counter, setCounter ] = useState( value );

    const increaseBy = ( value: number ) => {

        const newValue = Math.max( counter + value, 0 ) 
        setCounter( newValue )
=======
interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
}


export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {

    const [ counter, setCounter ] = useState( value );


    const increaseBy = ( value: number ) => {
      
        const newValue = Math.max( counter + value, 0 )
        setCounter( newValue );
>>>>>>> 3eea1822f4901fe08a1f0e37b1cc02cd71bc1320

        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
<<<<<<< HEAD
        
        setCounter( value );

    }, [ value ]);
=======
        setCounter( value );
    }, [ value ])
>>>>>>> 3eea1822f4901fe08a1f0e37b1cc02cd71bc1320

    return {
        counter,
        increaseBy
    }

}