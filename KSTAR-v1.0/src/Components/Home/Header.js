import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <div className="bg-gradient-to-b from-viodeep to-violight px-4 md:px-10 py-6 w-full h-screen relative">
      <div className="w-full flex justify-between">
        <div className="flex">
          <a
            href="https://kiit.ac.in/"
            target="_blank"
            rel="noreferrer"
            className="text-viodeep"
          >
            <img
              src="./assets/Home/kiit.png"
              alt="kiit"
              className="w-10 h-8 md:w-16 md:h-12"
            />
          </a>
          <a
            href="https://ksac.kiit.ac.in/"
            target="_blank"
            rel="noreferrer"
            className="ml-3 text-viodeep"
          >
            <img
              src="./assets/Home/ksac.png"
              alt="ksac"
              className="w-10 h-9 md:w-16 md:h-14 md:ml-6 md:-mt-1"
            />
          </a>
        </div>
        <a
          href="mailto:studentsupport@kiit.ac.in?subject=Enquiry - KSTAR"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./assets/Home/chat.svg"
            alt="chat"
            className="w-7 h-7 md:w-10 md:h-10"
          />
        </a>
      </div>

      <div className="md:hidden w-screen absolute left-0 top-20">
        <img src="./assets/Home/dualCloud.svg" alt="mobile_cloud" />
      </div>

      <div className="w-full flex justify-center pt-52 lg:pt-0">
        <img
          src="./assets/Home/kstar.png"
          alt="Kstar_logo"
          className="w-9/12 lg:w-4/12 h-full"
        />
      </div>
      <div className="w-full text-center mt-24 lg:mt-4">
        <p className="font-bold text-white text-2xl md:text-4xl">
          25th - 27th Dec, 2021
        </p>
      </div>
      <div className="absolute right-0 lg:right-10 bottom-72 md:bottom-0 md:top-96 z-10">
        <img
          src="./assets/Home/rocketBlue.svg"
          alt="rocket_blue"
          className="w-5/12 md:w-9/12"
        />
      </div>
      <div className="absolute lg:right-32 top-32 right-0 lg:top-10 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="254.853"
          height="229.82"
          viewBox="0 0 254.853 229.82"
          className="w-3/12 md:w-6/12"
        >
          <defs>
            <linearGradient
              id="a"
              x1="0.5"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopOpacity="0.388" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="1"
              y1="0.41"
              x2="0"
              y2="0.287"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopOpacity="0" />
              <stop offset="1" stopOpacity="0.329" />
            </linearGradient>
            <filter
              id="c"
              x="26.011"
              y="117.276"
              width="105.902"
              height="91.873"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dx="6" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="4" result="d" />
              <feFlood floodOpacity="0.161" result="e" />
              <feComposite operator="out" in="SourceGraphic" in2="d" />
              <feComposite operator="in" in="e" />
              <feComposite operator="in" in2="SourceGraphic" />
            </filter>
          </defs>
          <g transform="translate(851.798 1739.083) rotate(-129)">
            <rect
              width="89"
              height="154"
              transform="translate(1673.438 433)"
              opacity="0.62"
              fill="url(#a)"
            />
            <path
              d="M6673.473-516l-22.89-17.5v151.642h22.89Z"
              transform="translate(-4951.562 966)"
              opacity="0.25"
              fill="url(#b)"
            />
            <path
              d="M4034.72-828.959l-44.481,101.317h26.677l22.1,15.427v-15.427h40.945Z"
              transform="translate(-2316.8 1160.676)"
              fill="#ed5224"
            />
            <g data-type="innerShadowGroup">
              <path
                d="M4025.845-727.751l18.636-100.494,4.224,100.494v17.264Z"
                transform="translate(-2326.232 1160.487)"
                fill="#cc2d29"
              />
              <g
                transform="matrix(-0.63, 0.78, -0.78, -0.63, 1887.57, 432.47)"
                filter="url(#c)"
              >
                <path
                  d="M4025.845-727.751l18.636-100.494,4.224,100.494v17.264Z"
                  transform="translate(3217.61 2816.59) rotate(-129)"
                  fill="#fff"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="absolute w-4/12 md:w-auto bottom-36 md:bottom-0 left-10 md:top-2/4 lg:left-48 lg:top-1/4 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="83.147"
          height="299.105"
          viewBox="0 0 83.147 299.105"
          className="w-4/12 md:w-7/12"
        >
          <defs>
            <linearGradient
              id="a"
              x1="0.5"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopOpacity="0.388" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="1"
              y1="0.41"
              x2="0"
              y2="0.287"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopOpacity="0" />
              <stop offset="1" stopOpacity="0.361" />
            </linearGradient>
            <filter
              id="c"
              x="24.372"
              y="0.485"
              width="21.145"
              height="108.922"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dx="6" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="4" result="d" />
              <feFlood floodOpacity="0.161" result="e" />
              <feComposite operator="out" in="SourceGraphic" in2="d" />
              <feComposite operator="in" in="e" />
              <feComposite operator="in" in2="SourceGraphic" />
            </filter>
          </defs>
          <g transform="translate(-181 -339.088)">
            <rect
              width="82.95"
              height="205.336"
              transform="translate(181 432.857)"
              opacity="0.62"
              fill="url(#a)"
            />
            <path
              d="M6671.782-518.059l-21.2-15.44v172.914h21.145Z"
              transform="translate(-6445.21 966.356)"
              opacity="0.25"
              fill="url(#b)"
            />
            <g transform="translate(181.162 339.088)">
              <path
                d="M4031.383-828.959l-41.144,93.714h24.676l20.438,14.269v-14.269h37.872Z"
                transform="translate(-3990.239 828.959)"
                fill="#f8a02e"
              />
              <g data-type="innerShadowGroup">
                <path
                  d="M4025.845-735.292l17.238-92.953,3.907,92.953v15.968Z"
                  transform="translate(-4001.635 828.731)"
                  fill="#ee7b21"
                />
                <g transform="matrix(1, 0, 0, 1, -0.16, 0)" filter="url(#c)">
                  <path
                    d="M4025.845-735.292l17.238-92.953,3.907,92.953v15.968Z"
                    transform="translate(-4001.47 828.73)"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>      
      <div className="w-full justify-center hidden lg:flex">
        <Link
          to="challenge"
          smooth={true}
          duration={700}
          spy={true}
          className=" cursor-pointer bottom-10 mt-4 absolute z-10 animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30.98"
            height="38.872"
            viewBox="0 0 54.98 62.872"
          >
            <g
              id="Group_225"
              data-name="Group 225"
              transform="translate(-1440 -480.497)"
            >
              <path
                id="Icon_ionic-ios-arrow-down"
                data-name="Icon ionic-ios-arrow-down"
                d="M33.688,33.206,54.477,12.4a3.912,3.912,0,0,1,5.549,0,3.962,3.962,0,0,1,0,5.566L36.471,41.538a3.922,3.922,0,0,1-5.418.115L7.333,17.982a3.93,3.93,0,0,1,5.549-5.566Z"
                transform="translate(1433.813 500.686)"
                fill="#2a0645"
              />
              <path
                id="Icon_ionic-ios-arrow-down-2"
                data-name="Icon ionic-ios-arrow-down"
                d="M33.688,33.206,54.477,12.4a3.912,3.912,0,0,1,5.549,0,3.962,3.962,0,0,1,0,5.566L36.471,41.538a3.922,3.922,0,0,1-5.418.115L7.333,17.982a3.93,3.93,0,0,1,5.549-5.566Z"
                transform="translate(1433.813 469.25)"
                fill="#2a0645"
              />
            </g>
          </svg>
        </Link>
      </div>
      <div className="hidden md:block md:mt-0 md:absolute left-8 bottom-5 w-full md:w-2/12 z-30">
        <img
          src="./assets/Home/Prizetag.png"
          alt="Prize_Money"
          className="w-3/12 md:w-9/12 h-full"
        />
      </div>
      <div className="flex justify-center mt-4 md:hidden w-full z-30">
        <img
          src="./assets/Home/PRIZE-STAMP.png"
          alt="Prize_Money"
          className="w-3/12 md:w-9/12 h-full"
        />
      </div>
      <div className="w-full text-center text-white lg:mt-32 lg:hidden flex justify-center">
        <Link
          to="challenge"
          smooth={true}
          duration={900}
          spy={true}
          className=" cursor-pointer mt-4 animate-bounce absolute z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.287"
            height="15.62"
            viewBox="0 0 9.287 10.62"
          >
            <g
              id="Group_225"
              data-name="Group 225"
              transform="translate(-1440 -480.497)"
            >
              <path
                id="Icon_ionic-ios-arrow-down"
                data-name="Icon ionic-ios-arrow-down"
                d="M10.833,14.956l3.511-3.514a.661.661,0,0,1,.937,0,.669.669,0,0,1,0,.94L11.3,16.363a.662.662,0,0,1-.915.019l-4.006-4a.664.664,0,1,1,.937-.94Z"
                transform="translate(1433.813 474.56)"
                fill="#fff"
              />
              <path
                id="Icon_ionic-ios-arrow-down-2"
                data-name="Icon ionic-ios-arrow-down"
                d="M10.833,14.956l3.511-3.514a.661.661,0,0,1,.937,0,.669.669,0,0,1,0,.94L11.3,16.363a.662.662,0,0,1-.915.019l-4.006-4a.664.664,0,1,1,.937-.94Z"
                transform="translate(1433.813 469.25)"
                fill="#fff"
              />
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Header;
