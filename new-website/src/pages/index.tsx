import Translate, { translate } from "@docusaurus/Translate"
import { AuditReportSection } from "../components/page/home/AuditReportSection"
import { EasyManageSection } from "../components/page/home/EasyManageSection"
import { FeatureCardSection } from "../components/page/home/FeatureCardSection"
import { MainProductSection } from "../components/page/home/MainProductSection"
import { SolutionSection } from "../components/page/home/SolutionSection"
import { StatisticGridSection } from "../components/page/home/StatisticGridSection"
import { TrustedSection } from "../components/page/home/TrustedSection"
import replace from "../helper/replace"
import Navbar from "../theme/Navbar"

import Layout from "../theme/Layout"
import { FAQSection } from "../components/common/FAQSection"
import { SupportedAssetSection } from "../components/page/home/SupportedAssetSection"
import { TypeAnimation } from "react-type-animation"
import { GetStartedSection } from "../components/common/GetStartedSection"
import LocalLink from "../components/common/LocaleLink"

const Header = () => {
  const title = replace(
    translate({
      message: "Grow and secure\nyour crypto wealth with\nConfidence",
    }),
    [
      {
        match: "\n",
        replace: () => <br />,
      },
      {
        match: translate({
          message: "Confidence",
        }),
        replace: (match) => (
          <TypeAnimation
            speed={{
              type: "keyStrokeDelayInMs",
              value: 150,
            }}
            deletionSpeed={{
              type: "keyStrokeDelayInMs",
              value: 80,
            }}
            sequence={[
              translate({
                message: "Decentralized",
              }),
              2000,
              "",
              1000,
              translate({
                message: "Confident",
              }),
              2000,
              "",
              1000,
              translate({
                message: "Reliable",
              }),
              2000,
              "",
              1000,
              translate({
                message: "Privacy",
              }),
              2000,
              "",
              1000,
              translate({
                message: "Compliant",
              }),
              2000,
              "",
              1000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className="text-blue-500"
          />
        ),
      },
    ]
  )

  return (
    <div className="bg-gradient-to-b from-[#171924] to-[#222C3F] sm:bg-none sm:relative">
      <img loading="lazy" src={require("@site/static/img/page/home/bgHeader.webp").default} className="object-cover -z-10 hidden sm:block absolute inset-0 h-full w-full" />
      <Navbar dark />
      <div className="px-10 pt-15 pb-19 sm:pt-12.5 md:pt-20 lg:pt-54 sm:pb-16.5 sm:pb-32.5 lg:pb-79 sm:text-center container mx-auto">
        <div className="text-white text-10 leading-12 sm:text-11 sm:leading-13.5 md:text-15.5 md:leading-18 font-normal sm:font-medium -tracking-0.1 max-w-232 mx-auto">{title}</div>
        <div className="mt-7.5 sm:mt-6 md:mt-8 lg:mt-12 max-w-232 mx-auto text-white text-opacity-80 text-sm lg:text-base font-normal">
          <Translate>Protect your crypto with MPC-TSS that you control and get access to trading, inheritance, and loans—all backed by the best support in the industry.</Translate>
        </div>

        <div className="mt-24.5 sm:mt-12.5 md:mt-18.5 lg:mt-21.5 grid gap-y-5 gap-x-7.5 sm:grid-cols-2 sm:w-fit mx-auto">
          <LocalLink className="order-last sm:order-none sm:w-57.5 h-12 bg-neutral-100 rounded-sm text-black! font-medium uppercase flex-center" to="/pricing">
            <Translate>Get started</Translate>
          </LocalLink>
          <LocalLink href="https://calendly.com/mixin-safe/30min" className="sm:w-57.5 h-12 rounded-sm border border-neutral-100 text-white! font-medium w-full uppercase flex-center">
            <Translate>Book a consultation</Translate>
          </LocalLink>
        </div>
      </div>
    </div>
  )
}

export default function Root() {
  return (
    <Layout hiddenNavBar>
      <Header />
      <StatisticGridSection />
      <SolutionSection />
      <FeatureCardSection />
      <MainProductSection />
      <EasyManageSection />
      <SupportedAssetSection />
      <TrustedSection />
      <AuditReportSection />
      <FAQSection
        faqs={[
          {
            question: translate({
              message: "Is Mixin Safe really completely decentralized?",
            }),
            answer: translate({
              message:
                "Yes, Mixin Safe combines the multi-signature and time lock scripts of the Bitcoin network, and adopts the decentralized mature multi-party computing MPC technology, and successfully realizes a complete decentralized asset custody solution. Through the Bitcoin native time lock technology, only you have complete control of the wallet, and no one else, including our team, can spend your coins.",
            }),
          },
          {
            question: translate({
              message: "Is Mixin Safe safer than my hardware wallet?",
            }),
            answer: translate({
              message:
                "Mixin Safe's multi-signature and time lock technology effectively avoids single-point failures such as loss or damage of a single hardware wallet device while maintaining decentralization, thereby greatly improving the security of the wallet.",
            }),
          },
          {
            question: translate({
              message: "Do I have to pay to use Mixin products?",
            }),
            answer: translate({
              message: "No, you can use the free Mixin Messenger.",
            }),
          },

          {
            question: translate({
              message: "What is the relationship between Mixin, Mixin Network and Mixin Messenger?",
            }),
            answer: translate({
              message: "Mixin is the abbreviation of the Mixin Network ecosystem. Mixin Network is a public chain, and Mixin Messenger is the first open source Dapp on Mixin Network.",
            }),
          },
          {
            question: translate({
              message: "Are Mixin Network, Mixin Messenger, Exin, and Pando developed by the same team?",
            }),
            answer: translate({
              message:
                "Mixin Team and Exin and Pando are independent teams of the same ecosystem, each providing different products and services. Mixin Team development team is a Hong Kong company, mainly responsible for the development and operation of Mixin Network, Mixin Messenger, Mixin Safe, Mixin Route and other products and projects.",
            }),
          },
        ]}
      />
      <GetStartedSection />
    </Layout>
  )
}
