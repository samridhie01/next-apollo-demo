import { useQuery } from "@apollo/client";
import React from 'react';
import { NAME_QUERY } from "../../queries/queries";




const Name = () => {
  const {data, loading, error} = useQuery(NAME_QUERY);
  return(
    <span data-testid="name">
    {loading? '..' : ` ${data.name}`}
  </span>
  )
}
export default Name;
