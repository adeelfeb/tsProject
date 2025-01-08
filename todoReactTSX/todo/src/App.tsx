import './App.css'
import { Button } from './components/ui/button'
import { buttonVariants } from './components/ui/button'

function App() {
  return (
    <>
      <main>
        {/* Using Button component from ShadCN UI */}
        <Button>Check</Button>
        
        {/* Applying buttonVariants to a button's className */}
        {/* <button className={buttonVariants({ variant: 'primary' })}>Hi</button> */}
      </main>
    </>
  )
}

export default App
