import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {

    
    return (
        <div>
            <ul>
                <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/chechout'>Chechout</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/login'>Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;

            </ul>
        </div>
    )
}

export default Nav
