// const functions = require("firebase-functions");

// const express=require("express");

// const cors=require("cors");

// const stripe= require("stripe")('sk_test_51JHwEQSBK7Ai7yRpPm59oYxeKRiGPBTEDraVMAG91HLeKfcixjA1g0YScxAzGTYR0A89xKRwrVxPL0QLwc4MGDJe000tCen0Q1')

// //API

// //App config

// const app=express();


// //Middlewares

// app.use(cors({origin:true}));

// app.use(express.json())

// //API routes

// app.get('/',(request,response)=>response.status(200).send("Hello World"))
// app.post('/payments/create',async(request,response)=>{
//     const total=request.query.total;

//     console.log('payment Request Recieved!! for this amount>>',total)

//     const paymentIntent=await stripe.paymentIntents.create({
//         amount:total,
//         currency:"usd",
//     })

//     response.status(201).send({
//         clientSecret:paymentIntent.client_Secret,
//     })
// })

// //Listen command

// exports.api=functions.https.onRequest(app)



