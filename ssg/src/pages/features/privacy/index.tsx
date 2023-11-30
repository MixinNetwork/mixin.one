import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { HearFromOurCustomersSection } from "../../../components/common/HearFromOurCustomersSection"
import { GetStartedSection } from "../../../components/common/GetStartedSection"
import { MoreFeaturesSection } from "../../../components/common/MoreFeaturesSection"
import { DesignSection } from "../../../components/page/privacy/DesignSection"
import { PrivacyComplianceSection } from "../../../components/page/privacy/PrivacyComplianceSection"
import { translate } from "@docusaurus/Translate"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "Privacy",
      })}
    >
      <DesignSection />
      <PrivacyComplianceSection />
      <HearFromOurCustomersSection />
      <MoreFeaturesSection omit="Privacy" />
      <GetStartedSection />
    </Layout>
  )
}
