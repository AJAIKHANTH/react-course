import React from 'react'
import { Home } from './Components.js/Home'
import { About } from './Components.js/About'
import { Contact } from './Components.js/Contact'
import { User } from './Components.js/User'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


export const Routered = () => {
    return ( 
        <div>    

            <BrowserRouter>
                <ul>        
                    <li>< Link to='/'>Home</Link></li>
                    <li>< Link to='/about'>about</Link></li>
                    <li>< Link to='/contact'>contact</Link></li>
                    <li>< Link to='/user/1'>User 1</Link></li>
                    <li>< Link to='/user/2'>User 2</Link></li>
                </ul>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/user/:id' element={<User />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}
