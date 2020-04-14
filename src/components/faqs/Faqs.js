import React from "react"
import Faq from "react-faq-component"

import { data } from "./data/Faqs"
import {
  FaqContainer,
  Subtitle,
  styles,
  config,
  ScrollContact,
} from "./FaqsStyles"

const Faqs = () => {
  return (
    <div
      id="faqs"
      data-sal="fade"
      data-sal-duration="700"
      data-sal-easing="ease-in-out"
    >
      <Subtitle>Frequently Asked Questions</Subtitle>
      <FaqContainer>
        <Faq data={data} styles={styles} config={config} />
      </FaqContainer>
      <ScrollContact id="scroll-contact" />
    </div>
  )
}

export default Faqs
