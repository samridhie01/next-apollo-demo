import React from "react";
import ClientOnly from "../components/ClientOnly"
import UserGrid from "../components/UserGrid";

const users = () => {
    
    return(
        <ClientOnly>
            <UserGrid />
        </ClientOnly>
    )
}

export default users;