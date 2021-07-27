import { BrowserRouter as Router,Switch,Route, } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home'
import Login from './Login';
import {useEffect} from 'react'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';

import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise=loadStripe('pk_test_51JHwEQSBK7Ai7yRpCDnt683u8Sc8CumDCec1SHrrhtxsR2FlJQWuynyvrUJ5oR93KjUqnjx4d4wfSlWoPUkrg0aV002hxyOTBq');



function App() {

    const [{}, dispatch]=useStateValue();


useEffect(() => {

    auth.onAuthStateChanged(authUser=>{
        console.log("The USER IS >>> ", authUser);
        if(authUser){

            dispatch({
                type:'SET_USER',
                user:authUser
            })

        }
        else{

            dispatch({
                type:"SET_USER",
                user:null
            })

        }
    })
     
}, [])

 return (
 <Router>
 <div className="App">

 <Switch>
 <Route exact path='/login'>
 <Login/>
 </Route>

 <Route exact path="/">
 <Header/>
 <Home/>
 </Route>
 <Route exact path="/checkout">
 <Header/>
 <Checkout/>

 </Route>
 <Route exact path='/payment'>
 <Header/>
<Elements stripe={promise}>
<Payment/>

</Elements>

 </Route>

 </Switch>

 </div>
 </Router>
 );
}
export default App;