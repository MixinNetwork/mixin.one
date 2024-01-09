import SectionTitle from "../../common/SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"
import GrayBackgroundWrapper from "../../common/GrayBackground"
import Card from "../../common/Card"

export const LicensesAndRegistrationsSection = () => {
  return (
    <>
      <SectionTitle
        description={
          <Translate>
            We go out of our way to ensure that you have the utmost privacy.
          </Translate>
        }
        large
      >
        <Translate>Licenses and registrations</Translate>
      </SectionTitle>
      <GrayBackgroundWrapper bgClassName="block!">
        <div className="py-15">
          <div className="container mx-auto grid auto-rows-fr gap-5 ">
            <Card
              cover={
                require("@site/static/img/page/compliance/" + "1.1.webp")
                  .default
              }
              title={translate({
                message: "Ministry of Finance",
              })}
              description={
                <Translate>
                  Registration of Activities in the Field of Virtual Currencies.
                </Translate>
              }
              className="!bg-white shadow"
            />
            <Card
              cover={
                require("@site/static/img/page/compliance/" + "1.2.webp")
                  .default
              }
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
              className="!bg-white shadow"
            />
            <Card
              cover={
                require("@site/static/img/page/compliance/" + "1.3.webp")
                  .default
              }
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
              className="!bg-white shadow"
            />
          </div>
        </div>
      </GrayBackgroundWrapper>
    </>
  )
}
