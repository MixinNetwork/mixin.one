import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { GetStartedSection } from "../../../components/common/GetStartedSection"
import { MoreFeaturesSection } from "../../../components/common/MoreFeaturesSection"
import { translate } from "@docusaurus/Translate"
import { Header } from "../../../components/page/solutions/mpc-wallet/Header"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "MPC Wallets",
      })}
    >
      <Header />
      <MoreFeaturesSection omit="Compliance" />
      <GetStartedSection />
    </Layout>
  )
}
