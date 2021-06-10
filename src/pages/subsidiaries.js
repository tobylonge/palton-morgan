import React from "react"
import webBg from "../images/bg-1.png"
import mobileBg from "../images/bg-1-mobile.png"
import logo from "../images/palton_morgan_dark.png"
import backBtn from "../images/back.svg"
import { isMobile } from "react-device-detect"
import Zoom from "react-reveal/Zoom"
import SubCard from "../components/subCard"
import Propertymart from "../images/subs/Propertymart.png"
import Grenadines from "../images/subs/Grenadines.png"
import Oceanna from "../images/subs/oceanna.png"

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
  ]

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
            <img src={backBtn} className="h-4 mr-2 mb-0" />
            Back
          </div>
        </Zoom>
        <div className="relative md:flex md:justify-center md:items-stretch md:w-full">
          <div
            className="relative h-full md:h-screen py-12 px-6 md:w-full md:flex md:items-center md:justify-center"
            style={{
              backgroundImage: `url(${isMobile ? mobileBg : webBg} )`,
            }}
          >
            <div className="absolute top-0 left-0 ml-8 mt-8">
              <img src={backBtn} className="h-4 mr-2 mb-0" />
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-around">
              {data.map((el, key) => (
                <SubCard key={key} {...el} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default subsidiaries
