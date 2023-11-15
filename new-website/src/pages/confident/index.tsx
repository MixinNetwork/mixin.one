import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { HearFromOurCustomersSection } from "../../components/common/HearFromOurCustomersSection"
import { GetStartedSection } from "../../components/common/GetStartedSection"
import { MoreFeaturesSection } from "../../components/common/MoreFeaturesSection"
import { ConfidentBitcoinCustodySection } from "../../components/page/confident/ConfidentBitcoinCustodySection"
import { DontWorrySection } from "../../components/page/confident/DontWorrySection"

export default function Root() {
  return (
    <Layout>
      <ConfidentBitcoinCustodySection />
      <DontWorrySection />
      <HearFromOurCustomersSection />
      <MoreFeaturesSection omit="Confident" />
      <GetStartedSection />
    </Layout>
  )
}
