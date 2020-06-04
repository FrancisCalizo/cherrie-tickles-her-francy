import React, { useState, useRef, useEffect } from "react"
import ReactModal from "react-modal"
import { navigate } from "gatsby"

import {
  CodeInput,
  NamesTextarea,
  AdditionalTextarea,
  CloseButton,
  CodeInputContainer,
  Form,
  FormContainer,
  Heart,
  Label,
  Select,
  SongInput,
  SubmitButton,
  Underline,
  rsvpModalStyles,
} from "./RSVPModalStyles"

// Check Environment
let rsvpCode
if (process.env.NODE_ENV !== "production") {
  rsvpCode = process.env.GATSBY_RSVP_CODE
} else {
  rsvpCode = process.env.GATSBY_RSVP_CODE_PROD
}

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

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (code !== rsvpCode) {
      return alert(
        "The RSVP code you provided is invalid. Please use the RSVP code on the invitation that was mailed to you."
      )
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        code,
        names,
        attendance,
        songs,
        additional,
      }),
    })
      .then(() => {
        // alert("Your RSVP was submitted successully! See you February 6th!")
        setCode("")
        setNames("")
        setAttendance("")
        setSongs("")
        setAdditional("")
        handleCloseRsvpModal()
        navigate("/rsvpSuccess/")
      })
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
          <h2>
            <Heart>❣</Heart>RSVP<Heart>❣</Heart>
          </h2>
          <Underline />
          <p>
            Hi there! Please fill out the form below with as much detail as you
            can. We appreciate you helping us make this process as smooth as
            possible. If you have any issues, please email us at{" "}
            <a href="mailto:fccalizo@gmail.com">FCCalizo@gmail.com</a> or give
            us a call!{" "}
          </p>
        </div>
        <Form
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/"
        >
          <input
            type="hidden"
            name="form-name"
            value="contact"
            aria-label="contact"
          />
          <Label htmlFor="code">RSVP Code</Label>
          <CodeInput
            type="text"
            id="code"
            name="code"
            placeholder="XXXX"
            value={code}
            onChange={handleChange}
            required
            maxLength="4"
            aria-label="code"
            autoFocus
          />
          <CodeInputContainer>
            <span>
              This code can be found on the wedding invitation you received in
              the mail
              <span>*</span>
            </span>
          </CodeInputContainer>
          <Label htmlFor="names">First & Last Names of Guests</Label>
          <NamesTextarea
            type="text"
            id="names"
            name="names"
            placeholder="Donald Glover, Joanna Gaines, Dino Spimoni"
            value={names}
            onChange={handleChange}
            required
            aria-label="names"
          />
          <Label htmlFor="attendance">Attendance</Label>
          <Select
            name="attendance"
            id="attendance"
            value={attendance}
            onChange={handleChange}
            required
          >
            <option defaultValue value="">
              Please select an option
            </option>
            <option value={true}>Accepts with pleasure</option>
            <option value={false}>Declines with regret</option>
          </Select>
          <Label htmlFor="songs">Song Request(s)</Label>
          <SongInput
            type="text"
            id="songs"
            name="songs"
            placeholder="Darude - Sandstorm"
            value={songs}
            onChange={handleChange}
            aria-label="songs"
          />
          <Label htmlFor="additional">Additional Information</Label>
          <AdditionalTextarea
            type="text"
            id="additional"
            name="additional"
            placeholder="Food allergies, upates to an exisitng RSVP, notifying if some guests on your invitation will not be attending, etc. Please be specific."
            value={additional}
            onChange={handleChange}
            aria-label="additional"
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormContainer>
    </ReactModal>
  )
}

export default RSVPModal
