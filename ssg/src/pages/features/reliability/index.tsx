import Layout from "@theme/Layout"
import { TechnicalServiceSection } from "../../../components/page/reliability/TechnicalServiceSection"
import { ServiceSection } from "../../../components/page/reliability/ServiceSection"
import { SingerSection } from "../../../components/page/reliability/SingerSection"
import { GetStartedSection } from "../../../components/common/GetStartedSection"
import { HearFromOurCustomersSection } from "../../../components/common/HearFromOurCustomersSection"
import { MoreFeaturesSection } from "../../../components/common/MoreFeaturesSection"
import { translate } from "@docusaurus/Translate"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "Reliability",
      })}
    >
      <TechnicalServiceSection />
      <ServiceSection />
      <SingerSection />
      <HearFromOurCustomersSection />
      <MoreFeaturesSection omit="Reliability" />
      <GetStartedSection />
    </Layout>
  )
}
