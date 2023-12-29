import React from "react"
import Translate from "@docusaurus/Translate"
import { WoodGrainBackgroundTextSection } from "../../../common/WoodGrainBackgroundTextSection"
import QuotationMark from "@site/static/img/common/quotationMark.svg"

export const VitalikButerinSection = () => (
  <WoodGrainBackgroundTextSection>
    <div className="grid grid-cols-[auto_1fr_auto]">
      <QuotationMark />
      <div />
      <QuotationMark className="rotate-y-180" />
      <div />
      <div className="text-4 sm:text-4.7 md:text-5.3 lg:text-6 font-300 sm:font-333.3 md:font-366.7 lg:font-400">
        <Translate>We need wide adoption of social recovery wallets.</Translate>
      </div>
      <div />
      <div className="mx-a col-span-full mt-10 h-px w-5 bg-white" />
      <div className="mx-a col-span-full mt-2.5">
        <Translate>Vitalik Buterin</Translate>
      </div>
    </div>
  </WoodGrainBackgroundTextSection>
)
