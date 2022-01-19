import React from "react";
import profile from "../images/pinkbeanset.png";
import ziggy from "../images/interest_ziggy.png";
import hiking from "../images/interest_hiking.png";
import shed from "../images/interest_shed.png";
import baking from "../images/interest_baking.png";
import travel from "../images/interest_travel.png";
import poodle from "../images/iconpoodle.svg";
import hiker from "../images/iconhiking.svg";
import toolbox from "../images/icontoolbox.svg";
import cupcake from "../images/iconbaking.svg";
import plane from "../images/icontravel.svg";

export const About = () => {
  return (
    <>
      <div id="about" className="page">
        <section className="about1">
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
          </div>
        </section>
        <section className="about2">
          <section className="about-interests">
            <div className="box1">
              <img src={ziggy} alt="Ziggy" />
            </div>
            <div className="box2">
              <img src={poodle} alt="poodle" />
              {/* <div className="interest-text"> */}
              <p>
                Ziggy is my toy poodle. He is my constant companion who is
                loyal, cuddly, and has never met a stranger. He has learned alot
                about coding this year and aspires to be the CEO of a Fortune
                500 one day.
              </p>
              {/* </div> */}
            </div>
          </section>
          <section className="about-interests">
            <div className="box2">
              <img src={hiker} alt="hiker" />
              {/* <div className="interest-text"> */}
              <p>
                Hiking trails are my solace. Life's challenges seem to melt away
                under the branches of tall majestic trees. On sunny days in the
                spring and summer I can often be found at Radnor Lake.
              </p>
            </div>
            {/* </div> */}
            <div className="box1">
              <img src={hiking} alt="hiking" />
            </div>
          </section>
          <section className="about-interests">
            <div className="box1">
              <img src={shed} alt="shed" />
            </div>
            <div className="box2">
              <img src={toolbox} alt="toolbox" />
              {/* <div className="interest-text"> */}
              <p>
                I built a 10X10 shed in the summer of 2013 by watching YouTube
                videos. Framing, rafters, ridge beams, shingles, doors, and
                windows were all tackled with sweat and determination.{" "}
              </p>
              {/* </div> */}
            </div>
          </section>
          <section className="about-interests">
            <div className="box2">
              <img src={cupcake} alt="cupcake" />
              {/* <div className="interest-text"> */}
              <p>
                I ❤ Baking! I love to combine my love of baking with my love of
                art. Presentation can take it to the next level. I appreciate
                any opportunity to make desserts for the people in my life.
              </p>
            </div>
            {/* </div> */}
            <div className="box1">
              <img src={baking} alt="cupcakes" />
            </div>
          </section>
          <section className="about-interests">
            <div className="box1">
              <img src={travel} alt="Egyptian road signs" />
            </div>
            <div className="box2">
              <img src={plane} alt="airplane" />
              {/* <div className="interest-text"> */}
              <p>
                I live for traveling! I was born in Canada and Hungarian was my
                first language. Some of the more memorable vacation spots I've
                visited are Egypt, Peru, Hungary, and Mexico.
              </p>
              {/* </div> */}
            </div>
          </section>
        </section>
      </div>
    </>
  );
};
