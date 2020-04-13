import React from "react"
import { Link } from "gatsby"

const pageNotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default pageNotFound
