import React, { useCallback, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { Button, CircularProgress, Grid } from "@material-ui/core";
import { offsetVar } from '../cache';
import { USERS_QUERY } from "../queries/queries";
import UserCard from "../components/UserCard";

interface User {
    name: string,
    addr: string
}

const UserGrid = ()=>{
    const first = 20;
      let [scrollPos, setScrollPos] = useState(0);
    const [getUsers, { loading, data = { allUsers: { totalCount: 0, users: [] } } }] = useLazyQuery(USERS_QUERY,{
        fetchPolicy: "cache-and-network"
    });

    const getRequiredUsers = useCallback(async () => {
        await getUsers({
            variables: {
                first,
                offset: offsetVar()
            }
        });
        offsetVar(offsetVar() + 20);
    }, [])

    useEffect(() => {
        getRequiredUsers();
    }, [])

    useEffect(() => {
        window.scrollTo(0, scrollPos)
    })

    const handleClick = () => {
        setScrollPos(window.pageYOffset)
        getRequiredUsers();
    }

    const isDisabled = (): boolean => {
        return data && data.allUsers.totalCount===offsetVar();
    }
   
    
    return (
        <div>
            {loading ?
                <CircularProgress />
                : (
                    <>
                        <Grid container spacing={3}>
                        {data && data.allUsers.users.map((user: User) => (
                            <UserCard name={user.name} addr={user.addr}/>
                        ))}
                        </Grid>
                        <br />
                        <Button
                            data-testid="loading-button"
                            variant="contained"
                            size="large"
                            color="secondary"
                            disabled={isDisabled()}
                            onClick={handleClick}
                        >
                            Load more
                        </Button>
                    </>
                )}



        </div>

    )
}
export default UserGrid;

