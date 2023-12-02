import { Box, Container, Typography } from "@mui/material";
import React from "react";
import './Explore.scss';
import { useSelector } from "react-redux";
import {BsBoxArrowUpRight,BsArrowRight} from "react-icons/bs";
import { MdOutlineCurrencyRupee} from "react-icons/md";
import { AiFillStar} from "react-icons/ai";



const Explore=()=>{

    const State=useSelector(
        ({data})=>data
    )
    console.log(State)

    return(
        <>
        <Box sx={{width:{xs:"95%",sm:"95%",md:"100%"}, flexGrow: 1, display: { xs: 'block', sm: 'block',md:'block',lg:'block' }}} className="Explore">
            <Box maxWidth="xl" className="container">
            <Box sx={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
                <Box sx={{width:{xs:"100%",sm:"44%",md:"20%"},flexGrow: 1,backgroundColor:"#c3ebf099",height:"280px",textAlign:"start",padding:"10px 15px",textAlign:"start",marginBottom:{xs:"20px",sm:"20px"},marginLeft:{xs:"",sm:"15px"}}} className="margin-explore">
                    <Box>
                    <Typography component="div" variant="h2" sx={{marginBottom:"20px",marginTop:"30px"}}>
                    Explore
                    </Typography>
                </Box>
                <Box component="p" sx={{fontSize:{xs:"35px",sm:"35px",md:"35px"}}}>Popular Localities
				 in Chennai
                 </Box>
                 </Box>
                    {
                      State.Arrayone.map((value,index)=>{
                             return(
                                <>
                                <Box sx={{width:{xs:"100%",sm:"47%",md:"20%"},flexGrow: 1, display: { xs: 'block', sm: 'block',md:'block',lg:'block'},marginBottom:{xs:"",sm:"20px"}}}>
                                    <Typography component="div"
                                    className="margin-explore"
                                    sx={{backgroundColor:"#c3ebf099",height:"280px",textAlign:"start",padding:"10px",marginLeft:{xs:"",sm:"20px",md:"20px"},marginBottom:{xs:"20px",sm:"0px"},}}
                                    >
                                        <Box>
                                            <Typography variant="h4"
                                            sx={{marginTop:"28px",marginBottom:"10px"}}
                                            >
                                            {value.name}
                                            <span style={{marginLeft:"10px",color:"black"}}><BsBoxArrowUpRight/></span>
                                            </Typography>
                                        </Box>
                                        <Box component="p">
                                        <i><MdOutlineCurrencyRupee/>{value.rate}</i><i><MdOutlineCurrencyRupee/>{value.rate1}</i>
                                        </Box>
                                        <Box>
                                             <Typography component="div">
                                             <ul className="flex">
                                                <li style={{marginRight:"25px",fontWeight:"800"}}>{value.star}<span style={{color:"yellow",fontWeight:"800"}}><i style={{fontWeight:"800"}}><AiFillStar/></i></span></li>
                                                <li style={{fontWeight:"800"}}>{value.review}</li>
                                            </ul>
                                            </Typography> 
                                        </Box>
                                        <Box component="div" className="explore-img">
                                        <p className="sale">{value.sale}<i style={{margin:"20px"}}><BsArrowRight/></i></p>
                                        <img className="img" src={value.image} style={{width:""}}/>
                                        </Box>
                                    </Typography>
                                </Box>
                                </>
                             )
                      })  
                    }
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Explore