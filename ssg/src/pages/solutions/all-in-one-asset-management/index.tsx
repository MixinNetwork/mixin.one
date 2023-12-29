import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { translate } from "@docusaurus/Translate"
import { Header } from "../../../components/page/solutions/all-in-one-asset-management/Header"
import { TvlTableSection } from "../../../components/page/solutions/all-in-one-asset-management/TvlTableSection"
import { AllInOneSolution } from "../../../components/page/solutions/all-in-one-asset-management/AllInOneSolution"
import { UseNowSection } from "../../../components/common/UseNowSection"
import { FAQSection } from "../../../components/common/FAQSection"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "Custody",
      })}
    >
      <Header />
      <TvlTableSection />
      <AllInOneSolution />
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
