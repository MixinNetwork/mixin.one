import React, { ReactNode } from "react"
import Translate from "@docusaurus/Translate"
import clsx from "clsx"

const Item = ({
  stepName,
  description,
}: {
  stepName: ReactNode
  description: ReactNode
}) => (
  <div className="space-y-3">
    <div className="text-5-6 font-medium uppercase">{stepName}</div>
    <div className="text-#000 text-3.5-4 text-op-80 leading-[1.5]">
      {description}
    </div>
  </div>
)

export const StepsSection = () => {
  return (
    <div
      className={clsx(
        "gap-y-15 pb-15 container mx-auto grid place-items-center",
        "md:grid-cols-[470fr_450fr] md:gap-x-10",
        "lg:gap-x-38 lg:grid-cols-[536fr_507fr]",
      )}
    >
      <img
        loading="lazy"
        src={
          require("@site/static/img/page/solutions/buy-cryptocurrencies/3.1.webp")
            .default
        }
        width={319}
        height={483}
        className="max-w-120 md:w-full"
      />
      <div className="px-4 sm:px-0">
        <div className="text-#000 text-op-66">
          <Translate>It’s less complicated than you think</Translate>
        </div>
        <div className="text-7 sm:text-8 md:text-9 mt-3 font-medium">
          <Translate>Buy crypto in 4 simple steps</Translate>
        </div>
        <div className="mt-15 space-y-12">
          <Item
            stepName={<Translate>STEP 1</Translate>}
            description={
              <Translate>
                Download Mixin Messenger and register an account, set up a PIN
              </Translate>
            }
          />
          <Item
            stepName={<Translate>STEP 2</Translate>}
            description={
              <Translate>
                Upload passport, ID card or driver’s license and complete KYC
              </Translate>
            }
          />
          <Item
            stepName={<Translate>STEP 3</Translate>}
            description={
              <Translate>
                {
                  "Enter the amount, currency, select the payment method and complete the payment, your purchased cryptocurrency will soon enter your Mixin wallet."
                }
              </Translate>
            }
          />
        </div>
      </div>
    </div>
  )
}
