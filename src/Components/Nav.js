import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../redux/Action/action';

const Nav = () => {

    const token = useSelector(state => state.Product.token)
    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.clear()
        dispatch(logout())
    }
    
    return (
        <div>
            <ul>
            <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/checkout'>Checkout</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            {!token && (<Link to='/login'>Login</Link>)}&nbsp;&nbsp;&nbsp;&nbsp;
            </ul>
            <div align="right">{token && (<Button variant="danger" type="submit"  onClick={() => handleLogout()}> Logout </Button>)}</div>
            
        </div>
    )
}

export default Nav
