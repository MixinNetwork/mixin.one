import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { translate } from "@docusaurus/Translate"
import { Header } from "../../../components/page/solutions/social-recovery/Header"
import { AccessibleSection } from "../../../components/page/solutions/social-recovery/AccessibleSection"
import { VitalikButerinSection } from "../../../components/page/solutions/social-recovery/VitalikButerinSection"
import { StepsSection } from "../../../components/page/solutions/social-recovery/StepsSection"
import { UseNowSection } from "../../../components/common/UseNowSection"
import { FAQSection } from "../../../components/common/FAQSection"

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
      <FAQSection
        faqs={[
          {
            question: "foo",
            answer: "bar",
          },
        ]}
      />
      <UseNowSection />
    </Layout>
  )
}
