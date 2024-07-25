import React, {useState} from 'react';
import styles from "./note.module.scss";
import {formatDate} from "../../../utils/formatDate";

function Note(props){
    const {text, date, color} = props;
    const [noteText, setNoteText]= useState("");
    return(
        <article className={styles.container} style={{backgroundColor: color}}>
            <div className={styles.content}>
              {
                !text.length?(
                  <textarea value={noteText} onChange={(e)=> setNoteText(e.target.value)} className={styles.textarea}/>
                ):( <>
                  <p>{text} </p>
              <button>
                  read more
              </button>
                </>
              )}
              
              </div>
            <footer className={styles.footer}>{formatDate(date)}</footer>
    </article>
    );
}
export default Note;

