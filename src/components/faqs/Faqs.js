import React from "react"
import Faq from "react-faq-component"

import { data } from "../../data/Faqs"
import { FaqContainer, styles, config } from "./FaqsStyles"

const Faqs = () => {
  return (
    <div id="faqs">
      <FaqContainer>
        <Faq data={data} styles={styles} config={config} />
      </FaqContainer>
    </div>
  )
}

export default Faqs
