import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { FAQSection } from "../../components/common/FAQSection"
import { CryptoEaseSection } from "../../components/page/about/CryptoEaseSection"
import { OpenSourceSection } from "../../components/page/about/OpenSourceSection"
import { translate } from "@docusaurus/Translate"

export default function Root() {
  return (
    <Layout>
      <CryptoEaseSection />
      <OpenSourceSection />
      <FAQSection
        faqs={[
          {
            question: translate({
              message: "Who developed Mixin Safe?",
            }),
            answer: translate({
              message:
                "Mixin Safe was developed by the team behind Mixin Network, our team members have over 10 years of experience in blockchain and Bitcoin technology. Mixin Network is a public decentralized ledger, launched in 2018 and has been running stably ever since, with assets exceeding 1 billion dollars and zero security incidents.",
            }),
          },
          {
            question: translate({
              message: "Where is the company of Mixin Safe located?",
            }),
            answer: translate({
              message: "Mixin Safe is a service provided by Mixin Limited, a company registered in Hong Kong.",
            }),
          },
          {
            question: translate({
              message: "What is the relationship between Mixin Safe and Mixin Network?",
            }),
            answer: translate({
              message: "The developers behind Mixin Safe also developed Mixin Network. Mixin Safe uses the same Mixin Network validators to protect the MPC network.",
            }),
          },
          {
            question: translate({
              message: "If the Mixin Safe team disbands, can I still withdraw my assets?",
            }),
            answer: translate({
              message:
                "Yes, your assets are still safe. You can withdraw your assets at any time through your wallet private key and the decentralized MPC network. Even if the Mixin Safe team disbands, your assets are safe in your hands.",
            }),
          },
          {
            question: translate({
              message: "If I lose my private key and the safety time lock also expires, can the Mixin Safe team take away my assets?",
            }),
            answer: translate({
              message: "No, the Mixin Safe team only has one key, which is not enough to transfer your assets unless you have already set up a recovery or inheritance plan.",
            }),
          },
        ]}
      />
    </Layout>
  )
}
