import { Box} from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';
import './Search.scss';
import {BiSolidRightArrowAlt } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";



const Search=()=>{
    return(
        <>
        <Box className="Search" sx={{width:{xs:'100%',sm:"100%",md:"100%"}}}>
            <Box className="container" sx={{margin:"10px 10px"}}>
            <Box>
            <Typography
            component="div"
            variant="h4"
            sx={{marginTop:"50px",marginBottom:"30px",textAlign:"start",fontWeight:"800",fontSize:{xs:"1rem",sm:"2.215rem"}}}
            >
            Because you searched Chennai
            </Typography>
            </Box>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"Wrap"}}>
            <Box sx={{width:{xs:'100%',sm:"40%",md:"20%"},flexGrow: 1, display: { xs: 'block', sm: 'block',md:'block',lg:'block'},marginBottom:{xs:"0px",sm:"20px"}}} className="search-bar">
                <Box>
                <Typography 
                component="div"
                variant="h6"
                sx={{fontWeight:"550",height:"80px"}}>
                <span className="span-color">13K+</span> Properties listed for you    
                </Typography>
            </Box>
            <Box>
                <Typography 
                component="div"
                variant="h6"
                className="search-red"
                sx={{fontWeight:"550"}}>
               Continue last search
               <span className="rightarrow"><i><FaArrowRight/></i></span>  
                </Typography>
            </Box>
            </Box>


            <Box sx={{width:{xs:'100%',sm:"40%",md:"20%"},flexGrow: 1, display: { xs: 'block', sm: 'block',md:'block',lg:'block'},marginTop:{xs:"20px",sm:"0px"},marginBottom:{xs:"0px",sm:"20px"}}} className="search-bar">
                <Box>
                <Typography 
                component="div"
                variant="h6"
                sx={{fontWeight:"550",height:"80px"}}>
                <span className="span-color">23K+</span> Get Personalised property  form you   
                </Typography>
            </Box>
            <Box>
                <Typography 
               component="div"
               variant="h6"
               className="search-red"
                sx={{fontWeight:"550"}}>
                 See All
               <span className="rightarrow"><i><FaArrowRight/></i></span>  
                </Typography>
            </Box>
            </Box>

            <Box sx={{width:{xs:'100%',sm:"40%",md:"20%"},flexGrow: 1, display: { xs: 'block', sm: 'block',md:'block',lg:'block'},marginTop:{xs:"20px",sm:"0px"},marginBottom:{xs:"0px",sm:"20px"}}} className="search-bar">
                <Box>
                <Typography 
                component="div"
                variant="h6"
                sx={{fontWeight:"550",height:"80px"}}>
                <span className="span-color">33K+</span> Top Handpicked projects for you   
                </Typography>
            </Box>
            <Box>
                <Typography 
                component="div"
                variant="h6"
                className="search-red"
                sx={{fontWeight:"550"}}>
                 See All
               <span className="rightarrow"><i><FaArrowRight/></i></span>  
                </Typography>
            </Box>
            </Box>

            <Box sx={{width:{xs:'100%',sm:"40%",md:"20%"},flexGrow: 1, display: { xs: 'block', sm: 'block',md:'block',lg:'block'},marginTop:{xs:"20px",sm:"0px"},marginBottom:{xs:"0px",sm:"20px"}}} className="search-bar">
                <Box>
                <Typography 
                component="div"
                variant="h6"
                sx={{fontWeight:"550",height:"80px"}}>
                <span className="span-color">53K+</span> Properties In Popular Localites    
                </Typography>
            </Box>
            <Box>
                <Typography 
               component="div"
               variant="h6"
               className="search-red"
                sx={{fontWeight:"550"}}>
               See All
               <span className="rightarrow"><i><FaArrowRight/></i></span>  
                </Typography>
            </Box>
            </Box>


            </Box>
            </Box>
        </Box>
        </>
    )
}


export default Search