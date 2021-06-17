import React from "react"
import { Link } from "gatsby"
import Zoom from "react-reveal/Zoom"

export default function subCard(props) {
  return (
    <Zoom>
      <div className="max-w-sm rounded overflow-hidden shadow-lg text-center bg-white p-8 mt-8 md:mt-0 md:mx-4 flex flex-col items-center justify-end h-full">
        <img
          src={props.imgUrl}
          alt=""
          className="m-auto w-3/4 md:w-3/5 md:max-h-full"
        />
        {props.title && (
          <p className="uppercase text-xl m-0 text-pink-800 font-medium">
            {props.title}
          </p>
        )}
        <p className="text-gray-700 my-6">{props.text}</p>
        <Link
          to="/property"
          className=" text-sm inline-block bg-white hover:bg-yellow-600 text-black font-bold py-2 px-6 border border-yellow-600 rounded-full uppercase tracking-widest"
        >
          Explore
        </Link>
      </div>
    </Zoom>
  )
}
