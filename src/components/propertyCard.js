import React from "react"
import { Link } from "gatsby"
import Zoom from "react-reveal/Zoom"

export default function propertyCard(props) {
  return (
    <Zoom>
      <div className="max-w-sm rounded overflow-hidden shadow-lg text-center bg-white mt-8 md:mt-0 flex flex-col items-center justify-end md:h-full">
        <img
          src={props.imgUrl}
          alt=""
          className="w-full m-0 h-56 object-cover"
        />
        <div className="p-8">
          {props.title && (
            <p className="uppercase text-xl m-0 text-pink-800 font-medium mb-4">
              {props.title}
            </p>
          )}
          <p className="text-gray-700 text-sm">{props.text}</p>
          <Link
            to="/project"
            className=" text-sm inline-block bg-white hover:bg-pink-800 hover:text-white text-black font-bold py-2 px-6 border-2 border-pink-800 rounded-full uppercase tracking-widest"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </Zoom>
  )
}
