import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signin.scss';
import { LoginDetail } from "../../Reducer";
import { useDispatch, useSelector } from "react-redux";



const Signin=()=>{
    const[passwords,UserPasswords]=useState("")
    const[email,UserEmail]=useState("")
    const[error,setError]=useState(false)
    const[array,setArray]=useState([])

    const State=useSelector(({data})=>data)
    const a=useNavigate()
    const dispatch=useDispatch()

    const Function=(e)=>{
        if(e.target.name==="email"){
            UserEmail(e.target.value)
            // dispatch(LoginDetail(e.target.value))
          }
          else if(e.target.name==="password"){
            UserPasswords(e.target.value)
            // dispatch(LoginDetail(e.target.value))
          }
      } 

    //   useEffect(()=>{}
    //   ,[email,passwords])

      console.log(State.isLogin)

      const Sumbit=(e)=>{
        e.preventDefault()
        if((passwords==="")||(email==="")){
            setError(true)
        }

        else{
            let Object={email:email,passwords:passwords}
            setArray([...array,Object])
            localStorage.setItem("Login-detail",JSON.stringify([...array,Object]))
            a(`/Login`)
        }

      }
    return(
        <>
        <Box component="div" className="signin" sx={{ width:{xs:"100%",sm:"100%",md:"100%"},height:"70vh",display:"flex",alignItems:"center",justifyContent:"center"}}> 
            <Box className="container">
                <Box sx={{ width:{xs:"100%",sm:"80%",md:"50%"},margin:"auto"}} className="">
                    <Box component="form" sx={{border:"2px solid black",padding:"20px 30px"}}>
                        <Box>
                        <Typography component="h1" sx={{textAlign:"center",fontSize:{md:"30px",sm:"25px",xs:"22px"},fontWeight:"800"}}>
                            Sign In
                            </Typography>
                        </Box>
                        <Box sx={{marginBottom:"10px"}}>
                            <Typography component="label" sx={{width:"100%",marginBottom:"10px",fontSize:{xs:"20px",sm:"25px",md:"28px"},fontWeight:"800"}}>
                            User Email
                            </Typography> 
                            <Typography component="input" type="email" name="email" value={email} onChange={Function} placeholder="Enter The User Email" sx={{width:"90%",padding:{xs:"5px",sm:"5px",md:"10px"},borderRadius:"10px",fontWeight:"800",fontSize:{xs:"15px",sm:"25px",md:"25px"},backgroundColor:"#d8232a"}}>
                            </Typography>
                            {error && email==""?<p style={{color:"red"}}>Not Define Useremail</p>:""}
                        </Box>
                        <Box Box sx={{marginBottom:"10px"}}>
                            <Typography component="label" sx={{width:"100%",marginBottom:"10px",fontSize:{xs:"20px",sm:"25px",md:"28px"},fontWeight:"800"}}>
                            User Password
                            </Typography> 
                            <Typography component="input" type="email" name="password" value={passwords} onChange={Function} placeholder="Enter The User Password" sx={{width:"90%",padding:{xs:"5px",sm:"5px",md:"10px"},borderRadius:"10px",fontWeight:"800",fontSize:{xs:"15px",sm:"25px",md:"25px"},backgroundColor:"#d8232a"}}>
                            </Typography>
                            {error && passwords==""?<p style={{color:"red"}}>Not Define Userpassword</p>:""}
                        </Box>
                        <Box sx={{}}>
                            <Typography component="button" onClick={Sumbit} sx={{padding:{xs:"5px 8px",sm:"8px 10px"},backgroundColor:"#d8232a",color:"white",borderRadius:"10px",fontWeight:"800",marginTop:"15px",fontSize:{xs:"12px",sm:"20px"}}}>
                                  Sumbit
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Signin