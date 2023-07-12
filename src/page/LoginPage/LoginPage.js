import React from 'react';
import styles from './LoginPage.css'
const LoginPage = () => {
    return (
        <div>
    <form className={styles.form}>
        <label>Enter your name:
            <input type="text" />
        </label>

        <label>Enter your password:
            <input type="password" />
        </label>
        <button type={'submit'} className={styles.button}>Login</button>

    </form>

        </div>
    );
};

export default LoginPage;