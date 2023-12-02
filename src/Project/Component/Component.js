import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Footer from "../Home/Footer/Footer";





const Component=()=>{

    const[param]=useSearchParams()
    const a=useNavigate()

    return(

        <div>
            <Navbar/>
            <Header/>
            <Banner/>
            <Footer/>
        </div>
    )
}

export default Component