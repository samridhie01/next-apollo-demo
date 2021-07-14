import React from "react"

interface CardProps{
    name: string,
    addr: string
}

const Card:React.FC<CardProps> = (prop)=>{
    return(
        <span>
            <p>{prop.name}</p>
            <p>{prop.addr}</p>
        </span>
    )
}