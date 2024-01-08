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
                "If my private key is lost and the timelock expires, can Mixin Safe team take my assets?",
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
