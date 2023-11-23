import React from "react"
import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../common/SectionTitle"
import useBaseUrl from "@docusaurus/useBaseUrl"

const Item = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="bg-white rounded-sm shadow py-3 pl-2.5 pr-5 sm:p-8 sm:pb-13.5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
    <img src={useBaseUrl("/img/page/confident/" + icon)} className="row-span-2 aspect-square w-12 sm:w-18" />

    <div className=" text-[#333] text-base font-medium leading-tight h-fit">{title}</div>
    <div className=" text-[#333] text-opacity-66 text-sm font-normal leading-snug">{description}</div>
  </div>
)

export const DontWorrySection = () => {
  return (
    <div className="bg-slate-100 pt-20 pb-40">
      <SectionTitle
        description={translate({
          message: "Mixin Safe powers leading organizations from Payment to DAOs, and beyond",
        })}
      >
        <Translate>Don't worry</Translate>
      </SectionTitle>

      <div className="container mx-auto px-5 grid gap-5 sm:grid-cols-2">
        <Item
          icon="3.1.svg"
          title={translate({
            message: "Enjoy interaction",
          })}
          description={translate({
            message:
              "Thanks to asset read-only authorization, Dapp whitelist and approval process, you can safely consume or invest in cryptocurrencies without worrying about potential risks when using Dapp, such as authorization vulnerabilities.",
          })}
        />

        <Item
          icon="3.2.svg"
          title={translate({ message: "Co-management" })}
          description={translate({
            message:
              "The perfect approval process ensures the security and transparency of funds. Unlike other multi-signature wallets, Mixin Safe's dual multi-signature technology and key sharding technology can avoid potential multi-signature collusion issues.",
          })}
        />

        <Item
          icon="3.3.svg"
          title={translate({ message: "Asset recovery" })}
          description={translate({
            message: "When your vault private key is lost or the MPC wallet cannot be logged in, you can regain control of your assets through the vault recovery service and emergency contact.",
          })}
        />

        <Item
          icon="3.4.svg"
          title={translate({ message: "Enhanced privacy" })}
          description={translate({
            message:
              "End-to-end encryption technology and CryptoNode technology protect the privacy of your chat and transfer information. The information is encrypted and ensures that only the two parties of the interaction can decrypt it. No third party can peep into your privacy data.",
          })}
        />
        <Item
          icon="3.5.svg"
          title={translate({ message: "Fixed fee" })}
          description={translate({
            message:
              "Whether the price of Bitcoin rises or you increase your Bitcoin holdings, Mixin Safe only charges a fixed service fee, which will not change with the number and price of assets you host or transfer.",
          })}
        />
        <Item
          icon="3.6.svg"
          title={translate({ message: "Customer support" })}
          description={translate({
            message:
              "Perfect documentation and intimate customer service are always ready to help you solve various problems. You can focus on wealth growth without being trapped in asset security issues.",
          })}
        />
      </div>
    </div>
  )
}
