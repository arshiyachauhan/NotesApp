import React, {Suspense} from "react";
import Loader from "../components/shared/loader";
import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import SideBar from "../components/shared/sidebar";
import Navbar from "../components/shared/navbar";

function Main(){
    return (
        //Suspense helps to show something when application is in routing face
        <Suspense fallback={<Loader/>}>
            <main className={styles.container}>
            {/*SideBar */}
            <SideBar/>
            <div className={styles.main}>
                {/* Navbar */}
                <Navbar/>
                <section className={styles.content}>
                    <Outlet />
                </section>
                </div>
            </main>

        </Suspense>
    );
}
export default Main;
