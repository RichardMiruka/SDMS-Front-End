import React, {useState} from 'react'
import { Link, Outlet } from 'react-router-dom'

function Sidebar() {

  return (
    <div className='flex'>
      <div className=' flex bg-gray-500 h-screen w-40 p text-white text-center'>
          <div className='space-y-20'>
                <div>Sidebar</div>
                <ul className='flex-frow space-y-6 p-4'>
                    <li><Link to='event'>Games</Link></li>
                    <li><Link to="Team">Team</Link></li>
                    <li><Link to="coaches">Coaches</Link></li>
                    <li><Link to="players">Players</Link></li>
                </ul>
            </div>
      </div>
      <div className='mr-4 ml-8'>
        <Outlet />
      </div>
      
    </div>
  )
}

export default Sidebar