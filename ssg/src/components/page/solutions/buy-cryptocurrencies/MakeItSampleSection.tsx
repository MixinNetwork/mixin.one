import React, { ReactNode } from "react"
import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"
import clsx from "clsx"

const Item = ({
  cover,
  title,
  description,
  background,
  className,
}: {
  cover: string
  title: ReactNode
  description: ReactNode
  background: string
  className?: string
}) => {
  return (
    <div
      className={clsx(
        "bg-#F2F2F2 space-y-5 px-5 pb-8 pt-10",
        "sm:h-166 sm:relative sm:space-y-0 sm:p-10",
        "md:h-88.75",
        "lg:h-110",
        className,
      )}
    >
      <img
        loading="lazy"
        src={
          require(
            "@site/static/img/page/solutions/buy-cryptocurrencies/" +
              background,
          ).default
        }
        className="fill op-0 sm:op-100 pointer-events-none "
      />
      <img
        loading="lazy"
        src={
          require(
            "@site/static/img/page/solutions/buy-cryptocurrencies/" + cover,
          ).default
        }
        width={172}
        height={172}
        className={clsx(
          "mx-auto",
          "sm:w-43 sm:right-12.5 sm:absolute sm:bottom-5",
        )}
      />
      <div className="">
        <div className="text-5-7 font-medium">{title}</div>
        <div className="text-3.5-4 text-#000 text-op-80 mt-4 leading-[1.5]">
          {description}
        </div>
      </div>
    </div>
  )
}

export const MakeItSampleSection = () => {
  return (
    <>
      <SectionTitle
        description={
          <Translate>
            Seamlessly move between fiat and crypto. lnexpensive and
            hassle-free.
          </Translate>
        }
        className="!md:children:max-w-full !md:children:w-full !md:children:text-start !md:mb-8 !md:px-5"
      >
        <Translate>We make it simple</Translate>
      </SectionTitle>
      <div className="mx-a md:pb-55 container grid grid-flow-row auto-rows-fr gap-5  pb-40 md:grid-cols-2">
        <Item
          cover="2.1.webp"
          background="2.5.webp"
          title={translate({
            message: "Lowest Fees",
          })}
          description={translate({
            message:
              "With the advantage of free transfers on the decentralized Mixin Network, users do not need to pay additional blockchain fees.",
          })}
          className="md:mt-15"
        />
        <Item
          cover="2.2.webp"
          background="2.6.webp"
          title={translate({
            message: "Fast & Reliable",
          })}
          description={translate({
            message:
              "Get crypto to your self-custody wallet instantly. Say goodbye to the long hold times & slippage on centralized exchanges.",
          })}
        />
        <Item
          cover="2.3.webp"
          background="2.7.webp"
          title={translate({
            message: "Global Coverage",
          })}
          description={translate({
            message:
              "Available in 150+countries and territories, Support for major global payment/payout methods, with new options constantly added.",
          })}
        />
        <Item
          cover="2.4.webp"
          background="2.8.webp"
          title={translate({
            message: "Your money, your way",
          })}
          description={translate({
            message: "Swap between fiat and crypto instantly.",
          })}
          className="md:-mt-15"
        />
      </div>
    </>
  )
}
