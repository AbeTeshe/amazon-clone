import './App.css';
import {useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Orders';
import Footer from './Footer';


const promise = loadStripe('pk_test_51JsLJnL4ZN6qtyNcqFhgoeqjaNF789pAXWN47x1g59lfidILtJ8UXi9m0Y7lUxFp59yLIxbOktd2l9WbYgsZ3eQZ00buFYC6mi');

function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [user, dispatch]);


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login"
           element={<Login />} />
           <Route path="/orders"
            element={
              <>
                 <Header />
                 <Orders />
                 <Footer />
              </>
            } />
          <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
              <Footer />
            </>
          } />
          <Route exact path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          <Route exact path="/payment" element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
