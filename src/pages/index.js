import React, { useEffect, useState } from "react"
import Zoom from "react-reveal/Zoom"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import logoIcon from "../images/palton_morgan_icon.png"
import logo from "../images/palton_morgan_dark.png"
import Home from "../pages/home"

const IndexPage = () => {
  const [pageReady, setPageReady] = useState(false)
  const [counter, setCounter] = useState(0)
  const [goHome, setGoHome] = useState(false)

  // Effect for incremeting loader count
  useEffect(() => {
    const t = setInterval(function () {
      if (counter === 100) {
        setPageReady(true)
      } else {
        setCounter(counter + 10)
      }
    }, 100)
    return () => {
      clearInterval(t) //cleanup interval
    }
  }, [counter])

  //navigate to homepage
  const goToHome = () => {
    setGoHome(true)
  }

  //on Page load
  useEffect(() => {
    if (counter === true);
    {
      setTimeout(() => {
        goToHome()
      }, 5000)
    }
  }, [])

  return (
    <Layout>
      {!pageReady ? (
        <div className="flex items-center justify-center h-screen">
          <div className="flex items-center justify-center flex-col">
            <img src={logoIcon} className="max-h-12" />
            <div className="flex items-center justify-center">
              <p className="loading uppercase">Loading</p>
              <p className="ml-4">{counter}%</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          {goHome ? (
            <Home />
          ) : (
            <div className="flex items-center justify-center h-screen">
              <div onClick={() => goToHome()}>
                <Zoom>
                  <img src={logo} className="max-h-12" />
                </Zoom>
              </div>
            </div>
          )}
        </>
      )}
      {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    </Layout>
  )
}

export default IndexPage
