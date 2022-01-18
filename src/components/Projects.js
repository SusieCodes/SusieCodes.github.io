import React from "react";
import lifedash from "../images/lifehackermockup.png";
import cohort from "../images/cohort51mockup.png";
import portfolio from "../images/portfoliomockup.png";
import baker from "../images/bakersblissmockup.png";
import modura from "../images/moduramockup.png";
import foodie from "../images/foodiemockup.png";

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
                I created this project as my first capstone for the Front-End
                Developer bootcamp at Nashville Software School. This fully
                functioning web-based app has full CRUD capabilities (Create,
                Read, Update, and Delete) using JSON server. It was built using
                the React framework and coded in HTML, CSS, and Javascript. The
                database is hosted on Heroku servers.
              </p>

              <div className="btn-wrapper">
                <a
                  href="https://github.com/SusieCodes/lifehacker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn-dark">Github</div>
                </a>
                <a
                  href="https://youtu.be/yYP9dOdY4Fw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn-light">Youtube</div>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box1">
              <a
                href="https://nss-day-cohort-51.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={cohort} alt="cohort51 website" />
              </a>
            </div>
            <div className="box2">
              <a
                href="https://nss-day-cohort-51.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Cohort 51 Website</h2>
              </a>
              <p>
                Our class website was built as a group project. Our team had a
                blast learning all about the User Experience (UX) as we worked
                to bring it to life. We explored personas, user research,
                usability testing, wireframing, prototyping, and collaborated in
                Figma to pull it all together. We created the site within the
                React framework and coded it out using HTML, CSS/SCSS,
                Javascript and Bootstrap.
              </p>

              <div className="btn-wrapper">
                <a
                  href="https://github.com/nss-day-cohort-51/nss-day-cohort-51.github.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn-dark">Github</div>
                </a>
                <a
                  href="https://www.figma.com/file/AsTeIingVjOPrXGbYBjmdJ/Cohort-Website-Design?node-id=0%3A1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn-light">Figma</div>
                </a>
                <a
                  href="https://www.figma.com/proto/AsTeIingVjOPrXGbYBjmdJ/Cohort-Website-Design?node-id=445%3A2847&scaling=min-zoom&page-id=440%3A669&starting-point-node-id=445%3A2847"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn-dark">Prototype</div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box1">
              <a
                href="https://www.figma.com/file/h6VjaG4gGJmQEVdKKZbugE/Portfolio?node-id=0%3A1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={portfolio} alt="my portfolio" />
              </a>
            </div>
            <div className="box2">
              <a
                href="https://www.figma.com/file/h6VjaG4gGJmQEVdKKZbugE/Portfolio?node-id=0%3A1"
                target="_blank"
                rel="noreferrer"
              >
                <h2>My Portfolio</h2>
              </a>
              <p>
                I created this portfolio using React and Figma. I applied all
                the UX principles we learned in class to create the website you
                are viewing now and wanted to share the process here as well.
                Some of my original ideas evolved based on user research and
                usability testing.
              </p>

              <p>
                I created the Design Style Tile to use as guidance as I coded.
              </p>

              <div className="btn-wrapper">
                <a
                  href="https://github.com/SusieCodes/SusieCodes.github.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn-dark">Github</div>
                </a>
                <a
                  href="https://www.figma.com/file/h6VjaG4gGJmQEVdKKZbugE/Portfolio?node-id=0%3A1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn-light">Figma</div>
                </a>
                <a
                  href="https://www.figma.com/proto/h6VjaG4gGJmQEVdKKZbugE/Portfolio?node-id=38%3A1266&starting-point-node-id=38%3A1266"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn-dark">Prototype</div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box1">
              {/* <a
                href="https://susiecodes.github.io/"
                target="_blank"
                rel="noreferrer"
              > */}
              <img src={baker} alt="Baker's Bliss app" />
              {/* </a> */}
            </div>
            <div className="box2">
              {/* <a
                href="https://susiecodes.github.io/"
                target="_blank"
                rel="noreferrer"
              > */}
              <h2>Baker's Bliss</h2>
              {/* </a> */}
              <p>
                Coming soon... check back for updates. I will post them as the
                project progresses.
                <br />
                <br />I am currently working on my second capstone for the
                full-time web developer program at NSS. I'm creating this app
                using React (HTML, CSS/SCSS, and Javascript)
              </p>

              <div className="btn-wrapper">
                {/* <a
                  href="https://github.com/nss-day-cohort-51/nss-day-cohort-51.github.io"
                  target="_blank"
                  rel="noreferrer"
                > */}
                <div className="btn-dark">Github</div>
                {/* </a> */}
                {/* <a
                  href="https://www.figma.com/file/AsTeIingVjOPrXGbYBjmdJ/Cohort-Website-Design?node-id=0%3A1"
                  target="_blank"
                  rel="noreferrer"
                > */}
                <div className="btn-light">Figma</div>
                {/* </a> */}
                {/* <a
                  href="https://www.figma.com/proto/RjPnJ4xrvjgEBBPvwayI9M/C-51-Prototype---Desktop"
                  target="_blank"
                  rel="noreferrer"
                > */}
                <div className="btn-dark">Prototype</div>
                {/* </a> */}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box1">
              <a
                href="https://www.figma.com/file/tXVtEAuklrIjy0i9x8oJ25/Modura-Clothing-App?node-id=0%3A1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={modura} alt="modura app" />
              </a>
            </div>
            <div className="box2">
              <a
                href="https://www.figma.com/file/tXVtEAuklrIjy0i9x8oJ25/Modura-Clothing-App?node-id=0%3A1"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Modura Clothing App</h2>
              </a>
              <p>
                This was a project I worked on in the UX Academy Foundations
                course at Design Lab. The scope of the assignment was to create
                color sets, logos, font pairings, buttons, icons, and a final
                Design Style Tile.{" "}
              </p>

              <p>
                Using my design choices, I created 3 sample mobile screen
                mockups for the app: Sign In, Item Detail, and Search Results.
              </p>

              <div className="btn-wrapper">
                <a
                  href="https://www.figma.com/file/tXVtEAuklrIjy0i9x8oJ25/Modura-Clothing-App?node-id=0%3A1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn-light">Figma</div>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box1">
              <a
                href="https://www.figma.com/file/dxUfow1TAXKpdMkOpQVLT4/Foodie-App?node-id=0%3A1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={foodie} alt="foodie app" />
              </a>
            </div>
            <div className="box2">
              <a
                href="https://www.figma.com/file/dxUfow1TAXKpdMkOpQVLT4/Foodie-App?node-id=0%3A1"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Foodie App</h2>
              </a>
              <p>
                This was another project I worked on at Design Lab. We were
                given the logo and tasked with creating 3 sample mobile screen
                mockups for the app. I chose Sign In, Newsfeed, and User
                Profile.
              </p>

              <div className="btn-wrapper">
                <a
                  href="https://www.figma.com/file/dxUfow1TAXKpdMkOpQVLT4/Foodie-App?node-id=0%3A1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn-light">Figma</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
