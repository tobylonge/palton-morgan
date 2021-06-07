import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import logoIcon from "../images/palton_morgan_icon.png"
import logo from "../images/palton_morgan_dark.png"

const IndexPage = () => {
  const [pageReady, setPageReady] = useState(false)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("I got here")
    const t = setInterval(function () {
      if (counter === 100) {
        setPageReady(true)
      } else {
        setCounter(counter + 10)
      }
    }, 1000)
    return () => {
      clearInterval(t) //cleanup interval
    }
  }, [counter])

  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        {!pageReady ? (
          <div className="flex items-center justify-center flex-col">
            <img src={logoIcon} />
            <div className="flex items-center justify-center">
              <p className="loading uppercase">Loading</p>
              <p className="ml-4">{counter}%</p>
            </div>
          </div>
        ) : (
          <div>
            <img src={logo} className="max-h-3" />
          </div>
        )}
      </div>
      {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    </Layout>
  )
}

export default IndexPage
