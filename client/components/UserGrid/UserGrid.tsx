import React, { useCallback, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { Button, CircularProgress, Grid, makeStyles } from "@material-ui/core";
import { offsetVar } from '../../cache';
import { USERS_QUERY } from "../../queries/queries";
import UserCard from "../UserCard/UserCard";


interface User {
    name: string,
    addr: string
}

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(4, 0),
      display: 'flex',
      justifyContent: 'center',
      minWidth: "250px"
    },
  }));

const UserGrid = ()=>{
    const classes = useStyles();
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

    const handleClick = (e:any) => {
        e.preventDefault();
        setScrollPos(window.pageYOffset)
        getRequiredUsers();
    }

    const isDisabled = (): boolean => {
        return data && data.allUsers.totalCount===offsetVar();
    }
   
    
    return (
        <div>
            {loading ?
                <CircularProgress data-testid='loader'/>
                : (
                    <>
                        <Grid className={classes.root} container spacing={4} data-testid='user-grid'>
                        {data && data.allUsers.users.map((user: User) => (
                            <UserCard name={user.name} addr={user.addr}/>
                        ))}
                        </Grid>
                        <br />
                        <div className={classes.root}>
                        <Button
                            data-testid="loading-button"
                            variant="contained"
                            size="large"
                            color="secondary"
                            disabled={isDisabled()}
                            onClick={(e:any)=>handleClick(e)}
                        >
                            Load more
                        </Button>
                        </div>
                    </>
                )}



        </div>

    )
}
export default UserGrid;

