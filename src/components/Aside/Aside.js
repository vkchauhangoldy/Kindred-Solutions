import React from 'react'
import classes from './Aside.module.css'
import { Link } from 'react-router-dom'
const Aside = () => {


    return (
        <div className={classes.container}>
            <div className={classes.card}>
                <h1 className={classes.heading}>Give your business a SalesCaptain Upgrade</h1>
                <p className={classes.para}>Our AI-powered tools help local businesses modernize how they communicate with their customers by facilitating online reviews, personalized marketing campaigns, web chats, payments, and more.
                </p>
                <p className={classes.para}>To learn more, talk to an expert today.</p>
                <Link to="https://calendly.com/salescaptain/demo_meet?month=2023-06" target='blank' className={classes.book}>Book an appointment</Link>

            </div>
        </div>
    )
}

export default Aside
