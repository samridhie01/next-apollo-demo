import { Card, CardContent } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

interface User {
    name: string,
    addr: string
}

const StyledCard = styled(Card)`
    width: 300px;
    padding: 5px;
    &:hover{
        background-color: grey;
        cursor: pointer

    }
`

const UserCard: React.FC<User> = ({ name, addr }) => {

    return (
        <StyledCard raised={true} className="user-cards">
            <CardContent>
                {name}
            </CardContent>
            <CardContent>
                {addr}
            </CardContent>
        </StyledCard>

    )
}

export default UserCard;