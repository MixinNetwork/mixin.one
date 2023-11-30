import React from "react"
import { translate } from "@docusaurus/Translate"
import clsx from "clsx"

const AddressItem = ({ name, address, className }: { name: string; address: string; className?: string }) => (
  <div className={clsx("space-y-3 col-span-2 sm:col-span-1", className)}>
    <div className="text-white text-base font-normal">{name}</div>
    <div className="text-white text-opacity-60 text-sm font-normal leading-tight">{address}</div>
  </div>
)

export function Addresses({}) {
  return (
    <div className="mt-15 pt-15 border-t border-black border-opacity-20 gap-y-7 gap-x-10 grid grid-cols-[0.5fr_1fr] sm:grid-cols-[1fr_auto] col-span-full">
      <AddressItem
        className="order-0"
        name={translate({
          message: "🇭🇰 Mixin Ltd",
        })}
        address={translate({
          message: "Mixin Ltd, a Hong Kong-based company. Mixin Ltd's office address is 12th Floor, Santai Building, 137-139 Connaught Road, Hong Kong.",
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
      <img loading="lazy" src={require("@site/static/img/footer/PCIDSS.webp").default} width={82} height={32} className="order-2 sm:order-1 my-auto" />
      <img loading="lazy" src={require("@site/static/img/footer/GDPR.webp").default} width={82} height={34} className="order-3 my-auto" />
    </div>
  )
}
