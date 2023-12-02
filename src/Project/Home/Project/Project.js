import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './Project.scss';
import { MdOutlineCurrencyRupee} from "react-icons/md";
import { useNavigate } from "react-router-dom";



const Project=()=>{


    const State=useSelector(
        ({data})=>data
    )

    const a=useNavigate()

    const Detail=(value,index)=>{
        a(`/Gallery?home=${value.home}`)
     }
     
    return(
        <>
        <Box className="Search" sx={{width:{xs:"100%",sm:"100%",md:"100%"}, flexGrow: 1, display: { xs: 'block', sm: 'block',md:'block',lg:'block' }}}>
            <Box  maxWidth="xl" className="container">
            <Box>
            <Typography
            component="div"
            variant="h4"
            sx={{marginTop:{xs:"50px",sm:"50px"},marginBottom:{xs:"10px",sm:"30px"},textAlign:"start",fontWeight:"800",fontSize:{xs:"1.5rem",sm:"2.215rem"}}}
            >
           New Project Gallery
            </Typography>
            </Box>
            <Box sx={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
            {
               State.Arraytwo.map((value,index)=>{
                    return(
                        <Box sx={{width:{xs:"90%",sm:"40%",md:"30%"}, flexGrow: 1, display: { xs: 'block', sm: 'block',md:'block',lg:'block' },paddingRight:"20px",height:{xs:"230px",sm:"230px",md:"230px"},marginBottom:{xs:"20px",sm:"20px",md:"20px"},marginTop:{xs:"20px",sm:"0px",md:"0px"}}}  onClick={()=>Detail(value,index)}>
                        <Typography 
                        component="div"
                        className="card"
                        >
                    <Box className="flex">
                        <Box sx={{width:{xs:"100%",sm:"40%",md:"40%"},marginRight:"10px"}}>
                           <Typography 
                           component="img"
                           height="228px"
                           src={value.image}
                        //    sx={{width:"100%",maxHeight:"xl"}}
                           sx={{width:"100%"}}
                           >
                           </Typography>
                        </Box>
                        <Box sx={{width:{xs:"100%",sm:"60%",md:"60%"}}}>
                            <Typography component="div">
                                <Box>
                                    <Typography component="div" variant="h5" className="head">
                                    {value.head}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component="div" variant="p" className="" sx={{marginTop:"5px"}}>
                                    {value.paragraph}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component="div" variant="p" className="" sx={{marginTop:"5px"}}>
                                    {value.paragraph1}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component="div" variant="p" className="" sx={{marginTop:"15px"}}>
                                    {value.flat}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component="div" variant="a" href="#" className="" sx={{marginTop:"5px"}}>
                                    {<MdOutlineCurrencyRupee/>}
                                    <span style={{marginRight:"5px"}}>{value.lakes}</span>
                                    <span>{value.lakdetail}</span>
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component="div" variant="p" className="" sx={{marginTop:"5px"}}>
                                    {value.foundation}
                                    </Typography>
                                </Box>
                    
                               
                                {/* <p>{value.paragraph}</p> */}
                                {/* <p className="paragraph">{value.paragraph1}</p> */}
                                {/* <p>{value.flat}</p> */}
                                {/* <a href="#">{<MdOutlineCurrencyRupee/>}</a> */}
                                {/* <span>{value.lakes}</span> */}
                                {/* <span>{value.lakdetail}</span> */}
                                {/* <p>{value.foundation}</p> */}
                            </Typography>
                        </Box>
                    </Box>
                        </Typography>
                        </Box>
                    )

                })
            }
        </Box>
        </Box>
        </Box>
        </>
    )
}

export default Project