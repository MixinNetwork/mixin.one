import Layout from "@theme/Layout"
import { NeverSacrificeDecentralizationSection } from "../../components/page/decentralized/NeverSacrificeDecentralizationSection"
import { ThePriceofCentralizationSection } from "../../components/page/decentralized/ThePriceofCentralizationSection"
import { MixinIsDecentralizationSection } from "../../components/page/decentralized/MixinIsDecentralizationSection"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { HearFromOurCustomersSection } from "../../components/common/HearFromOurCustomersSection"
import { MoreFeaturesSection } from "../../components/common/MoreFeaturesSection"
import { GetStartedSection } from "../../components/common/GetStartedSection"

export default function Root() {
  return (
    <Layout>
      <NeverSacrificeDecentralizationSection />
      <ThePriceofCentralizationSection />
      <MixinIsDecentralizationSection />
      <HearFromOurCustomersSection />
      <MoreFeaturesSection omit="Decentralized" />
      <GetStartedSection />
    </Layout>
  )
}
