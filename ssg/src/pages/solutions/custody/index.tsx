import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { GetStartedSection } from "../../../components/common/GetStartedSection"
import { translate } from "@docusaurus/Translate"
import { Header } from "../../../components/page/solutions/custody/Header"
import { FeatureSection } from "../../../components/page/solutions/custody/FeatureSection"
import { FAQSection } from "../../../components/common/FAQSection"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "Custody",
      })}
    >
      <Header />
      <FeatureSection />
      <FAQSection
        faqs={[
          {
            question: translate({
              message:
                "Why is Mixin Safe safer than a standalone hardware wallet?",
            }),
            answer: translate({
              message:
                "The multi-signature and time lock technologies of Mixin Safe effectively avoid single-point failures such as loss or damage of a single hardware wallet device while maintaining decentralization, thereby greatly improving the security of the wallet.",
            }),
          },
          {
            question: translate({
              message:
                "What does the decentralized MPC network used by Mixin Safe mean?",
            }),
            answer: translate({
              message:
                "The decentralized MPC network (Safe Network) in Mixin Safe shares validators and security with Mixin Network. Mixin Network is a PoS network composed of 25 pledged full nodes. It has been running stably for more than 5 years and has a total value of more than $1 billion.",
            }),
          },
          {
            question: translate({
              message:
                "If the Mixin Safe team disbands, can I still withdraw my assets?",
            }),
            answer: translate({
              message:
                "Yes, your assets are still safe. You can withdraw your assets at any time through your wallet private key and decentralized MPC network. Even if the Mixin Safe team disbands, your assets are still safe in your hands.",
            }),
          },
          {
            question: translate({
              message:
                "If my private key is lost and the security time lock has expired, can the Mixin Safe team take away my assets?",
            }),
            answer: translate({
              message:
                "No, the Mixin Safe team only has one key, which is not enough to transfer your assets unless you have formulated a recovery or inheritance plan.",
            }),
          },
          {
            question: translate({
              message: "Is Mixin Safe a custodial wallet?",
            }),
            answer: translate({
              message:
                "No, Mixin Safe is a decentralized non-custodial multi-signature wallet solution.",
            }),
          },
          {
            question: translate({
              message:
                "What is the difference between the traditional MPC wallet solution and Mixin Safe?",
            }),
            answer: translate({
              message:
                "Mixin Safe combines MPC, hardware wallets, multi-signature and time lock technologies, fully utilizing the advantages of each technology while discarding the disadvantages.",
            }),
          },
        ]}
      />
      <GetStartedSection />
    </Layout>
  )
}
