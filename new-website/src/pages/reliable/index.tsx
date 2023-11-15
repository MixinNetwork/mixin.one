import Layout from "@theme/Layout"
import { TechnicalServiceSection } from "../../components/page/reliable/TechnicalServiceSection"
import { ServiceSection } from "../../components/page/reliable/ServiceSection"
import { SingerSection } from "../../components/page/reliable/SingerSection"
import { GetStartedSection } from "../../components/common/GetStartedSection"
import { HearFromOurCustomersSection } from "../../components/common/HearFromOurCustomersSection"
import { MoreFeaturesSection } from "../../components/common/MoreFeaturesSection"

export default function Root() {
  return (
    <Layout>
      <TechnicalServiceSection />
      <ServiceSection />
      <SingerSection />
      <HearFromOurCustomersSection />
      <MoreFeaturesSection omit="Reliable" />
      <GetStartedSection />
    </Layout>
  )
}
