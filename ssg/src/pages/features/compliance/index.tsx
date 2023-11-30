import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { HearFromOurCustomersSection } from "../../../components/common/HearFromOurCustomersSection"
import { GetStartedSection } from "../../../components/common/GetStartedSection"
import { MoreFeaturesSection } from "../../../components/common/MoreFeaturesSection"
import { LicensesAndRegistrationsSection } from "../../../components/page/compliance/LicensesAndRegistrationsSection"
import { translate } from "@docusaurus/Translate"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "Compliance",
      })}
    >
      <LicensesAndRegistrationsSection />
      <HearFromOurCustomersSection />
      <MoreFeaturesSection omit="Compliance" />
      <GetStartedSection />
    </Layout>
  )
}
