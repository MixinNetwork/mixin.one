import React from "react"
import SectionTitle from "../../common/SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"
import LocalLink from "../../common/LocaleLink"

const TechnologySection = () => (
  <div className="pt-15 pb-30 container mx-auto ">
    <div className="relative rounded-sm">
      <img
        loading="lazy"
        src={require("@site/static/img/common/woodGrain.webp").default}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="pb-24-22 px-4-30 flex flex-col justify-between">
        <div className="text-3.5-4.5 mt-24-22 text-op-90 mb-11 text-center leading-[1.5] text-white">
          <Translate>
            Decentralized bitcoin custody is challenging, which is why we made
            Mixin Safe to meet public demand. Never worry about losing your keys
            or centralized evil custody.
          </Translate>
        </div>
        <LocalLink
          to="/how-it-secures"
          className="flex-center mx-a text-3.5-4 w-full rounded-sm bg-white px-7 py-4 font-medium sm:w-fit"
        >
          <Translate>Technology Detail</Translate>
        </LocalLink>
      </div>
    </div>
  </div>
)

const Item = ({
  cover,
  title,
  description,
}: {
  cover: string
  title: string
  description: string
}) => (
  <div className="rounded-sm bg-white pb-20 shadow">
    <img
      loading="lazy"
      src={require("@site/static/img/page/confidence/" + cover).default}
      alt={description}
      className="aspect-335/250 w-full"
    />
    <div className="sm:mt-6.5 sm:px-6.5 text-#000 text-5-7 mt-5 px-5 font-medium leading-[1.5] md:mt-8 md:px-8 lg:mt-10 lg:px-10">
      {title}
    </div>
    <div className="sm:px-6.5 text-op-70 text-#000 text-4 mt-5 px-5 font-normal leading-[1.5] md:px-8 lg:px-10">
      {description}
    </div>
  </div>
)

export const ConfidentBitcoinCustodySection = () => {
  return (
    <>
      <SectionTitle
        description={
          <Translate>
            Never worry about losing your keys or centralized evil custody.
          </Translate>
        }
        large
      >
        <Translate>Confident Bitcoin Custody</Translate>
      </SectionTitle>
      <div className="pb-15 container mx-auto grid gap-5  sm:grid-cols-2">
        <Item
          cover="1.1.webp"
          title={translate({
            message: "Self-Custody",
          })}
          description={translate({
            message:
              "If you don't truly own your private key, you will never be confidence in your bitcoin holdings. With Mixin Safe, you have full control over your wallet private key.",
          })}
        />
        <Item
          cover="1.2.webp"
          title={translate({ message: "Mature Technology" })}
          description={translate({
            message:
              "Our solution is built on mature technologies and products such as smart contracts, multi-signature, secure time lock, MPC-TSS and hardware wallets to ensure the security of your assets.",
          })}
        />
        <Item
          cover="1.3.webp"
          title={translate({ message: "Safe Collaboration" })}
          description={translate({
            message:
              "Co-manage large assets with family, friends or team members. Mixin Safe's dual multi-signature technology and key sharding technology can prevent co-managers from conspiring to transfer your assets.",
          })}
        />
        <Item
          cover="1.4.webp"
          title={translate({ message: "Estate Planning" })}
          description={translate({
            message:
              "Estate planning can help you safely pass on your crypto wealth to your descendants. Your heirs can easily inherit your wealth without any professional knowledge.",
          })}
        />
      </div>
      <TechnologySection />
    </>
  )
}
