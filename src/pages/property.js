import React from "react"
import Bg from "../images/property/gen/bg.png"
import logo from "../images/palton_morgan_dark.png"
import { BackBtn } from "../components/icons"
import Zoom from "react-reveal/Zoom"
import PropertyCard from "../components/propertyCard"
import Grenadines from "../images/subs/Grenadines.png"
import clarenVilla from "../images/property/gen/oceanna.png"
import skyVilla from "../images/property/gen/Skyvilla.png"
import paramount from "../images/property/gen/paramount.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const property = () => {
  const data = [
    {
      id: 1,
      title: "CLAREN VILLA",
      imgUrl: clarenVilla,
      text:
        "Skyvilla park by Grenadines homes presents you with a signature wiithin the prestigious ikoyi country, designed by the upper class looking...",
    },
    {
      id: 2,
      title: "SKYVILLA",
      imgUrl: skyVilla,
      text:
        "TSkyvilla park by Grenadines homes presents you with a signature wiithin the prestigious ikoyi country, designed by the upper class looking...",
    },
    {
      id: 3,
      title: "PARAMOUNT",
      imgUrl: paramount,
      text:
        "Stormy park by Grenadines homes presents you with a signature wiithin the prestigious ikoyi country, designed by the upper class looking...",
    },
    {
      id: 4,
      title: "CLAREN VILLA",
      imgUrl: clarenVilla,
      text:
        "Skyvilla park by Grenadines homes presents you with a signature wiithin the prestigious ikoyi country, designed by the upper class looking...",
    },
  ]

  const settings = {
    dots: true,
    dotsClass: "line-dots property",
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    customPaging: function (i) {
      return (
        <>
          <div data-dots={i + 1} className="dots">
            &nbsp;
          </div>
        </>
      )
    },
  }

  return (
    // <div
    //   className="flex items-center justify-center h-screen sub-wrapper"
    //   style={{ backgroundImage: `url(${isMobile ? mobileBg : webBg} )` }}
    // ></div>
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col w-full">
        <div className="relative md:flex md:justify-center md:items-stretch md:w-full">
          <div
            className="relative min-h-full md:min-h-screen py-12 px-6 md:p-12 md:w-full md:flex md:items-center md:justify-center"
            style={{
              backgroundImage: `url(${Bg} )`,
            }}
          >
            <div className="relative md:absolute top-0 left-0 right-0 md:pr-6 md:pl-6 md:mr-16 md:ml-16 md:mt-12 flex-col md:flex-row flex justify-between md:items-center">
              <div className="w-1/3">
                <BackBtn
                  color={"#982A7D"}
                  height={"20px"}
                  onClick={() => window.history.back()}
                />
              </div>
              <div className="md:w-1/3 my-4 md:my-0 mx-auto">
                <img src={Grenadines} className="h-16 mx-auto m-0" />
              </div>
              <div className="md:w-1/3 text-right mx-auto">
                {/* <input
                  class="bg-transparent appearance-none border-2 border-pink-800 rounded-full py-2 px-4 text-gray-700 placeholder-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-700 text-sm"
                  id="inline-full-name"
                  type="text"
                  placeholder="Search"
                /> */}
              </div>
            </div>
            {/* <div className="flex flex-col md:flex-row justify-center md:justify-around"> */}
            <Slider
              {...settings}
              className="overflow-hidden py-12 mt-24 property-slide"
            >
              {data.map((el, key) => (
                <PropertyCard key={key} {...el} />
              ))}
            </Slider>

            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default property
