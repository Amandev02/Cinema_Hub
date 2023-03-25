import { useState } from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from './components/Pages/Movies/Movies';
import Series from './components/Pages/Series/Series';
import Search from './components/Pages/Search/Search';
import Trending from './components/Pages/Trending/Trending';
import './App.css'
import Header from './components/Header/header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
    <div className='app'>
    <Routes>
      <Route path="/" element={<Trending/>} exact/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/series" element={<Series/>}/>
      <Route path="/search" element={<Search/>}/>
    </Routes>
      </div>
      <SimpleBottomNavigation/>
      </BrowserRouter>
  
  )
}

export default App
