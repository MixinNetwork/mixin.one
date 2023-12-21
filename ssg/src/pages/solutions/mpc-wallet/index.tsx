import Layout from "@theme/Layout"
import "react-multi-carousel/lib/styles.css"
import React from "react"
import { GetStartedSection } from "../../../components/common/GetStartedSection"
import { MoreFeaturesSection } from "../../../components/common/MoreFeaturesSection"
import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../../components/common/SectionTitle"
import clsx from "clsx"

const Item = ({
  cover,
  background,
  title,
  description,
  className,
}: {
  cover: string
  background: string
  title: string
  description: string
  className?: string
}) => {
  return (
    <div
      className={clsx(
        "relative flex flex-col gap-y-5 bg-[#F2F2F2] px-5 pb-5 pt-10",
        "sm:pl-15 sm:pt-12.5 sm:pb-6.5 sm:h-124.25 sm:justify-between sm:pr-10",
        "md:h-88.5 md:px-10 md:py-5",
        "lg:h-110 lg:pb-6.5 lg:p-10",
        className,
      )}
    >
      <img
        src={
          require("@site/static/img/page/solutions/mpc-wallet/" + background)
            .default
        }
        className="fill op-0 sm:op-100"
      />
      <img
        src={
          require("@site/static/img/page/solutions/mpc-wallet/" + cover).default
        }
        width={1098}
        height={678}
        className=" sm:w-94 z-1 w-full sm:order-last sm:self-end"
      />
      <div className="z-1">
        <div className="text-5.5 sm:text-8">{title}</div>
        <div className="mt-3 leading-[1.625]">{description}</div>
      </div>
    </div>
  )
}

const Header = () => (
  <>
    <SectionTitle
      description={translate({
        message:
          "Using MPC technology for wallets offers several advantages, including eliminating the need to trust third parties, enhanced data privacy, increased accuracy, the removal of single points of failure, increased difficulty for hackers, and reduced reliance on cold storage.",
      })}
    >
      <Translate>What are the benefits of MPC wallets?</Translate>
    </SectionTitle>
    <div className="grid gap-5 px-5 md:grid-cols-2 ">
      <Item
        cover="1.1.webp"
        background="1.6.webp"
        title={translate({ message: "Eliminate third-party trust" })}
        description={translate({
          message:
            "Data can be shared in a distributed manner without any third parties",
        })}
      />

      <Item
        cover="1.2.webp"
        background="1.7.webp"
        title={translate({ message: "Increased data privacy" })}
        description={translate({
          message:
            "Data is encrypted at rest and in transit so no private information is revealed or compromised",
        })}
      />

      <Item
        cover="1.3.webp"
        background="1.8.webp"
        title={translate({ message: "Reduced reliance on cold storage" })}
        description={translate({
          message:
            "Users can only hold their assets online and no longer need cold-storage devices",
        })}
        className="md:col-span-full"
      />

      <Item
        cover="1.4.webp"
        background="1.9.webp"
        title={translate({ message: "Removal of SPOF" })}
        description={translate({
          message: "Private keys are not stored in one single place",
        })}
      />

      <Item
        cover="1.5.webp"
        background="1.10.webp"
        title={translate({ message: "Increased hacking difficulty" })}
        description={translate({
          message:
            "A hacker would need to attack multiple parties across systems and locations",
        })}
      />
    </div>
  </>
)

export default function Root() {
  return (
    <Layout
      title={translate({
        message: "MPC Wallets",
      })}
    >
      <Header />
      <MoreFeaturesSection omit="Compliance" />
      <GetStartedSection />
    </Layout>
  )
}
