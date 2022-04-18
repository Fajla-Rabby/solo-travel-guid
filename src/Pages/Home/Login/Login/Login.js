import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div style={{ textAlign: 'center' }} className=''>
        <h2>Please register</h2>
        <form  action="">
            <input type="email" name="email" id="" placeholder='Your Email' required />
            <br />
            <input type="password" name="password" id="" placeholder='Password' required />
            <input
                className=''
                type="submit"
                value="login" />
        </form>
        <p>Haven't registered yet? <Link to='/register' className='' >Please register</Link></p>
        <SocialLogin></SocialLogin>
    </div>
    );
};

export default Login;