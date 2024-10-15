import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../actions/tasks";
import { DeleteTaskCard, Task } from "../components";

function TaskList({ filterName, setType, setshowForm }) {
  const [filtredTodos, setfiltredTodos] = useState([]);
  const [showDeleteTaskCard, setshowDeleteTaskCard] = useState(false);
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDeleteTask = (task) => {
    dispatch({ type: "SET_TASK", payload: task });
    setshowDeleteTaskCard(true);
  };

export default TaskList;
