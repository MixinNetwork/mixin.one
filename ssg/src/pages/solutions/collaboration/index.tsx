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
            question: translate({
              message: "What is custodial approval?",
            }),
            answer: translate({
              message:
                "Custodial approval refers to jointly managing asset certificates with your family, friends, or colleagues, requiring partial or full custodial approval for each transfer to be completed.",
            }),
          },
          {
            question: translate({
              message:
                "How many collaborators can I set up to manage asset certificates?",
            }),
            answer: translate({
              message: "Now you can set up to 10 people.",
            }),
          },
          {
            question: translate({
              message: "Can I manage my assets with Mixin Safe by myself?",
            }),
            answer: translate({
              message:
                "Yes, you can manage assets through 2 or more devices, such as using a hardware wallet to manage private keys, and managing asset certificates through Mixin Messenger on your mobile phone. At the same time, it is recommended to set up an emergency contact for the account that manages the asset certificate, which can be another Mixin Messenger account.",
            }),
          },
          {
            question: translate({
              message:
                "Can I only manage private keys without participating in asset certificate management?",
            }),
            answer: translate({
              message:
                "Yes, please find trusted family members, friends or team members to participate in the management of asset certificates.",
            }),
          },
          {
            question: translate({
              message:
                "Do members who manage asset certificates with me need to pay to upgrade their membership?",
            }),
            answer: translate({
              message: "No.",
            }),
          },
        ]}
      />
      <GetStartedSection />
    </Layout>
  )
}
