import { useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react"
import { USERS_QUERY } from "../queries/queries";
import {offsetVar} from '../cache'

const Grid =() =>{
    const first = 20;
    const [getUsers, {loading , data}] = useLazyQuery(USERS_QUERY);
    
    useEffect(()=>{
        getUsers({
            variables:{
             first: first,
             offset: offsetVar()
            }});
        offsetVar(offsetVar()+first);    
    },[])

    const handleClick =()=>{        
        getUsers({
               variables:{
                first: 20,
                offset: offsetVar()
               }})
        offsetVar(offsetVar()+first);
    }

    const isDisabled =()=>{
        return data && data.allUsers.totalCount===offsetVar();
    }
       return(
           <div>
            <button disabled={isDisabled()} onClick={()=>handleClick()}>CLICK ME</button>
           </div>
       )
    
}

export default Grid;