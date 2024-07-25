import React from 'react'
import styles from './partials.module.scss';
import Input from '../../../components/atoms/input';
import Button from '../../../components/atoms/button';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');

    const handleSignup = () => {
        if (!email.length && !password.length && !name.length) toast.error('All fields are required');
        fetch('http://localhost:3001/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data?.success === 201) {
                toast.success('Signup successfull!'); 
                props.handleSwitch();
            } else {
                toast.error(data?.message);
            }
        }).catch((err) => {
            console.log(err);
            toast.error('Signup Failed');
        })
    }


    return (
        <div className={styles.form}>
            <Button text={'Join With Google'} icon={'ri:google-fill'} />
            <div className={styles.option}><span>Or Join With Email</span></div>
            <article>
                <Input
                    type={'name'}
                    value={name}
                    placeholder={'Enter Full Name'}
                    onChange={(e) => setName(e.target.value)}
                />

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
                    handleClick={handleSignup}
                />
            </article>
        </div>
    )
}


export default Signup
