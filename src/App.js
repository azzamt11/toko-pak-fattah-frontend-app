import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import PaymentComponent from "./PaymentComponent";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // scroll event listener
    window.addEventListener("scroll", (event)=> {
      const scrollPosition = window.scrollY;
      if (scrollPosition>= window.innerHeight) {
        document.getElementById("header").style.cssText= "top: -70px";
      } else {
        document.getElementById("header").style.cssText= "top: 0px";
      }
    });

    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/orders" element= {<Orders/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/checkout" element= {<Checkout/>}/>
        <Route path="/payment" element= {<PaymentComponent/>}/>
        <Route path="/" element= {<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
