import React from "react";
import "./ProjectCard.css";
import ColorTag from "./ColorTag";
import Color from "../assets/colors";
import { ColorButton } from "./ColorButton";

const ProjectCard = (Props) => {
  return (
    <div id="project_card">
      <h3 id="project_name">{Props.name}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, a
        eveniet assumenda minima ipsam cupiditate laudantium reiciendis
        voluptatibus aperiam reprehenderit autem perspiciatis ullam libero sunt
        fuga porro quas doloribus velit?
      </p>
      <hr />
      <div id="tech_tags">
        <ColorTag color="red" text="HTML" />
        <ColorTag color={Color.light_green} text="CSS" />
        <ColorTag color={Color.light_blue} text="JavaScript" />
        <ColorTag color={Color.pinkish} text="MongoDB" />
        <ColorTag color={Color.dark_green} text="+5 more" />
      </div>
      <hr />
      <div id="readMoreDiv">
        <div></div>
        <span>read more</span>
      </div>
      <div id="card_bottomDiv">
        <div id="project_details">
          <div id="datePostedTxt">
            {" "}
            <span style={{ color: Color.light_purple }}>
              Date posted -{" "}
            </span>{" "}
            <span>April 1,2024</span>
          </div>
          <div id="lastDate">
            {" "}
            <span style={{ color: Color.light_purple }}>Last Date -</span>{" "}
            <span> April 30,2024</span>
          </div>
          <div id="bottom_tags">
            <ColorButton color={Color.oragne} text="interested"  fontSize = '7px'/>
            <ColorButton color={Color.dark_green} text="Save for Later" fontSize = '7px'/>
          </div>
        </div>
        <div id="card_CircularDiv"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
