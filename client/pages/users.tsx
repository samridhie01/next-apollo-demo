import React from "react";
import ClientOnly from "../components/ClientOnly/ClientOnly";

import UserGrid from "../components/UserGrid/UserGrid";

const users = () => {
    
    return(
        <ClientOnly>
            <UserGrid />
        </ClientOnly>
    )
}

export default users;