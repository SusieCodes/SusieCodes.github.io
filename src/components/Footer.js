import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import robin from "../images/robinflip.svg";

export const Footer = () => {
  return (
    <>
      {/* START OF WAVE */}
      <svg
        className="wave"
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="5%" stop-color="#ffffff88"></stop>
            <stop offset="95%" stop-color="#E7AEB688"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,133 0,133 C 149.46666666666664,133.66666666666669 298.9333333333333,134.33333333333334 460,126 C 621.0666666666667,117.66666666666666 793.7333333333333,100.33333333333333 959,100 C 1124.2666666666667,99.66666666666667 1282.1333333333332,116.33333333333334 1440,133 C 1440,133 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <defs>
          <linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="5%" stop-color="#ffffffff"></stop>
            <stop offset="95%" stop-color="#f78da7ff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,266 0,266 C 177.19999999999993,284.93333333333334 354.39999999999986,303.8666666666667 504,290 C 653.6000000000001,276.1333333333333 775.6000000000001,229.46666666666667 927,220 C 1078.3999999999999,210.53333333333333 1259.1999999999998,238.26666666666665 1440,266 C 1440,266 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
      </svg>

      {/* END OF WAVE */}

      <footer>
        <div className="col1">
          <img src={robin} alt="cartoon robin" />
        </div>
        <div className="col2">
          <p>
            &copy; 2022 - Enthusiastically custom coded from scratch by{" "}
            <div>☆ Susie Stanley ☆</div>
          </p>
        </div>
        <div className="col3">
          <div className="icon">
            <a
              href="https://github.com/SusieCodes"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare />
            </a>
          </div>
          <div className="icon2">
            <a href="mailto: susiestanley00@gmail.com">
              <MdEmail />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/susie-stanley/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
