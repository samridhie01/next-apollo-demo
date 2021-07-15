import Link from 'next/link'
import Name from '../components/Name'
import ClientOnly from '../components/ClientOnly';

const Index = () => (
  <div>
    Welcome,
    <ClientOnly>
      <Name />
    </ClientOnly> 
    <br/><br/>
    
    <Link href="/about"><a>About</a></Link>
    <Link href="/users"><a>User</a></Link>

  </div>
)

export default Index;
