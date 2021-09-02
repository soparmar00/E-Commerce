import React from 'react'
import { Route,Redirect } from 'react-router'
import { useSelector } from 'react-redux'

const PrivateRoute = ({component:Component,...res}) => {

    const token = useSelector(state =>state.Product.token)
    return (
    <Route {...res}
    render={props=>(
        token?(
        <Component {...res} {...props}/>
        ):
        (
            <Redirect to="/login"/>
        )
       )}
       />     
       
    )
}

export default PrivateRoute