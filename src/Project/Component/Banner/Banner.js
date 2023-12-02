import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import './Banner.scss';
import { useSelector } from "react-redux";
import { MdOutlineCurrencyRupee} from "react-icons/md";
import { BsFillHeartFill,BsThreeDotsVertical} from "react-icons/bs";
import { FaShare} from "react-icons/fa";
import {TiTickOutline } from "react-icons/ti";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { GiFamilyHouse } from "react-icons/gi";
import {IoAddCircle } from "react-icons/io5";
import { BsSearch} from "react-icons/bs";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';






const Banner=()=>{
   
    const[param]=useSearchParams()
    const ind=param.get('Ind')
    const Max=param.get('max')
    const Min=param.get('min')
    const Place=param.get('Place')
    const flat=param.get('flat')
    const villa=param.get('villa')
    const onebhk=param.get('onebhk')
    const twobhk=param.get('twobhk')
    const threebhk=param.get('threebhk')

    const[min,setmin]=useState(Min)
    const[max,setmax]=useState(Max)
    const[type,setType]=useState(false)
    const[BHK,setBHK]=useState(false)
    const[Budget,setBudget]=useState(false)
    const[Budgett,setBudgett]=useState("Budget")
    const[maxx,setmaxx]=useState(false)
    const[minn,setminn]=useState(false)
    const[rate,setrate]=useState(false)
    const[property,setProperty]=useState("Property Type")
    const[BHKK,setBHKK]=useState("BHK")
    const[flats,setFlats]=useState("")
    const[flatstrue,setFlatsTrue]=useState(false)
    const[Villa,setVilla]=useState("")
    const[villatrue,setVillaTrue]=useState(false)
    const[onebhktrue,setOnebhkTrue]=useState(false)
    const[onebhkk,setOnebhkk]=useState("1")
    const[twobhktrue,setTwobhkTrue]=useState(false)
    const[twobhkk,setTwobhkk]=useState("2")
    const[threebhktrue,setThreebhkTrue]=useState(false)
    const[threebhkk,setThreebhkk]=useState("3")

    const State=useSelector(
        ({data})=>data
    )
console.log(ind,max,min,Place,flat,villa)
useEffect(()=>{
    handleChange()
},[min,max])
const[city,setCity]=useState(Place)
    const n=useNavigate()

    const submit=(a,b)=>{
               n(`/Detail?homeid=${a.homeid}&ind=${ind}&place=${Place}`)
           }

           const Go=()=>{
            n(`/Mobile`)
           }

    const[update,setUpdate]=useState([])

    const Component=(a,b)=>{
       let x=State.Array.find((value,index)=>{
        return ind===value.id
       })
       console.log(x)

        if(villa==="villa" && flat==="flat" && onebhk==="1" && twobhk==="2" && threebhk==="3"){
            setOnebhkTrue(!onebhktrue)
            setFlatsTrue(!flatstrue) 
            setVillaTrue(!villatrue) 
            setTwobhkTrue(!twobhktrue)
            setThreebhkTrue(!threebhktrue) 
        let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
            maxx ?  ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3"))) &&   (v.prize <= Number(min)) : 
            minn ? ( (v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3"))) &&  ((v.prize >= Number(max) )) :
            ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3")))
           })
           setUpdate(y)
        console.log(y)
        }

        else if(villa==="villa" && flat==="flat" && onebhk==="1" && twobhk==="2"){
            setOnebhkTrue(!onebhktrue)
            setFlatsTrue(!flatstrue) 
            setVillaTrue(!villatrue) 
            setTwobhkTrue(!twobhktrue)
        let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="2"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
            maxx ?  ( (v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="2"))) &&   (v.prize <= Number(min)) : 
            minn ? ( (v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="2"))) &&  ((v.prize >= Number(max) )) :
            ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="2")))
           })
           setUpdate(y)
        console.log(y)
        }

       else if(villa==="villa" && flat==="flat" && onebhk==="1" && threebhk==="3"){
        setOnebhkTrue(!onebhktrue)
        setFlatsTrue(!flatstrue) 
        setVillaTrue(!villatrue)
        setThreebhkTrue(!threebhktrue)  
        let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="3"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
            maxx ?  ( (v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="3"))) &&   (v.prize <= Number(min)) : 
            minn ? ( (v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="3"))) &&  ((v.prize >= Number(max) )) :
            ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="3")))
           })
           setUpdate(y)
        console.log(y)
       }
    
       else if(villa==="villa" && flat==="flat" && twobhk==="2" && threebhk==="3"){
        setFlatsTrue(!flatstrue) 
        setVillaTrue(!villatrue) 
        setTwobhkTrue(!twobhktrue)
        setThreebhkTrue(!threebhktrue) 
        let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="villa" && (v.bhkk==="2" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="2" || v.bhkk==="3"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
            maxx ?  ( (v.ptype==="villa" && (v.bhkk==="2" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="2" || v.bhkk==="3"))) &&   (v.prize <= Number(min)) : 
            minn ? ( (v.ptype==="villa" && (v.bhkk==="2" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="2" || v.bhkk==="3"))) &&  ((v.prize >= Number(max) )) :
            ((v.ptype==="villa" && (v.bhkk==="2" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="2" || v.bhkk==="3")))
           })
           setUpdate(y)
        console.log(y)
       }

        else{
        if(flat==="flat" && villa==="villa" && onebhk==="1" ){
            setOnebhkTrue(!onebhktrue)
            setFlatsTrue(!flatstrue) 
            setVillaTrue(!villatrue) 
            let y = x.Project.filter((v,i)=>{
                return rate ? ((v.ptype==="villa" && v.bhkk==="1")  || (v.ptype==="flat" && v.bhkk==="1")) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
            maxx ?  ( (v.ptype==="villa" && v.bhkk==="1")  || (v.ptype==="flat" && v.bhkk==="1")) &&   (v.prize <= Number(min)) : 
            minn ? ( (v.ptype==="villa" && v.bhkk==="1")  || (v.ptype==="flat" && v.bhkk==="1")) &&  ((v.prize >= Number(max) )) :
            ((v.ptype==="villa" && v.bhkk==="1")  || (v.ptype==="flat" && v.bhkk==="1"))
            })
            setUpdate(y)
            console.log(y)
        }

        else if(flat==="flat" && villa==="villa" && twobhk==="2" ){
            setFlatsTrue(!flatstrue) 
            setVillaTrue(!villatrue) 
            setTwobhkTrue(!twobhktrue)
        let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="villa" && v.bhkk==="2")  || (v.ptype==="flat" && v.bhkk==="2")) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
            maxx ?  ( (v.ptype==="villa" && v.bhkk==="2")  || (v.ptype==="flat" && v.bhkk==="2")) &&   (v.prize <= Number(min)) : 
            minn ? ( (v.ptype==="villa" && v.bhkk==="2")  || (v.ptype==="flat" && v.bhkk==="2")) &&  ((v.prize >= Number(max) )) :
            ((v.ptype==="villa" && v.bhkk==="2")  || (v.ptype==="flat" && v.bhkk==="2"))
        })
        setUpdate(y)
        console.log(y)
        }
 
        else if(flat==="flat" && villa==="villa" && threebhk==="3" ){
            setFlatsTrue(!flatstrue) 
            setVillaTrue(!villatrue)
            setThreebhkTrue(!threebhktrue)  
           let y = x.Project.filter((v,i)=>{ 
            return rate ? ((v.ptype==="villa" && v.bhkk==="3")  || (v.ptype==="flat" && v.bhkk==="3")) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
            maxx ?  ( (v.ptype==="villa" && v.bhkk==="3")  || (v.ptype==="flat" && v.bhkk==="3")) &&   (v.prize <= Number(min)) : 
            minn ? ( (v.ptype==="villa" && v.bhkk==="3")  || (v.ptype==="flat" && v.bhkk==="3")) &&  ((v.prize >= Number(max) )) :
            ((v.ptype==="villa" && v.bhkk==="3")  || (v.ptype==="flat" && v.bhkk==="3"))
           })
           setUpdate(y)
           console.log(y)
        }

    
      else if(flat==="flat" && onebhk==="1" && twobhk==="2" && threebhk==="3"){
        setFlatsTrue(!flatstrue) 
        setOnebhkTrue(!onebhktrue)
        setTwobhkTrue(!twobhktrue)
        setThreebhkTrue(!threebhktrue) 
        let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3" ))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
            maxx ?  ( (v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3" ))) &&   (v.prize <= Number(min)) : 
            minn ? ( (v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3" ))) &&  ((v.prize >= Number(max) )) :
            ((v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3" )))
       })
       setUpdate(y)
       console.log(y)  
       }

     else if(flat==="flat" && onebhk==="1" && twobhk==="2"){
        setFlatsTrue(!flatstrue) 
        setOnebhkTrue(!onebhktrue)
        setTwobhkTrue(!twobhktrue)
        let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="2"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                    maxx ?  ( (v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="2"))) &&   (v.prize <= Number(min)) : 
                    minn ? ( (v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="2"))) &&  ((v.prize >= Number(max) )) :
                    ((v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="2")))
           })
           setUpdate(y)
           console.log(y)  
     }

     else if(flat==="flat" && twobhk==="2" && threebhk==="3"){
        setFlatsTrue(!flatstrue) 
        setTwobhkTrue(!twobhktrue)
        setThreebhkTrue(!threebhktrue) 
      let y = x.Project.filter((v,i)=>{
        return rate ? ((v.ptype==="flat" && (v.bhkk==="2" || v.bhkk==="3"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
        maxx ?  ( (v.ptype==="flat" && (v.bhkk==="2" || v.bhkk==="3"))) &&   (v.prize <= Number(min)) : 
        minn ? ( (v.ptype==="flat" && (v.bhkk==="2" || v.bhkk==="3"))) &&  ((v.prize >= Number(max) )) :
        ((v.ptype==="flat" && (v.bhkk==="2" || v.bhkk==="3")))
       })
       setUpdate(y)
       console.log(y)  
      }

     else if(flat==="flat" && onebhk==="1" && threebhk==="3"){
        setFlatsTrue(!flatstrue) 
        setOnebhkTrue(!onebhktrue)
        setThreebhkTrue(!threebhktrue) 
       let y = x.Project.filter((v,i)=>{
        return rate ? ((v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="3"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                    maxx ?  ( (v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="3"))) &&   (v.prize <= Number(min)) : 
                    minn ? ( (v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="3"))) &&  ((v.prize >= Number(max) )) :
                    ((v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="3")))
       })
       setUpdate(y)
       console.log(y)  
     }

     else if(villa==="villa" && onebhk==="1" && twobhk==="2"){
        setOnebhkTrue(!onebhktrue)
        setVillaTrue(!villatrue) 
        setTwobhkTrue(!twobhktrue)
        let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                    maxx ?  ( (v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2"))) &&   (v.prize <= Number(min)) : 
                    minn ? ( (v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2"))) &&  ((v.prize >= Number(max) )) :
                    ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2")))
           })
           setUpdate(y)
           console.log(y)  
     }

     else if(villa==="villa" && twobhk==="2" && threebhk==="3"){
        setVillaTrue(!villatrue) 
        setTwobhkTrue(!twobhktrue)
        setThreebhkTrue(!threebhktrue) 
        let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="villa" && (v.bhkk==="2" || v.bhkk==="3"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
            maxx ?  ( (v.ptype==="villa" && (v.bhkk==="2" || v.bhkk==="3"))) &&   (v.prize <= Number(min)) : 
            minn ? ( (v.ptype==="villa" && (v.bhkk==="2" || v.bhkk==="3"))) &&  ((v.prize >= Number(max) )) :
            ((v.ptype==="villa" && (v.bhkk==="2" || v.bhkk==="3")))
         })
         setUpdate(y)
         console.log(y)  
        }

     else if(villa==="villa" && onebhk==="1" && threebhk==="3"){
        setOnebhkTrue(!onebhktrue)
        setVillaTrue(!villatrue) 
        setThreebhkTrue(!threebhktrue) 
        let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="3"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
            maxx ?  ( (v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="3"))) &&   (v.prize <= Number(min)) : 
            minn ? ( (v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="3"))) &&  ((v.prize >= Number(max) )) :
            ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="3")))
        })
        setUpdate(y)
        console.log(y)  
      }

    else{
        if(flat==="flat" && onebhk==="1"){
            setFlatsTrue(!flatstrue) 
            setOnebhkTrue(!onebhktrue)
            let y = x.Project.filter((v,i)=>{
                return rate ? ( v.ptype==="flat" && v.bhkk==="1") && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                maxx ?  ( v.ptype==="flat" && v.bhkk==="1") &&   (v.prize <= Number(min)) : 
                minn ? ( v.ptype==="flat" && v.bhkk==="1") &&  ((v.prize >= Number(max) )) :
                ( v.ptype==="flat" && v.bhkk==="1")
               })
               setUpdate(y)
               console.log(y)
        }

        else if(flat==="flat" && twobhk==="2"){
            setFlatsTrue(!flatstrue) 
            setTwobhkTrue(!twobhktrue)
            let y = x.Project.filter((v,i)=>{
                return rate ? ( v.ptype==="flat" && v.bhkk==="2") && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                maxx ?  ( v.ptype==="flat" && v.bhkk==="2") &&   (v.prize <= Number(min)) : 
                minn ? ( v.ptype==="flat" && v.bhkk==="2") &&  ((v.prize >= Number(max) )) :
                ( v.ptype==="flat" && v.bhkk==="2")
               })
               setUpdate(y)
               console.log(y)
        }

        else if(flat==="flat" && threebhk==="3"){
            setFlatsTrue(!flatstrue) 
            setThreebhkTrue(!threebhktrue) 

            let y = x.Project.filter((v,i)=>{
                return rate ? ( v.ptype==="flat" && v.bhkk==="3") && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                maxx ?  ( v.ptype==="flat" && v.bhkk==="3") &&   (v.prize <= Number(min)) : 
                minn ? ( v.ptype==="flat" && v.bhkk==="3") &&  ((v.prize >= Number(max) )) :
                ( v.ptype==="flat" && v.bhkk==="3")
               })
               setUpdate(y)
               console.log(y)
        }

        else{
            if(villa==="villa" && onebhk==="1"){
                setOnebhkTrue(!onebhktrue)
                setVillaTrue(!villatrue) 
                let y = x.Project.filter((v,i)=>{
                    return rate ? ( v.ptype==="villa" && v.bhkk==="1") && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                    maxx ?  ( v.ptype==="villa" && v.bhkk==="1") &&   (v.prize <= Number(min)) : 
                    minn ? ( v.ptype==="villa" && v.bhkk==="1") &&  ((v.prize >= Number(max) )) :
                    ( v.ptype==="villa" && v.bhkk==="1")
                   })
                   setUpdate(y)
                   console.log(y)
            }

         else if(villa==="villa" && twobhk==="2"){
            setVillaTrue(!villatrue) 
            setTwobhkTrue(!twobhktrue)
                let y = x.Project.filter((v,i)=>{
                    return rate ? ( v.ptype==="villa" && v.bhkk==="2") && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                        maxx ?  ( v.ptype==="villa" && v.bhkk==="2") &&   (v.prize <= Number(min)) : 
                        minn ? ( v.ptype==="villa" && v.bhkk==="2") &&  ((v.prize >= Number(max) )) :
                        ( v.ptype==="villa" && v.bhkk==="2")
                   })
                   setUpdate(y)
                   console.log(y)
            }

            else if(villa==="villa" && threebhk==="3"){
                setVillaTrue(!villatrue) 
                setThreebhkTrue(!threebhktrue) 
                let y = x.Project.filter((v,i)=>{
                    return rate ? ( v.ptype==="villa" && v.bhkk==="3") && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                        maxx ?  ( v.ptype==="villa" && v.bhkk==="3") &&   (v.prize <= Number(min)) : 
                        minn ? ( v.ptype==="villa" && v.bhkk==="3") &&  ((v.prize >= Number(max) )) :
                        ( v.ptype==="villa" && v.bhkk==="3")
                   })
                   setUpdate(y)
                   console.log(y)
            }

            else{  
                
                if(villa==="villa" && flat==="flat" ){
                     setVillaTrue(!villatrue)
                     setFlatsTrue(!flatstrue)
                    let y = x.Project.filter((v,i)=>{
                        return rate ? (v.ptype==="flat" || v.ptype==="villa") && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                        maxx ?  (v.ptype==="flat" || v.ptype==="villa") &&   (v.prize <= Number(min)) : 
                        minn ? (v.ptype==="flat" || v.ptype==="villa") &&  ((v.prize >= Number(max) )) :
                        (v.ptype==="flat" || v.ptype==="villa")
                       })
                       setUpdate(y)
                       console.log(y)
                }

                else if(villa==="villa" ){
                    setVillaTrue(!villatrue) 
                    let y = x.Project.filter((v,i)=>{
                        return rate ? v.ptype==="villa" && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                        maxx ? v.ptype==="villa" &&   (v.prize <= Number(min)) : 
                        minn ? v.ptype==="villa" &&  ((v.prize >= Number(max) )) :
                        v.ptype==="villa"
                       })
                       setUpdate(y)
                       console.log(y)
                }

                else if(flat==="flat"){
                     setFlatsTrue(!flatstrue) 
                    let y = x.Project.filter((v,i)=>{
                        return rate ? v.ptype==="flat" && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                        maxx ? v.ptype==="flat" &&   (v.prize <= Number(min)) : 
                        minn ? v.ptype==="flat" &&  ((v.prize >= Number(max) )) :
                        v.ptype==="flat"
                       })
                       setUpdate(y)
                       console.log(y)
                }
            }
        }
    } 
    } 
    }
    useEffect(Component,[])
    console.log(update)

    const[place,setPlace]=useState("")
    const City=(a,b)=>{
       let x=State.Array.find((value,index)=>{
        return ind===value.id
       })
       setPlace(x.place)    
    }

    useEffect(City,[])
    console.log(place)

    const propertytype=()=>{
        setType(!type)
        setBHK(false)
        setBudget(false)
    }
    const BHKtype=()=>{
        setBHK(!BHK)
        setBudget(false)
        setType(false)
    }
    useEffect(()=>{
        if((max==="0" && min === "0")){
            setrate(false)
        }
        else if(max==="0"){
            setmaxx(true)
        }
        else if(min==="0"){
            setminn(true)
        }
        else{
            setrate(true)   
        }
    })

    const handleChange = (event) => {
        if(event?.target.name==="min"){
            console.log(event.target.value)
        setmin(event.target.value);
        // Component()
    }

        if(event?.target.name==="max"){
            console.log(event.target.value)
            setmax(event.target.value);
        // Component()
        }
        console.log(max,min)
    };
