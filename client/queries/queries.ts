import {gql } from "@apollo/client";


export const NAME_QUERY = gql`
  query name {
    name
  }
`

export const USERS_QUERY = gql`
  query {
    users{
      name,
      addr
    }
  }
`