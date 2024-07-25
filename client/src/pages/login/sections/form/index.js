import  React, { useState } from "react";
import styles from './form.module.scss';
// import {Icon} from '@iconify/react';
import BrandLogo from "../../../../components/shared/brand";
import Input from '../../../../components/atoms/input';
import Button from '../../../../components/atoms/button';
import { useNavigate } from "react-router-dom";
function  Form(){
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const navigate = useNavigate();
    return(
        <section className={styles["form-container"]}>
            <BrandLogo />
            <div className={styles.form}>
            {/* <article className={styles.google}>
                <Icon icon={"bi:google"} />
                <h3>Join with Google</h3>
            </article> */}
            <Button
            text="Join with Google"
            icon="bi:google"
            className={styles.google}
            />
            <div className={styles.option}>
                <span>or join with email address</span>
            </div>
            <article className={styles.details}>
                <Input
                type="email"
                value={email}
                placeholder={'Type your EmailId'}  
                onChange={(e) => setEmail(e.target.value)}/>
                <Input
                type="password"
                value={password}
                placeholder={'Type your Password'}  
                onChange={(e) => setPassword(e.target.value)}/>
            </article>
            <Button
            text="Join with Email"
            icon="material-symbols:login"
            className={styles.emailBtn}
            handleClick={()=>navigate("/notes")}
            />

            </div>
        </section>
    );
}
export default Form;

