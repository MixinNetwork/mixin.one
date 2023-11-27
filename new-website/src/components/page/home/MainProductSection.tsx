import Translate, { translate } from "@docusaurus/Translate"
import LocalLink from "../../common/LocaleLink"
import SectionTitle from "../../common/SectionTitle"

const ProductCard = ({ title, description, cover }: { title: string; description: string; cover: string }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img loading="lazy" src={require("@site/static/img/page/home/product/" + cover).default} alt={title} className="aspect-335/225" />

    <div className="aspect-335/210 pt-6 px-5 space-y-3">
      <div className="text-[#333] text-xl font-medium leading-tight">{title}</div>
      <div className="text-[#333] text-opacity-80 text-sm font-normal leading-snug">{description}</div>
    </div>
  </div>
)

export const MainProductSection = () => {
  return (
    <div className="flex flex-col items-center bg-slate-100 bg-opacity-40 pb-45 px-5 sm:pb-35">
      <SectionTitle description={<Translate>Our products are decentralized, privacy focused and reliable.</Translate>}>
        <Translate>Core Products</Translate>
      </SectionTitle>
      <div className="grid gap-y-5 gap-x-3 sm:grid-cols-3 container">
        <ProductCard
          key="Mixin Messenger"
          title={"Mixin Messenger"}
          description={translate({
            message:
              "The decentralized crypto wallet is powered by mature MPC technology. Mixin Messenger supports all popular cryptos, end-to-end encrypted chat, free transfers to contacts, fiat on-ramp, and social recovery.",
          })}
          cover={"messenger.webp"}
        />

        <ProductCard
          key="Mixin Safe"
          title={"Mixin Safe"}
          description={translate({
            message:
              "Mixin Safe provides the general public with cutting-edge Bitcoin custody solutions. Bitcoin custody should never sacrifice decentralization, always be confidence and reliability.",
          })}
          cover={"safe.webp"}
        />
        <ProductCard
          key="Mixin Wealth"
          title={"Mixin Wealth"}
          description={translate({ message: "We strive to build the safest products to grow your crypto wealth, with the highest standard of decentralized custodian powered by Mixin Safe." })}
          cover={"wealth.webp"}
        />
      </div>

      <LocalLink to="/pricing" className="mt-24.5 px-7 py-4 mx-auto bg-zinc-800 rounded-sm text-white text-base font-medium leading-none">
        <Translate>Start for Free</Translate>
      </LocalLink>
    </div>
  )
}
