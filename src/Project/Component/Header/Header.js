import React, { useEffect, useState } from "react";
import './Header.scss';
import { Box, Container, Typography } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { BiSolidBuildingHouse } from "react-icons/bi";
import { GiFamilyHouse } from "react-icons/gi";
import {IoAddCircle } from "react-icons/io5";

const Header=()=>{

    const[param]=useSearchParams()
    const ind=param.get('Ind')

    const State=useSelector(({data})=>data)
    console.log(State)

    const[update,setUpdate]=useState("")
    const Component=(a,b)=>{
       let x=State.Array.find((value,index)=>{
        return ind===value.id
       })
       setUpdate(x.place)    
    }

    useEffect(Component,[])
    console.log(update)

    const[type,setType]=useState(false)

    const propertytype=()=>{
        setType()
    }

    return(
        <>
         <Box component="div" sx={{width:"100%", flexGrow: 1, display: { xs: 'none', sm: 'none',md:'none',lg:'none' }}} className="header-component"> 
            <Container maxWidth="xl" sx={{backgroundColor:"#d8232a",padding:"10px 15px"}}>
            <Box sx={{width:"100%",textAlign:"center"}}>
                <Typography component="div" 
                sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
               <Box component="div" className="flex">
                   <Box component="div" className="back-color">
                       <a href="#">Buy <i style={{verticalAlign:"text-top",color:"#d8232a"}}><FaAngleDown/></i></a>
                       <Box component="div" className="chennai">
                          {update}
                       </Box>
                       <Box component="form">
                              <input type="text" placeholder="Add More"></input>
                       </Box>
                   </Box>
                   <Box className="back-color">
                    Top localites
                    <Typography 
                    component="i"
                    variant=""
                    sx={{marginTop:"2px",marginLeft:"5px",color:"#d8232a"
                    }}>
                     <FaAngleDown/>
                    </Typography>
                   </Box>
                   <Box sx={{position:"relative"}}>
                   <Box className="back-color">
                    Budget
                    <Typography 
                    component="i"
                    variant=""
                    sx={{marginTop:"2px",marginLeft:"5px",color:"#d8232a"
                    }}>
                     <FaAngleDown/>
                    </Typography>
                   </Box>
                   <Box sx={{display:{xs:"none",sm:"none",md:"none"},position:"absolute",top:"60px",right:"-200px"}}>
                    <Typography sx={{padding:"10px 15px",backgroundColor:"white",width:"500px",border:"2px solid gray",boxShadow:"0px 0px 5px gray"}}>
                    <React.Fragment> 
                            <CardContent>
                            <Box component="select"  sx={{width:"170px",padding:"5px 10px",borderRadius:"10px"}}>
                                <Typography component="option">
                                Min
                                </Typography>
                                </Box>
                                <Typography component="span" sx={{margin:"0px 10px"}}>
                                    To
                                </Typography>
                                <Box component="select"  sx={{width:"170px",padding:"5px 10px",borderRadius:"10px"}}>
                                <Typography component="option">
                                Min
                                </Typography>
                                </Box>
                            </CardContent>
                            <Box sx={{textAlign:"end"}}>
                            <Typography component="button" sx={{color:"red",border:"none",backgroundColor:"white"}}>
                                    Done
                            </Typography>
                           </Box>
                        </React.Fragment>
                        </Typography>
                   </Box>
                   </Box>
                   <Box sx={{position:"relative"}}>
                   <Box className="back-color">
                   Property Type
                    <Typography 
                    component="i"
                    variant=""
                    sx={{marginTop:"2px",marginLeft:"5px",color:"#d8232a"
                    }}>
                     <FaAngleDown/>
                    </Typography>
                    <Box sx={{display:{xs:"none",sm:"none",md:"none"},position:"absolute",top:"60px",right:"-200px"}}>
                    <Typography sx={{padding:"10px 15px",backgroundColor:"white",width:"500px",border:"2px solid gray"}}>
                    <React.Fragment> 
                            <CardContent>
                            <Typography component="div" variant="p" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block"}}>
                            <i style={{verticalAlign:"middle",marginRight:"5px"}}><IoAddCircle/></i>
                                    Flat
                                    </Typography>
                                    <Typography component="div" variant="p" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block",marginLeft:"15px"}}>
                                    <i style={{verticalAlign:"middle",marginRight:"5px"}}><IoAddCircle/></i>
                                    House/Villa
                                    </Typography>
                                    <Typography component="div" variant="p" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block",marginLeft:"15px"}}>
                                    <i style={{verticalAlign:"middle",marginRight:"5px"}}><IoAddCircle/></i>
                                    Shared Flat
                                    </Typography>
                            </CardContent>
                            <Box sx={{textAlign:"end"}}>
                            <Typography component="button" sx={{color:"red",border:"none",backgroundColor:"white"}}>
                                    Done
                            </Typography>
                           </Box>
                        </React.Fragment>
                        </Typography>
                   </Box>
                   </Box>
                   </Box>
                   <Box sx={{position:"relative"}}>
                   <Box className="back-color">
                    BHK
                    <Typography 
                    component="i"
                    variant=""
                    sx={{marginTop:"2px",marginLeft:"5px",color:"#d8232a"
                    }}>
                     <FaAngleDown/>
                    </Typography>
                   </Box>
                   <Box sx={{display:{xs:"none",sm:"none",md:"none"},position:"absolute",top:"60px",right:"-200px"}}>
                    <Typography sx={{padding:"10px 15px",backgroundColor:"white",width:"500px",border:"2px solid gray",boxShadow:"0px 0px 5px gray"}}>
                    <React.Fragment> 
                            <CardContent>
                            <Typography component="div" variant="p" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block"}}>
                                    <i style={{verticalAlign:"middle",marginRight:"5px"}}><IoAddCircle/></i>
                                     1 BHK
                                    </Typography>
                                    <Typography component="div" variant="p" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block",marginLeft:"15px"}}>
                                    <i style={{verticalAlign:"middle",marginRight:"5px"}}><IoAddCircle/></i>
                                        2 BHK
                                    </Typography>
                                    <Typography component="div" variant="p" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block",marginLeft:"15px"}}>
                                    <i style={{verticalAlign:"middle",marginRight:"5px"}}><IoAddCircle/></i>
                                        3BHK
                                    </Typography>
                                    <Typography component="div" variant="p" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block",marginLeft:"15px"}}>
                                        <i style={{verticalAlign:"middle",marginRight:"5px"}}><IoAddCircle/></i>
                                        4 BHK
                                    </Typography>
                            </CardContent>
                            <Box sx={{textAlign:"end"}}>
                            <Typography component="button" sx={{color:"red",border:"none",backgroundColor:"white"}}>
                                    Done
                            </Typography>
                           </Box>
                        </React.Fragment>
                        </Typography>
                   </Box>
                   </Box>
                   <Box className="back-color">
                   Posted By
                    <Typography 
                    component="i"
                    variant=""
                    sx={{marginTop:"2px",marginLeft:"5px",color:"#d8232a"
                    }}>
                     <FaAngleDown/>
                    </Typography>
                   </Box>
                   <Box className="back-color">
                   More filters
                    <Typography 
                    component="i"
                    variant=""
                    sx={{marginTop:"2px",marginLeft:"5px",color:"#d8232a"
                    }}>
                     <FaAngleDown/>
                    </Typography>
                   </Box>
               </Box>
               </Typography>
               </Box>
            </Container>
         </Box>
        </>
    )
}

export default Header