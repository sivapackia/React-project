import React, { useEffect, useState } from "react";
import { MdLocationOn,MdHome,MdOutlineCurrencyRupee} from "react-icons/md";
import { BsSearch} from "react-icons/bs";
import './Banner.scss'
import { Box, Container, } from "@mui/material";
import Typography from '@mui/material/Typography';
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaAngleDown} from "react-icons/fa";
import Carousel from './Carousel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useDispatch, useSelector } from "react-redux";
import { click } from "@testing-library/user-event/dist/click";
import {Budgetmax, Budgetmin, Flatupdate, updateProperty} from "../../Reducer"
// import { propTypes } from "react-bootstrap/esm/Image";

const Banner=()=>{

   
    const State=useSelector(({data})=>data)
    // console.log(State)
    var dispatch = useDispatch()

    

    const[one,setOne]=useState(false)
    const [min, setmin] = useState(0);
    const [max, setmax] = useState(0);
    const [Budget, setBudget] = useState("Budget");
    const[property,setProperty]=useState("property")
    const[flats,setFlats]=useState("")
    const[flatstrue,setFlatsTrue]=useState(false)
    const[villa,setVilla]=useState("")
    const[villatrue,setVillaTrue]=useState(false)
    const[onebhk,setOnebhk]=useState("")
    const[onebhktrue,setOnebhkTrue]=useState(false)
    const[twobhk,setTwobhk]=useState("")
    const[twobhktrue,setTwobhkTrue]=useState(false)
    const[threebhk,setThreebhk]=useState("")
    const[threebhktrue,setThreebhkTrue]=useState(false)
    const[city,setCity]=useState("")
    const[prize,setPrize]=useState(false)
    const[flat,setFlat]=useState(false)
    const[town,setTown]=useState(false)
    // const[place,setPlace]=useState("Enter City,Locality,Project")
    // const[villageTrue,setVillageTrue]=useState(false)
    // const[chennai,setChennai]=useState("chennai")
    // const[tenkasi,setTenkasi]=useState("tenkasi")

    const Handle=(event)=>{
        if(event.target.name=="town"){
            setCity((event.target.value).toLowerCase())       
        }
    }
    console.log(city)

    const Mobile=()=>{
        a(`/Mobile`)
    }

useEffect(()=>{
console.log(min,max)
if(min===0 && max ===0){
    setBudget("budget")
}

else if(min===0){
    setBudget(` Upto ${max}`)
}

else if(max===0){
    setBudget(` Greater than ${min}`)
}
else{
    setBudget(`${min}-${max}`)
}

},[min,max])

    const submit=(e)=>{
     const x=State.Array.some((value,index)=>{
        return value.place===city 
        })
        console.log(x)
   

        if(x===true){
            let y=State.Array.find((value,index)=>{
                return value.place===city  
            })

            console.log(y.id)
            a(`/Component?Ind=${y.id}&Place=${city}&max=${max}&min=${min}&flat=${flats}&villa=${villa}&onebhk=${onebhk}&twobhk=${twobhk}&threebhk=${threebhk}`)
        }
        else if(x===false){
            alert("Enter Correct City")
        }
    }
   

    const Click=()=>{
        setPrize(!prize)
        setFlat(false)  
        setTown(false) 
    }
   

    const Clicks=()=>{
        setFlat(!flat)
        setPrize(false) 
        setTown(false)
    }


    const Townn=()=>{
        setTown(!town)
        setPrize(false)
        setFlat(false) 
    }



        const handleChange = (event) => {

            if(event.target.name==="min"){
                console.log(event.target.value)
            setmin(event.target.value);
        }

            if(event.target.name==="max"){
                console.log(event.target.value)

                setmax(event.target.value);
            }
        };
      

    const a=useNavigate()
    const[param]=useSearchParams()
    const name=param.get('name')
    const[chief,setCheif]=useState(name)

   console.log(property)


const Flatt=()=>{
    setFlatsTrue(!flatstrue)  
}

useEffect(()=>{
    if(flatstrue===true){
        setFlats("flat") 
    }
    else{
        setFlats("")  
    }
  },[flats,flatstrue])

useEffect(()=>{
    if(flatstrue===true && villatrue===true){
        setProperty("Flat+1")
      }
      else if(flatstrue===true){
        setProperty("Flat") 
      }

      else if(villatrue===true){
        setProperty("House Villa")
       
      }

      else{
        setProperty("Property")
      }
},[property,flatstrue,villatrue])

const[place,setPlace]=useState()
const[chennaiTrue,setChennaiTrue]=useState(false)
const[tenkasiTrue,setTenkasiTrue]=useState(false)
const[maduraiTrue,setMaduraiiTrue]=useState(false)
const[tirunelveliTrue,setTirunelveliTrue]=useState(false)

const Chennaifunction=()=>{
    setChennaiTrue(!chennaiTrue)
    setTenkasiTrue(false)
    setTirunelveliTrue(false)
    setMaduraiiTrue(false)
}

const Tenkasifunction=()=>{
    setTenkasiTrue(!tenkasiTrue) 
    setChennaiTrue(false)
    setTirunelveliTrue(false)
    setMaduraiiTrue(false)
}

const Maduraifunction=()=>{
    setMaduraiiTrue(!maduraiTrue)
    setChennaiTrue(false)
    setTenkasiTrue(false)
    setTirunelveliTrue(false)
}

const Tirunelvelifunction=()=>{
    setTirunelveliTrue(!tirunelveliTrue)
    setChennaiTrue(false)
    setTenkasiTrue(false)
    setMaduraiiTrue(false)
}

useEffect(()=>{
    if(chennaiTrue===true){
        setPlace("Chennai")
        setCity("chennai")
    }

    else if(tenkasiTrue===true){
        setPlace("Tenkasi")
        setCity("tenkasi")
    }

    else if(maduraiTrue===true){
        setPlace("Madurai")
        setCity("madurai")
    }

    else if(tirunelveliTrue===true){
        setPlace("Tirunelveli")
        setCity("tirunelveli")
    }

    else{
        setPlace("Enter City,Locality,Project") 
        setCity("")
    }
},[chennaiTrue,place,city,tenkasiTrue,tirunelveliTrue,maduraiTrue])
   

const Homevilla=()=>{
    setVillaTrue(!villatrue)  
}

 useEffect(()=>{
        if(villatrue===true){
            setVilla("villa") 
        }
        else{
            setVilla("")  
        }
      },[villa,villatrue])

const One=()=>{
    setOnebhkTrue(!onebhktrue)
}

useEffect(()=>{
    if(onebhktrue===true){
        setOnebhk("1") 
    }
    else{
        setOnebhk("") 
    }
  },[onebhk,onebhktrue])

const Two=()=>{
    setTwobhk("2")
    setTwobhkTrue(!twobhktrue)
}

useEffect(()=>{
    if(twobhktrue===true){
        setTwobhk("2")
    }
    else{
        setTwobhk("") 
    }
  },[twobhk,twobhktrue])

const Three=()=>{
    setThreebhkTrue(!threebhktrue)
}

useEffect(()=>{
    if(threebhktrue===true){
        setThreebhk("3")
    }
    else{
        setThreebhk("")
    }
  },[threebhk,threebhktrue])

    return(
        <>
        <Box className="chief" sx={{cursor:"pointer"}}>
        <Container maxWidth="xl">
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Box sx={{width:{sm:"100%",xs:"100%",md:"70%"}, flexGrow: 1, display: { xs: 'block', sm: 'block',md:'block',lg:'block' }}}>
           
                <Box sx={{width:"100%",flexGrow: 1, display: { xs: 'block', sm: 'block',lg:'block',md:'block'}}}>
                    <Typography
                    component="div"
                    variant="p"
                     className="wel-back"
                     fontSize={{xs:"20px",sm:"35px"}}
                     >
                     Welcome back! <span style={{color:"red",fontWeight:"800"}}>{name}</span> Let’s continue your search
                    </Typography>
                </Box>
                <Box sx={{width:"100%",flexGrow: 1, display: { xs: 'block', sm: 'block',md:'block',lg:'block'}}}>
                    <Box component="ul" className="flex">
                    <Typography
                    component="li"
                    sx={{fontWeight:"800",fontSize:{xs:"10px",sm:"18px"}}}
                    
                     >
                    <a href="#">Buy</a>
                    </Typography>
                    <Typography
                    component="li"
                    sx={{fontWeight:"800",fontSize:{xs:"10px",sm:"18px"}}}
                    
                     >
                    <a href="#">PG</a>
                  
                    {/* <li><a href="#"><span>Post Free Property Ad</span></a></li>  */}
                    </Typography>
                    <Typography
                    component="li"
                    sx={{fontWeight:"800",fontSize:{xs:"10px",sm:"18px"}}}
                    
                     >
                    <a href="#">Plot</a>
                    </Typography>
                    <Typography
                    component="li"
                    sx={{fontWeight:"800",fontSize:{xs:"10px",sm:"18px"}}}
                    
                     >
                    <a href="#">Commercial</a>
                    </Typography>
                    <Typography
                    component="li"
                    sx={{fontWeight:"800",fontSize:{xs:"10px",sm:"18px"}}}
                    
                     >
                    <a href="#">Post Free Property Ad</a>
                    </Typography>
                </Box>
                </Box>
                <Box sx={{textAlign:{xs:'start',md:"center"}}}>
                    <Typography
                    component="div"
                    className="round"
                    sx={{flexGrow: 1, display: { xs: 'none', sm: 'none',md:'block'},width: {xs:'350px',sm:'600px',md:'950px'}}}
                    >
                    <Box className="align">   
                    {/* <Box sx={{width:{xs:'100%',sm:'100%',md:'30%'}, display: { xs: 'none', sm: 'none',md:'block'}}} className="">
                    <Box component="form">
                    <i style={{verticalAlign:"unset",paddingLeft:"5px"}}><MdLocationOn/></i> 
                    <Typography 
                    component="input"
                    variant=""
                    className="Input"
                      // type="text"  name="town" value={city} onChange={Handle} placeholder="Enter City,Locality,Project"
                    sx={{fontSize:{xs:"14px",sm:"17px"}}}
                    >    
                    </Typography>
                    </Box>
                    </Box> */}

                    <Box sx={{width:{xs:'100%',sm:'100%',md:'32%'}, display: { xs: 'none', sm: 'none',md:'block'}}} className="">
                    <Box component="form"  onClick={Townn}>
                    <i style={{verticalAlign:"middle",paddingLeft:"5px"}}><MdLocationOn/></i> 
                    <Typography 
                    component="span"
                    variant=""
                    className=""
                    sx={{fontSize:{xs:"14px",sm:"17px"}}}
                    > 
                    {place}  
                    </Typography>
                    <i style={{fontSize:"18px",marginLeft:"15px",verticalAlign:"middle"}}><FaAngleDown/></i> 
                    </Box>
                    </Box>

                   

                    <Box sx={{width:{xs:'100%',sm:'100%',md:'30%'}, display: { xs: 'block', sm: 'block',md:'none'}}} className="">
                    <Box component="form">
                    <i style={{verticalAlign:"unset",paddingLeft:"5px"}}><MdLocationOn/></i> 
                    <Typography 
                    component="input"
                    variant=""
                    // type="text"  name="town" value={city} onChange={Handle} placeholder="Enter City,Locality,Project"
                    onClick={()=>Mobile()}
                    placeholder="Enter City,Locality,Project"
                    sx={{fontSize:{xs:"14px",sm:"17px"}}}
                    />    
                    </Box>
                    </Box>
                    
                    <Box sx={{width:{xs:'100%',sm:'100%',md:'25%'}, display: { xs: 'none', sm: 'none',md:'flex'},alignItems:"center",justifyContent:"center"}} className=""  onClick={Clicks}> 
                    <i style={{fontSize:"18px"}}><MdHome/></i>
                    <Typography 
                    component="div"
                    variant="h6"
                    sx={{display:"inline-block",color:"gray",fontWeight:"bold",fontSize:"18px",marginLeft:"15px"}}
                    >
                    {property}
                    </Typography>
                    <i style={{fontSize:"18px",marginLeft:"15px"}}><FaAngleDown/></i>
                    </Box>
                    <Box sx={{width:{xs:'100%',sm:'100%',md:'30%'}, display: { xs: 'none', sm: 'none',md:'flex'},alignItems:"center",justifyContent:"start"}}  className="position" onClick={Click}> 
                    <i style={{fontSize:"18px"}}><MdOutlineCurrencyRupee/></i>
                    <Typography 
                    component="div"
                    variant="h6"
                    sx={{display:"inline-block",color:"gray",fontWeight:"bold",fontSize:"18px",marginLeft:"10px"}}
                    >
                    {Budget}
                    </Typography>
                    <i style={{fontSize:"18px",marginLeft:"15px"}}><FaAngleDown/></i>
                    </Box>
                    </Box>
                    <Box className="" sx={{width:{xs:'100%',sm:'50%',md:'20%'}, display: { xs: 'block', sm: 'block',md:'block'}}}>
                    <Box component="div" className="" onClick={submit} sx={{display:{xs:"none",sm:"none",md:"block"}}}>
                        <Typography 
                        component="i"
                        className="search"
                        >
                        <BsSearch/>
                           <span>Search</span> 
                        </Typography>
                    </Box>
                    <Box component="div" className="" sx={{display:{xs:"block",sm:"block",md:"none"}}}>
                        <Typography 
                        component="i"
                        className="search"
                        onClick={()=>Mobile()}
                        >
                        <BsSearch/>
                           <span>Search</span> 
                        </Typography>
                    </Box>
                    </Box>
                    </Typography>
                </Box>
        </Box>
        <Box sx={{width:{sm:"100%",xs:"100%",md:"30%"},display:{xs:"none",sm:"none",md:"block"}}}>
         <Carousel/>
        </Box>
        </Box>
    { prize &&
        <Box component="div" sx={{boxShadow:"0px 0px 10px gray",padding:"10px 15px",backgroundColor:"white",height:"450px",width:"18%",display:{xs:"none",sm:"none",md:"block"}}} className="absalute">
                    <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <Box sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block',md:'block',lg:'block'}}}>
            <Typography
            component="div"
            variant="p"
            sx={{border:"1px solid gray",display:"inline-block",padding:"5px 10px",borderRadius:"40px",margin:"20px 0px"}}
            >
          Min Price
            </Typography>
              <Typography 
            component="div"
            variant=""
            className="Budget"
            >
                 <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Min</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={min}
                            name="min"
                            label="Min"
                            onChange={handleChange}
                            >
                            <MenuItem value={0}>Min</MenuItem>
                            <MenuItem value={5000}>5000</MenuItem>
                            <MenuItem value={10000}>10000</MenuItem>
                            <MenuItem value={15000}>15000</MenuItem>
                            <MenuItem value={20000}>20000</MenuItem>
                            <MenuItem value={25000}>25000</MenuItem>
                            <MenuItem value={30000}>30000</MenuItem>
                            <MenuItem value={35000}>35000</MenuItem>
                            <MenuItem value={40000}>40000</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
            </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none',md:'block',lg:'block' }}}>
            <Typography
            component="div"
            variant="p"
            sx={{border:"1px solid gray",display:"inline-block",padding:"5px 10px",borderRadius:"20px",margin:"20px 0px"}}
            >
          Max Price
            </Typography>
        
        <Typography 
            component="div"
            variant=""
            className="Budget"
            sx={{marginLeft:"10px"}}
            >
                <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Max</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={max}
                            label="Max"
                            name="max"
                            onChange={handleChange}
                            >
                            <MenuItem value={0}>Max</MenuItem>
                            <MenuItem value={5000}>5000</MenuItem>
                            <MenuItem value={10000}>10000</MenuItem>
                            <MenuItem value={15000}>15000</MenuItem>
                            <MenuItem value={20000}>20000</MenuItem>
                            <MenuItem value={25000}>25000</MenuItem>
                            <MenuItem value={30000}>30000</MenuItem>
                            <MenuItem value={35000}>35000</MenuItem>
                            <MenuItem value={40000}>40000</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
            </Typography>
        </Box>
        </Box>
        </Box>
}

{flat && 
       <Box component="div" sx={{border:"0.5px solid gray",padding:"10px 15px",backgroundColor:"white",width:"35%",display:{xs:"none",sm:"none",md:"block"}}} className="accord">
        <Box>
        <Typography 
        component="div">
             <div>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Residential</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                       <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"50%"}}>
                        <Typography
                        component="option"
                        variant="p"
                        sx={{border:"1px solid black",padding:"5px 15px",borderRadius:"20px",backgroundColor:flatstrue?"pink":""}}
                        onClick={()=>Flatt()}
                        >
                         Flat
                        </Typography>
                        <Typography
                        component="option"
                        variant="p"
                        sx={{border:"1px solid black",padding:"5px 15px",borderRadius:"20px",backgroundColor:villatrue?"pink":""}}
                        onClick={()=>Homevilla()}
                        >
                         House/Villa
                        </Typography>
                       </Box>
                       <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"50%"}}>
                        <Typography
                        component="option"
                        variant="p"
                        sx={{border:"1px solid black",padding:"5px 15px",borderRadius:"20px",marginTop:"20px",backgroundColor:onebhktrue?"pink":""}}
                        onClick={()=>One()}
                        >
                         l Bhk
                        </Typography>
                        <Typography
                        component="option"
                        variant="p"
                        sx={{border:"1px solid black",padding:"5px 15px",borderRadius:"20px",marginTop:"20px",backgroundColor:twobhktrue?"pink":""}}
                        onClick={()=>Two()}
                        >
                         2 Bhk
                        </Typography>
                        <Typography
                        component="option"
                        variant="p"
                        sx={{border:"1px solid black",padding:"5px 15px",borderRadius:"20px",marginTop:"20px",backgroundColor:threebhktrue?"pink":""}}
                        onClick={()=>Three()}
                        >
                         3 Bhk
                        </Typography>
                       </Box>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Commercial</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                        <Typography
                        component="div"
                        variant="p"
                        sx={{border:"1px solid black",padding:"5px 5px",borderRadius:"20px",width:"20%",display:"inline-block"}}
                        >
                         Office space
                        </Typography>
                        <Typography
                        component="div"
                        variant="p"
                        sx={{border:"1px solid black",padding:"5px 5px",borderRadius:"20px",width:"30%",display:"inline-block"}}
                        >
                         Shop/Show Room
                        </Typography>
                        <Typography
                        component="div"
                        variant="p"
                        sx={{border:"1px solid black",padding:"5px 5px",borderRadius:"20px",width:"30%",display:"inline-block"}}
                        >
                         Commercial Land
                        </Typography>
                       </Box>
                       <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                        <Typography
                        component="div"
                        variant="p"
                        sx={{border:"1px solid black",padding:"5px 5px",borderRadius:"20px",width:"28%",marginTop:"15px",display:"inline-block"}}
                        >
                         Coworking Space
                        </Typography>
                        <Typography
                        component="div"
                        variant="p"
                        sx={{border:"1px solid black",padding:"5px 5px",borderRadius:"20px",width:"32%",marginTop:"15px",display:"inline-block"}}
                        >
                         WareHouse/Godown
                        </Typography>
                        <Typography
                        component="div"
                        variant="p"
                        sx={{border:"1px solid black",padding:"5px 5px",borderRadius:"20px",width:"30%",marginTop:"15px",display:"inline-block"}}
                        >
                         Industrial Buliding
                        </Typography>
                       </Box>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Other Property Type</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly",width:'60%'}}>
                        <Typography
                        component="div"
                        variant="p"
                        sx={{border:"1px solid black",padding:"5px 10px",borderRadius:"20px",display:"inline-block"}}
                        >
                        Agricultural Land
                        </Typography>
                        <Typography
                        component="div"
                        variant="p"
                        sx={{border:"1px solid black",padding:"5px 10px",borderRadius:"20px",display:"inline-block"}}
                        >
                         Farm House
                        </Typography>
                       </Box>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
        </Typography>

       </Box>
       </Box>
}

