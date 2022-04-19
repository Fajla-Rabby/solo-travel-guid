import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();

      if(user)
      {
          navigate('/login'); 
      }

      const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password)
        navigate('/home');

    }


    return (
       
        <div style={{ textAlign: 'center' }} className='register-form'>
        <h2>Please register</h2>
        <form onSubmit={handleRegister} action="">
            <input type="text" name="name" id="" placeholder='Your Name' />
            <br />
            <input type="email" name="email" id="" placeholder='Your Email' required />
            <br />
            <input type="password" name="password" id="" placeholder='Password' required />
            <input
                className='w-50 mx-auto btn btn-primary mt-2'
                type="submit"
                value="Register" />
        </form>
        <p>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' >Please login</Link></p>
        <SocialLogin></SocialLogin>

    </div>
    );
};

export default Register;