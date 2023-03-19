import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
    <div className='app'>
    <Switch>
      <Route path="/" component={Trending} exact/>
      <Route path="/movies" component={Movies}/>
      <Route path="/series" component={Series}/>
      <Route path="/search" component={Search}/>
    </Switch>
      </div>
      </BrowserRouter>
  
  )
}

export default App
