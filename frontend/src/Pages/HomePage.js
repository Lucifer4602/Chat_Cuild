import React from "react";
import "./HomePage.css";
import ProjectCard from "../HomePage_components/ProjectCard";
import { ColorButton } from "../HomePage_components/ColorButton";
import Color from "../assets/colors";
import { NavBar } from "../HomePage_components/NavBar";
import ProjectData from "../Data_Files/ProjectsData";

function create_ProjectCard(Project) {
  return <ProjectCard name={Project.name} />;
}

const HomePage = () => {
  return (
    <div id="main">
      <NavBar />
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
              <ColorButton
                text="Relevance"
                color={Color.yellowish}
                fontSize="10px"
              />
              <ColorButton
                text="Alphabetical"
                color={Color.light_brown}
                fontSize="10px"
              />
              <ColorButton
                text="Due date"
                color={Color.light_brown}
                fontSize="10px"
              />
              <ColorButton
                text="Popularity"
                color={Color.light_brown}
                fontSize="10px"
              />
            </div>
          </div>
          <div id="projectsScroll">{ProjectData.map(create_ProjectCard)}</div>
        </div>
        <div id="yourProjectContainer">
          <h2>Your Projects</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
