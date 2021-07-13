import Link from 'next/link'
import Name from '../components/Name'
import ClientOnly from '../components/client-only';

const Index = () => (
  <div>
    Welcome,
    <ClientOnly>
    <Name />
      </ClientOnly> 
    <br/><br/>
    <Link href="/about"><a>About</a></Link>

  </div>
)

export default Index;
