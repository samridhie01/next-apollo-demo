import React from "react";
import { Card, CardContent, Grid, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    usercard: {
        width: '300px',
        height: '150px',
        padding: '5px',
        margin: '1px',
       "&:hover":{
            backgroundColor: 'grey',
            cursor: 'pointer'
        }
    },
    root:{
       justifyContent: 'center'
    }
  }));

const UserCard: React.FC<User> = ({ name, addr }) => {

    const classes = useStyles();
    return (
        <Grid item className={classes.root}> 
        <Card raised={true} className={classes.usercard} data-testid="user-card">
            <CardContent>
                {name}
            </CardContent>
            <CardContent>
                {addr}
            </CardContent>
        </Card>
        </Grid>
    )
}

export default UserCard;