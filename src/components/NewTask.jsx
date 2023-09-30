import { useState } from "react"

import styles from "./NewTask.module.css"

import { PlusCircle } from "@phosphor-icons/react"

export function NewTask({ setActivities, activities }) {
  const [newTask, setNewTask] = useState('')

  function handleCreateTask(event) {
    event.preventDefault()

    const newActivity = {
      id: new Date().getTime(),
      content: newTask,
      hasDone: false
    }
    setActivities([...activities, newActivity])
    setNewTask('')
  }

  return (
    <form className={styles.box} onSubmit={handleCreateTask}>
      <input 
        type="text" 
        value={newTask}
        placeholder="Adicione uma nova tarefa" 
        className={styles.inputTask} 
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit" className={styles.btnCreate}>Criar <PlusCircle size={16} weight={"bold"} /></button>
    </form>
  )
}