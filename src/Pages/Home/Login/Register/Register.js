import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    return (
       
             <div style={{ textAlign: 'center' }} className=''>
            <h2>Please register</h2>
            <form  action="">
                <input type="text" name="name" id="" placeholder='Your Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <br />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input
                    className=''
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='' >Please login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;