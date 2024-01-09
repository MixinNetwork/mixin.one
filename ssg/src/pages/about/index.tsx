import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { FAQSection } from "../../components/common/FAQSection"
import { CryptoEaseSection } from "../../components/page/about/CryptoEaseSection"
import { OpenSourceSection } from "../../components/page/about/OpenSourceSection"
import { translate } from "@docusaurus/Translate"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "About",
      })}
    >
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
                "Mixin Safe was developed by the team behind Mixin Network, our team members have over 10 years of experience in blockchain and Bitcoin technology. Mixin Network is a public decentralized ledger, launched in 2018 and has been running stably ever since, with assets exceeding 1 billion dollars.",
            }),
          },
          {
            question: translate({
              message: "Where is the company of Mixin Safe located?",
            }),
            answer: translate({
              message:
                "Mixin Safe is a service provided by Mixin Limited, a company registered in Hong Kong.",
            }),
          },
          {
            question: translate({
              message:
                "What is the relationship between Mixin Safe and Mixin Network?",
            }),
            answer: translate({
              message:
                "The developers behind Mixin Safe also developed Mixin Network. Mixin Safe uses the same Mixin Network validators to protect the MPC network.",
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
                "If my private key is lost and the timelock expires, can Mixin Safe team take my assets?",
            }),
            answer: translate({
              message:
                "No, Mixin Safe team only has 1 key, that is insufficient to move your assets unless you have set up a recovery or inheritance plan.",
            }),
          },
        ]}
      />
    </Layout>
  )
}
