import React from "react"
import QuotationMark from "@site/static/img/common/quotationMark.svg"
import Translate from "@docusaurus/Translate"

export const OpenSourceSection = () => (
  <div className="container mx-auto flex flex-col sm:flex-row-reverse ">
    <img src={require("@site/static/img/page/about/1.webp").default} className="aspect-375/250 sm:aspect-432/380 object-cover w-full h-full sm:max-h-95 sm:h-auto sm:w-fit" />
    <div className="bg-zinc-800 p-10 pb-25">
      <QuotationMark />
      <div className="text-white text-xl font-normal leading-10">
        <Translate>We build open source software that always puts security, privacy and decentralization first.</Translate>
      </div>
    </div>
  </div>
)
