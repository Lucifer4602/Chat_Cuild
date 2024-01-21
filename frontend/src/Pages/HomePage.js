import React from "react";
// import { IconContext } from "react-icons";
import { CiSearch } from "react-icons/ci";
import { VscBell } from "react-icons/vsc";
import "./HomePage.css";
import ProjectCard from "../HomePage_components/ProjectCard";
import { useState } from "react";
import { ColorButton } from "../HomePage_components/ColorButton";
import Color from "../assets/colors";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  const handleBlur = () => {
    setInputValue("");
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div id="main">
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
      <div id="page1">
        <div id="filterContainer">
          <h2>Filters</h2>
        </div>
        <div id="projectContainer">
          <div id="headingAndTags">
            <div id="headingBrowseProjects">
              <h1>Browse Projects</h1>
            </div>
            <div id="tags">
              <span>
                <h4>Sort By</h4>
              </span>
              <ColorButton text="Relevance" color={Color.yellowish} />{" "}
              <ColorButton text="Alphabetical" color={Color.light_brown} />
              <ColorButton text="Due date" color={Color.light_brown} />
              <ColorButton text="Popularity" color={Color.light_brown} />
            </div>
          </div>
          <div id="projectsScroll">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
        <div id="yourProjectContainer">
          <h2>Your Projects</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
