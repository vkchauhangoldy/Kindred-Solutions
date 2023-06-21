import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import classes from './Signin.module.css';
import Aside from '../Aside/Aside';
import logo from '../../assets/signlogo.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Signin = () => {

    const [type, setType] = useState("password");
    const [icons, setIcons] = useState(faEyeSlash);

    const toggleHandler = () => {
        if (type === "password") {
            setIcons(faEye)
            setType("'text")
        } else {
            setIcons(faEyeSlash)
            setType("password")
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.aside}>
                <Aside />
            </div>

            <div className={classes.container} >
                <form className={classes.form} onSubmit={submitHandler}>

                    <div className={classes.logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <h1>Login</h1>

                    <div className={classes['input-controls']}>
                        <input type="email" placeholder='Email' />
                    </div>

                    <div className={classes['input-controls']}>
                        <input type={type} placeholder='Password' />
                        <span className={classes.icon} onClick={toggleHandler}><FontAwesomeIcon icon={icons} /></span>
                    </div>

                    <div className={classes['action-controls']}>
                        <button type='submit' className={classes.button}>Sign In</button>
                    </div>

                    <div className={classes.forgot}>
                        <p><Link to='/forgot' className={classes.link}>Forgot Password</Link></p>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default Signin;