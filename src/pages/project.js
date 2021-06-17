import React from "react"
import { Link } from "gatsby"
import {
  BackBtn,
  WaterIcon,
  BasketballIcon,
  StreetLightIcon,
  RoadIcon,
  SecurityIcon,
  CommuntityIcon,
} from "../components/icons"
import Grenadines from "../images/subs/Grenadines.png"
import img1 from "../images/property/gen/gallery/1.png"
import img2 from "../images/property/gen/gallery/2.png"
import img3 from "../images/property/gen/gallery/3.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ArrowRight } from "../components/icons"

const SampleNextArrow = props => {
  const { style, onClick } = props
  return (
    <div
      className="arrow arrow-right"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ArrowRight color={"#982A7D"} height={"45px"} />
    </div>
  )
}
const SamplePrevArrow = props => {
  const { style, onClick } = props
  return (
    <div
      className="arrow arrow-left"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ArrowRight color={"#982A7D"} height={"45px"} />
    </div>
  )
}

const Features = props => (
  <div className="w-1/3 flex items-center justify-center my-2">
    <div className="flex items-center w-1/2">
      {props.icon}
      <p className="m-0 ml-4 text-xs uppercase"> {props.title}</p>
    </div>
  </div>
)

const project = () => {
  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  const data = [
    {
      id: 1,
      icon: <WaterIcon height={"24px"} />,
      title: "treated Water",
    },
    {
      id: 2,
      icon: <BasketballIcon height={"24px"} />,
      title: "BASKETBALL COURT",
    },
    {
      id: 3,
      icon: <StreetLightIcon height={"24px"} />,
      title: "STREET LIGHT",
    },
    {
      id: 4,
      icon: <RoadIcon height={"24px"} />,
      title: "PAVED ROAD NETWORK",
    },
    {
      id: 5,
      icon: <SecurityIcon height={"24px"} />,
      title: "SECURITY FENCING",
    },
    {
      id: 6,
      icon: <CommuntityIcon height={"24px"} />,
      title: "COMMUINITY POOL",
    },
    {
      id: 7,
      icon: <SecurityIcon height={"24px"} />,
      title: "PAVED ROAD NETWORK",
    },
    {
      id: 8,
      icon: <SecurityIcon height={"24px"} />,
      title: "PAVED ROAD NETWORK",
    },
    {
      id: 9,
      icon: <SecurityIcon height={"24px"} />,
      title: "PAVED ROAD NETWORK",
    },
  ]
  return (
    <div className="relative min-h-full md:min-h-screen py-6 px-8 md:w-full md:flex md:items-start md:item-center flex-col">
      <div className="relative flex-col md:flex-row flex justify-between md:items-center w-full">
        <div className="">
          <BackBtn color={"#982A7D"} height={"20px"} />
        </div>

        <div className="text-right">
          <input
            class="bg-transparent appearance-none border-2 border-pink-800 rounded-full py-2 px-4 text-gray-700 placeholder-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-700 text-sm"
            id="inline-full-name"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex items-center w-full mt-12 md:w-4/5 mx-auto">
        <div className="w-2/5 mr-4 mx-auto text-center">
          <img src={Grenadines} className="h-32 mx-auto m-0 mb-6" />
          <Link className=" text-sm inline-block bg-white hover:bg-pink-500 text-black font-bold py-2 px-6 border border-pink-800 rounded-full uppercase tracking-widest">
            MAIL BROCHURE
          </Link>
        </div>
        <div className="w-3/5 ml-4">
          <div className="mb-8">
            <p className="uppercase text-xl m-0 text-pink-800 font-medium">
              PARAMOUNT TWIN TOWER
            </p>
            <p className="font-bold">From NGN 64,020,000</p>
          </div>
          <div>
            <p className="uppercase text-xl m-0 text-pink-800 font-medium mb-4">
              PARAMOUNT TWIN TOWER
            </p>
            <p className="text-gray-700 text-sm">
              Enjoy the generous interior spaces and large windows inbuilt into
              each of the units, the swings at the lawn tennis court, sunbathing
              at the pool side and a lasting grin of relief that spread through
              your face after an exercise in a state-of-the-art gym.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full mt-12 md:w-4/5 mx-auto">
        <iframe
          width="100%"
          height="580px"
          src="https://www.youtube.com/embed/f3AcAO8iHVs?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex items-center w-full mt-12 md:w-4/5 mx-auto flex-col">
        <p className="uppercase text-lg m-0 text-pink-800 font-medium mb-6">
          IMAGE GALLERY
        </p>
        <Slider
          {...settings}
          className="overflow-hidden w-full px-8 project-slider"
        >
          <div className="focus:outline-none">
            <img src={img1} className="p-4 hover:" alt="" />
          </div>
          <div className="focus:outline-none">
            <img src={img2} className="p-4" alt="" />
          </div>
          <div className="focus:outline-none">
            <img src={img3} className="p-4" alt="" />
          </div>
          <div className="focus:outline-none">
            <img src={img1} className="p-4" alt="" />
          </div>
          <div className="focus:outline-none">
            <img src={img2} className="p-4" alt="" />
          </div>
          <div className="focus:outline-none">
            <img src={img3} className="p-4" alt="" />
          </div>
        </Slider>
      </div>
      <div className="flex items-center w-full mt-12 md:w-4/5 mx-auto flex-col">
        <p className="uppercase m-0 text-pink-800 font-medium mb-6">
          exclusive features
        </p>
        <div className="flex w-full flex-wrap ">
          {data.map(el => (
            <Features {...el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default project
