import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-success text-center mt-2'>Please login</h2>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="success w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>

            <p>New here? <Link to='/register' className='text-success pe-auto text-decoration-none' >Please Register</Link></p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;