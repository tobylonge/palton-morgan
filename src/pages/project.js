import React, { useState } from "react"
import { Link } from "gatsby"
import {
  BackBtn,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
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
import propertyImg from "../images/property/gen/gallery/image-details.png"
import bannerMobile from "../images/property/gen/gallery/banner-mobile.png"
import Slider from "react-slick"
import { isMobile } from "react-device-detect"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Bedroom = [
  {
    id: 1,
    specification: [
      {
        room: "Living Room",
        size: 34,
      },
      {
        room: "Living Room",
        size: 35,
      },
      {
        room: "Living Room",
        size: 5,
      },
      {
        room: "Living Room",
        size: 8,
      },
      {
        room: "Living Room",
        size: 4,
      },
    ],
  },
  {
    id: 2,
    specification: [
      {
        room: "Living Room",
        size: 35,
      },
      {
        room: "Living Room",
        size: 35,
      },
      {
        room: "Living Room",
        size: 5,
      },
      {
        room: "Living Room",
        size: 8,
      },
      {
        room: "Living Room",
        size: 4,
      },
    ],
  },
  {
    id: 3,
    specification: [
      {
        room: "Living Room",
        size: 35,
      },
      {
        room: "Living Room",
        size: 35,
      },
      {
        room: "Living Room",
        size: 5,
      },
      {
        room: "Living Room",
        size: 8,
      },
      {
        room: "Living Room",
        size: 4,
      },
    ],
  },
  {
    id: 4,
    specification: [
      {
        room: "Living Room",
        size: 35,
      },
      {
        room: "Living Room",
        size: 35,
      },
      {
        room: "Living Room",
        size: 5,
      },
      {
        room: "Living Room",
        size: 8,
      },
      {
        room: "Living Room",
        size: 4,
      },
    ],
  },
]

const SamplePrevArrow = props => {
  const { style, onClick } = props
  return (
    <div
      className="arrow arrow-left"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ArrowRight color={"#982A7D"} height={isMobile ? "24px" : "45px"} />
    </div>
  )
}

const SampleNextArrow = props => {
  const { style, onClick } = props
  return (
    <div
      className="arrow arrow-right"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ArrowRight color={"#982A7D"} height={isMobile ? "24px" : "45px"} />
    </div>
  )
}

const PropertyPrevArrow = props => {
  const { style, onClick } = props
  return (
    <div
      className="arrow arrow-left"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ChevronLeft height={"16px"} />
    </div>
  )
}

const PropertyNextArrow = props => {
  const { style, onClick } = props
  return (
    <div
      className="arrow arrow-right"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ChevronRight height={"16px"} />
    </div>
  )
}

const Features = props => (
  <div className="w-1/2 md:w-1/3 flex items-center md:justify-center my-2">
    <div className="flex items-center md:w-1/2">
      {props.icon}
      <p className="m-0 ml-2 md:ml-4 text-xs uppercase"> {props.title}</p>
    </div>
  </div>
)

const Property = props => {
  return (
    <div className="focus:outline-none">
      <p
        className={`uppercase m-0 text-pink-800 text-sm flex items-center justify-center border-b border-gray-400 mx-4 ${
          props.activeNo === props.id ? "active" : ""
        }`}
        onClick={() => props.setActiveNo(props.id)}
      >
        {props.id} Bedroom
      </p>
    </div>
  )
}

const BedroomRoomDetails = props => {
  const details = Bedroom.filter(el => el.id === props.id)[0]
  console.log("details ", details)
  return (
    <div
      className="flex flex-col md:flex-row align-items justify-center w-full"
      data-id={details.id}
    >
      <div className="md:w-1/2">
        <img src={propertyImg} alt="" />
      </div>
      <div className="md:w-1/2 flex items-center justify-center flex-col">
        <p className="uppercase m-0 text-pink-800 text-xs flex items-center justify-center mx-4">
          Specifications
        </p>
        {details.specification.map(el => (
          <div className="flex justify-between border-b border-gray-500 py-2 w-full mb-4">
            <p className="text-sm text-gray-700 m-0">{el.room} </p>
            <p className="text-sm text-gray-700 m-0">{el.size} sqm </p>
          </div>
        ))}
      </div>
    </div>
  )
}

const Project = () => {
  const [activeNo, setActiveNo] = useState(1)
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
          slidesToShow: 2,
        },
      },
    ],
  }

  const settings2 = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <PropertyNextArrow />,
    prevArrow: <PropertyPrevArrow />,
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
          slidesToShow: 2,
        },
      },
    ],
  }

  const data = [
    {
      id: 1,
      icon: <WaterIcon height={isMobile ? "16px" : "24px"} />,
      title: "treated Water",
    },
    {
      id: 2,
      icon: <BasketballIcon height={isMobile ? "16px" : "24px"} />,
      title: "BASKETBALL COURT",
    },
    {
      id: 3,
      icon: <StreetLightIcon height={isMobile ? "16px" : "24px"} />,
      title: "STREET LIGHT",
    },
    {
      id: 4,
      icon: <RoadIcon height={isMobile ? "16px" : "24px"} />,
      title: "PAVED ROAD NETWORK",
    },
    {
      id: 5,
      icon: <SecurityIcon height={isMobile ? "16px" : "24px"} />,
      title: "SECURITY FENCING",
    },
    {
      id: 6,
      icon: <CommuntityIcon height={isMobile ? "16px" : "24px"} />,
      title: "COMMUINITY POOL",
    },
    {
      id: 7,
      icon: <SecurityIcon height={isMobile ? "16px" : "24px"} />,
      title: "PAVED ROAD NETWORK",
    },
    {
      id: 8,
      icon: <SecurityIcon height={isMobile ? "16px" : "24px"} />,
      title: "PAVED ROAD NETWORK",
    },
    {
      id: 9,
      icon: <SecurityIcon height={isMobile ? "16px" : "24px"} />,
      title: "PAVED ROAD NETWORK",
    },
  ]

  return (
    <div className="relative min-h-full md:min-h-screen py-6 px-8 md:w-full md:flex md:items-start md:item-center flex-col">
      <div className="relative flex-col md:flex-row flex justify-between md:items-center w-full">
        <div className="">
          <BackBtn color={"#982A7D"} height={"20px"} />
        </div>

        <div className="hidden md:block text-right">
          <input
            class="bg-transparent appearance-none border-2 border-pink-800 rounded-full py-2 px-4 text-gray-700 placeholder-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-700 text-sm"
            id="inline-full-name"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="md:hidden">
          <img src={Grenadines} className="h-16 mx-auto m-0 mb-6" />
          <img src={bannerMobile} className="w-full m-0" alt="" />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center w-full mt-12 md:w-4/5 mx-auto">
        <div className="md:w-2/5 md:mr-4 mx-auto text-center">
          <img
            src={Grenadines}
            className="hidden md:block h-32 mx-auto m-0 mb-6"
          />
          <Link className=" text-sm inline-block bg-white hover:bg-pink-500 text-black font-bold py-2 px-6 border border-pink-800 rounded-full uppercase tracking-widest">
            EMAIL BROCHURE
          </Link>
        </div>
        <div className="md:w-3/5 md:ml-4">
          <div className="mb-8 text-center md:text-left">
            <p className="uppercase text-2xl md:text-xl m-0 text-pink-800 font-medium">
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
          height={isMobile ? "180px" : `580px`}
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
          className="overflow-hidden w-full px-4 md:px-8 project-slider"
        >
          <div className="focus:outline-none">
            <img src={img1} className="p-2 md:p-4 hover:" alt="" />
          </div>
          <div className="focus:outline-none">
            <img src={img2} className="p-2 md:p-4" alt="" />
          </div>
          <div className="focus:outline-none">
            <img src={img3} className="p-2 md:p-4" alt="" />
          </div>
          <div className="focus:outline-none">
            <img src={img1} className="p-2 md:p-4" alt="" />
          </div>
          <div className="focus:outline-none">
            <img src={img2} className="p-2 md:p-4" alt="" />
          </div>
          <div className="focus:outline-none">
            <img src={img3} className="p-2 md:p-4" alt="" />
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
      <div className="flex items-center w-full mt-12 md:w-4/5 mx-auto flex-col">
        <p className="uppercase m-0 text-pink-800 mb-6">select property type</p>
        <Slider
          {...settings2}
          className="overflow-hidden w-full px-8 property-slider"
        >
          {Bedroom.map(el => (
            <Property
              {...el}
              key={el.id}
              setActiveNo={setActiveNo}
              activeNo={activeNo}
            />
          ))}
        </Slider>
        {activeNo > 0 ? (
          <BedroomRoomDetails id={activeNo} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="md:w-3/5 mx-auto text-center">
        <p className="uppercase m-0 text-pink-800 mb-6">make a reservation</p>
        <div className="my-8 flex flex-wrap">
          <div className="w-full md:w-1/2 md:px-8 mb-6">
            <input
              class="w-full bg-transparent appearance-none border border-pink-800 py-2 px-4 text-gray-700 placeholder-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-700 text-xs uppercase"
              id="inline-full-name"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="w-full md:w-1/2 md:px-8 mb-6">
            <input
              class="w-full bg-transparent appearance-none border border-pink-800 py-2 px-4 text-gray-700 placeholder-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-700 text-xs uppercase"
              id="inline-full-name"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="w-full md:w-1/2 md:px-8 mb-6">
            <input
              class="w-full bg-transparent appearance-none border border-pink-800 py-2 px-4 text-gray-700 placeholder-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-700 text-xs uppercase"
              id="inline-full-name"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="w-full md:w-1/2 md:px-8 mb-6">
            <input
              class="w-full bg-transparent appearance-none border border-pink-800 py-2 px-4 text-gray-700 placeholder-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-700 text-xs uppercase"
              id="inline-full-name"
              type="text"
              placeholder="Property Type"
            />
          </div>
        </div>
        <button className=" text-sm inline-block bg-white hover:bg-pink-500 text-black py-2 px-6 border-2 border-pink-800 rounded-full uppercase tracking-widest">
          SUBMIT
        </button>
      </div>
    </div>
  )
}

export default Project
