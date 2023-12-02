import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./Home/Home";
import Component from "./Component/Component";
import Detail from "./Detail/Detail"
import Gallery from "./Gallery/Gallery";
import Mobilehome from "./Mobile/Mobile";
import Logins from "./Login/Login";
import Signup from "./Signup/Signup";

const Rout=()=>{

    return(

        <BrowserRouter  basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Component" element={<Component/>}></Route>
            <Route path="/Detail" element={<Detail/>}></Route>
            <Route path="/Gallery" element={<Gallery/>}></Route>
            <Route path="/Mobile" element={<Mobilehome/>}></Route>
            <Route path="/Login" element={<Logins/>}></Route>
            <Route path="/Signup" element={<Signup/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Rout