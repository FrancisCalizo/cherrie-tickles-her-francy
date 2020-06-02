import React from "react"
import { useState } from "react"

const RSVP = () => {
  const [rsvpState, setRsvpState] = useState({
    name: "",
    // attendance: "",
    email: "",
  })

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    setRsvpState({
      ...rsvpState,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = e => {
    // if (rsvpState.attendance === "") {
    //   return alert(
    //     "Please select an Attendance option when using the RSVP form."
    //   )
    // }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...rsvpState }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
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
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="First and last name"
          value={rsvpState.name}
          onChange={handleChange}
          required
        />
        {/* <label htmlFor="attendance">Attendance</label>
        <select
          name="attendance"
          id="attendance"
          value={rsvpState.attendance}
          onChange={handleChange}
          required
        >
          <option defaultValue value="">
            Please select an option
          </option>
          <option value={true}>Accept</option>
          <option value={false}>Decline</option>
        </select> */}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={rsvpState.email}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RSVP
