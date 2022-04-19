import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


      const handleRegister = event => 
      {
          event.preventDefault();
          const name = event.target.name.value;
          const  email = event.target.email.value;
          const passwrod = event.target.password.value;

      }


    return (
       
        <div className='container w-50 mx-auto'>
        <h2 className='text-success text-center mt-2'>Please Register</h2>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" >
                <Form.Control type="name" placeholder="Enter name" required />

            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="success w-50 mx-auto d-block mb-2" type="submit">
                Register
            </Button>
        </Form>

        <p>already have an account? <Link to='/login' className='text-success pe-auto text-decoration-none' >login</Link></p>
        <SocialLogin></SocialLogin>

    </div>
    );
};

export default Register;