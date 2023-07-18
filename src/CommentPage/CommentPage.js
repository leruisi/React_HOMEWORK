import React, { useEffect } from 'react';
import style from './CommentPage.module.css';
import { useForm } from 'react-hook-form';
import { CommentService } from '../service/CommentService';

const CommentPage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    const onSubmit = async (data) => {
        try {
            await CommentService.createComment(data);
            console.log('Comment created successfully!');
        } catch (error) {
            console.error('Error creating comment:', error);
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
                    Comment:
                    <input
                        type="text"
                        className={style.submit}
                        {...register('comment', {
                            minLength: {
                                value: 15,
                                message: 'Minimum length is 15',
                            },
                        })}
                    />
                </label>
                {errors.comment && <p>{errors.comment.message}</p>}

                <button type="submit" className={style.button}>Create</button>
            </form>
        </div>
    );
};

export default CommentPage;
