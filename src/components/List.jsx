import styles from "./List.module.css"

import Clipboard from "../assets/Clipboard.svg"
import { Activity } from "./Activity"

export function List({ deleteActivity, toggleDone, activities }) {
  

  const listActivities = activities.map((activity) => {
    return <Activity 
      id={activity.id} 
      key={activity.id} 
      hasDone={activity.hasDone} 
      content={activity.content} 
      deleteActivity={() => deleteActivity(activity.id)} 
      toggleDone={() => toggleDone(activity.id)}
    />
  })

  const withoutActivities = () => {
    return (
      <>
        <img src={Clipboard} alt="" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </>
    )
  }

  function numberOfCompletedTasks() {
    return activities.filter(activity => activity.hasDone).length;
  }

  return (

    <main className={styles.main}>
      <div className={styles.taskStatus}>
        <div>
          <strong className={styles.createdTasks}>Tarefas criadas</strong>
          <span className={styles.numberOfTasks}>{activities.length}</span>
        </div>
        <div>
          <strong className={styles.finishedTasks}>Concluídas</strong>
          <span className={styles.numberOfTasks}>{numberOfCompletedTasks()} de {activities.length}</span>
        </div>
      </div>

      <div className={styles.showTasks}>
        {activities.length > 0 ? listActivities : withoutActivities()}
      </div>
    </main>
  )
}