import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import Translate, { translate } from "@docusaurus/Translate"
import { Header } from "../../../components/page/solutions/buy-cryptocurrencies/Header"
import { MakeItSampleSection } from "../../../components/page/solutions/buy-cryptocurrencies/MakeItSampleSection"
import { StepsSection } from "../../../components/page/solutions/buy-cryptocurrencies/StepsSection"
import { UseNowSection } from "../../../components/common/UseNowSection"
import { FAQSection } from "../../../components/common/FAQSection"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "Buy Cryptocurrencies",
      })}
    >
      <Header />
      <MakeItSampleSection />
      <StepsSection />
      <FAQSection
        faqs={[
          {
            question: translate({
              message: "What cryptocurrencies are supported?",
            }),
            answer: translate({
              message:
                "Currently we only support TRC20 version of USDT, and will support popular cryptocurrencies such as USDC and BTC in the future.",
            }),
          },
          {
            question: translate({
              message:
                "Where is the wallet address of the cryptocurrency I purchased?",
            }),
            answer: translate({
              message:
                "The cryptocurrency you purchased with fiat currency is in your Mixin wallet.",
            }),
          },
          {
            question: translate({
              message:
                "How do I use the service of buying cryptocurrencies with fiat currency?",
            }),
            answer: (
              <Translate
                values={{
                  messenger: (
                    <a href="https://messenger.mixin.one/download">
                      <Translate>Mixin Messenger</Translate>
                    </a>
                  ),
                }}
              >
                {
                  "Visit {messenger} to download the latest version of Android, and you can easily find the entrance of this function on the homepage of the built-in wallet. Please note that this service only supports the Android version, and the iOS version is not supported for the time being."
                }
              </Translate>
            ),
          },
          {
            question: translate({
              message: "What age do I need to be to use Mixin Route?",
            }),
            answer: translate({
              message: "You need to be 18 years old to use our service.",
            }),
          },
          {
            question: translate({
              message: "How do I contact customer service?",
            }),
            answer: translate({
              message:
                "Please leave a message to Team Mixin 7000 customer service in Mixin Messenger, or leave a message in the customer service floating window in the lower right corner of the website.",
            }),
          },
        ]}
      />
      <UseNowSection />
    </Layout>
  )
}
