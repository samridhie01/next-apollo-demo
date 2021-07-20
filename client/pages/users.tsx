import React from "react";
import ClientOnly from "../components/ClientOnly/ClientOnly";
import Link from 'next/link'
import UserGrid from "../components/UserGrid/UserGrid";

const users = () => {
    
    return(
        <div>
        <Link href="/"><a>Go Back</a></Link>
        <ClientOnly>
            <UserGrid />
        </ClientOnly>
        </div>
    )
}

export default users;   