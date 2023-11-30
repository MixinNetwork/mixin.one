import Layout from "@theme/Layout"
import { NeverSacrificeDecentralizationSection } from "../../../components/page/decentralization/NeverSacrificeDecentralizationSection"
import { ThePriceofCentralizationSection } from "../../../components/page/decentralization/ThePriceofCentralizationSection"
import { MixinIsDecentralizationSection } from "../../../components/page/decentralization/MixinIsDecentralizationSection"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { HearFromOurCustomersSection } from "../../../components/common/HearFromOurCustomersSection"
import { MoreFeaturesSection } from "../../../components/common/MoreFeaturesSection"
import { GetStartedSection } from "../../../components/common/GetStartedSection"
import { translate } from "@docusaurus/Translate"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "Decentralization",
      })}
    >
      <NeverSacrificeDecentralizationSection />
      <ThePriceofCentralizationSection />
      <MixinIsDecentralizationSection />
      <HearFromOurCustomersSection />
      <MoreFeaturesSection omit="Decentralization" />
      <GetStartedSection />
    </Layout>
  )
}
