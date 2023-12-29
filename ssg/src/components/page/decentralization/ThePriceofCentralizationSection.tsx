import clsx from "clsx"
import SectionTitle from "../../common/SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"

const SpecialItem = () => (
  <div className="relative grid auto-rows-fr sm:col-span-2 sm:grid-cols-2">
    <div className="fill absolute z-0 bg-gradient-to-t from-slate-950 via-[#010F24] to-transparent sm:bg-gradient-to-r" />

    <img
      loading="lazy"
      src={require("@site/static/img/page/decentralization/2.1.webp").default}
      alt={"centralization"}
      className="aspect-375/300 -z-1 h-full w-full object-cover sm:order-last"
    />

    <div className="z-1 sm:pl-15 sm:pt-15 space-y-4 p-5 pb-10">
      <div className="sm:text-7 md:text-7.5 lg:text-8 text-5 font-medium text-white">
        <Translate>The Mt. Gox Debacle</Translate>
      </div>
      <div className="text-3.5 font-normal leading-snug text-white text-opacity-90">
        <Translate>
          Mt. Gox was a bitcoin exchange based in Shibuya, Tokyo, Japan.
          Launched in 2010, it was handling over 70% of all bitcoin (BTC)
          transactions worldwide by early 2014, when it abruptly ceased
          operations amid revelations of its involvement in the loss/theft of
          hundreds of thousands of bitcoins, then worth hundreds of millions in
          US dollars. Although 200,000 bitcoins have since been "found", the
          reasons for the disappearance—theft, fraud, mismanagement, or a
          combination of these—were initially unclear.
        </Translate>
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
  <div className="aspect-375/300 relative">
    <img
      loading="lazy"
      src={require("@site/static/img/page/decentralization/" + cover).default}
      alt={title}
      className="fill"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
    <div className="absolute inset-0 top-auto space-y-4 p-5">
      <div className="sm:text-7 md:text-7.5 lg:text-8 text-5 font-medium text-white">
        {title}
      </div>
      <div className="text-3.5 font-normal leading-[1.5] text-white text-opacity-90">
        {description}
      </div>
    </div>
  </div>
)

export const ThePriceofCentralizationSection = () => {
  return (
    <>
      <SectionTitle>
        <Translate>The Price of Centralization</Translate>
      </SectionTitle>
      <div className="pb-25 container mx-auto grid gap-5  sm:grid-cols-2">
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
