import React from 'react';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import './Subtotal.js'
import Subtotal from './Subtotal.js';
function Checkout(props) {
 const [{basket,user}, dispatch]=useStateValue();

 return (
 <div className="checkout">
 <div className="checkout__left">
 <img
 className="checkout__ad"
 src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
 alt="advt. banner"
 />
 
 <div>

     <h3>Hello,{user?.email.substring(0,user?.email.indexOf('@'))}</h3>
 <h2 className="checkout__title">Your Shopping Basket</h2>
 {basket.map(item=>(
 <CheckoutProduct
 id={item.id}
 title={item.title}
 image={item.image}
 price={item.price}
 rating={item.rating}
 />
 ))}


 </div>
 </div>
 <div>
 <Subtotal/>

 </div>
 </div>


 );
}
export default Checkout;