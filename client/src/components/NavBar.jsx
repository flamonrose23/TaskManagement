import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import navbarList from "../tools/NavbarList";

function NavBar({ filterName, setfilterName, setshowNavbar, showNavbar }) {
  const navigate = useNavigate();
  const handlLogOut = () => {
    localStorage.clear();
    navigate("/");
  };

