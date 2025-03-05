import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GoogleAd from './components/GoogleAd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>My google Ads Integrations</h1>
        <GoogleAd client={'ca-pub-3940256099942544'} slot={'21850660751'} />
      </div>
    
    </>
  )
}

export default App
