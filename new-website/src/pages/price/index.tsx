import Layout from "@theme/Layout"
import { GetStartedSection } from "../../components/common/GetStartedSection"
import { FAQSection } from "../../components/common/FAQSection"
import { PlanSection } from "../../components/page/price/PlanSection"

export default function Root() {
  return (
    <Layout>
      <PlanSection />
      <FAQSection />
      <GetStartedSection />
    </Layout>
  )
}
