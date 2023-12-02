import { Box, Container, Typography } from "@mui/material";
import React from "react";
import './Footer.scss';
import { BiLogoFacebook,BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter ,AiFillYoutube} from "react-icons/ai";



const Footer=()=>{
    return(
        <>
        <Box className="Footer" sx={{width:{md:"100%",sx:"100%",xs:"100%"},flexGrow: 1, display: {xs: 'block', sm: 'block',md:'block'}}}>
            <Container className="" maxWidth="xl">
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
                    <Box sx={{width:{md:"49%",xs:"100%",sm:"100%"}}}>
                        <Typography
                        component="div"
                        sx={{}}
                        >
                        <h1 style={{marginBottom:"10px"}}>About Magicbricks</h1>
                        <p style={{marginBottom:"15px"}}>Magicbricks is a full stack service provider for all real estate needs...<a href="#">Read more</a></p>
                        <Box component="div">
                        <Typography component="h1" variant="" style={{marginBottom:"10px",fontWeight:"700",fontSize:{xs:"1em",sm:"2em"}}}>More from our Network</Typography>
                        </Box>
                        <Box sx={{display:{xs:"none",sm:"block"}}}>
                        <Box component="div" className="flex">
                            <Box component="div">
                                   <p><a href="#">Teams of india</a></p>
                                   <p><a href="#">Max xp</a></p>
                            </Box>
                            <Box component="div">
                                    <p><a href="#">Economic Times</a></p>
                                    <p><a href="#">iDiva</a></p>
                            </Box>
                            <Box component="div">
                                   <p><a href="#">Navbharat times</a></p>
                                   <p><a href="#">TimesJops</a></p>
                            </Box>
                            <Box component="div">
                                    <p><a href="#">India Times</a></p>
                                    <p><a href="#">Gudgets Now</a></p> 
                            </Box>
                            <Box component="div">
                                    <p> <a href="#">FlimFair</a></p>
                            </Box>
                        </Box>
                        </Box>
                        <Box  sx={{display:{xs:"block",sm:"none"}}}>
                        <Box component="div" className="flex">
                            <Box sx={{width:{xs:"50%"}}}>
                            <Typography component="p">
                            <a href="#">Teams of india</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#">Max xp</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#">Economic Times</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#">iDiva</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#">Navbharat times</a>
                            </Typography>
                            </Box>
                            <Box sx={{width:{xs:"50%"}}}>
                            <Typography component="p">
                            <a href="#">TimesJops</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#">India Times</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#">Gudgets Now</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#">FlimFair</a>
                            </Typography>
                            </Box>
                        </Box>
                        </Box>


                        <Box component="div" className="footer-flex" sx={{display:"flex",alignItems:"center",flexWrap:{xs:"wrap",sm:"nowrap",md:"nowrap"}}}>
                            <Box component="div" className="footer-end" sx={{width:{xs:"25%",sm:"10%",md:"20%"}}}>
                                <p>Get it on</p>
                                <p>Google Play</p>
                            </Box>
                            <Box component="div" className="footer-end" sx={{width:{xs:"25%",sm:"10%",md:"20%"}}}>
                                <p>Avalible on the</p>
                                <p>App Store</p>
                            </Box>
                            <Box component="div" sx={{display:"flex",alignItems:"center",justifyContent:{md:"start",xs:"center",sm:"start"},width:{xs:"100%",sm:"50%",md:"50%"}}}>
                                <Typography component="i" sx={{backgroundColor:"blue",height:"35px",width:"35px",lineHeight:"40px",color:"white",borderRadius:"100px",display:"inline-block",textAlign:"center",fontSize:"25px",marginTop:"20px",marginLeft:"10px"}}>
                                <BiLogoFacebook/>
                                </Typography>
                                <Typography component="i" sx={{backgroundColor:"#0de0ff",height:"35px",width:"35px",lineHeight:"40px",color:"white",borderRadius:"100px",display:"inline-block",textAlign:"center",fontSize:"25px",marginTop:"20px",marginLeft:"10px"}}>
                                <AiOutlineTwitter/>
                                </Typography>
                                <Typography component="i" sx={{backgroundColor:"red",height:"35px",width:"35px",lineHeight:"40px",color:"white",borderRadius:"100px",display:"inline-block",textAlign:"center",fontSize:"25px",marginTop:"20px",marginLeft:"10px"}}>
                                <AiFillYoutube/>
                                </Typography>
                                <Typography component="i" sx={{backgroundColor:"#18088c",height:"35px",width:"35px",lineHeight:"40px",color:"white",borderRadius:"100px",display:"inline-block",textAlign:"center",fontSize:"25px",marginTop:"20px",marginLeft:"10px"}}>
                                <BiLogoLinkedin/>
                                </Typography>
                            </Box>
                        </Box>
                        </Typography>
                    </Box>
                    <Box sx={{width:{md:"49%",xs:"100%",sm:"100%"},marginLeft:"15px"}}>
                        <Box component="div" className="footer-anchour" sx={{display:{xs:"none",sm:"block"}}}>
                            <Box  component="h1" style={{marginBottom:"10px"}}>Properties in India</Box>
                            <p style={{marginBottom:"10px"}}>
                            <a href="#">Property of New Delhi</a>
                            <a href="#">Property of New Mumbai</a>
                            <a href="#">Property of New Chennai</a>
                            <a href="#">Property of New Pune</a>
                            <a href="#">Property of New Nodia</a>
                            <a href="#">Property of New Gurgan</a>
                            <a href="#">Property of New Bangalore</a>
                            <a href="#">Property of New Ahamedadbad</a>
                        </p>
                        </Box>

                        <Box  sx={{display:{xs:"block",sm:"none"}}}>
                        <Box  component="h1">Properties in India</Box>
                        <Box component="div" className="flex">
                            <Box sx={{width:{xs:"45%"}}}>
                            <Typography component="p">
                            <a style={{fontSize:"12px"}} href="#">Property of New Delhi</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#" style={{fontSize:"12px"}} >Property of New Mumbai</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#" style={{fontSize:"12px"}} >Property of New Chennai</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#" style={{fontSize:"12px"}} >Property of New Pune</a>
                            </Typography>
                            </Box>
                            <Box sx={{width:{xs:"55%"}}}>
                            <Typography component="p">
                            <a href="#" style={{fontSize:"12px"}} >Property of New Nodia</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#" style={{fontSize:"12px"}} >Property of New Gurgan</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#" style={{fontSize:"12px"}} >Property of New Bangalore</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#" style={{fontSize:"12px"}} >Property of New Ahamedadbad</a>
                            </Typography>
                            </Box>
                        </Box>
                        </Box>

                        <Box component="div"  className="footer-anchour" sx={{display:{xs:"none",sm:"block"}}}>
                        <h1 style={{marginBottom:"10px"}}>New Projects in India</h1>
                        <p>
                            <a href="#">New Projects in New Delhi</a>
                            <a href="#">New Projects in New Mumbai</a>
                            <a href="#">New Projects in New Chennai</a>
                            <a href="#">New Projects in New Pune</a>
                            <a href="#">New Projects in New Nodia</a>
                            <a href="#">New Projects in New Gurgan</a>
                            <a href="#">New Projects in New Bangalore</a>
                            <a href="#">New Projects in New Ahamedadbad</a>
                        </p>
                        </Box>

                        <Box  sx={{display:{xs:"block",sm:"none"}}}>
                        <Box  component="h1">Properties in India</Box>
                        <Box component="div" className="flex">
                            <Box sx={{width:{xs:"45%"}}}>
                            <Typography component="p">
                            <a style={{fontSize:"12px"}} href="#">New Projects in Delhi</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#" style={{fontSize:"12px"}} >New Projects in Mumbai</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#" style={{fontSize:"12px"}} >New Projects in Chennai</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#" style={{fontSize:"12px"}} >New Projects in Pune</a>
                            </Typography>
                            </Box>
                            <Box sx={{width:{xs:"55%"}}}>
                            <Typography component="p">
                            <a href="#" style={{fontSize:"12px"}} >New Projects in Nodia</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#" style={{fontSize:"12px"}} >New Projects in Gurgan</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#" style={{fontSize:"12px"}} >New Projects in Bangalore</a>
                            </Typography>
                            <Typography component="p">
                            <a href="#" style={{fontSize:"12px"}} >New Projects in Ahamedadbad</a>
                            </Typography>
                            </Box>
                        </Box>
                        </Box>

                    </Box>
                </Box>
            </Container>
        </Box>
        </>
    )
}

export default Footer