import React from "react";
import styles from "./greeting.module.scss";
function Greeting(){
    return(
        <section className={styles.container}>
            <h2>Hello, <span>Arshiya! 👋🏼</span></h2>
            <p>All notes are here, in one place!</p>
        </section>
    )
}
export default Greeting;
