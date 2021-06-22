import React from "react"
import webBg from "../images/bg-1.png"
import mobileBg from "../images/bg-1-mobile.png"
import logo from "../images/palton_morgan_dark.png"
import { isMobile } from "react-device-detect"
import Zoom from "react-reveal/Zoom"
import SubCard from "../components/subCard"
import { BackBtn } from "../components/icons"
import Propertymart from "../images/subs/Propertymart.png"
import Grenadines from "../images/subs/Grenadines.png"
import Oceanna from "../images/subs/oceanna.png"
import Slider from "react-slick"
// import slick from "slick-carousel/slick/slick.css"
// import slickTheme from "slick-carousel/slick/slick-theme.css"

const subsidiaries = () => {
  const data = [
    {
      id: 1,
      imgUrl: Propertymart,
      text:
        "Propertymart offers the most valuable and well planned estate with designs that span aand equate global designs. we pre-empt consumers need with a better innovation and eveolution.",
    },
    {
      id: 2,
      imgUrl: Oceanna,
      text:
        "The oceanna is a revelation that Nigeria wants a modern use development of commercial and residential resort in lagos that builds the country’s ambitious vision. It os an icon o the future",
    },
    {
      id: 3,
      imgUrl: Grenadines,
      text:
        "Grenadines homes is founded on the principle of intergrity and uncompromising ocus of quality over volumes.Grenadines pays attention to details",
    },
    {
      id: 4,
      imgUrl: Propertymart,
      text:
        "Propertymart offers the most valuable and well planned estate with designs that span aand equate global designs. we pre-empt consumers need with a better innovation and eveolution.",
    },
    {
      id: 5,
      imgUrl: Oceanna,
      text:
        "The oceanna is a revelation that Nigeria wants a modern use development of commercial and residential resort in lagos that builds the country’s ambitious vision. It os an icon o the future",
    },
    {
      id: 6,
      imgUrl: Grenadines,
      text:
        "Grenadines homes is founded on the principle of intergrity and uncompromising ocus of quality over volumes.Grenadines pays attention to details",
    },
  ]

  // slider settings
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // }

  const settings = {
    dots: true,
    dotsClass: "line-dots",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: "unslick",
      },
    ],
    customPaging: function (i) {
      return (
        <>
          <div className="text-sm">{i + 1}</div>
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
        <Zoom>
          <div className="mx-8 mt-12 mb-2 md:hidden">
            <img src={logo} className="max-h-12" />
          </div>
          <div className="mb-2 flex items-center justify-center md:hidden">
            {/* <img src={backBtn} className="h-4 mr-2 mb-0" /> */}
            <BackBtn color={"#F0BD38"} height={"20px"} />
            <p className="ml-2 m-0">Back</p>
          </div>
        </Zoom>
        <div className="relative md:flex md:justify-center md:items-stretch md:w-full">
          <div
            className="relative h-full md:h-screen py-12 px-6 md:p-12 md:w-full md:flex md:items-center md:justify-center"
            style={{
              backgroundImage: `url(${isMobile ? mobileBg : webBg} )`,
            }}
          >
            <div className="absolute top-0 left-0 ml-16 mt-8 hidden md:block">
              {/* <img src={backBtn} className="h-4 mr-2 mb-0" /> */}
              <BackBtn color={"#F0BD38"} height={"20px"} />
            </div>
            {/* <div className="flex flex-col md:flex-row justify-center md:justify-around"> */}
            <Slider {...settings} className="overflow-hidden unset">
              {data.map((el, key) => (
                <SubCard key={key} {...el} />
              ))}
            </Slider>

            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default subsidiaries
