const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JsLJnL4ZN6qtyNcLyYDvgBvFTFx6C8wASKt71KTSXZ2jAUVhdOB3nktHHFpK7VbPpPVjCMEfeWo0A2lWF50cHd300DlfdO24g');

const app = express();

app.use(cors({origin: true}));

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('hjww');
});

app.post('/payments/create', async(req, res) => {
    const total = req.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-76b54/us-central1/api