import React, { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from "@mui/material";
import { FiChevronDown } from "react-icons/fi";
import './Header.scss';
import TemporaryDrawer from "../../Component/Header/Drawer";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export const Header=()=>{
  const a=useNavigate()
  const Logins=()=>{
      a(`/Login`)
  }

    return(
        <>
        <Box sx={{ flexGrow: 1,position:"sticky",zIndex:"999",top:"0px",width:{xs:"100%",md:"100%",sm:"100%"},cursor:"pointer"}} className="Header" >
        <AppBar position="static" sx={{backgroundColor:"#d8232a"}}>
        <Container  maxWidth="xl">
        <Toolbar>
          <Box sx={{width:{xs:"40%",md:"40%",sm:"40%"},display:"flex",alignItems:"center",justifyContent:{xs:"start",sm:"start",md:"start",lg:"center"}}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{display: { xs: 'block',sm:'block',md:'block',lg:"none"} }}
          >
          <i style={{verticalAlign:"sub"}}><TemporaryDrawer/></i> 
          
          </IconButton>
          <Box>
          <Typography
            noWrap
            component="img"
            src="https://m.media-amazon.com/images/I/41RRWXVWEUL.png"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block',lg:"none"},
            height:{xs: '2em', sm: '2em'}}}
          >
          </Typography>
          </Box>

          <Box>
          <Typography
            noWrap
            component="img"
            src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mb-logo-web-white.svg"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none',md:'block' },
          marginLeft:"0px" }}
          >
          </Typography>
          </Box>
          <Box>
          <Typography
            noWrap
            component="div"
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none',md:'block' },marginLeft:"40px"}}
          >
            Chennai
          </Typography>
          </Box>
          <Box>
          <Typography
            noWrap
            component="i"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none',md:'block' },marginLeft:"10px",marginTop:"7px",fontSize:"20px"}}
          >
          <FiChevronDown/>
          </Typography>
          </Box>
          </Box>
          <Box sx={{width:{lg:"60%",xs:"60%",sm:"60%",md:"60%"},display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Box>
          <Typography
            noWrap
            component="div"
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none',md:'block' },marginLeft:"0px"}}
          >
            MB Prime
          </Typography>
          </Box>
          <Box>
          <Typography
            noWrap
            component="i"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none',md:'block' },marginLeft:"10px",marginTop:"7px",fontSize:"20px"}}
          >
          <FiChevronDown/>
          </Typography>
          </Box>
          <Box onClick={Logins} sx={{display:"flex",alignItems:"center"}}>
          <Box>
          <Typography
            noWrap
            component="div"
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none',md:'block' },marginLeft:"40px"}}
          >
            Login
          </Typography>
          </Box>
          <Box>
          <Typography
            noWrap
            component="i"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none',md:'block' },marginLeft:"10px",marginTop:"7px",fontSize:"20px"}}
          >
          <FiChevronDown/>
          </Typography>
          </Box>
          </Box>
          <Box sx={{position:"relative"}}>
          <Box className="">
          <Typography
            noWrap
            component="div"
            variant="h6"
            sx={{ flexGrow: 1, 
              display: { xs:'block',sm:'block',md:'block' },
              marginLeft:"40px",
              backgroundColor:"white",
              paddingTop:{lmd:"5px",xs:"3px",sm:"5px"},
              paddingBottom:{md:"5px",xs:"3x",sm:"5px"},
              paddingRight:{md:"110px",xs:"20px",sm:"110px"},
              paddingLeft:{lg:"20px",sm:"20px",xs:"20px"},
              color:"black",
              borderRadius:"30px"
             }}
              >
            Post Property
          </Typography>
          </Box>
          <Box>
          <Typography
            noWrap
            component="div"
            variant=""
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'},
            marginLeft:"40px",
            marginLeft:"10px",
            padding:"4px 20px",
            backgroundColor: "#ffc72c",
            fontWeight: "bold",
            borderRadius: "20px",
            fontSize:"15px",
            color:"black",
            position:"absolute",
            top:"7px",
            right:"20px"}}
          >
            FREE
          </Typography>
          </Box>

          <Box>
          <Typography
            noWrap
            component="div"
            variant=""
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none'},
            marginLeft:"40px",
            marginLeft:"10px",
            padding:"4px 8px",
            backgroundColor: "#ffc72c",
            fontWeight: "bold",
            borderRadius: "20px",
            fontSize:{xs:"10px"},
            color:"black",
            position:"absolute",
            top:"-7px",
            right:"0px"}}
          >
            FREE
          </Typography>
          </Box>
          </Box>
          </Box>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
    
        </>
    )
}

export default Header