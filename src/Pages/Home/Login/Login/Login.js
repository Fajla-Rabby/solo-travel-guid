import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();


    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async() =>
    {
        const email = emailRef.current.value;
       if(email)
       {
        await sendPasswordResetEmail(email);
        toast('Sent email');
       }
       else
       {
           toast('please enter your email address');
       }
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-success text-center mt-2'>Please login</h2>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef}  type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="success w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>

            <p>Forgate password? <button  className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset password</button></p>

            <p>New here? <Link to='/register' className='text-success pe-auto text-decoration-none' >Please Register</Link></p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;