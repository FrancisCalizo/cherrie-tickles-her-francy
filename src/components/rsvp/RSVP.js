import React, { useState } from "react"

import RSVPModal from "./RSVPModal"
import { RSVPButton, RSVPContainer, ScrollContact } from "./RSVPStyles"

const RSVP = () => {
  const [showRsvpModal, setShowRsvpModal] = useState(false)

  const handleOpenRsvpModal = () => {
    setShowRsvpModal(true)
  }

  const handleCloseRsvpModal = () => {
    setShowRsvpModal(false)
  }
  return (
    <RSVPContainer
      data-sal="fade"
      data-sal-duration="700"
      data-sal-easing="ease-in-out"
    >
      <h2>RSVP</h2>
      <RSVPButton onClick={handleOpenRsvpModal}>Click Here to RSVP</RSVPButton>
      <RSVPModal
        showRsvpModal={showRsvpModal}
        handleCloseRsvpModal={handleCloseRsvpModal}
      />
      <ScrollContact id="scroll-contact" />
    </RSVPContainer>
  )
}

export default RSVP
