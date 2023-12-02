import React from "react";
import './Property.scss';
import { Box, Container, Typography } from "@mui/material";



const Property=()=>{
    return(
        
        <Box sx={{width:{xs:"100%",sm:"100%",md:"100%"}, flexGrow: 1, display: { xs: 'block', sm: 'block',md:'block',lg:'block' }}} className="Property">
            <Box className="container" sx={{backgroundColor:"#fff8e2",paddingTop:"20px",paddingBottom:"20px",paddingLeft:"35px"}}>
                <Box component="" className="flexproperty" sx={{width:"100%"}}>
                    <Box sx={{width:{xs:"100%",sm:"70%",md:"70%"}}} position="relative">
                        <Typography 
                        component="div"
                        variant="h4"
                        sx={{fontSize:{xs:"1rem",sm:"2.215rem",md:"2.215rem"}}}
                        >
                        Post Your Property for
                        <Typography component="span" sx={{fontSize:{xs:"25px",sm:"40px",md:"40px"},fontWeight:"800",marginLeft:"10px"}}>
                         Free
                        </Typography>
                        </Typography>
                        <Typography sx={{fontSize:{xs:"15px",sm:"20px",md:"20px"},display:{xs:"none",sm:"none",md:"block"}}} component="p">
                        List it on Magicbrick and getgenuine leads
                        </Typography>
                        <Typography sx={{fontSize:{xs:"15px",sm:"20px",md:"20px"},display:{xs:"block",sm:"block",md:"none"}}} component="p">
                        List it on Magicbrick<br/>and getgenuine leads
                        </Typography>

                        <Box sx={{width:{xs:"50%"},display:{xs:"block",sm:"block",md:"none"},position:"absolute", top:{xs:"50px",sm:"70px"},right:{xs:"0px",sm:"0px"}}}>
                        <Typography
                        component="div"
                        variant="h6"
                        className="freee"
                        sx={{fontSize:"10px"}}
                        >
                        Post Property
                        <span className="freee-span" style={{fontSize:"8px",fontWeight:"700",marginLeft:"5px"}}>FREE</span>
                        </Typography>
                    </Box>
                    </Box>
                    <Box sx={{width:{xs:"30%",sm:"30%",md:"30%"},display:{xs:"none",sm:"none",md:"block"}}}>
                        <Typography
                        component="div"
                        variant="h6"
                        className="free"
                        >
                        Post Property
                        <span className="free-span" style={{fontSize:"12px",fontWeight:"700",marginLeft:"5px"}}>FREE</span>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Property