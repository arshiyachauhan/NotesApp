import React from 'react'
import styles from './partials.module.scss';
import Input from '../../../components/atoms/input';
import Button from '../../../components/atoms/button';
import utils from '../../../utils/localStorage';
import { useNavigate } from 'react-router-dom';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigate = useNavigate();

    const handleSignin = () => {
        if (!email.length && !password.length) toast.error('All fields are required');
        fetch('http://localhost:3001/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data?.success === 201) {
                toast.success('User Logged in successfully!'); 
                console.log(data);
                utils.addToLocalStorage('auth_key', data.token);

                navigate('/notes');
            } else {
                toast.error(data?.message);
            }
        }).catch((err) => {
            console.log(err);
            toast.error('Login Failed');
        })
    }


    return (
        <div className={styles.form}>
            <Button text={'Join With Google'} icon={'ri:google-fill'} />
            <div className={styles.option}><span>Or Join With Email</span></div>
            <article>
                <Input
                    type={'email'}
                    value={email}
                    placeholder={'Enter Email'}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    type={'password'}
                    value={password}
                    placeholder={'Enter Password'}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                    text={'Join With Email'}
                    icon={'material-symbols:login'}
                    className={styles.emailBtn}
                    handleClick={handleSignin}
                />
            </article>
        </div>
    )
}


export default Signin
