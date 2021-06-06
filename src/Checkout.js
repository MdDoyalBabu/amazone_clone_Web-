import React from 'react'
import './style/Checkout.css'
import checkImage from './Images/subtotalImage.png'
import Subtotal from './Subtotal'
import CheckoutProducts from './CheckoutProducts';
import imageCard from './Products/image2.jpg'
import { useStateValue } from './StateProvider';

function Checkout() {

    const [{ basket,user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src={checkImage} />

                
                
                <div>
                    <h3>hello, {user?.email}</h3>
                    <h2 className="checkout_title" >Your shopping Basket</h2>
                    
                    
                    {basket.map(item => (
                        <CheckoutProducts
                            
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        
                        />
                        
                   ))}
                
                    {/*BasketIen*/}
                    {/*BasketIen*/ }
                    {/*BasketIen*/}
                    {/*BasketIen*/ }
                    {/*BasketIen*/ }

                </div>

            </div>
            
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
