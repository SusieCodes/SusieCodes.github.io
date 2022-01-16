import React from "react";
import lifedash from "../images/lifehackermockup.png";
import cohort from "../images/cohort51mockup.png";

export const Projects = () => {
  return (
    <>
      <div id="projects" className="page">
        <div className="projects">
          <h1>Projects</h1>
          <div className="card">
            <div className="box1">
              <img src={lifedash} alt="lifehacker app" />
            </div>
            <div className="box2">
              <h2>Life Hacker App</h2>
              <p>
                Chocolate cake sweet carrot cake macaroon dessert. Brownie
                muffin chocolate bar ginger bread pudding ginger bread. Tart
                short bread jelly-o topping pie donut bear claw. Sweet topping
                croissant jelly beans marsh mallow gummis.
              </p>

              <div className="btn-wrapper">
                <div className="btn-dark">Github</div>
                <div className="btn-light">Figma</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box1">
              <img src={cohort} alt="cohort51 figma" />
            </div>
            <div className="box2">
              <h2>Cohort 51 Website</h2>
              <p>
                Chocolate cake sweet carrot cake macaroon dessert. Brownie
                muffin chocolate bar ginger bread pudding ginger bread. Tart
                short bread jelly-o topping pie donut bear claw. Sweet topping
                croissant jelly beans marsh mallow gummy bears croissant jelly.
              </p>

              <div className="btn-wrapper">
                <div className="btn-dark">Github</div>
                <a
                  href="https://www.figma.com/file/AsTeIingVjOPrXGbYBjmdJ/Cohort-Website-Design?node-id=0%3A1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn-light">Figma</div>
                </a>
                <a
                  href="https://www.figma.com/proto/RjPnJ4xrvjgEBBPvwayI9M/C-51-Prototype---Desktop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn-dark">Prototype</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
