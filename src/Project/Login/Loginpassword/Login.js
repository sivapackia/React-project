import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import './Login.scss';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ChiefName } from "../../Reducer";

const Login=()=>{

    const[name,Username]=useState("")
    const[passwords,UserPasswords]=useState("")
    const[email,UserEmail]=useState("")
    const[error,setError]=useState(false)



    const a=useNavigate()
    const dispatch=useDispatch()


    const Signin=()=>{
        a(`/Signup`)
    }

    const Function=(e)=>{
        if(e.target.name==="name"){
          Username(e.target.value)
          dispatch(ChiefName(e.target.value))
        }
        else if(e.target.name==="email"){
            UserEmail(e.target.value)
          }
          else if(e.target.name==="password"){
            UserPasswords(e.target.value)
          }
      } 

      const Sumbit=(e)=>{
        e.preventDefault()

        if((name==="")||(passwords==="")||(email==="")){
            setError(true)
        }

        else{

            let Detail=JSON.parse(localStorage.getItem("Login-detail"))
            let map= Detail.map((value,index)=>{
                if((value.email===email)&&(value.passwords==passwords)){
                    a(`/?name=${name}`)
                }
                else{
                    alert("Correct Email And Password")
                }
             })
         
        }

      }

    return(
        <>
    <Box component="div" className="Login" sx={{ width:{xs:"100%",sm:"100%",md:"100%"},height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}> 
            <Box className="container">
                <Box sx={{ width:{xs:"90%",sm:"80%",md:"50%"},margin:"auto"}} className="">
                    {/* <Box>
                        <Typography component="div"></Typography>
                    </Box> */}
                    <Box component="form" sx={{border:"2px solid black",padding:"20px 30px"}}>
                        <Box>
                            <Typography component="h1" sx={{textAlign:"center",fontSize:{md:"30px",sm:"25px",xs:"22px"},fontWeight:"800"}}>
                            LOGIN FORM
                            </Typography>
                        </Box>
                        <Box sx={{marginTop:"10p",marginBottom:"10px"}}>
                            <Typography component="label" sx={{width:"100%",fontSize:{xs:"20px",sm:"25px",md:"28px"},fontWeight:"800"}}>
                            User Name
                            </Typography> 
                            <Typography component="input" type="text" name="name" value={name} onChange={Function} placeholder="Enter The User Name" sx={{width:"90%",padding:{xs:"5px",sm:"5px",md:"10px"},borderRadius:"10px",fontWeight:"800",fontSize:{xs:"15px",sm:"25px",md:"25px"},backgroundColor:"#d8232a"}}>
                            </Typography>
                            {error && name==""?<p style={{color:"red",marginBottom:"10px"}}>Not Define Username</p>:""}
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
                            <Typography component="button" onClick={Sumbit} sx={{padding:"6px 10px",backgroundColor:"#d8232a",color:"white",borderRadius:"10px",fontWeight:"800",marginTop:"15px"}}>
                                  SignIn
                            </Typography>
                            <Typography component="button" onClick={Signin}  sx={{padding:"6px 10px",backgroundColor:"#d8232a",color:"white",borderRadius:"10px",fontWeight:"800",marginTop:"15px",marginLeft:"15px"}}>
                                  SignUp
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Login