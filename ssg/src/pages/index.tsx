import Translate, { translate } from "@docusaurus/Translate"
import { AuditReportSection } from "../components/page/home/AuditReportSection"
import { EasyManageSection } from "../components/page/home/EasyManageSection"
import { FeatureCardSection } from "../components/page/home/FeatureCardSection"
import { MainProductSection } from "../components/page/home/MainProductSection"
import { SolutionSection } from "../components/page/home/SolutionSection"
import { StatisticGridSection } from "../components/page/home/StatisticGridSection"
import { TrustedSection } from "../components/page/home/TrustedSection"
import Navbar from "../theme/Navbar"

import Layout from "../theme/Layout"
import { FAQSection } from "../components/common/FAQSection"
import { SupportedAssetSection } from "../components/page/home/SupportedAssetSection"
import { TypeAnimation } from "react-type-animation"
import { GetStartedSection } from "../components/common/GetStartedSection"
import LocalLink from "../components/common/LocaleLink"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

const Header = () => (
  <div className="bg-gradient-to-b from-[#171924] to-[#222C3F] sm:relative sm:bg-none">
    <img
      loading="lazy"
      src={require("@site/static/img/page/home/bgHeader.webp").default}
      className="absolute inset-0 -z-10 hidden h-full w-full object-cover sm:block"
    />
    <Navbar dark />
    <div className="pt-15 pb-19 sm:pt-12.5 lg:pt-54 sm:pb-16.5 sm:pb-32.5 lg:pb-79 container mx-auto px-10 sm:text-center md:pt-20">
      <div className="text-10-16 max-w-239 -tracking-0.1 font-300-400 mx-auto leading-[1.2] text-white">
        <Translate
          values={{
            keyword: (
              <div className="sm:min-h-13.5 min-h-12 md:min-h-20">
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
                      message: "Decentralization",
                    }),
                    2000,
                    "",
                    1000,
                    translate({
                      message: "Confidence",
                    }),
                    2000,
                    "",
                    1000,
                    translate({
                      message: "Reliability",
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
                      message: "Compliance",
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
              </div>
            ),
          }}
        >
          {"Secure and grow your crypto wealth with {keyword}"}
        </Translate>
      </div>
      <div className="mt-7.5 max-w-232 text-4 lg:text-4.5 mx-auto font-normal leading-[1.5] text-white text-opacity-90 sm:mt-6 md:mt-8 lg:mt-12">
        <Translate>
          Protect your crypto with mature multisig and MPC technology. Get
          access to trading, lending, decentralized recovery and inheritance.
        </Translate>
      </div>

      <div className="mt-24.5 sm:mt-12.5 md:mt-18.5 lg:mt-21.5 gap-x-7.5 mx-auto grid gap-y-5 sm:w-fit sm:grid-cols-2">
        <LocalLink
          className="sm:w-57.5 text-black! text-3.5-4 flex-center order-last h-12 rounded-sm bg-neutral-100 font-medium uppercase sm:order-none"
          to="/pricing"
        >
          <Translate>Get started</Translate>
        </LocalLink>
        <LocalLink
          href="https://calendly.com/mixin-safe/30min"
          className="sm:w-57.5 text-white! text-3.5-4 flex-center h-12 w-full rounded-sm border border-neutral-100 font-medium uppercase"
        >
          <Translate>Book a consultation</Translate>
        </LocalLink>
      </div>
    </div>
  </div>
)

export default function Root() {
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext()
  const i18nSiteTitle = translate({ message: siteTitle })
  return (
    <Layout title={i18nSiteTitle} hiddenNavBar>
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
              message: "Is Mixin Safe really completely decentralization?",
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
              message:
                "What is the relationship between Mixin, Mixin Network and Mixin Messenger?",
            }),
            answer: translate({
              message:
                "Mixin is the abbreviation of the Mixin Network ecosystem. Mixin Network is a public chain, and Mixin Messenger is the first open source Dapp on Mixin Network.",
            }),
          },
          {
            question: translate({
              message:
                "Are Mixin Network, Mixin Messenger, Exin, and Pando developed by the same team?",
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
