import React from "react"
import Faq from "react-faq-component"

import { data } from "../../data/Faqs"
import { FaqContainer, styles, config } from "./FaqsStyles"

const Faqs = () => {
  return (
    <FaqContainer>
      <Faq data={data} styles={styles} config={config} />
    </FaqContainer>
  )
}

export default Faqs