{town && 
<Box component="div" sx={{border:"0.5px solid black",padding:"10px 15px",backgroundColor:"white",width:"35%",display:{xs:"none",sm:"none",md:"block"}}} className="accords">
        <Box>
        <Typography 
        component="div">
             <div>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Select city</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                       <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly",width:"100%"}}>
                        <Typography
                        component="option"
                        variant="p"
                        sx={{border:"1px solid black",padding:"5px 15px",borderRadius:"20px",backgroundColor:chennaiTrue?"pink":""}}
                        onClick={Chennaifunction}
                        >
                         Chennai
                        </Typography>
                        <Typography
                        component="option"
                        variant="p"
                        sx={{border:"1px solid black",padding:"5px 15px",borderRadius:"20px",backgroundColor:tenkasiTrue?"pink":""}}
                        onClick={Tenkasifunction}
                        >
                         Tenkasi
                        </Typography>
                        <Typography
                        component="option"
                        variant="p"
                        sx={{border:"1px solid black",padding:"5px 15px",borderRadius:"20px",backgroundColor:maduraiTrue?"pink":""}}
                        onClick={Maduraifunction}
                        >
                         Madurai
                        </Typography>
                        <Typography
                        component="option"
                        variant="p"
                        sx={{border:"1px solid black",padding:"5px 15px",borderRadius:"20px",backgroundColor:tirunelveliTrue?"pink":""}}
                        onClick={Tirunelvelifunction}
                        >
                         Tirunelveli
                        </Typography>
                       </Box>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
        </Typography>
       </Box>
       </Box>
}
        </Container>
        </Box>
       
        </>
    )
}

export default Banner