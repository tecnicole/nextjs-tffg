import Link from 'next/link'
const Index = () => (
  <div>
    Hello World. Test{' '}
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)
export default Index;
