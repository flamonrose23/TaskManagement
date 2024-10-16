import React from "react";
import { BsCheck } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { MdOutlineModeEditOutline } from "react-icons/md";

function Task({ item, onDelete, setshowForm, setType }) {
  const dispatch = useDispatch();
  const handlePriorityColor = (priority) => {
    if (priority.toLowerCase() === "low") {
      return "bg-[#2eff00]";
    } else if (priority.toLowerCase() === "medium") {
      return "bg-[#ffd244]";
    } else {
      return "bg-[#ff0000]";
    }
  };
}

export default Task;

