import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { HearFromOurCustomersSection } from "../../../components/common/HearFromOurCustomersSection"
import { GetStartedSection } from "../../../components/common/GetStartedSection"
import { MoreFeaturesSection } from "../../../components/common/MoreFeaturesSection"
import { ConfidentBitcoinCustodySection } from "../../../components/page/confidence/ConfidentBitcoinCustodySection"
import { DontWorrySection } from "../../../components/page/confidence/DontWorrySection"
import { translate } from "@docusaurus/Translate"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "Confidence",
      })}
    >
      <ConfidentBitcoinCustodySection />
      <DontWorrySection />
      <HearFromOurCustomersSection />
      <MoreFeaturesSection omit="Confidence" />
      <GetStartedSection />
    </Layout>
  )
}
