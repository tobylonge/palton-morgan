import React from "react"
import { Link } from "gatsby"
import logo from "../images/palton_morgan_dark.png"
import welcomeImg from "../images/welcome-pics.png"
import line from "../images/line.svg"
import Zoom from "react-reveal/Zoom"

export default function home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col md:w-full">
        <Zoom>
          <div className="mx-8 mt-12 mb-2 md:hidden">
            <img src={logo} className="max-h-12" />
          </div>
        </Zoom>
        <div className="relative md:flex md:justify-center md:items-stretch md:w-full">
          <Zoom>
            <div className="welcome-banner relative md:w-1/2 md:h-screen md:pt-16">
              <img
                src={welcomeImg}
                alt="welcome background Image"
                className="relative m-0 md:w-full md:h-full md:object-cover"
              />
            </div>
          </Zoom>
          <div className="welcome-content absolute md:relative inset-0 flex items-center justify-center z-10 md:w-1/2 md:justify-start md:items-start md:pt-16 md:flex-col">
            <div className="mb-2 hidden md:block md:ml-24">
              <img src={logo} className="max-h-12" />
            </div>
            <Zoom>
              <div className="relative md:ml-24 md:h-full md:flex md:items-center md:justify-center">
                <div>
                  <h1 className="text-white md:text-black mb-2 leading-relaxed md:leading-normal md:text-5xl">
                    Welcome! <br />
                    <span className="text-primary">Let's Explore</span>
                  </h1>
                  <img src={line} className="hidden md:block" />

                  <Link
                    to="/subsidiaries/"
                    className="inline-block bg-white hover:bg-yellow-600 text-black font-bold py-4 px-8 border-2 border-yellow-600 rounded-md uppercase text-xl tracking-widest mt-12"
                  >
                    Start
                  </Link>
                </div>
              </div>
              <div className="text-xl font-bold text-center mt-12 mb-8 md:absolute md:bottom-0 md:right-0 hidden md:block md:mr-16">
                tw in fb
              </div>
            </Zoom>
          </div>
        </div>
        <Zoom>
          <div className="text-xl font-bold text-center mt-12 mb-8 md:hidden">
            tw in fb
          </div>
        </Zoom>
      </div>
    </div>
  )
}
