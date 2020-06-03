import React, { useState, useRef, useEffect } from "react"
import ReactModal from "react-modal"
import styled from "styled-components"

// Check Environment
let rsvpCode
if (process.env.NODE_ENV !== "production") {
  rsvpCode = process.env.GATSBY_RSVP_CODE
} else {
  rsvpCode = process.env.GATSBY_RSVP_CODE_PROD
}

export const FormContainer = styled.div`
  h2 {
    font-family: "Alex Brush", cursive;
    font-size: 3rem;
    text-align: center;
    margin: 0 auto 1rem;
  }

  p {
    font-size: 0.9rem;
    text-align: center;
    color: #636e72;
    margin: 0 1rem;

    a {
      color: #ff7979;
      text-decoration: none;

      &:hover {
        color: #ff8383;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 48px;
  cursor: pointer;
  color: #636e72;
`

const RSVPModal = ({ showRsvpModal, handleCloseRsvpModal }) => {
  const [names, setNames] = useState("")
  const [attendance, setAttendance] = useState("")
  const [code, setCode] = useState("")
  const [songs, setSongs] = useState("")
  const [additional, setAdditional] = useState("")

  // useRef to Capture Outside Modal Click
  const wrapper = useRef()

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false)
    return () => {
      document.removeEventListener("click", handleClickOutside, false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClickOutside = event => {
    if (wrapper.current.node.firstChild === event.target) {
      handleCloseRsvpModal()
    }
  }

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
    <ReactModal
      isOpen={showRsvpModal}
      ariaHideApp={false}
      style={rsvpModalStyles}
      ref={wrapper}
    >
      <FormContainer>
        <CloseButton onClick={handleCloseRsvpModal}>&times;</CloseButton>
        <div>
          <h2>RSVP</h2>
          <p>
            Hi there! Please fill out the form below in as much detail as you
            can give us. We appreciate you helping us make this process as
            smooth as possible. If you have any issues, please email us at{" "}
            <a href="mailto:fccalizo@gmail.com">FCCalizo@gmail.com</a> or give
            us a call!{" "}
          </p>
        </div>
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
      </FormContainer>
    </ReactModal>
  )
}

export const rsvpModalStyles = {
  overlay: {
    zIndex: 20,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0, 0.6)",
  },
  content: {
    position: "static",
    backgroundColor: "#FFF",
    width: "100%",
    maxWidth: "600px",
    margin: "auto 1.5rem",
    paddingTop: 0,
    border: "2px solid black",
  },
}

export default RSVPModal
