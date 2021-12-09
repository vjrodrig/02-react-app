import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
<<<<<<< HEAD
import '../styles/custom-styles.css'
=======
import '../styles/custom-styles.css';
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

<<<<<<< HEAD
export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingStore</h1>
            <hr />
=======


export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
<<<<<<< HEAD
                <ProductCard
                  product={product}
                  className='bg-dark
                  text-white'
                >
                    <ProductCard.Image className='custom-image'/>
                    <ProductCard.Title className='text-bold' />
                    <ProductCard.Buttons  className='custom-buttons'/>
                </ProductCard>

                <ProductCard 
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductImage className='custom-image'/>
                    <ProductTitle className='text-bold' />
                    <ProductButtons className='custom-buttons'/>
                </ProductCard>

                <ProductCard 
                    product={product}
=======

                <ProductCard 
                    product={ product }
                    className="bg-dark text-white">

                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-bold"/>
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard 
                    product={ product }
                    className="bg-dark text-white"
                >
                    <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard 
                    product={ product }
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
<<<<<<< HEAD
                    <ProductImage/>
                    <ProductTitle
                        style={{
                            fontWeight: 'bold',
                        }}
                    />
                    <ProductButtons
                        style={{
                            display: 'flex',
                            justifyContent: 'end',
                        }}
                    />
                </ProductCard>

=======
                    <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                    <ProductTitle style={{ fontWeight: 'bold' }} />
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}/>
                </ProductCard>


>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
            </div>
        </div>
    )
}
