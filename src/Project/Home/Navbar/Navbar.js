import React from "react";
import { FaAngleDown } from "react-icons/fa";
import './Navbar.scss'
import { Box, Container, Typography } from "@mui/material";
import {BiSolidTruck } from "react-icons/bi";


const Navbar=()=>{

    return(
        <>
		<Box sx={{boxShadow:"0px 0px 2px gray",display: { xs: 'none', sm:'none',md:'block'},backgroundColor:"#fff"}}>
			<Container maxWidth="xl">
				<Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}} className="navbar">
				<Box sx={{width:"80%"}}>
                   <Typography component="ul"
				    sx={{ flexGrow: 1,display:"flex",alignItems:"center",justifyContent:"space-evenly"}}
				   >
                           <li><a href="#">Buys<i style={{verticalAlign:"middle"}}><FaAngleDown/></i></a></li>
						   <li><a href="#">Rend<i style={{verticalAlign:"middle"}}><FaAngleDown/></i></a></li>
						   <li><a href="#">Sell<i style={{verticalAlign:"middle"}}><FaAngleDown/></i></a></li>
						   <li><a href="#">Home Loans<i style={{verticalAlign:"middle"}}><FaAngleDown/></i></a></li>
						   <li><a href="#">Property Services<i style={{verticalAlign:"middle"}}><FaAngleDown/></i></a></li>
						   <li><a href="#">MB Advice <span className="newspan">New</span><i style={{verticalAlign:"middle"}}><FaAngleDown/></i></a></li>
						   <li><a href="#">Help <i style={{verticalAlign:"middle"}}><FaAngleDown/></i></a></li>
				   </Typography>
				</Box>
				<Box sx={{width:"20%",display: { xs: 'none', sm: 'none',md:'none',lg:'block'}}}>
					<Typography component="ul" sx={{flexGrow:1,}} className="shift">
                    <li sx={{display:"flex",alignItems:"center",justifyContent:"center"}}><i><BiSolidTruck/></i>
					<span>20% OFF On Home Shifting</span></li>
					</Typography>
				</Box>
				</Box>
			</Container>
		</Box>
		</>
    )
}

export default Navbar