import React from "react"
import Translate from "@docusaurus/Translate"
import useBaseUrl from "@docusaurus/useBaseUrl"

export const GetStartedSection = () => (
  <div className="relative">
    <img src={useBaseUrl("/img/common/getStarted.svg")} className="-z-10 object-cover fill" />
    <div className="pt-20 pb-30 px-2.5 grid md:grid-cols-2 container mx-auto">
      <img src={require("@site/static/img/common/getStartedPerson.webp").default} alt={"try safe"} className="aspect-355/204 md:aspect-657/376 md:order-last" />
      <div className="md:flex md:flex-col md:justify-between px-10 md:px-0">
        <div className="mt-17.5 md:mt-0 md:w-fit text-white text-3xl font-medium leading-10">
          <Translate>Get Started</Translate>
        </div>
        <div className="mt-7 md:mt-0 md:w-fit text-white text-sm font-normal leading-normal">
          <Translate>Experience the latest innovations in Bitcoin industry and secure your Bitcoin starting with just $10 per year!</Translate>
        </div>
        <a className="mt-7 md:mt-0 w-fit py-4 px-7 bg-white bg-opacity-95 rounded-sm flex-center text-zinc-800 text-base font-medium leading-none">
          <Translate>Get Started</Translate>
        </a>
      </div>
    </div>
  </div>
)
