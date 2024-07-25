import React from "react";
import Login from "../pages/login";
// import Loader from "../components/shared/loader";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "../layouts/main";
import Notes from "../pages/notes";

function App() {
    return (
      //in scss we can use same class name for multiple files
    //   <main className={styles.container}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/notes" element={<Main/>}>
            <Route index element={<Notes/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    );
  }
  
  export default App;
  
