import React, { useContext } from 'react';
import { Context } from '../context';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Auth() {
    const {
        username,
        setUsername,
        secret,
        setSecret,
    } = useContext(Context);

    const router = useRouter();

    // handles signing in or signing up for using "let's Chat" app.
    const onSubmit = (e) => {
        e.preventDefault();

        // validate username and secret.
        if (username.length < 1 || secret.length < 1) return;

        // submit info to chatengine.io
        axios.put(
            {username, secret},
            {headers: {"Private-key": `${process.env.REACT_APP_CHATENGINE_API_KEY}`}}
        )
        .then(res => router.push('/chats'))

    }

    return (
        <div className='background'>
            <div className='auth-container'>
                <form className='auth-form' onSubmit={(e) => onSubmit(e)}>
                    <div className='auth-title'>Lets Chat</div>

                    <div className='input-container'>
                        <input
                            placeholder='Email'
                            className='text-input'
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>

                    <div className='input-container'>
                        <input
                            type='password'
                            placeholder='Password'
                            className='text-input'
                            onChange={e => setSecret(e.target.value)}
                        />
                    </div>

                    <button
                        type='submit'
                        className='submit-button'
                    >
                        Login / Sign Up
                    </button>

                </form>
            </div>
        </div>
    )
}