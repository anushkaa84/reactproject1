import React from "react";
import Header from "./components/Header";
import TodoItem from "./TodoItem";
import Button from "./Button";
import "./style.css";


const App =() =>{
  return(
     <div className="todo-container">
      <Header heading="TODOIE APP"/>
      <TodoItem text="EAT"/>
      <TodoItem text="CODE"/>
      <TodoItem text="SLEEP"/>
      <TodoItem text="PLAY" />
      <TodoItem text="STUDY"/>
      <Button/>

     </div>);

};
export default App;
