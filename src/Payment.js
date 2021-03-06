import { Link } from '@material-ui/core';
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import React,{useState} from 'react'
import CheckoutProducts from './CheckoutProducts';
import { useStateValue } from './StateProvider';
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from './reducer';
import './style/Payment.css'
import axios from 'axios';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);


   /* useEffect(() => {
       
         // generate the special stripe secret which allows us to charge a customer
    
        const getClienScret = async () => {
            const response = await axios({
                method: "post",
                
                // Stripe expect the total in currencies subunits 

                url: `/payment/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret (response.data.clientSecret);
        }
         
    }, [basket])

    */
       


    const handleSubmit =async(event) => {
        // do all the fancy stripe stuff

        event.preventDefault();
        setProcessing(true);

        //const playload=await stripe
        
    }

    const handleChange = event => {
        //listen for chanages int the CardElemnts
        // and display any errors as sthe customer types their card details

        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment_container">
                {/* Payment setection -delivery addrees*/}
                <h1>
                    Checkout(
                        <Link to="/checkout">{basket?.length } items</Link>
                    )
                </h1>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address </h3>
                    </div>
                    <div className="payment_address" >
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angels ,CA</p>
                    </div>

                </div>

                {/* Payment setection -Review addrees*/}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery </h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProducts
                                
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            
                            />             
                    ))}

                    </div>

                </div>

                {/* Payment setection -Payment addrees*/}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>

                    </div>
                    <div className="payment_details">
                        {/* Stripe magic will go */}

                        <form onSubmit={handleSubmit} >
                            <CardElement onChange={handleChange} />

                            <div className="payment_priceContainer" >     
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total :{ value}</h3>
                                        </>    
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                 
                                />

                                <button disabled={processing || disabled || succeeded} >
                                    <span>{ processing ? <p>Processing</p>:"Buy Now"}</span>
                                </button>

                            </div>

                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>

                    </div>

                </div>

            </div>
            
        </div>
    )
    
}

export default Payment
