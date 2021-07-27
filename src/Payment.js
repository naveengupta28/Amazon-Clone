import React, { useEffect } from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import {Link} from 'react-router-dom'
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from "./reducer"
import { useHistory} from 'react-router';
import axios from './axios';



function Payment() {
const [{basket,user},dispatch]=useStateValue();

const[error, setError]=useState(null);
const[disabled,setDisabled]=useState(true);
const [processing, setprocessing] = useState("");
const [succeeded, setsucceeded] = useState(false)
const [clientSecret, setclientSecret] = useState(true)
const history=useHistory();

useEffect(()=>{

    //generate the special stripe secret which allows us to charge a customer

    const getClientSecret=async()=>{
        const response=await axios({
            method:'POST',
            //stripe expects the total in  a currencies subunits
            url:`/payments/create?total=${getBasketTotal(basket)*100}`
        });

        setclientSecret(response.data.clientSecret)
    }
    getClientSecret();
    
},[basket])

const stripe=useStripe();
const Elements=useElements();

const handleSubmit=async (e)=>{
    e.preventDefault();
    setprocessing(true);

     const payload=await stripe.confirmCardPayment(clientSecret,{
         payment_method:{
             card:Elements.getElement(CardElement)
             
         }
     }).then(({paymentIntent})=>{
         //payementIntent=payment confirmation

        setsucceeded(true);
        setError(null)
        setprocessing(false)
        history.replace('/orders')

     })
     


}



const handleChange=e=>{

    setDisabled(e.empty);
    setError(e.error?e.error.message:"");
}

    return (
        <div className='payment'>
           
            <div className='payment__container'>

            <h1>
                Checkout ({<Link to ='/checkout'>{basket?.length} items )</Link>}
            </h1>
                {/* pysection=delivery address */}
                <div className='payment__section'>

                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>

                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123  JP Nagar</p>
                    <p>bengaluru, india</p>
                </div>



                </div>
                {/* revire items */}
                <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>

                <div className='payment__items'>
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />                    ))}
                </div>

                </div>
                {/* payment method */}

                <div className='payment__section'>

 
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>

                    <div className='payment__details'>


                        <form onSubmit={handleSubmit}>
                            
                            <CardElement onChange={handleChange}/>
                            <div className='payment__priceContainer'>
                          <CurrencyFormat
                            renderText={(value)=>(
                            <h3>Order Total:{value}</h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}

                            />
                            <button disabled={processing || disabled ||succeeded}>
                                <span>{processing? <p>Processing</p>:"Buy Now"}</span>
                            </button>
                            </div>
                            {error &&<div>{error}</div>}
                        </form>
                       
                    </div>


                    </div>
            </div>
            
        </div>
    )
}

export default Payment
