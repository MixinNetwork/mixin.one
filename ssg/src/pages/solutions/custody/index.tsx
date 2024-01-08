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
                "Why is Mixin Safe safer than a single hardware wallet?",
            }),
            answer: translate({
              message:
                "Mixin Safe's multi-signature and timelock technology effectively avoid single point of failure problems such as loss and damage of a single hardware wallet device while maintaining decentralization, thereby greatly improving the security of the wallet.",
            }),
          },
          {
            question: translate({
              message:
                "What exactly does the decentralized MPC network in Mixin Safe refer to?",
            }),
            answer: translate({
              message:
                "The decentralized MPC network (Safe Network) in Mixin Safe shares validators and security with Mixin Network. Mixin Network is a PoS network composed of 25 pledged full nodes. It has been running stably for more than 5 years and has more than $1B total value secured.",
            }),
          },
          {
            question: translate({
              message:
                "If Mixin Safe team dissolves, can I still withdraw my assets?",
            }),
            answer: translate({
              message:
                "Yes, your assets are still safe. You can withdraw assets at any time through your wallet private key and the decentralized MPC network. Even if Mixin Safe team is disbanded, your assets are safe in your hand.",
            }),
          },
          {
            question: translate({
              message:
                "If my private key is lost and the security time lock has expired, can the Mixin Safe team take away my assets?",
            }),
            answer: translate({
              message:
                "No, Mixin Safe team only has 1 key, that is insufficient to move your assets unless you have set up a recovery or inheritance plan.",
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
                "What is the difference between a traditional MPC wallet and Mixin Safe?",
            }),
            answer: translate({
              message:
                "Mixin Safe combines MPC, hardware wallet, multi-signature, and timelock technology, which fully benefits from the advantages of each technology while abandoning the related drawbacks.",
            }),
          },
        ]}
      />
      <GetStartedSection />
    </Layout>
  )
}
