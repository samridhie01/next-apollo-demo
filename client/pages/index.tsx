import Link from 'next/link'
import Grid from '../components/Grid'
import Name from '../components/Name'
import ClientOnly from '../components/ClientOnly';

import { InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        users: offsetLimitPagination()
      },
    },
  },
});

const Index = () => (
  <div>
    Welcome,
    <ClientOnly>
    <Name />
      </ClientOnly> 
    <br/><br/>
    
    <Link href="/about"><a>About</a></Link>
    <Grid/>

  </div>
)

export default Index;
