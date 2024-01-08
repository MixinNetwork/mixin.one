import React from "react"
import QuotationMark from "@site/static/img/common/quotationMark.svg"
import Translate from "@docusaurus/Translate"
import SectionTitle from "../../common/SectionTitle"

export const OpenSourceSection = () => (
  <>
    <SectionTitle>
      <Translate>Our Mission</Translate>
    </SectionTitle>
    <div className="container mx-auto md:grid md:grid-cols-[768fr_432fr]">
      <img
        loading="lazy"
        src={require("@site/static/img/page/about/2.webp").default}
        className="w-full object-cover md:order-last"
        width={423}
        height={380}
      />
      <div className="py-15 ps-8-12 pe-8-32.5 grow bg-[#000]">
        <QuotationMark className="h-4.5-8.75 w-6-12" />
        <div className="text-4.5-6 ms-0-7.5 font-normal leading-10 text-white">
          <Translate>
            We build open source software that always puts security, privacy and
            decentralization first.
          </Translate>
        </div>
      </div>
    </div>
  </>
)
