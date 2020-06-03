import React, { useState, useRef, useEffect } from "react"
import ReactModal from "react-modal"
import styled from "styled-components"
import { device } from "../breakpoints"

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

    @media ${device.maxSm} {
      font-size: 2rem;
    }
  }

  p {
    font-size: 0.9rem;
    text-align: center;
    color: #636e72;
    margin: 0 1rem;

    @media ${device.maxSm} {
      font-size: 0.8rem;
    }

    a {
      color: #ff4d4d;
      text-decoration: none;

      &:hover {
        color: #ff8383;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`
export const Heart = styled.span`
  font-size: 3rem;
  padding: 0 1.5rem;
  color: #ff7979;

  @media ${device.maxSm} {
    font-size: 2rem;
  }
`

export const Underline = styled.div`
  border-top: 5px solid #ff7979;
  transform: skewY(-5deg) translateY(-27px);
  width: 150px;
  margin: 0 auto;

  @media ${device.maxSm} {
    transform: skewY(-5deg) translateY(-22px);
    width: 120px;
  }
`

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 48px;
  cursor: pointer;
  color: #636e72;
`

export const Form = styled.form`
  margin: 2rem 1rem;
`

export const Label = styled.label`
  display: block;
  color: #ff4d4d;
  font-size: 1rem;
  margin-bottom: 5px;

  @media ${device.maxSm} {
    font-size: 0.95rem;
  }
`
export const CodeInputContainer = styled.div`
  margin-bottom: 15px;

  span {
    font-size: 0.8rem;
    font-weight: bold;

    span {
      color: #ff4d4d;
      font-size: 1.2rem;
    }
  }
`

export const CodeInput = styled.input`
  font-family: "Raleway", sans-serif;
  font-size: 1.1rem;
  padding: 5px 7px;
  width: 45px;
  border: 1.2px solid #c8ced0;
  border-radius: 3px;

  @media ${device.maxSm} {
    font-size: 0.9rem;
  }

  ::placeholder {
    color: #a0a8ac;
  }
`

export const SongInput = styled(CodeInput)`
  width: 95%;
  margin-bottom: 15px;
`

export const NamesTextarea = styled.textarea`
  font-family: "Raleway", sans-serif;
  font-size: 1.1rem;
  padding: 5px 7px;
  resize: none;
  width: 95%;
  border: 1.2px solid #c8ced0;
  margin-bottom: 15px;
  border-radius: 3px;
  height: 60px;

  ::placeholder {
    color: #a0a8ac;
  }

  @media ${device.maxSm} {
    font-size: 0.9rem;
  }
`
export const AdditionalTextarea = styled(NamesTextarea)`
  height: 100px;
`

export const Select = styled.select`
  font-family: "Raleway", sans-serif;
  font-size: 1.1rem;
  padding: 5px 7px;
  border: 1.2px solid #c8ced0;
  margin-bottom: 15px;
  border-radius: 3px;

  ::placeholder {
    color: #a0a8ac;
  }

  @media ${device.maxSm} {
    font-size: 0.9rem;
  }
`

export const SubmitButton = styled.button`
  display: block;
  background: #ff7979;
  color: #fff;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  font-size: 1.2rem;
  padding: 0.5rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  margin: 1rem auto 0;
  border: none;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5), 0 4px 12px 0 rgba(0, 0, 0, 0.23);
  border: 1px solid #c8ced0;
  outline: none;
  text-transform: uppercase;

  &:hover {
    background: #ff8383;
  }
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
    if (code !== rsvpCode) {
      e.preventDefault()
      return alert(
        "The RSVP code you provided is invalid. Please use the RSVP code on the invitation that was mailed to you."
      )
    }

    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({
    //     "form-name": "contact",
    //     code,
    //     names,
    //     attendance,
    //     songs,
    //     additional,
    //   }),
    // })
    //   .then(() => {
    //     alert("Your RSVP was submitted successully! See you February 6th!")
    //     setCode("")
    //     setNames("")
    //     setAttendance("")
    //     setSongs("")
    //     setAdditional("")
    //     handleCloseRsvpModal()
    //   })
    //   .catch(error => alert(`Something went wrong - ${error}`))
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
          action="/rsvpSuccess"
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

export const rsvpModalStyles = {
  overlay: {
    zIndex: 20,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0, 0.6)",
    overflowY: "scroll",
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
