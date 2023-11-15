import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { HearFromOurCustomersSection } from "../../components/common/HearFromOurCustomersSection"
import { GetStartedSection } from "../../components/common/GetStartedSection"
import { MoreFeaturesSection } from "../../components/common/MoreFeaturesSection"
import { LicensesAndRegistrationsSection } from "../../components/page/licenses/LicensesAndRegistrationsSection"

export default function Root() {
  return (
    <Layout>
      <LicensesAndRegistrationsSection />
      <HearFromOurCustomersSection />
      <MoreFeaturesSection omit="Compliant" />
      <GetStartedSection />
    </Layout>
  )
}
