import React from "react"
import QuotationMark from "@site/static/img/common/quotationMark.svg"
import Translate from "@docusaurus/Translate"
import SectionTitle from "../../common/SectionTitle"

export const OpenSourceSection = () => (
  <>
    <SectionTitle>
      <Translate>Our Mission</Translate>
    </SectionTitle>
    <div className="container mx-auto md:grid md:grid-cols-[645fr_315fr] lg:grid-cols-[762fr_432fr]">
      <img
        loading="lazy"
        src={require("@site/static/img/page/about/2.webp").default}
        className="aspect-375/250 sm:aspect-664/443 md:aspect-315/364 lg:aspect-432/500 h-full w-full object-cover md:order-last"
      />
      <div className="pb-25 md:p-15 grow bg-[#333] p-10">
        <QuotationMark className="sm:h-9 sm:w-12" />
        <div className="text-xl font-normal leading-10 text-white sm:ms-12">
          <Translate>
            We build open source software that always puts security, privacy and
            decentralization first.
          </Translate>
        </div>
      </div>
    </div>
  </>
)
