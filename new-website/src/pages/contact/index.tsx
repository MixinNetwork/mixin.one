import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { GetStartedSection } from "../../components/common/GetStartedSection"
import { Toaster } from "sonner"
import { Section } from "../../components/page/contact/Section"

export default function Root() {
  return (
    <>
      <Layout>
        <Section />
        <GetStartedSection />
      </Layout>
      <Toaster />
    </>
  )
}
