import React from "react"
import SectionTitle from "../../common/SectionTitle"
import Translate from "@docusaurus/Translate"

import clsx from "clsx"
const Item = ({ cover, title, description }: { cover: string; title: string; description: string }) => (
  <div className={clsx("bg-white rounded-sm shadow pt-5 px-5 pb-10 flex flex-col sm:flex-row sm:odd:flex-row-reverse items-center gap-10")}>
    <img src={require("@site/static/img/page/licenses/" + cover).default} alt={title} className="aspect-335/220 w-full object-contain px-6 sm:flex-1" />

    <div className="space-y-5 w-full sm:flex-1">
      <div className="text-zinc-800 text-xl font-medium leading-snug sm:text-2xl">{title}</div>
      <div className="text-zinc-800 text-opacity-80 text-base font-normal leading-relaxed">{description}</div>
    </div>
  </div>
)

export const LicensesAndRegistrationsSection = () => {
  return (
    <>
      <SectionTitle description={<Translate>We go out of our way to ensure that you have the utmost privacy.</Translate>}>
        <Translate>Licenses and registrations</Translate>
      </SectionTitle>
      <div className="py-15">
        <div className="container mx-auto px-5 grid gap-5">
          <Item cover="1.1.png" title="Ministry of Finance" description="Registration of Activities in the Field of Virtual Currencies" />
          <Item
            cover="1.2.png"
            title="PCI/DSS"
            description="The Payment Card Industry Data Security Standard (PCI DSS) is an information security standard for organizations that handle branded credit cards from major card schemes. This certification confirms that Mixin Route is fully compliant with high standards for secure storage and processing of bank card data."
          />
          <Item
            cover="1.3.png"
            title="EU GDPR compliance"
            description="Mixin Route’s policies, procedures, and workflows regarding personal data processing of EU residents are fully compliant with the requirements of the EU GDPR. External and internal evaluations of Mixin Route's compliance with the EU GDPR are conducted annually."
          />
        </div>
      </div>
    </>
  )
}
