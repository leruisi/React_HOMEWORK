import React from 'react';
import style from './LoginPage.module.css'
import {useForm} from 'react-hook-form'

const LoginPage = () => {
   // const handleSubmit =(event) => {
   //     event.preventDefault();
   //     console.log(event);
   //
   // }

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        // Відправка POST-запиту до API
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                console.log('New User:', result);
                // Очистка форми після успішного створення користувача
                reset();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className={style.wrapper}>
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
        Name:
        <input type="text" className={style.submit} {...register('name')} />
    </label>

            <label>
                Email:
                <input type="email"  className={style.submit} {...register('email')} />
            </label>

            <label>
                Username:
                <input type="text" className={style.submit} {...register('username')} />
            </label>
        <label>
            Password:
            <input type="text" className={style.submit} {...register('password')} />
        </label>

            <button type="submit" className={style.button}>Create</button>

    </form>

        </div>
    );
};

export default LoginPage;