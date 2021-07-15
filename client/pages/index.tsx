import Link from 'next/link'
import Name from '../components/Name/Name'
import ClientOnly from '../components/ClientOnly/ClientOnly';

const Index = () => (
  <div>
   <h1>
    Welcome,  
    <ClientOnly>
      <Name />
    </ClientOnly> 
    </h1>
    <br/><br/>

    
    <Link href="/about"><a>About</a></Link> {' '}
    <Link href="/users"><a>User</a></Link>

  </div>
)

export default Index;
