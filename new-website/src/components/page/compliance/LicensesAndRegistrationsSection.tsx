import React from "react"
import SectionTitle from "../../common/SectionTitle"
import Translate from "@docusaurus/Translate"

import clsx from "clsx"
import GrayBackgroundWrapper from "../../common/GrayBackground"
const Item = ({ cover, title, description }: { cover: string; title: string; description: string }) => (
  <div className={clsx("bg-white rounded-sm shadow pt-5 px-5 pb-10 md:p-15 lg:px-32 grid sm:grid-cols-2 group items-center gap-10")}>
    <img loading="lazy" src={require("@site/static/img/page/compliance/" + cover).default} alt={title} className="aspect-335/220 w-full object-contain px-6 sm:group-odd:order-last " />

    <div className="space-y-5 w-full">
      <div className="text-[#333] text-xl font-medium leading-snug sm:text-2xl">{title}</div>
      <div className="text-[#333] text-opacity-80 text-base font-normal leading-relaxed">{description}</div>
    </div>
  </div>
)

export const LicensesAndRegistrationsSection = () => {
  return (
    <>
      <SectionTitle description={<Translate>We go out of our way to ensure that you have the utmost privacy.</Translate>}>
        <Translate>Licenses and registrations</Translate>
      </SectionTitle>
      <GrayBackgroundWrapper>
        <div className="py-15">
          <div className="container mx-auto px-5 grid gap-5 auto-rows-fr">
            <Item cover="1.1.webp" title="Ministry of Finance" description="Registration of Activities in the Field of Virtual Currencies" />
            <Item
              cover="1.2.webp"
              title="PCI/DSS"
              description="The Payment Card Industry Data Security Standard (PCI DSS) is an information security standard for organizations that handle branded credit cards from major card schemes. This certification confirms that Mixin Route is fully compliance with high standards for secure storage and processing of bank card data."
            />
            <Item
              cover="1.3.webp"
              title="EU GDPR compliance"
              description="Mixin Route’s policies, procedures, and workflows regarding personal data processing of EU residents are fully compliance with the requirements of the EU GDPR. External and internal evaluations of Mixin Route's compliance with the EU GDPR are conducted annually."
            />
          </div>
        </div>
      </GrayBackgroundWrapper>
    </>
  )
}
