import React from "react"
import { useState } from "react"

// Check Environment
if (process.env.NODE_ENV !== "production") {
  rsvpCode = process.env.GATSBY_RSVP_CODE
} else {
  rsvpCode = process.env.GATSBY_RSVP_CODE_PROD
}

const RSVP = () => {
  const [names, setNames] = useState("")
  const [attendance, setAttendance] = useState("")
  const [code, setCode] = useState("")
  const [songs, setSongs] = useState("")
  const [additional, setAdditional] = useState("")

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    switch (e.target.name) {
      case "code":
        setCode(e.target.value)
        break
      case "names":
        setNames(e.target.value)
        break
      case "attendance":
        setAttendance(e.target.value)
        break
      case "songs":
        setSongs(e.target.value)
        break
      case "additional":
        setAdditional(e.target.value)
        break
      default:
        return
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (code !== rsvpCode) {
      return alert("RSVP code is invalid.")
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        names,
        attendance,
        songs,
        additional,
      }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(`Something went wrong - ${error}`))
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
        <input
          type="hidden"
          name="form-name"
          value="contact"
          aria-label="contact"
        />
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
          aria-label="code"
        />
        <label htmlFor="names">First & Last Names</label>
        <textarea
          type="text"
          id="names"
          name="names"
          placeholder="Donald Glover, Joanna Gaines, etc."
          value={names}
          onChange={handleChange}
          required
          aria-label="names"
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
        <label htmlFor="songs">Song Request(s)</label>
        <input
          type="text"
          id="songs"
          name="songs"
          placeholder="Throwin' elbows - Excision"
          value={songs}
          onChange={handleChange}
          aria-label="songs"
        />
        <label htmlFor="additional">Additional Information</label>
        <textarea
          type="text"
          id="additional"
          name="additional"
          placeholder="Food allergies, upates to an exisitng RSVP, notifying if some guests on your invitation will not be attending, etc. Please be specific."
          value={additional}
          onChange={handleChange}
          aria-label="additional"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RSVP
