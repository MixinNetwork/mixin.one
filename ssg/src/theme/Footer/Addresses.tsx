import React from "react"
import { translate } from "@docusaurus/Translate"
import clsx from "clsx"

const AddressItem = ({
  name,
  address,
  className,
}: {
  name: string
  address: string
  className?: string
}) => (
  <div className={clsx("col-span-2 space-y-3 sm:col-span-1", className)}>
    <div className="text-4 font-normal text-white">{name}</div>
    <div className="text-3.5 font-normal leading-tight text-white text-opacity-60">
      {address}
    </div>
  </div>
)

export function Addresses({}) {
  return (
    <div className="mt-15 pt-15 col-span-full grid grid-cols-[0.5fr_1fr] gap-x-10 gap-y-7 border-t border-black border-opacity-20 sm:grid-cols-[1fr_auto]">
      <AddressItem
        className="order-0"
        name={translate({
          message: "🇭🇰 Mixin Ltd",
        })}
        address={translate({
          message:
            "Mixin Ltd, a Hong Kong-based company. Mixin Ltd's office address is 12th Floor, Santai Building, 137-139 Connaught Road, Hong Kong.",
        })}
      />
      <AddressItem
        className="order-1 sm:order-2"
        name={translate({
          message: "🇵🇱 Mixin Route LLC",
        })}
        address={translate({
          message:
            "Mixin Route sp. z o.o., a subsidiary of Mixin Ltd, Mixin Route Sp. z o.o. is a company registered in Street BARTYCKA 22B, office 21A, city WARSZAWA, index 00-716, country POLAND(Registration No.0001030006).",
        })}
      />
      <img
        loading="lazy"
        src={require("@site/static/img/footer/PCIDSS.webp").default}
        width={82}
        height={32}
        className="order-2 my-auto sm:order-1"
      />
      <img
        loading="lazy"
        src={require("@site/static/img/footer/GDPR.webp").default}
        width={82}
        height={34}
        className="order-3 my-auto"
      />
    </div>
  )
}
