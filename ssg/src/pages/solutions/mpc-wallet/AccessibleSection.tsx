import React, { ReactNode } from "react"
import Translate, { translate } from "@docusaurus/Translate"
import GrayBackgroundWrapper from "../../../components/common/GrayBackground"
import SectionTitle from "../../../components/common/SectionTitle"
import Cover1 from "@site/static/img/page/solutions/mpc-wallet/2.3.svg"
import Cover2 from "@site/static/img/page/solutions/mpc-wallet/2.4.svg"
import Cover3 from "@site/static/img/page/solutions/mpc-wallet/2.5.svg"
import Cover4 from "@site/static/img/page/solutions/mpc-wallet/2.6.svg"
import Cover5 from "@site/static/img/page/solutions/mpc-wallet/2.7.svg"
import clsx from "clsx"

const Item = ({
  cover,
  title,
  description,
  className,
}: {
  cover: ReactNode
  title: string
  description: string
  className?: string
}) => {
  return (
    <div
      className={clsx(
        "pb-12.5 flex flex-col items-center bg-white p-5 shadow-[0_4px_20px_0_rgba(43,89,255,0.06)]",
        className,
      )}
    >
      {cover}
      <div className="mt-2.5 font-medium">{title}</div>
      <div className="mt-2 text-center text-sm">{description}</div>
    </div>
  )
}

export const AccessibleSection = () => {
  return (
    <GrayBackgroundWrapper>
      <div>
        <SectionTitle
          description={
            <Translate>
              {
                "Next-gen security leverages MPC cryptography instead of seed phrases or private keys."
              }
            </Translate>
          }
        >
          <Translate>Mixin wallet makes crypto accessible</Translate>
        </SectionTitle>
        <div
          className={clsx(
            "grid place-items-center items-stretch gap-x-9 gap-y-5 px-5",
            "md:auto-rows-fr md:grid-cols-[260fr_370fr_260fr]",
            "lg:grid-cols-[296fr_476fr_296fr] lg:gap-x-16",
          )}
        >
          <img
            src={
              require("@site/static/img/page/solutions/mpc-wallet/2.2.webp")
                .default
            }
            width={1524}
            height={2451}
            className={clsx(
              "px-3",
              "sm:w-120",
              "md:order-2 md:w-auto md:self-center md:px-0",
            )}
          />
          <div
            className={clsx(
              "mt-15 flex flex-col gap-y-5",
              "md:order-1 md:mt-0 md:justify-between",
            )}
          >
            <Item
              cover={<Cover1 />}
              title={translate({
                message: "Onboard users in seconds",
              })}
              description={translate({
                message:
                  "Simple login via phone number. No seed phrases or extensions necessary.",
              })}
            />
            <Item
              cover={<Cover2 />}
              title={translate({
                message: "Free",
              })}
              description={translate({
                message:
                  "All features are free to use, so enjoy free chat and transfer services with family and friends.",
              })}
            />
            <Item
              cover={<Cover3 />}
              title={translate({
                message: "Social Recovery",
              })}
              description={translate({
                message:
                  "In extreme cases, the emergency contact can help you log back into the wallet and avoid losing assets.",
              })}
            />
          </div>

          <div className="flex flex-col justify-between gap-y-5 md:order-3">
            <Item
              cover={<Cover4 />}
              title={translate({
                message: "Non-custodial",
              })}
              description={translate({
                message:
                  "Marble uses client-side cryptography and multi-party computation to protect user assets.",
              })}
            />
            <Item
              cover={<Cover5 />}
              title={translate({
                message: "Supporting multiple chains",
              })}
              description={translate({
                message:
                  "We’re cross-chain first. Currently on Ethereum-compatible chains and soon expanding to the chain of your choice!",
              })}
            />
          </div>
        </div>
      </div>
    </GrayBackgroundWrapper>
  )
}
