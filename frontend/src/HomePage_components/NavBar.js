import React,{useState} from 'react'
import './NavBar.css'
import { CiSearch } from "react-icons/ci";
import { VscBell } from "react-icons/vsc";

export const NavBar = () => {
const [inputValue, setInputValue] = useState("");
  const handleBlur = () => {
    setInputValue("");
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div id="navBar">
        <h1>cUILD</h1>
        <div id="search_bar">
          <input
            placeholder="Search"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputValue}
          ></input>
          <button>
            <CiSearch id="search_icon" className="search_icon" />
          </button>
        </div>
        <div id="profileContainer">
          <button>
            <VscBell id="bell_icon" />
          </button>
          <h4 id="userNameProfile">Vineet Bambah</h4>
          <div id="profileCircularDiv"></div>
        </div>
      </div>
  )
}
