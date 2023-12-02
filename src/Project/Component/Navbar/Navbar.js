import React from "react";
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
import './Navbar.scss';
import { FaAngleDown } from "react-icons/fa";
import {BsHeart } from "react-icons/bs";
import { AiOutlineMenu,AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


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


 export const Navbar=()=>{

  const a=useNavigate()

  const Home=(e)=>{
      a(`/`)
  }

    return(
        <>
        <Box sx={{ flexGrow: 1 }} className="Header">
        <AppBar position="static" sx={{backgroundColor:{md:"#fff",xs:"#d8232a"}}}>
        <Container  maxWidth="xl">
        <Toolbar>
          <Box sx={{width:{xs:"40%",sm:"60%",md:"50%"},display:"flex",alignItems:"center",justifyContent:{xs:"start",sm:"start",md:"start",lg:"center"}}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: 'block', sm: 'block',md:'none',textAlign:"start" } }}
          >
          <MenuIcon />
          </IconButton>
          <Box>
          <Typography
            noWrap
            component="img"
            src="https://m.media-amazon.com/images/I/41RRWXVWEUL.png "
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block',md:'none'},height:{xs: '2em', sm: '2em'},
            marginLeft:"0px" }}
          >
          </Typography>
          </Box>

          <Box>
          <Typography
            noWrap
            component="div"
            varient="h6"
            // src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mb-logo-web-white.svg"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block',md:'block' },
          marginLeft:"0px",color:"#d8232a",fontSize:"30px",fontWeight:"800"}}
          onClick={Home}
          >
          Magicbricks
          </Typography>
          </Box>
          <Box>
          <Typography
            noWrap
            component="div"
            variant=""
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none',md:'block' },width:"100%",marginLeft:"20px",fontSize:"15px"}}
          >
              <ul style={{display:"flex",alignItems:"center",justifyContent:{md:"space-evenly"}}}>
               <li style={{listStyleType:"none",marginLeft:"10px"}}><a style={{textDecoration:"none",color:"black",fontWeight:"700"}} href="#" class="">Buys<i style={{color:"#d8232a",marginLeft:"10px",verticalAlign:"middle"}}><FaAngleDown/></i></a></li>
						   <li style={{listStyleType:"none",marginLeft:"10px"}}><a style={{textDecoration:"none",color:"black",fontWeight:"700"}} href="#" class="">Rend<i style={{color:"#d8232a",marginLeft:"10px",verticalAlign:"middle"}}><FaAngleDown/></i></a></li>
						   <li style={{listStyleType:"none",marginLeft:"10px"}}><a style={{textDecoration:"none",color:"black",fontWeight:"700"}} href="#" class="">Sell<i style={{color:"#d8232a",marginLeft:"10px",verticalAlign:"middle"}}><FaAngleDown/></i></a></li>
						   <li style={{listStyleType:"none",marginLeft:"10px"}}><a style={{textDecoration:"none",color:"black",fontWeight:"700"}} href="#" class="">Home Loans<i style={{color:"#d8232a",marginLeft:"10px",verticalAlign:"middle"}}><FaAngleDown/></i></a></li>
               </ul>
          </Typography>
          </Box>
          </Box>
          <Box sx={{width:{xs:"60%",sm:"60%",md:"50%"},display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Box>
          <Typography
            noWrap
            component="div"
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none',md:'block' },marginLeft:"0px",fontSize:"15px",fontWeight:"800",color:"black"}}
          >
            Login
          </Typography>
          </Box>
          <Box>
          <Typography
            noWrap
            component="i"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none',md:'block' },marginLeft:"10px",marginTop:"7px",fontSize:"15px",fontWeight:"800",color:"#d8232a"}}
          >
          <FaAngleDown/>
          </Typography>
          </Box>
          <Box component="div" sx={{display:"flex",alignItems:"center"}}>
          <Box>
          <Typography
            noWrap
            component="i"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block',md:'block' },marginLeft:{md:"40px",xs:"0px",sm:"0px"},marginRight:{md:"10px",sm:"10px"},marginTop:{md:"4px",sm:"9px",xs:"7px"},fontWeight:"800",fontSize:{xs:"20px",sm:"25px",md:"14px"},color:"black"}}
          >
         <AiFillHeart/>
          </Typography>
          </Box>
          <Box>
          <Typography
            noWrap
            component="div"
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none',md:'block' },fontSize:"15px",fontWeight:"800",color:'black'}}
          >
            Shortlist
          </Typography>
          </Box>
          </Box>
          <Box>
          <Typography
            noWrap
            component="i"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none',md:'block' },marginLeft:"10px",marginTop:"7px",fontSize:"15px",color:"#d8232a"}}
          >
          <FaAngleDown/>
          </Typography>
          </Box>
          <Box sx={{position:"relative"}}>
          <Box className="">
          <Typography
            noWrap
            component="div"
            variant="h6"
            sx={{ flexGrow: 1, 
              display: { xs: 'block', sm: 'block',md:'block' },
              marginLeft:{md:"40px",xs:"10px",sm:"10px"},
              backgroundColor:{sm:"#ffc72c",xs:"white"},
              paddingTop:{lg:"5px",md:"5px",xs:"3px",sm:"5px"},
              paddingBottom:{lg:"5px",md:"5px",xs:"3x",sm:"5px"},
              paddingRight:{lg:"110px",md:"110px",xs:"20px",sm:"110px"},
              paddingLeft:{lg:"20px",md:"20px",xs:"20px",sm:"20px"},
              color:"black",
              borderRadius:"30px",
              fontWeight:"700"
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
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block',md:'block' },
            marginLeft:"40px",
            marginLeft:"10px",
            padding:"4px 20px",
            backgroundColor: "white",
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
            padding:"2px 8px",
            backgroundColor: "#ffc72c",
            fontWeight: "bold",
            borderRadius: "30px",
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none',md:'block' }}}>
          <Typography
            noWrap
            component="i"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none',md:'block' },marginLeft:"10px",fontSize:"15px",
            height:"35px",
            width: "35px",
            lineHeight:"35px",
            backgroundColor: "gray",
            borderRadius:"80px",
            display:"flex",
            alignItems: "center",
            justifyContent:"center"
        
        }}
          >
          <AiOutlineMenu/>
          </Typography>
          </Box>
          </Box>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
    
        </>
    )
}