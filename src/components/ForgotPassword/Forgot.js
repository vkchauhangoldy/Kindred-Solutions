import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Forgot.module.css'
import logo from '../../assets/logo.jpg'

const Forgot = () => {

    const SubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className={classes.container} >
            <form className={classes.form} onSubmit={SubmitHandler}>
                <div className={classes.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <h1>Forgot Password</h1>
                <p className={classes.paragrap}>To reset your account password, enter the email address you registered with, and we will email you the instructions to reset the password.</p>
                <div className={classes['input-controls']}>
                    <input type="email" placeholder='Email' />
                </div>

                <div className={classes['action-controls']}>
                    <button type='submit' className={classes.button}>Send Instructions</button>
                </div>
                <div className={classes.forgot}>
                    <p><Link to='/' className={classes.link}>Return to Sign in</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Forgot
