import styled from "styled-components"
import { device } from "../breakpoints"

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
