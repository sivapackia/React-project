import { createSlice } from "@reduxjs/toolkit";
import User from './Main.json';


export const Slice=createSlice(
    {
        name:"magicbrick",

        initialState:{
            Array:User.town,
            Arrayone:User.Explore,       
            Arraytwo:User.Gallery,
            isLogin:[],
            Nameto:""
        },
        reducers:{
            ChiefName:(state,action)=>{
                state.Nameto = action.payload
            },
            LoginDetail:(state,action)=>{
                state.isLogin = action.payload
            }

        }
    }
)

export default Slice.reducer
export const {ChiefName,LoginDetail}=Slice.actions