import React from "react"
import SectionTitle from "../../common/SectionTitle"
import Translate from "@docusaurus/Translate"
import GDPR from "@site/static/img/page/privacy/2.svg"

export const PrivacyComplianceSection = () => {
  return (
    <div className="bg-slate-100 pb-40">
      <SectionTitle
        description={
          <Translate>
            Our internal privacy program is built on the EU GDPR to ensure the
            privacy of our customers. We will continue to improve our privacy
            framework and continuously meet other compliancerequirements. For
            more information, please refer to our privacy statement.
          </Translate>
        }
      >
        <Translate>Privacy Compliance</Translate>
      </SectionTitle>
      <GDPR className="container mx-auto mt-5 block h-fit px-5" />
    </div>
  )
}
