import React, { useEffect } from 'react';
import style from './UserPage.module.css';
import { useForm } from 'react-hook-form';
import UserPageService from '../service/UserPageService';

const UserPage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    const onSubmit = async (data) => {
        try {
            await UserPageService.createUser(data);
            console.log('User created successfully!');
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <div className={style.wrapper}>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Name:
                    <input
                        type="text"
                        className={style.submit}
                        {...register('name', { required: 'Name is required' })}
                    />
                </label>
                {errors.name && <p>{errors.name.message}</p>}

                <label>
                    Email:
                    <input
                        type="email"
                        className={style.submit}
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                message: 'This is not a valid email',
                            },
                        })}
                    />
                </label>
                {errors.email && <p>{errors.email.message}</p>}

                <label>
                    Username:
                    <input
                        type="text"
                        className={style.submit}
                        {...register('username', { required: 'Username is required' })}
                    />
                </label>
                {errors.username && <p>{errors.username.message}</p>}

                <label>
                    Password:
                    <input
                        type="text"
                        className={style.submit}
                        {...register('password', {
                            minLength: {
                                value: 6,
                                message: 'Minimum length is 6',
                            },
                        })}
                    />
                </label>
                {errors.password && <p>{errors.password.message}</p>}

                <button type="submit" className={style.button}>Create</button>
            </form>
        </div>
    );
};

export default UserPage;
