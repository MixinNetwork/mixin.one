import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { GetStartedSection } from "../../../components/common/GetStartedSection"
import { translate } from "@docusaurus/Translate"
import { Header } from "../../../components/page/solutions/all-in-one-asset-management/Header"
import { TvlTableSection } from "../../../components/page/solutions/all-in-one-asset-management/TvlTableSection"
import { AllInOneSolution } from "../../../components/page/solutions/all-in-one-asset-management/AllInOneSolution"

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
      <GetStartedSection />
    </Layout>
  )
}
