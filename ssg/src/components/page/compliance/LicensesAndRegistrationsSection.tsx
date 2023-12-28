import { ReactNode } from "react"
import SectionTitle from "../../common/SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"

import clsx from "clsx"
import GrayBackgroundWrapper from "../../common/GrayBackground"
const Item = ({
  cover,
  title,
  description,
}: {
  cover: string
  title: string
  description: ReactNode
}) => (
  <div
    className={clsx(
      "md:p-15 group grid items-center gap-10 rounded-sm bg-white px-5 pb-10 pt-5 shadow sm:grid-cols-2 lg:px-32",
    )}
  >
    <img
      loading="lazy"
      src={require("@site/static/img/page/compliance/" + cover).default}
      alt={title}
      className="aspect-335/220 w-full object-contain px-6 sm:group-odd:order-last "
    />

    <div className="w-full space-y-5">
      <div className="text-#333 text-xl font-medium leading-snug sm:text-2xl">
        {title}
      </div>
      <div className="text-#333 text-base font-normal leading-relaxed text-opacity-80">
        {description}
      </div>
    </div>
  </div>
)

export const LicensesAndRegistrationsSection = () => {
  return (
    <>
      <SectionTitle
        description={
          <Translate>
            We go out of our way to ensure that you have the utmost privacy.
          </Translate>
        }
      >
        <Translate>Licenses and registrations</Translate>
      </SectionTitle>
      <GrayBackgroundWrapper bgClassName="block!">
        <div className="py-15">
          <div className="container mx-auto grid auto-rows-fr gap-5 ">
            <Item
              cover="1.1.webp"
              title={translate({
                message: "Ministry of Finance",
              })}
              description={
                <Translate>
                  Registration of Activities in the Field of Virtual Currencies.
                </Translate>
              }
            />
            <Item
              cover="1.2.webp"
              title={translate({
                message: "PCI/DSS",
              })}
              description={
                <Translate>
                  The Payment Card Industry Data Security Standard (PCI DSS) is
                  an information security standard for organizations that handle
                  branded credit cards from major card schemes. This
                  certification confirms that Mixin Route is fully compliance
                  with high standards for secure storage and processing of bank
                  card data.
                </Translate>
              }
            />
            <Item
              cover="1.3.webp"
              title={translate({
                message: "EU GDPR compliance",
              })}
              description={
                <Translate>
                  Mixin Route’s policies, procedures, and workflows regarding
                  personal data processing of EU residents are fully compliance
                  with the requirements of the EU GDPR. External and internal
                  evaluations of Mixin Route's compliance with the EU GDPR are
                  conducted annually.
                </Translate>
              }
            />
          </div>
        </div>
      </GrayBackgroundWrapper>
    </>
  )
}
