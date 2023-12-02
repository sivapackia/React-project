import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRupeeSign,FaBath,FaCarAlt,FaUserAlt} from "react-icons/fa";
import {IoBed } from "react-icons/io5";
import {MdOutlineDoorSliding } from "react-icons/md";
import './Banner.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useSearchParams } from "react-router-dom";
import { BsFillLightbulbFill,BsFillCloudLightningRainFill,BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import {GiFamilyHouse,GiSecurityGate } from "react-icons/gi";
import { PiParkBold,PiCarProfileFill } from "react-icons/pi";
import isDetail from "../../Reducer";



const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
  );

const Banner=()=>{

      const State=useSelector(
        ({data})=>data
      )
      console.log(State)

      const[param]=useSearchParams()
      const Place=param.get('place')
      const homeid=param.get('homeid')
      const ind=param.get('ind')
      const Ind=param.get('Ind')
      console.log(Place)
      console.log(homeid)
      console.log(Ind)
      const dispatch=useDispatch()
      const[update,setUpdate]=useState([])

      const Details=(c,d)=>{
    let a=State.Array.find((a,b)=>{
        return a.id===ind || a.id===Ind
    })
        let b=a.Project.filter((value,index)=>{
            return homeid===value.homeid
        })
        setUpdate(b)
   
      }
      useEffect(Details,[])
      console.log(update)

      const[detail,setDetail]=useState([])
     

    return(
        <>
        <Box sx={{width:{md:"100%",xs:"100%",sm:"100%"},flexGrow: 1, display: { xs: 'block', sm: 'block',lg:'block',md:'block'}}} className="Detail">
            <Box className="container">
                <Box className="card">
                <Box sx={{width:{md:"75%",xs:"100%",sm:"100%"}}}>
                {
                    update.map((value,index)=>{
                        return(
                            <>
                            <Box className="bg">
                            <Box component="div">
                            <Typography 
                            variant="h6"
                            sx={{display:"inline-block",marginRight:"20px"}}
                            >
                             <i style={{fontSize:"15px"}}><FaRupeeSign/></i>
                             {value.rate}
                            </Typography>
                            <span>Get<i style={{fontSize:"13px",margin:"0 5px"}}><FaRupeeSign/></i>{value.cash}</span>
                           </Box>
                           <Box component="div">
                            <Typography 
                            variant="p"
                            sx={{marginTop:"10px"}}
                            >
                            {value.Bhk}
                            <b>{value.sale}</b>
                            </Typography>
                           </Box>
                           <Box sx={{display:"flex",alignItems:"",justifyContent:"space-evenly",flexWrap:"wrap"}}>
                           <Box sx={{width:{md:"40%",sm:"100%",xs:"100%"}}}>
                            <Box>
                                <Typography
                                component="img"
                                src={value.image}
                                sx={{width:"100%",height:"280px",marginTop:"15px",borderRadius:"10px"}}
                                >
                                </Typography>
                            </Box>
                           </   Box>
                           <Box  sx={{marginTop:"15px",width:{md:"60%",sm:"100%",xs:"100%"}}}>

                            <Box className="back" sx={{width:{md:"90%",sm:"90%",xs:"90%"}}}>
                                <Typography 
                                component="div"
                                variant="ul"
                                sx={{display:"flex",alignItems:"center",justifyContent:{md:"space-evenly",sm:"center",xs:"start"},flexWrap:"wrap"}}>
                                    <Typography component="li" sx={{width:{xs:"40%",sm:"20%",md:"20%"}}}><i style={{color:"gray",verticalAlign:"middle",marginLeft:"5px"}}><IoBed/></i>{value.bed}</Typography>
                                    <Typography component="li" sx={{width:{xs:"60%",sm:"35%",md:"35%"}}}><i style={{color:"gray",verticalAlign:"middle",marginLeft:"5px"}}><FaCarAlt/></i>{value.parking}</Typography>
                                    <Typography component="li" sx={{width:{xs:"40%",sm:"20%",md:"20%"}}}><i style={{color:"gray",verticalAlign:"middle",marginLeft:"5px"}}><FaBath/></i>{value.bath}</Typography>
                                    <Typography component="li" sx={{width:{xs:"60%",sm:"25%",md:"25%"}}}><i style={{color:"gray",verticalAlign:"middle",marginLeft:"5px"}}><MdOutlineDoorSliding/></i>{value.finished}</Typography>
                                </Typography>
                            </Box>
                            <Box sx={{marginTop:"25px"}} className="flexx">
                                <Box sx={{width:{md:"30%",sm:"30%",xs:"45%"},marginBottom:"10px",marginRight:"5px"}}>
                                    <Typography
                                    component="div"
                                    variant="ul"
                                    sx={{lineHeight:"22px"}}
                                    >
                                   <li>{value.area}</li>
                                   <li><b>{value.sqft}</b></li>
                                   <li><i style={{verticalAlign:"middle",marginLeft:"5px",fontSize:"13px"}}><FaRupeeSign/></i>{value.sqfts}</li>
                                    </Typography>
                                </Box>
                                <Box sx={{width:{md:"30%",sm:"30%",xs:"45%"}}}>
                                    <Typography
                                    component="div"
                                    variant="ul"
                                    sx={{lineHeight:"22px"}}
                                    >
                                   <li>{value.Del}</li>
                                   <li><b>{value.house}</b></li>
                                    </Typography>
                                </Box>
                                <Box sx={{width:{md:"30%",sm:"30%",xs:"45%"}}}>
                                    <Typography
                                    component="div"
                                    variant="ul"
                                    sx={{lineHeight:"22px"}}
                                    >
                                   <li>{value.pro}</li>
                                   <li><b>{value.nest}</b></li>
                                    </Typography>
                                </Box>
                                <Box sx={{width:{md:"30%",sm:"30%",xs:"45%"},marginBottom:"10px"}}>
                                    <Typography
                                    component="div"
                                    variant="ul"
                                    sx={{lineHeight:"22px"}}
                                    >
                                   <li>{value.floor}</li>
                                   <li><b style={{fontSize:"15px"}}>{value.size}</b></li>
                                    </Typography>
                                </Box>
                                <Box sx={{width:{md:"30%",sm:"30%",xs:"45%"},marginBottom:"10px"}}>
                                    <Typography
                                    component="div"
                                    variant="ul"
                                    sx={{lineHeight:"22px"}}
                                    >
                                   <li>{value.tra}</li>
                                   <li><b>{value.property}</b></li>
                                    </Typography>
                                </Box>
                                <Box sx={{width:{md:"30%",sm:"30%",xs:"45%"}}}>
                                    <Typography
                                    component="div"
                                    variant="ul"
                                    sx={{lineHeight:"22px"}}
                                    >
                                   <li>{value.status}</li>
                                   <li><b>{value.ready}</b></li>
                                    </Typography>
                                </Box>
                                <Box sx={{width:{md:"30%",sm:"30%",xs:"45%"}}}>
                                    <Typography
                                    component="div"
                                    variant="ul"
                                    sx={{lineHeight:"22px"}}
                                    >
                                   <li>{value.left}</li>
                                   <li><b>{value.num}</b></li>
                                    </Typography>
                                </Box>
                                <Box sx={{width:{md:"30%",sm:"30%",xs:"45%"}}}>
                                    <Typography
                                    component="div"
                                    variant="ul"
                                    sx={{lineHeight:"22px"}}
                                    >
                                   <li>{value.fur}</li>
                                   <li><b>{value.unfurnish}</b></li>
                                    </Typography>
                                </Box>
                                <Box sx={{width:{md:"30%",sm:"30%"},display:{xs:"none",sm:"block"}}}>
                                    <Typography
                                    component="div"
                                    variant="ul"
                                    sx={{lineHeight:"22px"}}
                                    >
                                   <li>{value.park}</li>
                                   <li><b>{value.cover}</b></li>
                                    </Typography>
                                </Box>

                            </Box>
                           </Box>
                           </Box>
                           <Box sx={{width:{md:"50%",xs:"100%",sm:"100%"}}}>
                            <Box>
                            <Typography
                            component="div"
                            variant="p"
                            sx={{margin:"15px 0px"}}>
                                <b style={{display:"inline-block",backgroundColor:"#ffc72c",padding:"3px 5px",marginRight:"10px"}}>{value.offer}</b>
                                <Typography component="span"  sx={{display:"inline-block",backgroundColor:"pink",padding:"3px 5px",marginTop:{xs:"10px"}}}>
                                {value.off}
                                </Typography>
                            </Typography>
                           </Box>
                           </Box>
                           <Box className="" sx={{display:{md:"flex",sm:"flex"},alignItems:"center"}}>
                           <Box sx={{width:{md:"50%",sm:"45%",xs:"100%"}}}>
                           <Box sx={{marginTop:"30px",width:{md:"80%",sm:"100%",xs:"100%"},display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <Typography
                            component="div"
                            variant="p"
                            sx={{backgroundColor:"#d8232a",color:"#fff",fontSize:{md:"18px",sm:"15px",xs:"12px"},padding:"8px 20px",borderRadius:"20px",fontWeight:"700",display:"inline-block",width:{xs:"45%"}}}
                            >
                            {value.bulid}
                            </Typography>
                            <Typography
                            component="div"
                            variant="p"
                            sx={{marginLeft:"10px",backgroundColor:"#fff",color:"#d8232a",border:"1px solid #d8232a",fontSize:{md:"18px",sm:"15px",xs:"12px"},width:{xs:"45%"},padding:"8px 20px",borderRadius:"20px",fontWeight:"700",display:"inline-block"}}
                            >
                            {value.bulid}
                            </Typography>
                           </Box>
                           </Box>
                           <Box sx={{width:{md:"50%",xs:"100%",sm:"55%"}}}>
                            <Box>
                            <Typography 
                            component="div"
                            variant="p"
                            sx={{textAlign:{md:"end",xs:"start",sm:"end"},verticalAlign:"middle",marginTop:"30px"}}>
                           <i style={{marginRight:"5px",color:"blue"}}><FaUserAlt/></i> {value.contact}
                            </Typography>
                           </Box>
                           </Box>
                           </Box>
                           </Box>
                           <Box sx={{width:{xs:"100%",md:"100%",sm:"100%"}}}>
                            <Box className="bgs">
                                <Box component="ul"> 
                                <Typography
                                component="li"
                                sx={{listStyleType:"none",fontSize:{md:"25px",xs:"18px",sm:"20px"},fontWeight:"700",marginBottom:"10px"}}>
                                   {value.why}
                                </Typography>
                                <Typography
                                component="li"
                                sx={{listStyleType:"none",fontSize:{md:"20px",xs:"12px",sm:"18px"}}}>
                                   {value.three}
                                </Typography>
                                <Typography
                                component="li"
                                sx={{listStyleType:"none",fontSize:{md:"20px",xs:"12px",sm:"18px"}}}>
                                   {value.one}
                                </Typography>
                                <Typography
                                component="li"
                                sx={{listStyleType:"none",fontSize:{md:"20px",xs:"12px",sm:"18px"}}}>
                                  {value.two}
                                </Typography>
                                </Box>
                            </Box>
                           </Box>
                           <Box className="address">
                           <Box component="div" className="bg" sx={{width:{xs:"92%",md:"97%",sm:"96%"}}}>
                            <Box>
                            <Typography
                            component="div"
                            variant="h5"
                            sx={{fontWeight:"700"}}
                            >
                            More Details
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                            component="div"
                            variant="ul"
                            >
                                <li className="flexxxx">
                                <Typography  component="div" sx={{width:{md:"30%",xs:"50%"},lineHeight:"40px"}}>Rental value</Typography>
                                <Typography sx={{width:{md:"30%",xs:"50%"}}}><b><i>< FaRupeeSign/></i>{value.rental}</b></Typography>
                                </li>
                                <li className="flexxxx">
                                <Typography  component="div" sx={{width:{md:"30%",xs:"50%"},lineHeight:"40px"}}> Security Deposite</Typography>
                                <Typography sx={{width:{md:"30%",xs:"50%"}}}><b><i>< FaRupeeSign/></i>{value.dep}</b></Typography>
                                </li>
                               
                               
                                <li className="flexxxx">
                                <Typography  component="div" sx={{width:{md:"30%",xs:"50%"},lineHeight:"40px"}}>Address </Typography>
                                <Typography sx={{width:{md:"30%",xs:"50%"}}}><b> {value.address}</b></Typography>
                                </li>
                              
                               
                                <li className="flexxxx">
                                <Typography  component="div" sx={{width:{md:"30%",xs:"50%"},lineHeight:"40px"}}>Furnishing</Typography>
                                <Typography sx={{width:{md:"30%",xs:"50%"}}}><b>{value.unfurnish}</b></Typography>
                                </li>
                                
                                <li className="flexxxx">
                                <Typography  component="div" sx={{width:{md:"30%",xs:"50%"},lineHeight:"40px"}}> Age Of Construction</Typography>
                                <Typography sx={{width:{md:"30%",xs:"50%"}}}><b>{value.new}</b></Typography>
                                </li>
                               
                                
                                <li className="flexxxx">
                                <Typography  component="div" sx={{width:{md:"30%",xs:"50%"},lineHeight:"40px"}}> Water Availability</Typography>
                                <Typography sx={{width:{md:"30%",xs:"50%"}}}><b>{value. Availability}</b></Typography>
                                </li>
                               
                                
                            </Typography>
                            <li className="flexxxx">
                                <Typography  component="div" sx={{width:{md:"100%",xs:"100%"},lineHeight:"40px"}}> Description: <b>{value.descrip}</b></Typography>
                                </li>
                                
                               

                            <Box sx={{width:{md:"50%",xs:"100%",sm:"100%"}}}>
                           <Box sx={{marginTop:"30px",display:{xs:"flex"},alignItems:"center",justifyContent:{xs:"start",sm:"start",md:"start"}}}>
                            <Typography
                            component="div"
                            variant="p"
                            sx={{backgroundColor:"#d8232a",color:"#fff",fontSize:{md:"18px",sm:"18px",xs:"12px"},padding:"8px 20px",borderRadius:"20px",fontWeight:"700",display:"inline-block",width:{xs:"45%",sm:"20%",md:"25%"}}}
                            >
                            Contact Owner
                            </Typography>
                            <Typography
                            component="div"
                            variant="p"
                            sx={{marginLeft:"20px",backgroundColor:"#fff",color:"#d8232a",border:"1px solid #d8232a",fontSize:{md:"18px",sm:"18px",xs:"12px"},padding:"8px 20px",borderRadius:"20px",fontWeight:"700",display:"inline-block",width:{xs:"45%",sm:"18%",md:"25%"}}}
                            >
                            Report Owner
                            </Typography>
                           </Box>
                           </Box>
                           </Box>
                        </Box>
                        </Box>
                        <Box className="address">
                        <Box className="bg" sx={{width:{sm:"96%",md:"97%",xs:"92%"}}}>
                               <Box>
                                    <Typography 
                                    component="div"
                                    variant="h5"
                                    sx={{fontWeight:"700",}}
                                    >
                                     Amenities
                                    </Typography>
                                </Box>
                                <Box sx={{width:{sm:"100%",md:"100%",xs:"100%"}}}>
                                    <Typography
                                    component="div"
                                    variant="ul"
                                    sx={{display:"flex",alignItems:"center",justifyContent:"start",flexWrap:"wrap",marginTop:"20px"}}
                                    >
                                        <Typography component="li" sx={{width:{md:"30%",xs:"50%",sm:"30%"},display:"flex",alignItems:"center",justifyContent:"start",flexWrap:"wrap"}}>
                                        <Typography sx={{marginRight:"15px"}}><i style={{verticalAlign:"middle"}}><BsFillLightbulbFill/></i></Typography>
                                        <Typography component="div" sx={{fontSize:{md:"1rem",xs:"0.7rem"}}}><b style={{color:"gray"}}>{value.power}</b></Typography>
                                        </Typography>

                                        <Typography component="li" sx={{width:{md:"30%",xs:"50%",sm:"30%"},display:"flex",alignItems:"center",justifyContent:"start",flexWrap:"wrap"}}>
                                        <Typography sx={{marginRight:"15px"}}><i style={{verticalAlign:"middle"}}><BsFillCloudLightningRainFill/></i></Typography>
                                        <Typography component="div" sx={{fontSize:{md:"1rem",xs:"0.7rem"}}}><b style={{color:"gray"}}>{value.rain}</b></Typography>
                                        </Typography>

                                        
                                     
                                        <Typography component="li" sx={{width:{md:"30%",xs:"50%",sm:"30%"},display:"flex",alignItems:"center",justifyContent:"start",flexWrap:"wrap"}}>
                                        <Typography sx={{marginRight:"15px"}}><i style={{verticalAlign:"middle"}}>< GiFamilyHouse/></i></Typography>
                                        <Typography component="div" sx={{fontSize:{md:"1rem",xs:"0.7rem"}}}><b style={{color:"gray"}}> {value.clup}</b></Typography>
                                        </Typography>

                                        
                                       
                                        <Typography component="li" sx={{width:{md:"30%",xs:"50%",sm:"30%"},display:"flex",alignItems:"center",justifyContent:"start",flexWrap:"wrap"}}>
                                        <Typography sx={{marginRight:"15px"}}><i style={{verticalAlign:"middle"}}><PiParkBold/></i></Typography>
                                        <Typography component="div" sx={{fontSize:{md:"1rem",xs:"0.7rem"}}}><b style={{color:"gray"}}> {value.parks}</b></Typography>
                                        </Typography>

                                        
                                       
                                        <Typography component="li" sx={{width:{md:"30%",xs:"50%",sm:"30%"},display:"flex",alignItems:"center",justifyContent:"start",flexWrap:"wrap"}}>
                                        <Typography sx={{marginRight:"15px"}}><i style={{verticalAlign:"middle"}}> < PiCarProfileFill/></i></Typography>
                                        <Typography component="div" sx={{fontSize:{md:"1rem",xs:"0.7rem"}}}><b style={{color:"gray"}}>{value.car}</b></Typography>
                                        </Typography>

                                       
                                       
                                        <Typography component="li" sx={{width:{md:"30%",xs:"50%",sm:"30%"},display:"flex",alignItems:"center",justifyContent:"start",flexWrap:"wrap"}}>
                                        <Typography sx={{marginRight:"15px"}}><i style={{verticalAlign:"middle"}}>< GiSecurityGate/></i></Typography>
                                        <Typography component="div" sx={{fontSize:{md:"1rem",xs:"0.7rem"}}}><b style={{color:"gray"}}>{value.sec}</b></Typography>
                                        </Typography>

                                        
                                        
                                    </Typography>
                                    <Typography
                                    component="div"
                                    sx={{width:{md:"30%",xs:"100%",sm:"50%"},textAlign:"start",marginTop:"25px"}}
                                    >
                                    <a href="#" style={{color:"black"}}><i style={{verticalAlign:"middle",margin:"0px 5px"}}><BsFillFileEarmarkMedicalFill/></i><b>Download Brochure</b></a>  
                                    </Typography>
                            </Box>
                            </Box>
                            </Box>
                           </>
                        )
                    }) 
                }
                </Box>
                <Box sx={{width:{md:"25%",sm:"100%",xs:"100%"}, marginTop: "30px",marginLeft:"15px",display:{xs:"none",sm:"none",md:"block"}}} >
                  <Card sx={{ minWidth: 275,padding:"20px 15px",boxShadow:"0px 0px 10px gray" }}>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{ fontWeight:"800",marginTop:"15px" }}>
                        Conatact Owner
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ fontWeight:"800",marginTop:"15px" }}>
                        Sarada Sarada +91-91
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" sx={{backgroundColor:"#d8232a",color:"#fff",fontSize:"15px",padding:"8px 20px",borderRadius:"20px",fontWeight:"700",display:"inline-block",marginTop:"15px"}}>Check Availabilty</Button>
                    </CardActions>
                    </Card>
                </Box>
            </Box>
            </Box>
        </Box>
        </>
    )
}

export default Banner