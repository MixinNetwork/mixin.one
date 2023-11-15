import React from "react"
import SectionTitle from "../../common/SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"

const TechnologySection = () => (
  <div className="pt-15 pb-30 px-5 container mx-auto">
    <div className="relative bg-zinc-800 rounded-sm">
      <div className="flex flex-col justify-between pt-15 px-5 pb-10 space-y-33">
        <div className="text-white text-opacity-90 text-center text-base font-normal leading-relaxed">
          <Translate>Decentralized bitcoin custody is challenging, which is why we made Mixin Safe to meet public demand. Never worry about losing your keys or centralized evil custody.</Translate>
        </div>
        <a className="px-7 py-4 sm:w-fit sm:mx-auto bg-white rounded-sm flex-center text-base font-medium leading-none">
          <Translate>Technology Detail</Translate>
        </a>
      </div>
    </div>
  </div>
)

const Item = ({ cover, title, description }: { cover: string; title: string; description: string }) => (
  <div className="bg-white rounded-sm shadow pb-20">
    <img src={require("@site/static/img/page/confident/" + cover).default} alt={description} className="aspect-335/250 w-full" />
    <div className="mt-5 px-5 text-zinc-800 text-xl font-medium leading-snug">{title}</div>
    <div className="mt-5 px-5 text-zinc-800 text-base font-normal  leading-relaxed">{description}</div>
  </div>
)

export const ConfidentBitcoinCustodySection = () => {
  return (
    <>
      <SectionTitle description={<Translate>Never worry about losing your keys or centralized evil custody</Translate>}>
        <Translate>Confident Bitcoin Custody</Translate>
      </SectionTitle>
      <div className="container mx-auto px-5 grid gap-5 sm:grid-cols-2 pb-15">
        <Item
          cover="1.1.png"
          title={translate({
            message: "Self-custody",
          })}
          description={translate({
            message: "If you don't truly own your private key, you will never be confident in your bitcoin holdings. With Mixin Safe, you have full control over your wallet private key.",
          })}
        />
        <Item
          cover="1.2.png"
          title={translate({ message: "Mature technology" })}
          description={translate({
            message:
              "Our solution is built on mature technologies and products such as smart contracts, multi-signature, secure time lock, MPC-TSS and hardware wallets to ensure the security of your assets.",
          })}
        />
        <Item
          cover="1.3.png"
          title={translate({ message: "Vault co-management" })}
          description={translate({
            message:
              "Co-manage large assets with family, friends or team members. Mixin Safe's dual multi-signature technology and key sharding technology can prevent co-managers from conspiring to transfer your assets.",
          })}
        />
        <Item
          cover="1.4.png"
          title={translate({ message: "Estate planning" })}
          description={translate({
            message: "Estate planning can help you safely pass on your crypto wealth to your descendants. Your heirs can easily inherit your wealth without any professional knowledge.",
          })}
        />
      </div>
      <TechnologySection />
    </>
  )
}
