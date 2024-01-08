import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { translate } from "@docusaurus/Translate"
import { Header } from "../../../components/page/solutions/mpc-wallet/Header"
import { AccessibleSection } from "../../../components/page/solutions/mpc-wallet/AccessibleSection"
import { CompareSection } from "../../../components/page/solutions/mpc-wallet/CompareSection"
import { UseNowSection } from "../../../components/common/UseNowSection"
import { FAQSection } from "../../../components/common/FAQSection"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "MPC Wallets",
      })}
    >
      <Header />
      <AccessibleSection />
      <CompareSection />
      <FAQSection
        faqs={[
          {
            question: translate({
              message: "What is MPC Wallet?",
            }),
            answer: translate({
              message:
                "An MPC wallet is a cryptocurrency and digital asset wallet that uses multi-party computation to offer strong security guarantees to individuals, firms, financial institutions, and governments that manage digital assets.",
            }),
          },
          {
            question: translate({
              message: "Is MPC Wallet free?",
            }),
            answer: translate({
              message:
                "Mixin's MPC wallet (Mixin Messenger) can be used for free.",
            }),
          },
          {
            question: translate({
              message:
                "What is the difference between MPC Wallet and Multisig Wallet?",
            }),
            answer: translate({
              message:
                "Although both have effective single-point fault exclusion, MPC wallets have only one private key, and multisig wallets require multiple private keys to use, which is more complicated.",
            }),
          },
          {
            question: translate({
              message: "How do I back up my MPC wallet?",
            }),
            answer: translate({
              message:
                "Just remember your 6-digit PIN code. You can also set up an emergency contact to help you recover your wallet.",
            }),
          },
          {
            question: translate({
              message: "How do I recover my MPC wallet?",
            }),
            answer: translate({
              message:
                "You can regain control of your MPC wallet through an emergency contact and a 6-digit PIN code.",
            }),
          },
        ]}
      />
      <UseNowSection />
    </Layout>
  )
}
