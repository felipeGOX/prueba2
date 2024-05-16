import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import DetailView from './Components/DetailView'
import Login from './Components/Login'
import TaskList from './Components/TaskList'
import SearchBar from './Components/SearchBar'
import Pagination from './Components/Pagination'
import SideBar from './Components/SideBar'
import Index from './Index'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes> <Route> 

          <Route path='/detailview' element={<DetailView/>} />
          <Route path='/tasklist' element={<TaskList/>} />
          <Route path='/' element={<Login/>} />
          <Route path='/searchbar' element={<SearchBar/>} />
          <Route path='/pagination' element={<Pagination/>} />
          <Route path='/sidebar' element={<SideBar/>} />
          <Route path='/index' element={<Index/>} />
         
        

          </Route> </Routes>
      </div>
    </>
  )
}

export default App