// useEffect(()=>{},[min,max])

    const Budgettype=()=>{
        setBudget(!Budget)
        setBHK(false)
        setType(false)
    }

    const Flatt=()=>{
        setFlatsTrue(!flatstrue)           
      }

      console.log(flats)
    
    const Villaa=()=>{
        setVillaTrue(!villatrue)         
      }


      const ONE=()=>{
        if(flatstrue===true || villatrue===true){
            setOnebhkTrue(!onebhktrue)
        }
      }

      const TWO=()=>{
        if(flatstrue===true || villatrue===true){
            setTwobhkTrue(!twobhktrue) 
        }
      }
  
      const THREE=()=>{
        if(flatstrue===true || villatrue===true){
            setThreebhkTrue(!threebhktrue)  
        } 
      }

      useEffect(()=>{
          let x = State.Array.find((value,index)=>{
                return ind===value.id
               })
        
        if(villatrue===true){
            setVilla("villa") 
        }
        else{
            setVilla("")  
        }
        if(flatstrue===true){
            setFlats("flat") 
        }
        else{
            setFlats("")  
        }
        if(onebhktrue===true){
            setOnebhkk("1") 
        }
        else{
            setOnebhkk("")  
        }
        if(twobhktrue===true){
            setTwobhkk("2") 
        }
        else{
            setTwobhkk("")  
        }
        if(threebhktrue===true){
            setThreebhkk("3") 
        }
        else{
            setThreebhkk("")  
        }
        if(Villa==="villa" && flats==="flat" && onebhkk==="1" && twobhkk==="2" && threebhkk==="3"){
        let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
            maxx ?  ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3"))) &&   (v.prize <= Number(min)) : 
            minn ? ( (v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3"))) &&  ((v.prize >= Number(max) )) :
            ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3")))
           })
           setUpdate(y)
        console.log(y)
        }

        else if(Villa==="villa" && flats==="flat" && onebhkk==="1" && twobhkk==="2"){
        let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="2"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
            maxx ?  ( (v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="2"))) &&   (v.prize <= Number(min)) : 
            minn ? ( (v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="2"))) &&  ((v.prize >= Number(max) )) :
            ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="2")))
           })
           setUpdate(y)
        console.log(y)
        }

       else if(Villa==="villa" && flats==="flat" && onebhkk==="1" && threebhkk==="3"){
        let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="3"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
            maxx ?  ( (v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="3"))) &&   (v.prize <= Number(min)) : 
            minn ? ( (v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="3"))) &&  ((v.prize >= Number(max) )) :
            ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="1" || v.bhkk==="3")))
           })
           setUpdate(y)
        console.log(y)
       }
    
       else if(Villa==="villa" && flats==="flat" && twobhkk==="2" && threebhkk==="3"){
        let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="villa" && (v.bhkk==="2" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="2" || v.bhkk==="3"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
            maxx ?  ( (v.ptype==="villa" && (v.bhkk==="2" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="2" || v.bhkk==="3"))) &&   (v.prize <= Number(min)) : 
            minn ? ( (v.ptype==="villa" && (v.bhkk==="2" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="2" || v.bhkk==="3"))) &&  ((v.prize >= Number(max) )) :
            ((v.ptype==="villa" && (v.bhkk==="2" || v.bhkk==="3")) || (v.ptype==="flat" &&  (v.bhkk==="2" || v.bhkk==="3")))
           })
           setUpdate(y)
        console.log(y)
       }

        else{
        if(flats==="flat" && Villa==="villa" && onebhkk==="1" ){
            let y = x.Project.filter((v,i)=>{
                return rate ? ((v.ptype==="villa" && v.bhkk==="1")  || (v.ptype==="flat" && v.bhkk==="1")) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                maxx ?  ( (v.ptype==="villa" && v.bhkk==="1")  || (v.ptype==="flat" && v.bhkk==="1")) &&   (v.prize <= Number(min)) : 
                minn ? ( (v.ptype==="villa" && v.bhkk==="1")  || (v.ptype==="flat" && v.bhkk==="1")) &&  ((v.prize >= Number(max) )) :
                ((v.ptype==="villa" && v.bhkk==="1")  || (v.ptype==="flat" && v.bhkk==="1"))
            })
            setUpdate(y)
            console.log(y)
        }

        else if(flats==="flat" && Villa==="villa" && twobhkk==="2" ){
        let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="villa" && v.bhkk==="2")  || (v.ptype==="flat" && v.bhkk==="2")) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
            maxx ?  ( (v.ptype==="villa" && v.bhkk==="2")  || (v.ptype==="flat" && v.bhkk==="2")) &&   (v.prize <= Number(min)) : 
            minn ? ( (v.ptype==="villa" && v.bhkk==="2")  || (v.ptype==="flat" && v.bhkk==="2")) &&  ((v.prize >= Number(max) )) :
            ((v.ptype==="villa" && v.bhkk==="2")  || (v.ptype==="flat" && v.bhkk==="2"))
        })
        setUpdate(y)
        console.log(y)
        }
 
        else if(flats==="flat" && Villa==="villa" && threebhkk==="3" ){
           
           let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="villa" && v.bhkk==="3")  || (v.ptype==="flat" && v.bhkk==="3")) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
            maxx ?  ( (v.ptype==="villa" && v.bhkk==="3")  || (v.ptype==="flat" && v.bhkk==="3")) &&   (v.prize <= Number(min)) : 
            minn ? ( (v.ptype==="villa" && v.bhkk==="3")  || (v.ptype==="flat" && v.bhkk==="3")) &&  ((v.prize >= Number(max) )) :
            ((v.ptype==="villa" && v.bhkk==="3")  || (v.ptype==="flat" && v.bhkk==="3"))
           })
           setUpdate(y)
           console.log(y)
        }

    
      else if(flats==="flat" && onebhkk==="1" && twobhkk==="2" && threebhkk==="3"){
      
        let y = x.Project.filter((v,i)=>{
       return rate ? ((v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3" ))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                    maxx ?  ( (v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3" ))) &&   (v.prize <= Number(min)) : 
                    minn ? ( (v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3" ))) &&  ((v.prize >= Number(max) )) :
                    ((v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="2" || v.bhkk==="3" )))
       })
       setUpdate(y)
       console.log(y)  
       }

     else if(flats==="flat" && onebhkk==="1" && twobhkk==="2"){
 
        let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="2"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                    maxx ?  ( (v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="2"))) &&   (v.prize <= Number(min)) : 
                    minn ? ( (v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="2"))) &&  ((v.prize >= Number(max) )) :
                    ((v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="2")))
           })
           setUpdate(y)
           console.log(y)  
     }

     else if(flats==="flat" && twobhkk==="2" && threebhkk==="3"){
    
      let y = x.Project.filter((v,i)=>{
        return rate ? ((v.ptype==="flat" && (v.bhkk==="2" || v.bhkk==="3"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                    maxx ?  ( (v.ptype==="flat" && (v.bhkk==="2" || v.bhkk==="3"))) &&   (v.prize <= Number(min)) : 
                    minn ? ( (v.ptype==="flat" && (v.bhkk==="2" || v.bhkk==="3"))) &&  ((v.prize >= Number(max) )) :
                    ((v.ptype==="flat" && (v.bhkk==="2" || v.bhkk==="3")))
       })
       setUpdate(y)
       console.log(y)  
      }

     else if(flats==="flat" && onebhkk==="1" && threebhkk==="3"){

       let y = x.Project.filter((v,i)=>{
        return rate ? ((v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="3"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                    maxx ?  ( (v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="3"))) &&   (v.prize <= Number(min)) : 
                    minn ? ( (v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="3"))) &&  ((v.prize >= Number(max) )) :
                    ((v.ptype==="flat" && (v.bhkk==="1" || v.bhkk==="3")))
       })
       setUpdate(y)
       console.log(y)  
     }

     else if(Villa==="villa" && onebhkk==="1" && twobhkk==="2"){
 
        let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                    maxx ?  ( (v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2"))) &&   (v.prize <= Number(min)) : 
                    minn ? ( (v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2"))) &&  ((v.prize >= Number(max) )) :
                    ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="2")))
           })
           setUpdate(y)
           console.log(y)  
     }

     else if(Villa==="villa" && twobhkk==="2" && threebhkk==="3"){
        let y = x.Project.filter((v,i)=>{
            return rate ? ((v.ptype==="villa" && (v.bhkk==="2" || v.bhkk==="3"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
            maxx ?  ( (v.ptype==="villa" && (v.bhkk==="2" || v.bhkk==="3"))) &&   (v.prize <= Number(min)) : 
            minn ? ( (v.ptype==="villa" && (v.bhkk==="2" || v.bhkk==="3"))) &&  ((v.prize >= Number(max) )) :
            ((v.ptype==="villa" && (v.bhkk==="2" || v.bhkk==="3")))
         })
         setUpdate(y)
         console.log(y)  
        }

     else if(Villa==="villa" && onebhkk==="1" && threebhkk==="3"){
        let y = x.Project.filter((v,i)=>{
         return rate ? ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="3"))) && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                    maxx ?  ( (v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="3"))) &&   (v.prize <= Number(min)) : 
                    minn ? ( (v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="3"))) &&  ((v.prize >= Number(max) )) :
                    ((v.ptype==="villa" && (v.bhkk==="1" || v.bhkk==="3")))
        })
        setUpdate(y)
        console.log(y)  
      }

    else{
        if(flats==="flat" && onebhkk==="1"){
        
            let y = x.Project.filter((v,i)=>{
                return rate ? ( v.ptype==="flat" && v.bhkk==="1") && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                maxx ?  ( v.ptype==="flat" && v.bhkk==="1") &&   (v.prize <= Number(min)) : 
                minn ? ( v.ptype==="flat" && v.bhkk==="1") &&  ((v.prize >= Number(max) )) :
                ( v.ptype==="flat" && v.bhkk==="1")
               })
               setUpdate(y)
               console.log(y)
        }

        else if(flats==="flat" && twobhkk==="2"){
            let y = x.Project.filter((v,i)=>{
                return rate ? ( v.ptype==="flat" && v.bhkk==="2") && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                maxx ?  ( v.ptype==="flat" && v.bhkk==="2") &&   (v.prize <= Number(min)) : 
                minn ? ( v.ptype==="flat" && v.bhkk==="2") &&  ((v.prize >= Number(max) )) :
                ( v.ptype==="flat" && v.bhkk==="2")
               })
               setUpdate(y)
               console.log(y)
        }

        else if(flats==="flat" && threebhkk==="3"){
            let y = x.Project.filter((v,i)=>{
                return rate ? ( v.ptype==="flat" && v.bhkk==="3") && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                maxx ?  ( v.ptype==="flat" && v.bhkk==="3") &&   (v.prize <= Number(min)) : 
                minn ? ( v.ptype==="flat" && v.bhkk==="3") &&  ((v.prize >= Number(max) )) :
                ( v.ptype==="flat" && v.bhkk==="3")
               })
               setUpdate(y)
               console.log(y)
        }

        else{
            if(Villa==="villa" && onebhkk==="1"){
                let y = x.Project.filter((v,i)=>{
                    return rate ? ( v.ptype==="villa" && v.bhkk==="1") && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                    maxx ?  ( v.ptype==="villa" && v.bhkk==="1") &&   (v.prize <= Number(min)) : 
                    minn ? ( v.ptype==="villa" && v.bhkk==="1") &&  ((v.prize >= Number(max) )) :
                    ( v.ptype==="villa" && v.bhkk==="1")
                   })
                   setUpdate(y)
                   console.log(y)
            }

         else if(Villa==="villa" && twobhkk==="2"){
                let y = x.Project.filter((v,i)=>{
                    return rate ? ( v.ptype==="villa" && v.bhkk==="2") && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                    maxx ?  ( v.ptype==="villa" && v.bhkk==="2") &&   (v.prize <= Number(min)) : 
                    minn ? ( v.ptype==="villa" && v.bhkk==="2") &&  ((v.prize >= Number(max) )) :
                    ( v.ptype==="villa" && v.bhkk==="2")
                   })
                   setUpdate(y)
                   console.log(y)
            }

            else if(Villa==="villa" && threebhkk==="3"){
                let y = x.Project.filter((v,i)=>{
                    return rate ? ( v.ptype==="villa" && v.bhkk==="3") && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                    maxx ?  ( v.ptype==="villa" && v.bhkk==="3") &&   (v.prize <= Number(min)) : 
                    minn ? ( v.ptype==="villa" && v.bhkk==="3") &&  ((v.prize >= Number(max) )) :
                    ( v.ptype==="villa" && v.bhkk==="3")
                   })
                   setUpdate(y)
                   console.log(y)
            }

            else{  
                
                if(Villa==="villa" && flats==="flat" ){
                    let y = x.Project.filter((v,i)=>{
                        return rate ? (v.ptype==="flat" || v.ptype==="villa") && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                        maxx ?  (v.ptype==="flat" || v.ptype==="villa") &&   (v.prize <= Number(min)) : 
                        minn ? (v.ptype==="flat" || v.ptype==="villa") &&  ((v.prize >= Number(max) )) :
                        (v.ptype==="flat" || v.ptype==="villa")
                       })
                       setUpdate(y)
                       console.log(y)
                }

                else if(Villa==="villa" ){
                    let y = x.Project.filter((v,i)=>{
                        return rate ? v.ptype==="villa" && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                        maxx ? v.ptype==="villa" &&   (v.prize <= Number(min)) : 
                        minn ? v.ptype==="villa" &&  ((v.prize >= Number(max) )) :
                        v.ptype==="villa"
                       })
                       setUpdate(y)
                       console.log(y)
                }

                else if(flats==="flat"){
              
                    let y = x.Project.filter((v,i)=>{
                        return rate ? v.ptype==="flat" && ((v.prize <= Number(max)) && (v.prize >= Number(min) )) : 
                        maxx ? v.ptype==="flat" &&   (v.prize <= Number(min)) : 
                        minn ? v.ptype==="flat" &&  ((v.prize >= Number(max) )) :
                        v.ptype==="flat"
                       })
                       setUpdate(y)
                       console.log(y)
                    //    console.log(maxxx,minnn)
                }

                else if(Villa==="" && flats===""){
                    let y = x.Project.filter((v,i)=>{
                        return  v.ptype==="flat" || v.ptype==="villa"
                       })
                       setUpdate(y)
                       console.log(y)
                }
            }
        }
    } 
    } 
      },[Villa,villatrue,flats,flatstrue,onebhkk,onebhktrue,twobhkk,twobhktrue,threebhkk,threebhktrue,maxx,minn,max,min])

      useEffect(()=>{
        if(flatstrue===true && villatrue===true){
            setProperty("Flat+1")
          }
          else if(flatstrue===true){
            setProperty("Flat")
            setFlats("flat") 
          }
    
          else if(villatrue===true){
            setProperty("House Villa")
           
          }
    
          else{
            setProperty("Property Type")
          }
    },[property,flatstrue,villatrue])

    useEffect(()=>{

        if(onebhktrue===true && twobhktrue===true && threebhktrue===true){
            setBHKK("1,2,3 BHK")
        }

        else if(onebhktrue===true && twobhktrue===true){
            setBHKK("1,2 BHK")
        }

        else if(twobhktrue===true && threebhktrue===true ){
            setBHKK("2,3 BHK")
        }

        else if(onebhktrue===true && threebhktrue===true ){
            setBHKK("1,3 BHK")
        }

        else{
                if(onebhktrue===true){
            setBHKK("1 BHK")
            }
            else if(twobhktrue===true){
                setBHKK("2 BHK")
            }
            else if(threebhktrue===true){
            setBHKK("3 BHK")
            }
            else{
                setBHKK("BHK")  
            }
        }
    },[onebhktrue,twobhktrue,threebhktrue,BHKK])

    useEffect(()=>{
        if(min=="0" && max =="0"){
            setBudgett("budget")
        }
        
        else if(min=="0"){
            setBudgett(` Upto ${max}`)
        }
        
        else if(max=="0"){
            setBudgett(` Greater than ${min}`)
        }
        else{
            setBudgett(`${min}-${max}`)
        }
        
        },[min,max,Budgett])

    return(
       <>
    <Box component="div" sx={{width:"100%", flexGrow: 1, display: { xs: 'none', sm: 'none',md:'block',lg:'block'},cursor:"pointer"}} className="header-component"> 
            <Container maxWidth="xl" sx={{backgroundColor:"#d8232a",padding:"10px 15px"}}>
            <Box sx={{width:"100%",textAlign:"center"}}>
                <Typography component="div" 
                sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
               <Box component="div" className="flex">
                   <Box component="div" className="back-color">
                       <a href="#">Buy <i style={{verticalAlign:"text-top",color:"#d8232a"}}><FaAngleDown/></i></a>
                       <Box component="div" className="chennai">
                          {place}
                       </Box>
                       <Box component="form">
                              {/* <input type="" placeholder="Add More"></input> */}
                             <a><span style={{fontSize:"14px",color:"gray"}}>Add More</span></a> 
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
                    {Budgett}
                    <Typography 
                    component="i"
                    variant=""
                    sx={{marginTop:"2px",marginLeft:"5px",color:"#d8232a"
                    }} onClick={()=>Budgettype()}>
                     <FaAngleDown/>
                    </Typography>
                   </Box>
                   {Budget &&
                   <Box sx={{display:{xs:"none",sm:"none",md:"block"},position:"absolute",top:"60px",right:"-200px"}}>
                    <Typography sx={{padding:"10px 15px",backgroundColor:"white",width:"500px",border:"2px solid gray",boxShadow:"0px 0px 5px gray"}}>
                    <React.Fragment> 
                            <CardContent>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                        <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={min}
                                        onChange={handleChange}
                                        name="min" >
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
                                <Typography component="span" sx={{margin:"0px 10px"}}>
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
                            </CardContent>
                            <Box sx={{textAlign:"end"}}>
                            <Typography component="button" sx={{color:"red",border:"none",backgroundColor:"white"}}  onClick={()=>Budgettype()}>
                                    Done
                            </Typography>
                           </Box>
                        </React.Fragment>
                        </Typography>
                   </Box>
                   }
                   </Box>
                   <Box sx={{position:"relative"}}>
                   <Box className="back-color" component="div">
                   {property}
                    <Typography 
                    component="i"
                    variant=""
                    sx={{marginTop:"2px",marginLeft:"5px",color:"#d8232a"
                    }}onClick={()=>propertytype()}>
                     <FaAngleDown/>
                    </Typography>
                    {type &&
                    <Box sx={{display:{xs:"none",sm:"none",md:"block"},position:"absolute",top:"60px",right:"-200px"}}>
                    <Typography sx={{padding:"10px 15px",backgroundColor:"white",width:"500px",border:"2px solid gray"}}>
                    <React.Fragment> 
                            <CardContent>
                            <Typography component="div" variant="p" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block",backgroundColor:flatstrue?"pink":""}} 
                            onClick={()=>Flatt()}>
                            <i style={{verticalAlign:"middle",marginRight:"5px",color:flatstrue?"red":""}}><IoAddCircle/></i>
                                    Flat
                                    </Typography>
                                    <Typography component="div" variant="p" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block",marginLeft:"15px",backgroundColor:villatrue?"pink":""}} onClick={()=>Villaa()}>
                                    <i style={{verticalAlign:"middle",marginRight:"5px",color:villatrue?"red":""}}><IoAddCircle/></i>
                                    House/Villa
                                    </Typography>
                                    <Typography component="div" variant="p" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block",marginLeft:"15px"}}>
                                    <i style={{verticalAlign:"middle",marginRight:"5px"}}><IoAddCircle/></i>
                                    Shared Flat
                                    </Typography>
                            </CardContent>
                            <Box sx={{textAlign:"end"}}>
                            <Typography component="button" sx={{color:"red",border:"none",backgroundColor:"white"}} onClick={()=>propertytype()}>
                                    Done
                            </Typography>
                           </Box>
                        </React.Fragment>
                        </Typography>
                   </Box>
                   }
                   </Box>
                   </Box>
                   <Box sx={{position:"relative"}}>
                   <Box className="back-color">
                    {BHKK}
                    <Typography 
                    component="i"
                    variant=""
                    sx={{marginTop:"2px",marginLeft:"5px",color:"#d8232a"
                    }} onClick={()=>BHKtype()}>
                     <FaAngleDown/>
                    </Typography>
                   </Box>
                   {BHK &&
                   <Box sx={{display:{xs:"none",sm:"none",md:"block"},position:"absolute",top:"60px",right:"-200px"}}>
                    <Typography sx={{padding:"10px 15px",backgroundColor:"white",width:"500px",border:"2px solid gray",boxShadow:"0px 0px 5px gray"}}>
                    <React.Fragment> 
                            <CardContent>
                            <Typography component="div" variant="p" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block",backgroundColor:onebhktrue?"pink":""}} onClick={()=>ONE()}>
                                    <i style={{verticalAlign:"middle",marginRight:"5px",color:onebhktrue?"red":""}}><IoAddCircle/></i>
                                     1 BHK
                                    </Typography>
                                    <Typography component="div" variant="p" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block",marginLeft:"15px",backgroundColor:twobhktrue?"pink":""}} onClick={()=>TWO()}>
                                    <i style={{verticalAlign:"middle",marginRight:"5px",color:twobhktrue?"red":""}}><IoAddCircle/></i>
                                        2 BHK
                                    </Typography>
                                    <Typography component="div" variant="p" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block",marginLeft:"15px",backgroundColor:threebhktrue?"pink":""}}  onClick={()=>THREE()}>
                                    <i style={{verticalAlign:"middle",marginRight:"5px",color:threebhktrue?"red":""}}><IoAddCircle/></i>
                                        3BHK
                                    </Typography>
                                    <Typography component="div" variant="p" sx={{padding:"5px 10px",borderRadius:"20px",border:"1px solid gray",display:"inline-block",marginLeft:"15px"}}>
                                        <i style={{verticalAlign:"middle",marginRight:"5px"}}><IoAddCircle/></i>
                                        4 BHK
                                    </Typography>
                            </CardContent>
                            <Box sx={{textAlign:"end"}}>
                            <Typography component="button" sx={{color:"red",border:"none",backgroundColor:"white"}} onClick={()=>BHKtype()}>
                                    Done
                            </Typography>
                           </Box>
                        </React.Fragment>
                        </Typography>
                   </Box>
                   }
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

         <Box  sx={{width:{xs:"100%",sm:"100%"}, flexGrow: 1, display: { xs: 'block', sm: 'block',md:'none' }}}>
        <Container maxWidth="xl">
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"start"}}>
                <Box sx={{marginTop:"15px",marginRight:"10px"}}  onClick={()=>Go()}>
                    <Typography component="button">
                    <i><BsSearch/></i>
                    </Typography>
                </Box>
                <Box sx={{marginTop:"15px"}}>
                    <Typography component="button" onClick={()=>Go()}>
                    Go To Property Page
                    </Typography>
                </Box>
                </Box>
        </Container>
         </Box>


        <Box  sx={{width:"100%", flexGrow: 1, display: { xs: 'block', sm: 'block',md:'block',lg:'block' }}} className="component-banner">
          <Container maxWidth="xl">
            <Box className="row">
            <Box sx={{width:"70%", flexGrow: 1, display: { xs: 'block', sm: 'block',md:'block',lg:'block' }}} className="">                    
                {
                    update.map((value,index)=>{
                        return(
                            <>
                            <Box className="card" component="div" onClick={()=>submit(value,index)}>
                              <Box component="div" className="flex">
                                        <Box sx={{width:{md:"30%",xs:"100%",sm:"100%"}}}>
                                            <Box>
                                                <Typography 
                                                component="img"
                                                src={value.image}
                                                sx={{width:"100%",height:{md:"320px",xs:"200px",sm:"320px"}}}
                                                >
                                                </Typography>
                                            </Box>                                  
                                        </Box>
                                        <Box sx={{width:{md:"45%",xs:"100%"}, flexGrow: 1, display: { xs: 'block', sm: 'block',md:'block',lg:'block' },marginLeft:"25px",marginTop:{md:"0px",xs:"20px"}}}>
                                                <Box component="div" className="flex-zero">
                                                   <Box component="div" className="zero">
                                                    <Box sx={{display:"flex",alignItems:"center"}}>
                                                        <Box>
                                                            <Typography
                                                               component="div"
                                                               variant="i"
                                                               sx={{fontSize:"15px",fontWeight:"800",color:"#009681"}}
                                                            >
                                                              <TiTickOutline/>
                                                             </Typography> 
                                                        </Box>
                                                        <Box>
                                                            <Typography
                                                               component="div"
                                                               variant="h6"
                                                               sx={{fontSize:"10px",fontWeight:"800",color:"#009681",marginLeft:"5px"}}
                                                            >
                                                              {value.zero}
                                                             </Typography> 
                                                        </Box>
                                                        </Box>    
                                                   </Box>
                                                   <Box component="div">
                                                        <a  href="#" style={{padding:"0px 10px",color:"gray"}}><BsFillHeartFill/></a>
                                                        <a href="#" style={{padding:"0px 10px",color:"gray"}}><FaShare/></a>
                                                        <a href="#" style={{color:"gray"}}><BsThreeDotsVertical/></a>
                                                    </Box> 
                                                </Box>
                                                <Box component="div">
                                                    <Typography 
                                                    component="div"
                                                    variant="h6"
                                                    sx={{marginBottom:"10px"}}>
                                                           {value.bhk}
                                                    </Typography>
                                                    <Typography 
                                                    component="div"
                                                    variant="p"
                                                    sx={{marginBottom:"10px"}}>
                                                           {value.place}
                                                    </Typography>
                                                </Box>
                                                <Box component="div" className="area-flex">
                                                    <Box component="div" sx={{width:{md:"30%",xs:"30%"},borderRight:"1px solid gray",textAlign:"center"}}>
                                                    <Typography
                                                    component="div"
                                                    variant=""
                                                    color="gray"
                                                    sx={{fontSize:{md:"15px",xs:"10px"}}}
                                                    >
                                                    {value.Area}
                                                    </Typography>
                                                    <Typography
                                                    component="div"
                                                    variant="p"
                                                    sx={{fontSize:{md:"15px",xs:"10px"}}}
                                                    >
                                                    {value.Sqft}
                                                    </Typography>
                                                    </Box>
                                                    <Box component="div" sx={{width:{md:"40%",xs:"35%"},borderRight:"1px solid gray",textAlign:"center"}}>
                                                    <Typography
                                                    component="div"
                                                    variant="h6"
                                                    color="gray"
                                                    sx={{fontSize:{md:"15px",xs:"10px"}}}
                                                    >
                                                    {value.under}
                                                    </Typography>
                                                    <Typography
                                                    component="div"
                                                    variant="p"
                                                    sx={{fontSize:{md:"15px",xs:"10px"}}}
                                                    >
                                                    {value.date}
                                                    </Typography>
                                                    </Box>
                                                    <Box component="div" sx={{width:{md:"20%",xs:"30%"},borderRight:"",textAlign:"center"}}>
                                                    <Typography
                                                    component="div"
                                                    variant="h6"
                                                    color="gray"
                                                    sx={{fontSize:{md:"15px",xs:"10px"}}}
                                                    >
                                                    {value.toilet}
                                                    </Typography>
                                                    <Typography
                                                    component="div"
                                                    variant="p"
                                                    sx={{fontSize:{md:"15px",xs:"10px"}}}
                                                    >
                                                    {value.number}
                                                    </Typography>
                                                    </Box>
                                                </Box>
                                                <Box>
                                                    <Typography
                                                    component="div"
                                                    variant="p" 
                                                    className="para-banner"
                                                    sx={{fontSize:"12px"}}
                                                    >
                                                     {value.Paragraph}
                                                    </Typography>
                                                </Box>    
                                            </Box> 
                                            <Box sx={{width:{md:"20%",xs:"100%"}, flexGrow: 1, display: { xs: 'block', sm: 'block',md:'block',lg:'block'},marginLeft:"30px"}} className="">
                                                <Box sx={{textAlign:"center"}}>
                                                    <Typography
                                                    component="div"
                                                    variant="h6"
                                                    sx={{fontSize:{md:"1.25rem",xs:"1.25rem"}}}
                                                    >
                                                     {value.rate}
                                                    </Typography>
                                                    <Typography
                                                    component="div"
                                                    variant="p"
                                                    sx={{fontSize:{md:"1.25rem",xs:"1.25rem"}}}
                                                    >
                                                     {value.Sqfts}
                                                    </Typography>
                                                </Box>
                                                <Box >
                                                    <Box sx={{display:{md:"block",xs:"flex"},alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
                                                    <Typography
                                                    component="div"
                                                    variant="p"
                                                    className="call"
                                                    sx={{width:{md:"100%",xs:"50%",sm:"40%"},marginRight:{xs:"0px",sm:"10px",md:"0px"},marginTop:{xs:"20px",sm:"40px",md:"40px"}}}
                                                    >
                                                     {value.call}
                                                    </Typography>
                                                    <Typography
                                                    component="div"
                                                    variant="p"
                                                    className="info"
                                                    sx={{width:{md:"100%",xs:"50%",sm:"40%"},marginTop:{xs:"0px",sm:"40px",md:"0px"}}}
                                                    >
                                                     {value.info}
                                                    </Typography>
                                                </Box>
                                                </Box>
                                            </Box> 
                                        </Box>
                                    </Box>   
                            </>     
                        )
                    })
                    // })
                }
               </Box>
               <Box sx={{width:{md:"20%"},display:{xs:"none",sm:"none",md:"block"}}}>
                <Card sx={{ minWidth: 275,marginLeft:"15px",marginTop:"10px",padding:"10px 5px",boxShadow:"0px 0px 5px gray"}}>
                    <CardContent>
                        <Typography sx={{ fontSize:28,fontWeight:"700",textAlign:"center" }} color="black" gutterBottom>
                        Sell/Rent Your Property With Us For <span style={{color:"blue"}}>Free</span>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{textAlign:"center",marginTop:"60px"}}>
                        Find Buyers & Tenants Easily
                        </Typography>
                        <Box sx={{textAlign:"center"}}>
                        <Typography sx={{ mb: 1.5,marginTop:"40px",backgroundColor:"#ffc72c",fontWeight:"800",display:"inline-block",color:"balck",padding:"8px 25px",borderRadius:"20px"}}>
                        Post Property
                        </Typography>
                        </Box>
                        <Typography variant="h6" sx={{marginTop:"30px",fontWeight:"800"}}>
                        Here's Why Magicbricks:
                        </Typography>
                        <Typography component="ul" sx={{fontWeight:"800",marginTop:"30px"}}>
                        <li style={{fontSize:"15px",display:"flex",justifyContent:"space-between",marginBottom:"15px"}}>
                            <div style={{marginRight:"10px"}}><i style={{color:"blue"}}><TiTickOutline/></i></div>
                            <div style={{fontSize:"13px",fontWeight:"800"}}>Get Access to 4 Lakh + Buyers</div>
                        </li>

                        <li style={{fontSize:"15px",display:"flex",justifyContent:"space-between",marginBottom:"15px"}}>
                            <div style={{marginRight:"10px"}}><i style={{color:"blue"}}><TiTickOutline/></i></div>
                            <div style={{fontSize:"13px",fontWeight:"800"}}>Sell Faster with Premium Service</div>
                        </li>


                        <li style={{fontSize:"15px",display:"flex",justifyContent:"space-between",marginBottom:"15px"}}>
                            <div style={{marginRight:"10px"}}><i style={{color:"blue"}}><TiTickOutline/></i></div>
                            <div style={{fontSize:"13px",fontWeight:"800"}}> Find only Genuine Leads</div>
                        </li>

                        <li style={{fontSize:"15px",display:"flex",marginBottom:"15px",justifyContent:"space-between"}}>
                            <div style={{marginRight:"10px"}}><i style={{color:"blue"}}><TiTickOutline/></i></div>
                            <div style={{fontSize:"13px",fontWeight:"800"}} >Get Expert advice on Market Trends & insights</div>
                        </li>
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
                    </Card>
                   
               </Box>
            </Box>
          </Container>
        </Box>
        </>
      
    )
}


export default Banner