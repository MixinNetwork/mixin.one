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
            question: translate({
              message: "What is Social Recovery?",
            }),
            answer: translate({
              message:
                "Social recovery refers to a method of wallet recovery that doesn't require a seed or mnemonic phrases, while also ensuring that the wallet is non-custodial.",
            }),
          },
          {
            question: translate({
              message: "Why do I need a wallet with social recovery?",
            }),
            answer: translate({
              message:
                "Most users lose their cryptocurrency assets not because they are stolen, but because the owners do not manage their private keys well. The Mixin wallet, equipped with social recovery capabilities, can effectively prevent single points of failure.",
            }),
          },
          {
            question: translate({
              message: "How to set up the social recovery function?",
            }),
            answer: translate({
              message:
                "You can enable the social recovery function by setting an emergency contact in Mixin Messenger.",
            }),
          },
          {
            question: translate({
              message: "Is the social recovery function a paid function?",
            }),
            answer: translate({
              message:
                "At present, all functions of Mixin Messenger are free to use, including this social recovery function. You can rest assured to invite your family, friends or colleagues to join Mixin and set them as emergency contacts.",
            }),
          },
          {
            question: translate({
              message: "Can I set myself as an emergency contact?",
            }),
            answer: translate({
              message:
                "If you have multiple devices, you can log in to Mixin Messenger on both devices and set each other as emergency contacts.",
            }),
          },
        ]}
      />
      <UseNowSection />
    </Layout>
  )
}
