import React, { useState } from 'react';
import Card from '../UI/Card';
import './AddUser.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModel';

function AddUser(props) {
    const [userName, setuserName] = useState('');
    const [userAge, setuserAge] = useState('');
    const [error, setError] = useState();


    const usernameHandler = (event) => {
        setuserName(event.target.value);
    };
    const ageHandler = (event) => {
        setuserAge(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const userData = {
            name: userName,
            age: userAge,
            id: Math.floor(Math.random() * 1000)
        }
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError(
                {
                    title: 'Invalid input',
                    message: 'Please enter a valid name and age (non-empty values).',
                }
            )
            return;
        }
        if (+userAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            })
            return;
        }
        props.addUsersHandler(userData)
        setuserName('');
        setuserAge('');
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />}
            <Card>
                <div className='new-user'>
                    <form onSubmit={submitHandler}>
                        <div className='new-user__controls'>
                            <div className='new-user__control'>
                                <label htmlFor='username'>Username</label>
                                <input id='username' type="text" value={userName} onChange={usernameHandler} />
                                <label htmlFor='age'>Age(Years)</label>
                                <input id='age' type="number" value={userAge} onChange={ageHandler} />
                            </div>
                        </div>
                        <div className='new-user__actions'>
                            <Button type='submit' >Add User</Button>
                        </div>
                    </form>
                </div>
            </Card>
        </>
    )
};

export default AddUser;
