import { useState } from "react"

import { Header } from './components/Header'
import { List } from './components/List'
import { NewTask } from './components/NewTask'
import './global.css'

function App() {
  const [activities, setActivities] = useState([]);

  const deleteActivity = (id) => {
    setActivities(prevActivities => prevActivities.filter(activity => activity.id !== id));
  };  

  const toggleActivityDone = (id) => {
    const updatedActivities = activities.map(activity => {
      if (activity.id === id) {
        return { ...activity, hasDone: !activity.hasDone };
      }
      return activity;
    });
    setActivities(updatedActivities);
  };

  return (
    <div>
      <Header />
      <NewTask setActivities={setActivities} activities={activities} />
      <List deleteActivity={deleteActivity} toggleDone={toggleActivityDone} activities={activities} />
    </div>

  )
}

export default App
