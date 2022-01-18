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
              describe me as curious, creative, a problem-solver, organized,
              driven, good communicator, and that my super-power is having a
              highly-tuned attention to detail (down to the pixel). There is
              something deeply rewarding about bringing my visions to life. I
              believe web development is just another form of art using my
              keyboard in place of paint &amp; brushes.{" "}
            </p>
            <p>
              In my job search, finding a good culture fit is at the top of my
              list. When I join any endeavor, I’m ALL IN, so knowing that the
              whole team is rowing in the same direction is vital. I would love
              to continue working in a full-time remote position since my home
              office has proven to be an ideal environment for productivity and
              efficiency.{" "}
            </p>

            <p>
              When I'm not coding, I enjoy baking, carpentry, and making things
              look fabulous!
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
