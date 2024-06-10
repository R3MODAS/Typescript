import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import { CourseGoalObj } from "./types/type";
import NewGoal from "./components/NewGoal";

function App() {
  const [goals, setGoals] = useState<CourseGoalObj[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    // set the new goal
    const newGoal: CourseGoalObj = {
      id: Math.random(),
      title: goal,
      description: summary,
    };

    // update the new goal along
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
