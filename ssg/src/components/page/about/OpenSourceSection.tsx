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
      <div className="pb-25 md:p-15 grow bg-[#333] p-10">
        <QuotationMark className="sm:h-9 sm:w-12" />
        <div className="text-5 font-normal leading-10 text-white sm:ms-12">
          <Translate>
            We build open source software that always puts security, privacy and
            decentralization first.
          </Translate>
        </div>
      </div>
    </div>
  </>
)
