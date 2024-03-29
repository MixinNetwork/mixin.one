import React from "react"
import Translate from "@docusaurus/Translate"
import useBaseUrl from "@docusaurus/useBaseUrl"
import LocalLink from "./LocaleLink"

export const GetStartedSection = () => (
  <div className="relative">
    <img
      loading="lazy"
      src={useBaseUrl("/img/common/getStarted.svg")}
      className="fill -z-10 object-cover"
    />
    <div className="pb-30 gap-x-30 container mx-auto grid px-10 pt-20 md:grid-cols-2">
      <img
        loading="lazy"
        src={require("@site/static/img/common/getStartedPerson.webp").default}
        alt={"try safe"}
        width={308}
        height={178}
        className="w-full md:order-last"
      />
      <div className="px-4 md:flex md:flex-col md:px-0">
        <div className="mt-17.5 text-7-8 font-medium leading-10 text-white md:mt-0 md:w-fit">
          <Translate>Secure Your Bitcoin Wealth Without Effort</Translate>
        </div>
        <div className="text-3.5-4 mt-7 font-normal leading-[1.5] text-white md:w-fit">
          <Translate>
            Our professional Bitcoin wealth managers are ready to show you how
            easy it is to use a completely decentralized custody suite to manage
            your Bitcoin.
          </Translate>
        </div>
        <LocalLink
          className="flex-center text-#000 text-3.4-4 mt-7 w-fit rounded-sm bg-white bg-opacity-95 px-7 py-4 font-medium md:mt-auto"
          href="https://calendly.com/mixin-safe/30min?month=2023-11"
        >
          <Translate>Schedule a demo</Translate>
        </LocalLink>
      </div>
    </div>
  </div>
)
