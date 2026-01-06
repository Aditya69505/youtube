import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <SideBar/>
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  )
}

export default Body
