import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { FAQSection } from "../../components/common/FAQSection"
import { CryptoEaseSection } from "../../components/page/about/CryptoEaseSection"
import { OpenSourceSection } from "../../components/page/about/OpenSourceSection"

export default function Root() {
  return (
    <Layout>
      <CryptoEaseSection />
      <OpenSourceSection />
      <FAQSection />
    </Layout>
  )
}
