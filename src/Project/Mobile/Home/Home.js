import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { GiFamilyHouse } from "react-icons/gi";
import {IoAddCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './Home.scss'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';






const Mobile=()=>{

    const a=useNavigate()
    const Home=()=>{
    a(`/`)
       }

    const State=useSelector(
    ({data})=>data
       )
       const[city,setCity]=useState("")
       const[town,setTown]=useState("City")
       const [min, setmin] = useState(0);
       const [max, setmax] = useState(0);
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
     

       const Handle=(event)=>{
        if(event.target.name=="town"){
            setCity((event.target.value).toLowerCase())      
        }
    }
    console.log(city)

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
       
    const sumbit=()=>{
       let x= State.Array.some((value,index)=>{
          return value.place===city
        })

        if(x===true){
            let y=State.Array.find((value,index)=>{
                return value.place===city
            })
            console.log(y.id)
            a(`/Component?Ind=${y.id}&Place=${city}&max=${max}&min=${min}&flat=${flats}&villa=${villa}&onebhk=${onebhk}&twobhk=${twobhk}&threebhk=${threebhk}`)
        }
        else if(x===false){
          alert("Enter Corrtect City")
        }
    }

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
    <Box sx={{display:{xs:"block",sm:"block",md:"none"},width:{xs:"100%",sm:"100%"}}} className="Mobile">
    <Box sx={{boxShadow:"0px 0px 10px gray",padding:"20px 3px"}}>
    <Box sx={{width:{xs:"95%",sm:"95%"},margin:"auto"}}>
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <Typography component="div" variant="h6" sx={{fontWeight:"700",color:"gray",marginTop:"15px"}}>
            <i style={{verticalAlign:"middle",marginRight:"10px",color:"#d8232a"}} onClick={()=>Home()}><BsFillArrowLeftCircleFill/></i>
         Filter
        </Typography>
        <Typography component="div" variant="h6" sx={{color:"#d8232a",fontWeight:"700"}}>
         Reset
        </Typography>
    </Box>
    <Box sx={{width:{xs:"100%",sm:"100%",borderBottom:"1px solid gray"}}}>
        <Box component="ul" sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
            <Typography component="li" sx={{listStyleType:"none"}}>
                 Buy
            </Typography>
            <Typography component="li" sx={{listStyleType:"none"}}>
                 Rent
            </Typography>
            <Typography component="li" sx={{listStyleType:"none"}}>
                 Plot
            </Typography>
            <Typography component="li" sx={{listStyleType:"none"}}>
                 Commercial
            </Typography>
        </Box>
    </Box>
    <Box  sx={{width:{xs:"100%",sm:"100%"}}}>
        <Box>
            <Typography variant="h6" sx={{marginTop:"20px",fontWeight:"600",color:"gray",fontSize:"15px",marginBottom:"5px"}}>
                Select City/Localities
            </Typography>
        </Box>
        <Box sx={{marginBottom:"10px",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
            <Typography component="div" variant="p" sx={{padding:"5px 10px",fontWeight:"600",borderRadius:"20px",border:"1px solid gray",display:"inline-block",backgroundColor:"#a4f4a4"}}>
                Select City
            </Typography>
            {/* <Typography component="div" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block",marginLeft:"15px"}}> 
            <i style={{verticalAlign:"middle",marginRight:"5px"}}><IoAddCircle/></i>
            <Typography component="input" className="Input" type="text" value={city} name="town" sx={{width:"80px",fontSize:"15px"}}placeholder="Add more" onChange={Handle}/>
            </Typography> */}
            <Typography component="div" sx={{padding:"5px 10px",width:{xs:"40%",sm:"20%"},borderRadius:"20px",marginLeft:"10px"}}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Add More</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={city}
          onChange={Handle}
          name="town"
          label="Add More"
        >
        {/* <MenuItem value={"AddMore"}>Add More</MenuItem> */}
        <MenuItem value={"addmore"}>Add More</MenuItem>
        <MenuItem value={"chennai"}>Chennai</MenuItem>
        <MenuItem value={"tenkasi"}>Tenkasi</MenuItem>
        <MenuItem value={"madurai"}>Madurai</MenuItem>
        <MenuItem  value={"tirunelveli"}>Tirunelveli</MenuItem>
        </Select>
      </FormControl>
            </Typography>
        </Box>
    </Box>
    <Box  sx={{width:{xs:"100%",sm:"100%"}}}>
        <Typography component="p" sx={{marginTop:"20px",fontWeight:"700",color:"gray",fontSize:"15px",marginBottom:"5px"}}>Budget</Typography>
        <Box component="div" sx={{width:{xs:"100%",sm:"100%"}}}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={min}
          onChange={handleChange}
          name="min">
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
        <Typography component="span" sx={{margin:"0px 10px",verticalAlign:"-webkit-baseline-middle"}}>
            To
        </Typography>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={max}
          onChange={handleChange}
          name="max"
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
    </Box>
    <Box sx={{width:{xs:"100%",sm:"100%"}}}>
        <Typography component="p" sx={{marginTop:"20px",fontWeight:"700",color:"gray",fontSize:"15px",marginBottom:"5px"}}>Property Type</Typography>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <Box component="div" sx={{width:{xs:"30%",sm:"30%"},padding:"5px 20px",border:"1px solid gray",display:"inline-block",borderRadius:"5px",textAlign:"center",backgroundColor:flatstrue?"#a4f4a4":""}}>
            <Typography component="div" onClick={()=>Flatt()}>
                <Typography component="i" sx={{fontSize:"30px",color:"gray"}}>
            <BiSolidBuildingHouse/>
            </Typography>
            <Typography component="h6">
            Flat
            </Typography>
            </Typography>
        </Box>
        <Box component="div" sx={{width:{xs:"30%",sm:"30%"},padding:"5px 20px",border:"1px solid gray",display:"inline-block",borderRadius:"5px",textAlign:"center",backgroundColor:villatrue?"#a4f4a4":""}}>
            <Typography component="div" onClick={()=>Homevilla()}>
                <Typography component="i" sx={{fontSize:"30px",color:"gray"}}>
            <GiFamilyHouse/>
            </Typography>
            <Typography component="h6">
            House/Villa
            </Typography>
            </Typography>
        </Box>
        </Box>
        <Box>
            <Typography  sx={{marginTop:"20px",fontWeight:"700",color:"gray",fontSize:"15px",marginBottom:"5px"}}>
                BHK
            </Typography>
            <Box sx={{marginBottom:"10px",display:"flex",alignItems:"center",justifyContent:"space-around"}} >
            <Typography component="div" variant="p" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block",backgroundColor:onebhktrue?"#a4f4a4":""}} onClick={()=>One()}>
                <i style={{verticalAlign:"middle",marginRight:"5px"}}><IoAddCircle/></i>
                    1 BHK
            </Typography>
            <Typography component="div" variant="p" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block",marginLeft:"15px",backgroundColor:twobhktrue?"#a4f4a4":""}} onClick={()=>Two()}>
            <i style={{verticalAlign:"middle",marginRight:"5px"}}><IoAddCircle/></i>
                   2 BHK
            </Typography>
            <Typography component="div" variant="p" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block",marginLeft:"15px",backgroundColor:threebhktrue?"#a4f4a4":""}} onClick={()=>Three()}>
            <i style={{verticalAlign:"middle",marginRight:"5px"}}><IoAddCircle/></i>
                   3 BHK
            </Typography>
            {/* <Typography component="div" variant="p" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block",marginLeft:"15px"}}>
                <i style={{verticalAlign:"middle",marginRight:"5px"}}><IoAddCircle/></i>
                   4 BHK
            </Typography> */}
        </Box>
        </Box>
        <Box component="div" sx={{textAlign:"center",marginTop:"25px"}}>
            <Typography 
            component="button"
            sx={{padding:"8px 25px",backgroundColor:"#d8232a",color:"white",fontWeight:"700",borderRadius:"15px"}} onClick={sumbit}>
            View Propertyes
            </Typography>
        </Box>
    </Box>
    </Box>
    </Box>
    </Box>
        </>
    )
}

export default Mobile