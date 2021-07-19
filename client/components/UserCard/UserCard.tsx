import React from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";


interface User {
    name: string,
    addr: string
}

const useStyles = makeStyles(theme => ({
    usercard: {
        width: '300px',
        padding: '5px',
        margin: '8px',
       "&:hover":{
            backgroundColor: 'grey',
            cursor: 'pointer'
        }
    },
  }));

const UserCard: React.FC<User> = ({ name, addr }) => {

    const classes = useStyles();
    return (
        <Card raised={true} className={classes.usercard} data-testid="user-card">
            <CardContent>
                {name}
            </CardContent>
            <CardContent>
                {addr}
            </CardContent>
        </Card>

    )
}

export default UserCard;