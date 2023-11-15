import Layout from "@theme/Layout"
import { GetStartedSection } from "../../components/common/GetStartedSection"
import { HowItSecuresSection } from "../../components/page/technology/HowItSecuresSection"
import { IntegratedSecuritySolutionSection } from "../../components/page/technology/IntegratedSecuritySolutionSection"

import { DontWorrySection } from "../../components/page/technology/DontWorrySection"
import { FAQSection } from "../../components/common/FAQSection"

export default function Root() {
  return (
    <Layout>
      <HowItSecuresSection />
      <IntegratedSecuritySolutionSection />
      <DontWorrySection />
      <FAQSection />
      <GetStartedSection />
    </Layout>
  )
}
