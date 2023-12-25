import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { GetStartedSection } from "../../../components/common/GetStartedSection"
import { translate } from "@docusaurus/Translate"
import { Header } from "../../../components/page/solutions/custody/Header"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "Collaboration",
      })}
    >
      <Header />
      <GetStartedSection />
    </Layout>
  )
}
