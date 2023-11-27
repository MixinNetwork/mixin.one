import React from "react"
import SectionTitle from "../../common/SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"
import LocalLink from "../../common/LocaleLink"

const TechnologySection = () => (
  <div className="pt-15 pb-30 px-5 container mx-auto">
    <div className="relative rounded-sm">
      <img loading="lazy" src={require("@site/static/img/common/woodGrain.webp").default} className="object-cover absolute inset-0 h-full w-full -z-10" />
      <div className="flex flex-col justify-between pt-15 px-5 pb-10 space-y-33 sm:space-y-14 lg:pb-20 lg:px-20 lg:pt-26 md:pt-20 md:px-15 md:pb-15 ">
        <div className="text-white text-opacity-90 text-center text-base font-normal leading-relaxed">
          <Translate>Decentralized bitcoin custody is challenging, which is why we made Mixin Safe to meet public demand. Never worry about losing your keys or centralized evil custody.</Translate>
        </div>
        <LocalLink to="/how-it-secures" className="px-7 py-4 sm:w-fit sm:mx-auto bg-white rounded-sm flex-center text-base font-medium leading-none">
          <Translate>Technology Detail</Translate>
        </LocalLink>
      </div>
    </div>
  </div>
)

const Item = ({ cover, title, description }: { cover: string; title: string; description: string }) => (
  <div className="bg-white rounded-sm shadow pb-20">
    <img loading="lazy" src={require("@site/static/img/page/confidence/" + cover).default} alt={description} className="aspect-335/250 w-full" />
    <div className="mt-5 px-5 sm:mt-6.5 md:mt-8 lg:mt-10 sm:px-6.5 md:px-8 lg:px-10 text-[#333] text-xl font-medium leading-snug">{title}</div>
    <div className="mt-5 px-5 sm:px-6.5 md:px-8 lg:px-10 text-[#333] text-op-80 text-base font-normal leading-relaxed">{description}</div>
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
          cover="1.1.webp"
          title={translate({
            message: "Self-custody",
          })}
          description={translate({
            message: "If you don't truly own your private key, you will never be confidence in your bitcoin holdings. With Mixin Safe, you have full control over your wallet private key.",
          })}
        />
        <Item
          cover="1.2.webp"
          title={translate({ message: "Mature technology" })}
          description={translate({
            message:
              "Our solution is built on mature technologies and products such as smart contracts, multi-signature, secure time lock, MPC-TSS and hardware wallets to ensure the security of your assets.",
          })}
        />
        <Item
          cover="1.3.webp"
          title={translate({ message: "Vault co-management" })}
          description={translate({
            message:
              "Co-manage large assets with family, friends or team members. Mixin Safe's dual multi-signature technology and key sharding technology can prevent co-managers from conspiring to transfer your assets.",
          })}
        />
        <Item
          cover="1.4.webp"
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
