import Layout from "@theme/Layout"
import { GetStartedSection } from "../../components/common/GetStartedSection"
import { FAQSection } from "../../components/common/FAQSection"
import { PlanSection } from "../../components/page/pricing/PlanSection"
import { translate } from "@docusaurus/Translate"

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "Pricing",
      })}
    >
      <PlanSection />
      <FAQSection
        faqs={[
          {
            question: translate({
              message: "After the plan expires, if I don't renew, can I still withdraw my assets?",
            }),
            answer: translate({
              message:
                "After the package expires, your Mixin Safe account will be frozen, the fee will no longer increase, and it will be unfrozen after renewal. During the freezing period, your own vault can only be viewed and not transferred, which does not affect the approval of other vaults.",
            }),
          },
          {
            question: translate({
              message: "Can I pay for plans and service fees with other cryptocurrencies?",
            }),
            answer: translate({
              message: "Yes, you can pay with BTC, ETH, and many other popular cryptocurrencies.",
            }),
          },
          {
            question: translate({
              message: "The more assets I custody, the more expensive the service fee?",
            }),
            answer: translate({
              message: "No, the service fee is not related to the amount of assets.",
            }),
          },
          {
            question: translate({
              message: "Can I pay for plans and service fees with fiat currency?",
            }),
            answer: translate({
              message: "Not currently, but it will be supported soon.",
            }),
          },
          {
            question: translate({
              message: "Will my plan be automatically renewed after it expires?",
            }),
            answer: translate({
              message: "No, but we will send multiple notifications for you to pay the plan fee before the plan expires.",
            }),
          },
          // {
          //   question: translate({
          //     message: "Do I have to pay to use Mixin products?",
          //   }),
          //   answer: translate({
          //     message: "Not necessarily, you can use the free Mixin Messenger.",
          //   }),
          // },
          // {
          //   question: translate({
          //     message: "Why is Mixin's withdrawal fee more expensive than other wallets?",
          //   }),
          //   answer: translate({
          //     message:
          //       "In order for Mixin users to continue to enjoy free transfers and the fastest withdrawal experience, Mixin needs to offset the collection cost by charging a slightly higher withdrawal fee. The balance is used as a profit to motivate the team to continue to provide users with quality products and services.",
          //   }),
          // },
          // {
          //   question: translate({
          //     message: "Is there a fee for recharging the wallet?",
          //   }),
          //   answer: translate({
          //     message: "Recharge is free, but there is a minimum recharge amount.",
          //   }),
          // },
          // {
          //   question: translate({
          //     message: "Will Mixin Messenger become a paid app?",
          //   }),
          //   answer: translate({
          //     message: "Mixin Messenger will remain free, but will introduce paid membership features to provide more advanced features.",
          //   }),
          // },
        ]}
      />
      <GetStartedSection />
    </Layout>
  )
}
