import React, { ReactNode } from "react"
import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"
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
        "flex flex-col items-center justify-center bg-white p-6 pb-8 text-center shadow",
        className,
      )}
    >
      {cover}
      <div className="text-4.5 mt-2.5 font-medium">{title}</div>
      <div className="text-3.5-4 text-#000 text-op-70 mt-2 text-center leading-[1.5]">
        {description}
      </div>
    </div>
  )
}

export const AccessibleSection = () => {
  return (
    <div className="bg-#F2F2F2 bg-op-50 pb-45">
      <div className="container mx-auto">
        <SectionTitle
          description={
            <Translate>
              {
                "Utilizing next-gen security encryption technology MPC instead of mnemonic phrases or private keys."
              }
            </Translate>
          }
        >
          <Translate>We makes crypto accessible</Translate>
        </SectionTitle>
        <div
          className={clsx(
            "grid place-items-center items-stretch gap-x-9 gap-y-5 px-5",
            "md:auto-rows-fr md:grid-cols-[260fr_370fr_260fr]",
            "lg:grid-cols-[296fr_476fr_296fr] lg:gap-x-16",
          )}
        >
          <img
            loading="lazy"
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
                message: "Onboard in seconds",
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
                message: "Social recovery",
              })}
              description={translate({
                message:
                  "In extreme cases, the emergency contact can help you log back into the wallet and avoid losing assets.",
              })}
            />
          </div>

          <div className="flex flex-col justify-around gap-y-5 md:order-3">
            <Item
              cover={<Cover4 />}
              title={translate({
                message: "Non-custodial",
              })}
              description={translate({
                message:
                  "Mixin Messenger uses encryption and MPC technology to protect user assets.",
              })}
            />
            <Item
              cover={<Cover5 />}
              title={translate({
                message: "Supporting multiple chains",
              })}
              description={translate({
                message:
                  "We support popular L1 and L2 blockchain networks such as Bitcoin, Ethereum and Polygon.",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
