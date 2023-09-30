import { useState } from "react"
import styles from "./Activity.module.css"

import { Trash } from "@phosphor-icons/react/dist/ssr/Trash";

export function Activity({ id, content, deleteActivity, hasDone, toggleDone }) {

  return(
    <div className={hasDone ? styles.activityDone : styles.activityNotDone}>
      <span onClick={() => toggleDone(id)}></span>
      <p>{content}</p>
      <div className={styles.trash} onClick={() => deleteActivity(id)}><Trash size={16}/></div>
    </div>
  )
}