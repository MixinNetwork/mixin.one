import { ReactNode } from "react"
import Layout from "@theme/Layout"
import { GetStartedSection } from "../../components/common/GetStartedSection"
import { HowItSecuresSection } from "../../components/page/technology/HowItSecuresSection"
import { IntegratedSecuritySolutionSection } from "../../components/page/technology/IntegratedSecuritySolutionSection"
import { FAQSection } from "../../components/common/FAQSection"
import { translate } from "@docusaurus/Translate"
import { NetworkSecurity } from "../../components/page/technology/NetworkSecurity"
import { WalletSecurity } from "../../components/page/technology/WalletSecurity"
import { ServiceSecurity } from "../../components/page/technology/ServiceSecurity"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "How it Secures",
      })}
    >
      <HowItSecuresSection />
      <IntegratedSecuritySolutionSection />
      <NetworkSecurity />
      <WalletSecurity />
      <ServiceSecurity />
      <FAQSection
        faqs={[
          {
            question: translate({
              message:
                "Why is Mixin Safe more secure than a standalone hardware wallet?",
            }),
            answer: translate({
              message:
                "Mixin Safe's multi-signature and time-lock technology effectively avoids single-point failure issues such as loss or damage of a single hardware wallet device while maintaining decentralization, thereby greatly improving the security of the wallet.",
            }),
          },
          {
            question: translate({
              message:
                "What does the decentralized multi-party computation (MPC) network used by Mixin Safe specifically refer to?",
            }),
            answer: translate({
              message:
                "The decentralized MPC network (Safe Network) in Mixin Safe shares validators and security with Mixin Network. Mixin Network is a PoS network composed of 25 pledged full nodes. It has been running stably for more than 5 years, with a total value of over 1 billion dollars.",
            }),
          },
          {
            question: translate({
              message:
                "If the Mixin Safe team disbands, can I still withdraw my assets?",
            }),
            answer: translate({
              message:
                "Yes, your assets are still safe. You can withdraw your assets at any time through your wallet private key and the decentralized MPC network. Even if the Mixin Safe team disbands, your assets are safe in your hands.",
            }),
          },
          {
            question: translate({
              message:
                "If I lose my private key and the safety time lock also expires, can the Mixin Safe team take away my assets?",
            }),
            answer: translate({
              message:
                "No, the Mixin Safe team only has one key, which is not enough to transfer your assets unless you have already set up a recovery or inheritance plan.",
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
                "How is the traditional MPC wallet solution different from Mixin Safe?",
            }),
            answer: translate({
              message:
                "Mixin Safe combines MPC, hardware wallets, multi-signature and time-lock technologies, fully utilizing the advantages of each technology while discarding related disadvantages.",
            }),
          },
          // {
          //   question: translate({
          //     message: "What is MPC - TSS technology?",
          //   }),
          //   answer: translate({
          //     message:
          //       "MPC (Secure Multi-Party Computation) and TSS (Threshold Signature Scheme) ensure that the private key is not fully controlled by anyone, and a legal signature can be generated without all the fragments.",
          //   }),
          // },
          // {
          //   question: translate({
          //     message: "What is PSBT?",
          //   }),
          //   answer: translate({
          //     message:
          //       "PSBT (Partially Signed Bitcoin Transactions) is a standard for passing Bitcoin transaction formats, which can carry metadata of a transaction, making it easier for signers to sign and verify the transaction.",
          //   }),
          // },
          // {
          //   question: translate({
          //     message: "Can Safe Network nodes collude to transfer my assets?",
          //   }),
          //   answer: translate({
          //     message: "No, the Safe Network only holds one of the multi-signature private keys, and transferring assets requires two keys.",
          //   }),
          // },
        ]}
      />
      <GetStartedSection />
    </Layout>
  )
}
