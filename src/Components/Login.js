import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { loginUser, signUpUser } from '../Thunk/thunk';


function Login() {

    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [log, setLog] = useState(false)

    const [sigup, setSigup] = useState({ username: '', email: '', password: '' })
    const [login, setLogin] = useState({ username: '', password: '' })

    const redirect = useSelector(state => state.Product.redi)

    const history = useHistory()

    const handleClose = () => {
        setShow(false)
    }

    const handleShow = () => {
        setShow(true)
    };

    const handlelogClose = () => {
        setLog(false)
    };

    const handlelogShow = () => {
        setLog(true)
    }

    const [modelTitle, setModelTitle] = useState("Submit")

    const handleSignUp = () => {
        setModelTitle("Sign UP")
        handleShow()
    }

    const handleLogin = () => {
        setModelTitle("Login")
        handlelogShow()
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSigup({ ...sigup, [name]: value });
    }

    const handlelogChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(sigup.username, sigup.email, sigup.password)
        dispatch(signUpUser(sigup))
        handleClose()
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        console.log(login.username, login.password)
        dispatch(loginUser(login))
        handlelogClose()
        history.push(`/product/:${redirect}`)
    }

    return (
    <div>
    <td>&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="success" onClick={() => handleSignUp()} >Sign Up</Button>&nbsp;&nbsp;&nbsp;&nbsp; </td>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header >
    <Modal.Title>{modelTitle}</Modal.Title>
    </Modal.Header>
    <Modal.Body>

    <Form onSubmit={handleSubmit} >
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" name="username" placeholder="Enter username" onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Enter Password" onChange={handleChange} />
    </Form.Group>

    <center>
    <Button variant="primary" type="submit">Register</Button>&nbsp;&nbsp;&nbsp;&nbsp;
    <Button variant="secondary" onClick={handleClose}>Close</Button>
    </center>
    </Form>

    </Modal.Body>
    </Modal>

    <td><Button variant="warning" onClick={() => handleLogin()} >Login</Button> </td>
            
    <Modal show={log} onHide={handlelogClose}>
    <Modal.Header >
    <Modal.Title>{modelTitle}</Modal.Title>
    </Modal.Header>
    <Modal.Body>

    <Form onSubmit={handleLoginSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" name="username" placeholder="Enter username" onChange={handlelogChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Enter Password" onChange={handlelogChange} />
    </Form.Group>

    <center>
    <Button variant="primary" type="submit">Login</Button>
    <Button variant="secondary" onClick={handlelogClose}>Close
    </Button>
    </center>
    </Form>

    </Modal.Body>
    </Modal>
    </div>
    )
}

export default Login
