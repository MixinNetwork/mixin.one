import React from "react"
import QuotationMark from "@site/static/img/common/quotationMark.svg"
import Translate from "@docusaurus/Translate"

export const OpenSourceSection = () => (
  <div className="container mx-auto grid md:grid-cols-[645fr_315fr] lg:grid-cols-[762fr_432fr]">
    <img
      loading="lazy"
      src={require("@site/static/img/page/about/1.webp").default}
      className="aspect-375/250 sm:aspect-664/443 md:aspect-315/364 lg:aspect-432/500 md:order-last object-cover h-full"
    />
    <div className="bg-[#333] p-10 pb-25 md:p-15 grow">
      <QuotationMark className="sm:w-12 sm:h-9" />
      <div className="sm:ms-12 text-white text-xl font-normal leading-10">
        <Translate>We build open source software that always puts security, privacy and decentralization first.</Translate>
      </div>
    </div>
  </div>
)
