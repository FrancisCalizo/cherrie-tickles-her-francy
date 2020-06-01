import React from "react"

import {
  RegistryContainer,
  InfoContainer,
  Frame,
  ScrollFaqs,
} from "./RegistryStyles"

const Registry = () => {
  return (
    <RegistryContainer
      id="registry"
      data-sal="fade"
      data-sal-duration="700"
      data-sal-easing="ease-in-out"
    >
      <h2>Registry</h2>
      <InfoContainer>
        <p>
          We have a small{" "}
          <a
            href="https://www.zola.com/registry/francisandcherrie"
            target="_blank"
            rel="noreferrer"
          >
            registry through Zola
          </a>{" "}
          (see below) should you be compelled by extreme generosity. We are
          immensely grateful for both your presence and any contributions as we
          start our lives together!
        </p>
        <p>
          Our registry may seem to be on the smaller side as we both feel we
          have everything we need. On the contrary, any monetary gifts to
          support our dream honeymoon & travel fund would be extraordinarily
          delightful.
        </p>
      </InfoContainer>
      <Frame
        url="https://widget.zola.com/v1/widget/registry/francisandcherrie/html"
        width="100%"
        height="600px"
      />
      <ScrollFaqs id="scroll-faqs" />
    </RegistryContainer>
  )
}

export default Registry
