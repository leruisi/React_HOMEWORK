import React, { useRef, useState } from 'react';
import style from './LoginPage.module.css';

const LoginPage = () => {
    const nameRef = useRef('');
    const surnameRef = useRef('');
    const commentRef = useRef('');

    const [isFormValid, setIsFormValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value, surnameRef.current.value, commentRef.current.value);

        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify({
                name: nameRef.current.value,
                surname: surnameRef.current.value,
                comment: commentRef.current.value,
            }),
        });
    };

    const handleInputChange = () => {
        const name = nameRef.current.value;
        const surname = surnameRef.current.value;
        const comment = commentRef.current.value;

        setIsFormValid(name !== '' && surname !== '' && comment !== '');
    };

    return (
        <div className={style.wraaper}>
            <form className={style.form} onSubmit={handleSubmit}>
                <label>
                    Name
                    <input type="text" className={style.submit} ref={nameRef} onChange={handleInputChange} />
                </label>

                <label>
                    Surname
                    <input type="text" className={style.submit} ref={surnameRef} onChange={handleInputChange} />
                </label>

                <label>
                    Comment
                    <input type="text" className={style.submit} ref={commentRef} onChange={handleInputChange} />
                </label>

                <button type="submit" className={style.burron} disabled={!isFormValid}>
                    Click
                </button>
            </form>
        </div>
    );
};

export default LoginPage;

