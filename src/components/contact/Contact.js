import React from "react"

import { ContactContainer } from "./ContactStyles"

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h2>Contact Us</h2>
      <div>
        <p>
          If you have any other questions or need to give us a shout, feel free
          to shoot us a text or give us a call (you should have our phone
          numbers!).
        </p>
        <p>
          Alternatively, you can reach out to us at{" "}
          <a href="mailto:fccalizo@gmail.com">FCCalizo@gmail.com</a>{" "}
        </p>
      </div>
    </ContactContainer>
  )
}

export default Contact
