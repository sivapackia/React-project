import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Search from "./Search/Search";
import Project from "./Project/Project";
import Explore from "./Explore/Expolre";
import Property from "./Property/Property";
import Footer from "./Footer/Footer";



const Home=()=>{

    return(
        <div>
        <Header/>
        <Navbar/>
        <Banner/>
        <Search/>
        <Project/>
        <Explore/>
        <Property/>
        <Footer/>
        </div>
    )
}

export default Home
    
