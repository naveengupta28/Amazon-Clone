import React from 'react';
import './Home.css'
import Product from './Product';
function Home(props) {
 return (
 <div className="home">
 <div className="home__container">
 <img
 className="home__image"
 src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/launches21/1500x600_shop-now._CB663404287_.jpg"
 alt=""/>
 </div>
 <div className="home__row">
 <Product
 id="1"
 title="Samsung Galaxy S21 Plus(Phantom Black, 8GB RAM, 128GB Storage)"
 price={640}
 image="https://images-eu.ssl-images-amazon.com/images/I/41zwOC08drL._AC_SX184_.jpg"
 rating={4}/>

 <Product
 id="2"
 title="Mi 11X Pro 5G (Cosmic Black, 8GB RAM, 128GB Storage) | Snapdragon 888
| 108MP Camera"
 price={139.999}
 image="https://images-eu.ssl-images-amazon.com/images/I/41vVavfyzxS._AC_SX184_.jpg"
 rating={4}/>

 </div>
 <div className="home__row">

 <Product
 id="3"
 title="OPPO Reno5 Pro 5G (Astral Blue, 8GB RAM, 128GB Storage)"
 price={359.90}
 image="https://images-eu.ssl-images-amazon.com/images/I/41f8eOJLsPL._AC_SX184_.jpg"
 rating={4}/>

 <Product
 id="4"
 title="Samsung Galaxy Note 20 Ultra 5G (Mystic Black, 12GB RAM, 256GB
Storage)"
 price={919.99}
 image="https://images-eu.ssl-images-amazon.com/images/I/41ezRvTwcaL._AC_SX184_.jpg"
 rating={4}/>
 <Product
 id="5"
 title="OPPO F19 Pro+ 5G (Fluid Black, 8GB RAM, 128GB Storage)"
 price={259.90}
 image="https://images-eu.ssl-images-amazon.com/images/I/41BnHjRP0ZS._AC_SX184_.jpg"
 rating={4}/>


 </div>
 <div className="home__row">
 <Product
 id="5"
 title="OnePlus 9R 5G (Carbon Black, 8GB RAM, 128GB Storage)"
 price={399.99}
 image="https://images-eu.ssl-images-amazon.com/images/I/417uExCG6KL._AC_SX184_.jpg"
 rating={4}/>




 </div>

 </div>
 );
}
export default Home;