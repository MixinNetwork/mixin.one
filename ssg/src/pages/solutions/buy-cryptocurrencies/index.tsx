import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { translate } from "@docusaurus/Translate"
import { Header } from "../../../components/page/solutions/buy-cryptocurrencies/Header"
import { MakeItSampleSection } from "../../../components/page/solutions/buy-cryptocurrencies/MakeItSampleSection"
import { StepsSection } from "../../../components/page/solutions/buy-cryptocurrencies/StepsSection"
import { UseNowSection } from "../../../components/common/UseNowSection"
import { FAQSection } from "../../../components/common/FAQSection"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "Buy Cryptocurrencies",
      })}
    >
      <Header />
      <MakeItSampleSection />
      <StepsSection />
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
