import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { GetStartedSection } from "../../../components/common/GetStartedSection"
import { translate } from "@docusaurus/Translate"
import { Header } from "../../../components/page/solutions/collaboration/Header"
import { MultiRoleCollaborationSection } from "../../../components/page/solutions/collaboration/MultiRoleCollaborationSection"
import { StepsSection } from "../../../components/page/solutions/collaboration/StepsSection"
import { FAQSection } from "../../../components/common/FAQSection"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "Collaboration",
      })}
    >
      <Header />
      <MultiRoleCollaborationSection />
      <StepsSection />
      <FAQSection
        faqs={[
          {
            question: "foo",
            answer: "bar",
          },
        ]}
      />
      <GetStartedSection />
    </Layout>
  )
}
