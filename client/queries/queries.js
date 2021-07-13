import {gql } from "@apollo/client";


export const NAME_QUERY = gql`
  query name {
    name
  }
`