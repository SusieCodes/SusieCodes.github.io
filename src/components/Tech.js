import React from "react";
import { SiHtml5 } from "react-icons/si"; // html
import { SiCss3 } from "react-icons/si"; // css
import { SiJavascript } from "react-icons/si"; // javascript
import { FaGit } from "react-icons/fa"; // git
import { FaGithubAlt } from "react-icons/fa"; // github
import { SiReact } from "react-icons/si"; // react
import { SiVisualstudiocode } from "react-icons/si"; // vscode
import { SiJson } from "react-icons/si"; // json
import { SiNpm } from "react-icons/si"; // npm
import { SiPostman } from "react-icons/si"; // postman
import { SiDiagramsdotnet } from "react-icons/si"; // dbdiagram
import { SiBootstrap } from "react-icons/si"; // bootstrap
import { AiFillApi } from "react-icons/ai"; // api
import { GiWireframeGlobe } from "react-icons/gi"; // wireframing
import { RiTeamLine } from "react-icons/ri"; // teamwork
import { FaDatabase } from "react-icons/fa"; //  crud
import { GrCycle } from "react-icons/gr"; // agile
import { SiFigma } from "react-icons/si"; // figma
import { IoLogoSass } from "react-icons/io"; // sass
import { MdDevices } from "react-icons/md"; // responsive design
import { BiUserCircle } from "react-icons/bi"; // usability testing
import { FiUsers } from "react-icons/fi"; // user research
import { HiOutlineDesktopComputer } from "react-icons/hi"; // prototyping
import { DiReact } from "react-icons/di"; // reactstrap
import { IoInformationCircleOutline } from "react-icons/io5"; // info arch
import { BiDevices } from "react-icons/bi"; // mockups
import { MdOutlineImportantDevices } from "react-icons/md"; // media queries
import { IoLibrary } from "react-icons/io5"; // css libraries
import { FaUserAlt } from "react-icons/fa"; // css libraries

export const Tech = () => {
  return (
    <>
      <div id="tech" className="page">
        <div className="tech">
          <h1>Technologies</h1>
          <div className="skills-wrapper">
            <div className="skills">
              <div className="skills-title">Development Skills</div>
              <div className="skills-icons">
                <button className="icon red">
                  <SiHtml5 />
                  <span className="text">HTML5</span>
                </button>
                <button className="icon orange">
                  <SiCss3 />
                  <span className="text">CSS3</span>
                </button>
                <button className="icon yellow">
                  <SiJavascript />
                  <span className="text">Javascript</span>
                </button>
                <button className="icon green">
                  <FaGit />
                  <span className="text">Git</span>
                </button>
                <button className="icon skyblue">
                  <FaGithubAlt />
                  <span className="text">Github</span>
                </button>
                <button className="icon lilac">
                  <SiReact />
                  <span className="text">React</span>
                </button>

                <button className="icon red">
                  <SiVisualstudiocode />
                  <span className="text">VSCode</span>
                </button>
                <button className="icon orange">
                  <SiJson />
                  <span className="text">JSON</span>
                </button>
                <button className="icon yellow">
                  <SiNpm />
                  <span className="text">NPM</span>
                </button>
                <button className="icon green">
                  <SiPostman />
                  <span className="text">Postman</span>
                </button>
                <button className="icon skyblue">
                  <SiDiagramsdotnet />
                  <span className="text">dbDiagram</span>
                </button>
                <button className="icon lilac">
                  <SiBootstrap />
                  <span className="text">Bootstrap</span>
                </button>

                <button className="icon red">
                  <AiFillApi />
                  <span className="text">API</span>
                </button>
                <button className="icon orange">
                  <GiWireframeGlobe />
                  <span className="text">Wireframing</span>
                </button>
                <button className="icon yellow">
                  <RiTeamLine />
                  <span className="text">TeamWork</span>
                </button>
                <button className="icon green">
                  <FaDatabase />
                  <span className="text">CRUD</span>
                </button>
                <button className="icon skyblue">
                  <GrCycle />
                  <span className="text">Agile Methodologies</span>
                </button>
              </div>
            </div>
            <div className="skills">
              <div className="skills-title">UI/UX Skills</div>
              <div className="skills-icons">
                <button className="icon red">
                  <SiFigma />
                  <span className="text">Figma</span>
                </button>
                <button className="icon orange">
                  <IoLogoSass />
                  <span className="text">Sass</span>
                </button>
                <button className="icon yellow">
                  <MdDevices />
                  <span className="text">Responsive Design</span>
                </button>
                <button className="icon green">
                  <BiUserCircle />
                  <span className="text">Usability Testing</span>
                </button>
                <button className="icon skyblue">
                  <FiUsers />
                  <span className="text">User Research</span>
                </button>
                <button className="icon lilac">
                  <HiOutlineDesktopComputer />
                  <span className="text">Prototyping</span>
                </button>
                <button className="icon red">
                  <DiReact />
                  <span className="text">Reactstrap</span>
                </button>
                <button className="icon orange">
                  <IoInformationCircleOutline />
                  <span className="text">Information Architecture</span>
                </button>
                <button className="icon yellow">
                  <BiDevices />
                  <span className="text">Mockups</span>
                </button>
                <button className="icon green">
                  <IoLibrary />
                  <span className="text">CSS Libraries</span>
                </button>
                <button className="icon skyblue">
                  <FaUserAlt />
                  <span className="text">Personas</span>
                </button>
                <button className="icon lilac">
                  <MdOutlineImportantDevices />
                  <span className="text">Media Queries</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
