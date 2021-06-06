import React from 'react'
import { useStateValue } from './StateProvider';
import './style/CheckoutProducts.css'


function CheckoutProducts({ id, image, title, price, rating }) {
    
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
           
        })
    }


    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} />

            <div className="checkoutProduct_info">
                <p className="checkProduct_title">{title}</p>
                <p className="checkProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                
                <div className="checkProduct_ratig">
                    {Array(rating)
                            .fill()
                            .map((_, i) => (
                        <p>*</p> 
                    ))}       

                </div>

                <button onClick={removeFromBasket} >Remove from Basket</button>

            </div>
        </div>
    )
}


export default CheckoutProducts
