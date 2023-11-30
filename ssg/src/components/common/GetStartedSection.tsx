import React from "react"
import Translate from "@docusaurus/Translate"
import useBaseUrl from "@docusaurus/useBaseUrl"
import LocalLink from "./LocaleLink"

export const GetStartedSection = () => (
  <div className="relative">
    <img loading="lazy" src={useBaseUrl("/img/common/getStarted.svg")} className="-z-10 object-cover fill" />
    <div className="pt-20 pb-30 px-10 grid md:grid-cols-2 container mx-auto gap-x-30">
      <img loading="lazy" src={require("@site/static/img/common/getStartedPerson.webp").default} alt={"try safe"} className="aspect-355/204 md:aspect-657/376 md:order-last" />
      <div className="md:flex md:flex-col px-10 md:px-0">
        <div className="mt-17.5 md:mt-0 md:w-fit text-white text-3xl font-medium leading-10">
          <Translate>Secure Your Bitcoin Wealth Without Effort</Translate>
        </div>
        <div className="mt-7 md:w-fit text-white text-sm font-normal leading-normal">
          <Translate>Our professional Bitcoin wealth managers are ready to show you how easy it is to use a completely decentralized custody suite to manage your Bitcoin.</Translate>
        </div>
        <LocalLink
          className="mt-7 md:mt-auto w-fit py-4 px-7 bg-white bg-opacity-95 rounded-sm flex-center text-[#333] text-base font-medium leading-none"
          href="https://calendly.com/mixin-safe/30min?month=2023-11"
        >
          <Translate>Schedule a demo</Translate>
        </LocalLink>
      </div>
    </div>
  </div>
)
