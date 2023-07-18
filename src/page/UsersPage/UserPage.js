import React, {useEffect} from 'react';
import style from './LoginPage.module.css'
import {useForm} from 'react-hook-form'

const UserPage = () => {

    useEffect( ()=>{
        console.log(errors)
    }

    )


    const onSubmit = (data) => {

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

                reset();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const { register, handleSubmit, reset, formState: {errors} } = useForm();


    return (
        <div className={style.wrapper}>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Name:
                    <input type="text" className={style.submit} {...register('name' ,  {required: 'Name is required'})}
                           />
                </label>

                    {errors.name&&<p>{errors.name.message}</p>}

                <label>
                    Email:
                    <input type="email"  className={style.submit} {...register('email' , {required: 'Email is required'})} />
                </label>

                {errors.email&&<p>{errors.email.message}</p>}

                <label>
                    Username:
                    <input type="text" className={style.submit} {...register('username',{required: 'Username is required'})} />
                </label>

                {errors.username&&<p>{errors.username.message}</p>}

                <label>
                    Password:
                    <input type="text" className={style.submit} {...register('password')} />
                </label>

                <button type="submit" className={style.button}>Create</button>

            </form>

        </div>
    );
};

export default UserPage;