import React, { useState, useEffect } from "react"

import Navbar from "./Navbar"

const CheckScroll = () => {
  const [navBackground, setNavBackground] = useState("transparent")

  useEffect(() => {
    window.addEventListener("scroll", e => {
      if (window.scrollY > 150) {
        setNavBackground("notTransparent")
      } else {
        setNavBackground("transparent")
      }
    })
  }, [])

  return (
    <div>
      <Navbar navBackground={navBackground} />
    </div>
  )
}

export default CheckScroll
