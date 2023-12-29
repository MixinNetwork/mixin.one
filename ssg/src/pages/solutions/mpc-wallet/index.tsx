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
            question: "foo",
            answer: "bar",
          },
        ]}
      />
      <UseNowSection />
    </Layout>
  )
}
