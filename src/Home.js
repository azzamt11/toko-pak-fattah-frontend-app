import React, {useState} from "react";
import "./Home.css";
import Product from "./Product";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Home() {
  const [imageParam, setImageParam] = useState(0);


  const rightButtonFunction= ()=> {
    document.getElementById("home_image_container").style.cssText= `left: ${imageParam-100}vw`;
    setImageParam(imageParam-100);
  }

  const leftButtonFunction= ()=> {
    document.getElementById("home_image_container").style.cssText= `left: ${imageParam+100}vw`;
    setImageParam(imageParam+100);
  }

  return (
    <div className="home">
      <div className="home__search">
        <div className= "home__searchContainer">
          <input className="home__searchInput" type="text" />
          <SearchIcon className="home__searchIcon" />
        </div>
      </div>
      <div className="home__container">
        <div className= "left-right-image-button-container">
          <button className= "left-right-image-button" onClick= {leftButtonFunction}> L </button>
          <button className= "left-right-image-button" onClick= {rightButtonFunction}> R </button>
        </div>
        <div className= "home_image_container" id= "home_image_container">
          <img
            className="home__image" id= "hi_0"
            src="https://previews.dropbox.com/p/thumb/ABqg_o8mfW_gxe3uIe5iVJOZaWdDAZyWbVauIOcHM1YOtU5FOL6PORMNQomU7ELajMYK84bkKEG1Nd8OcWvtAXldWETj8dVXFO1HdQSW3qmLaDHvqpqDzVgVghjrg5OwsKE9Wy8rh4mqhqXgu5Gmjg3fBIFJbGcWuIknl3xgc459yefg1bYdSuUMCXHTAl6PqZ2ugKtWJQo2Pkm4SLmB8EnhVM8WsO3ruBiXqX5QY3jMWCcW_ttwfWFB9TEdzfgFz2sL9-WQP95NhSnkHL3w3wVkGS1VXoCFWvqeGzwYSngkO5Q4EUELUkUIilXfYnXbHRt62sTw41h0InPhE88auBg7M4lcZ8UL-bgAFgWF-2CLoxxyL1TsNuQ-gZtpGArBr8U/p.jpeg"
            alt=""
          />
          <img
            className="home__image" id= "hi_1"
            src="https://previews.dropbox.com/p/thumb/ABqrFjKAny4ji-gCAaOcs5589z3CRUAQ16Mo0pxlXFflZ_aJ-GHL3EZKVIdxVF_BszegbdBbhi28lQYcaFapoYJH4XQVln2LT76AGoxfnSXdKQOwef2phMQ721g1ZAf0EXPtL3WPHbiND8ENlDJ5onkYJscrAucJuWtTRFvmtvFln97ZBVmtSnfMq_mjQvdu_-vmFfjfK0RqHouA0-7pw-wQsJjnl40iu8oH1K-oQxP99epwEWOG4HtJ4OM0HT4S6Vbd-kfUZt6sIMtAiIQeY16WcP_Gi1iTesr1ugJfa9HK8s6ZR-0GSx_iMdofMbs8lj2eLpHZw8H7TO4Pc3USNVoSMSw0QwuKfNj7o8SCOSxI66Rl3wdlY4KppelzyFj3akY/p.png"
            alt=""
          />
          <img
            className="home__image" id= "hi_2"
            src="https://previews.dropbox.com/p/thumb/ABqrFjKAny4ji-gCAaOcs5589z3CRUAQ16Mo0pxlXFflZ_aJ-GHL3EZKVIdxVF_BszegbdBbhi28lQYcaFapoYJH4XQVln2LT76AGoxfnSXdKQOwef2phMQ721g1ZAf0EXPtL3WPHbiND8ENlDJ5onkYJscrAucJuWtTRFvmtvFln97ZBVmtSnfMq_mjQvdu_-vmFfjfK0RqHouA0-7pw-wQsJjnl40iu8oH1K-oQxP99epwEWOG4HtJ4OM0HT4S6Vbd-kfUZt6sIMtAiIQeY16WcP_Gi1iTesr1ugJfa9HK8s6ZR-0GSx_iMdofMbs8lj2eLpHZw8H7TO4Pc3USNVoSMSw0QwuKfNj7o8SCOSxI66Rl3wdlY4KppelzyFj3akY/p.png"
            alt=""
          />
        </div>

        <div className= "home_column">
          <div className="home__row" id= "hr-0">
            <Product
              id="12321341"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
              price={11.96}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
          </div>
          <div className="home__row" id= "hr-1">
            <Product
              id="4903850"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
          </div>
          <div className="home__row" id= "hr-2">
            <Product
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
