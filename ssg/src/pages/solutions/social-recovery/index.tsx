import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { GetStartedSection } from "../../../components/common/GetStartedSection"
import { translate } from "@docusaurus/Translate"
import { Header } from "../../../components/page/solutions/social-recovery/Header"
import { AccessibleSection } from "../../../components/page/solutions/social-recovery/AccessibleSection"
import { VitalikButerinSection } from "../../../components/page/solutions/social-recovery/VitalikButerinSection"
import { StepsSection } from "../../../components/page/solutions/social-recovery/StepsSection"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "Social Recovery",
      })}
    >
      <Header />
      <AccessibleSection />
      <VitalikButerinSection />
      <StepsSection />
      <GetStartedSection />
    </Layout>
  )
}
