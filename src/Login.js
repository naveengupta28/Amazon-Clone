import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';
import {auth} from './firebase'



function Login(props) {
 const [email, setEmail]=useState('');
 const[password, setPassword]=useState('');

 const history=useHistory(); 

 const signIn=(e)=>{
 e.preventDefault();


 auth
 .signInWithEmailAndPassword(email,password)
 .then((auth)=>{
     history.push('/')
 }).catch(error=>alert(error.message))
 // firebase login
 }
 const register=(e)=>{
 e.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{

        console.log(auth)
        if(auth){
            history.push('/')
        }
    }).catch(error=>alert(error.message))



 // firebase register
 }
 return (
 <div className='login'>

 <Link to ='/' >
 <img
 className='login__logo'
src='https://www.registrarcorp.com/wp-content/uploads/2021/02/Amazon-logo.png' />
 </Link>
 <div className='login__container'>
 <h1>Sign-in</h1>
 <form>
 <h5>E-mail</h5>
 <input
 type='text'
 value={email}
 onChange={e=>setEmail(e.target.value)}
 />
 <h5>Password</h5>
 <input
 type='password'
 value={password}
 onChange={e=>setPassword(e.target.value)}
 ></input>
 <button
 type='submit'
 className='login__SignInButton'
 onClick={signIn}
 >Sign In</button>
 </form>
 <p>
 By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
 </p>
 <br></br>
 <hr></hr>
 <br></br>
 <h4 className="newAccount">New to Amazon?</h4>
 <br></br>

 <button onClick={register} className='login__registerButton'>Create your Amazon
account</button>
 </div>

 </div>
 );
}
export default Login;