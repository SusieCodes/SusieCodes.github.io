import React from "react";
import profile from "../images/pinkbeanset.svg";

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
              Chocolate cake sweet carrot cake macaroon dessert. Brownie muffin
              chocolate bar gingerbread pudding gingerbread. Tart shortbread
              jelly-o topping pie donut bear claw. Sweet topping croissant jelly
              beans marshmallow gummi bears. Tart marshmallow toffee chocolate
              cake cotton candy lemon drops cupcake. Chocolate cake sweet carrot
              cake macaroon dessert.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
