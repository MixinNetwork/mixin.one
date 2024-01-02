import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { translate } from "@docusaurus/Translate"
import { Header } from "../../../components/page/solutions/all-in-one-asset-management/Header"
import { TvlTableSection } from "../../../components/page/solutions/all-in-one-asset-management/TvlTableSection"
import { AllInOneSolution } from "../../../components/page/solutions/all-in-one-asset-management/AllInOneSolution"
import { UseNowSection } from "../../../components/common/UseNowSection"
import { FAQSection } from "../../../components/common/FAQSection"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "Custody",
      })}
    >
      <Header />
      <TvlTableSection />
      <AllInOneSolution />
      <FAQSection
        faqs={[
          {
            question: translate({
              message: "What chains does Mixin support?",
            }),
            answer: translate({
              message:
                "Mixin supports 48 popular public chains such as Bitcoin, Ethereum, Polygon, and protocols such as ERC20 and TRC20.",
            }),
          },
          {
            question: translate({
              message: "How to exchange assets?",
            }),
            answer: translate({
              message:
                "Search for 7000101276 in Mixin Messenger to use ExinOne's flash exchange and order placement functions.",
            }),
          },
          {
            question: translate({
              message: "How to mortgage and borrow?",
            }),
            answer: translate({
              message:
                "Search for 7000104159 in Mixin Messenger to use Pando Rings' mortgage and borrowing functions.",
            }),
          },
          {
            question: translate({
              message: "How to invest regularly?",
            }),
            answer: translate({
              message:
                "Search for 7000101276 in Mixin Messenger to use ExinOne's regular investment function.",
            }),
          },
          {
            question: translate({
              message:
                "When using some bots, I am often asked to authorize, will there be security issues?",
            }),
            answer: translate({
              message:
                "Mixin Messenger's asset-related authorization is designed as read-only permission, and your assets will not have security issues, but there may be privacy issues. Your transfer records and balances can be accessed by these bots in an authorized manner.",
            }),
          },
        ]}
      />
      <UseNowSection />
    </Layout>
  )
}
