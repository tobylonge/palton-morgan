import React, { Fragment, useRef, useState, useEffect } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XCircleIcon } from "@heroicons/react/outline"

const Modal = props => {
  //   useEffect(() => {
  //     setOpen(props.openModal)
  //   }, [props.openModal])

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full md:w-auto my-6 md:mx-auto max-w-xl mx-6">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 text-center rounded-t">
              {props.title && (
                <h3 className="text-xl leading-6 font-medium text-pink-800 text-center uppercase mb-0 mx-auto mt-8">
                  {props.title}
                </h3>
              )}
              <button
                className="outline-none absolute top-0 right-0 mr-4 mt-4 focus:outline-none"
                onClick={props.closeModal}
              >
                <XCircleIcon
                  className="h-6 w-6 text-pink-800 "
                  aria-hidden="true"
                />
              </button>
            </div>
            {/*body*/}
            <div className="relative p-3 md:p-6 flex-auto text-center">
              {props.children}
            </div>
            {/*footer*/}
            {props.submit && (
              <div className="flex items-center justify-end px-6 pb-12 rounded-b">
                <button
                  className=" text-sm inline-block bg-white hover:bg-pink-800 hover:text-white text-black py-2 px-6 border-2 border-pink-800 rounded-full uppercase tracking-widest focus:outline-none mx-auto"
                  onClick={props.submit}
                >
                  {props.submitText ? props.submitText : "Submit"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Modal
