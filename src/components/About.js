import React from "react";
import profile from "../images/pinkbeanset.png";

export const About = () => {
  return (
    <>
      <div id="about" className="page">
        <section className="about">
          <div className="box1">
            <img src={profile} alt="Susie Stanley" />
          </div>
          <div className="box2">
            <h1>About &nbsp; Me</h1>
            <p>
              In my time at Nashville Software School, I've been fortunate to
              learn not just programming languages, but more importantly, HOW to
              learn and how to use all the resources available. My teammates
              describe me as a problem-solver, good communicator, curious,
              creative, organized, independent, driven, and that I have a highly
              tuned attention to detail (down to the pixel). There is something
              deeply rewarding about bringing my visions to life. I've found
              that development is an art-form using my keyboard instead of paint
              &amp; brushes.{" "}
            </p>
            <p>
              In my job search, finding a good culture fit is at the top of my
              list. When I join any endeavor, I’m ALL IN, so knowing that the
              whole team is rowing in the same direction is vital. I would love
              to continue working in a full-time remote position since my home
              office has proven to be an ideal environment for productivity and
              efficiency.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
