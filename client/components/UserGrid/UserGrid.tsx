import React, { useCallback, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Button, CircularProgress, Grid, makeStyles } from "@material-ui/core";
import { offsetVar } from '../../cache';
import { USERS_QUERY } from "../../queries/queries";
import UserCard from "../UserCard/UserCard";

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(4, 0),
      display: 'flex',
       flexGrow: 1,
       justifyContent: 'center'
    },
  }));

const UserGrid = ()=>{
    const classes = useStyles();
    const first = 20;
    const { loading, error, data , fetchMore} = useQuery(USERS_QUERY,{
        variables:{
            first,
            offset: offsetVar()
        }
    });

    const getRequiredUsers = useCallback(async () => {
        await fetchMore({
            variables:{
                offset: offsetVar()
            }
        });
        offsetVar(offsetVar() + 20);
    }, [])

    const handleClick = (e:any) => {
        e.preventDefault();
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
                        <Grid container data-testid='user-grid'>
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

