import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React, { ReactNode } from "react"
import { GetStartedSection } from "../../../components/common/GetStartedSection"
import { translate } from "@docusaurus/Translate"
import { Header } from "../../../components/page/solutions/buy-cryptocurrencies/Header"
import { MakeItSampleSection } from "../../../components/page/solutions/buy-cryptocurrencies/MakeItSampleSection"
import { StepsSection } from "../../../components/page/solutions/buy-cryptocurrencies/StepsSection"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "MPC Wallets",
      })}
    >
      <Header />
      <MakeItSampleSection />
      <StepsSection />
      <GetStartedSection />
    </Layout>
  )
}
