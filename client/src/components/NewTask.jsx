import React, { useState, useEffect } from "react";

import Selector from "./selector";
import navbarList from "../tools/NavbarList";
import { createTask, updateTask } from "../actions/tasks";
import { useDispatch, useSelector } from "react-redux";

function NewTAsk({ type, showForm, setshowForm }) {
  const { task } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const dt = new Date();
  const [content, setContent] = useState("");
  const [date, setdate] = useState("");
  const [priority, setpriority] = useState("");
  const [status, setstatus] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    setContent(type === "create" ? "" : task.content);
    setdate(
      type === "create"
        ? `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(
            2,
            "0"
          )}-${String(dt.getDate()).padStart(2, "0")}`
        : task.date
    );
    setpriority(type === "create" ? "low" : task.priority);
    setstatus(type === "create" ? "in progress" : task.status);
  }, [task]);

  const handlePriority = (item) => {
    setpriority(item);
  };

  const handleStatus = (item) => {
    setstatus(item);
  };
  const handleSubmit = () => {
    if (type === "create") {
      dispatch(
        createTask({ content, date, priority, status, userid: user?.user?._id })
      );
    } else {
      dispatch(
        updateTask(task._id, {
          _id: task._id,
          content,
          date,
          priority,
          status,
          userid: user?.user?._id,
        })
      );
    }
