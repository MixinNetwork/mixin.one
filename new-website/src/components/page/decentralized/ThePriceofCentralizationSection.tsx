import clsx from "clsx"
import SectionTitle from "../../common/SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"

const SpecialItem = () => (
  <div className="sm:col-span-2 relative auto-rows-fr grid sm:grid-cols-2">
    <div className="absolute fill bg-gradient-to-t sm:bg-gradient-to-r from-slate-950 via-[#010F24] to-transparent z-0" />

    <img src={require("@site/static/img/page/decentralized/2.1.webp").default} alt={"centralization"} className="aspect-375/300 -z-1 w-full h-full object-cover sm:order-last" />

    <div className="p-5 pb-10 space-y-4 z-1 sm:pl-15 sm:pt-15">
      <div className="text-white text-xl font-medium">
        <Translate>The Mt. Gox Debacle</Translate>
      </div>
      <div className="text-white text-opacity-60 text-sm font-normal leading-snug">
        <Translate>
          Mt. Gox was a bitcoin exchange based in Shibuya, Tokyo, Japan. Launched in 2010, it was handling over 70% of all bitcoin (BTC) transactions worldwide by early 2014, when it abruptly ceased
          operations amid revelations of its involvement in the loss/theft of hundreds of thousands of bitcoins, then worth hundreds of millions in US dollars.
        </Translate>
      </div>
    </div>
  </div>
)

const Item = ({ cover, title, description }: { cover: string; title: string; description: string }) => (
  <div className="relative aspect-375/300">
    <img src={require("@site/static/img/page/decentralized/" + cover).default} alt={title} className="fill" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
    <div className="p-5 absolute inset-0 top-auto space-y-4">
      <div className="text-white text-xl font-medium">{title}</div>
      <div className="text-white text-opacity-60 text-sm font-normal leading-relaxed">{description}</div>
    </div>
  </div>
)

export const ThePriceofCentralizationSection = () => {
  return (
    <>
      <SectionTitle>
        <Translate>The Price of Centralization</Translate>
      </SectionTitle>
      <div className="container mx-auto px-5 gap-5 grid sm:grid-cols-2 pb-25">
        <SpecialItem />
        <Item
          cover={"2.2.webp"}
          title={translate({
            message: "QuadrigaCX Founder's Death",
          })}
          description={translate({
            message:
              "The founder of Canada's largest cryptocurrency exchange, QuadrigaCX, died unexpectedly in 2019. He was the only person with access to the exchange's cold wallets, resulting in approximately $190 million in customer funds being inaccessible.",
          })}
        />
        <Item
          cover={"2.3.webp"}
          title={translate({
            message: "BitPay Phishing Attack",
          })}
          description={translate({
            message:
              "BitPay, a company that provides Bitcoin payment solutions for merchants, fell victim to a phishing attack in 2015. The attacker, posing as a partner company, tricked BitPay into sending 5000 Bitcoins, worth approximately $1.8 million at the time.",
          })}
        />
      </div>
    </>
  )
}
