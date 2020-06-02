import React from "react"
import { useState } from "react"

const RSVP = () => {
  const [name, setName] = useState("")
  const [attendance, setAttendance] = useState("")
  const [code, setCode] = useState("")

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value)
        break
      case "attendance":
        setAttendance(e.target.value)
        break
      case "code":
        setCode(e.target.value)
        break
      default:
        return
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (code !== process.env.GATSBY_MY_ENVIRONMENT) {
      return alert("RSVP code is invalid.")
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, attendance }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="code">RSVP Code</label>
        <input
          type="text"
          id="code"
          name="code"
          placeholder="A1B2"
          value={code}
          onChange={handleChange}
          required
          maxLength="4"
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="First and last name"
          value={name}
          onChange={handleChange}
          required
        />
        <label htmlFor="attendance">Attendance</label>
        <select
          name="attendance"
          id="attendance"
          value={attendance}
          onChange={handleChange}
          required
        >
          <option defaultValue value="">
            Please select an option
          </option>
          <option value={true}>Accept</option>
          <option value={false}>Decline</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RSVP
