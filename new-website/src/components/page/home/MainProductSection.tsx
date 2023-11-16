import Translate, { translate } from "@docusaurus/Translate"
import LocalLink from "../../common/LocaleLink"

const ProductCard = ({ title, description, cover }: { title: string; description: string; cover: string }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={require("@site/static/img/page/home/product/" + cover).default} alt={title} className="aspect-335/225" />

    <div className="aspect-335/210 pt-6 px-5 space-y-3">
      <div className="text-zinc-800 text-xl font-medium leading-tight">{title}</div>
      <div className="text-zinc-800 text-opacity-80 text-sm font-normal leading-snug">{description}</div>
    </div>
  </div>
)

export const MainProductSection = () => {
  return (
    <div className="flex flex-col items-center bg-slate-100 bg-opacity-40 pt-25 pb-45 px-5 sm:pb-35">
      <div className="text-zinc-800 text-[28px] font-medium">
        <Translate>Our Main Products</Translate>
      </div>
      <div className="mt-5 text-zinc-800 text-opacity-60 text-base font-normal leading-normal">
        <Translate>Our product is decentralized, safer, stronger and cheaper</Translate>
      </div>
      <div className="mt-15 grid gap-y-5 gap-x-3 sm:grid-cols-3 container">
        <ProductCard
          key="Mixin Messenger"
          title={"Mixin Messenger"}
          description={translate({
            message:
              "The open source decentralized MPC multi-currency wallet supports end-to-end encrypted chat, free transfers to contacts, legal currency deposits, social recovery and other functions.",
          })}
          cover={"messenger.webp"}
        />

        <ProductCard
          key="Mixin Safe"
          title={"Mixin Safe"}
          description={translate({
            message: "Mixin Safe provides the general public with cutting-edge Bitcoin custody solutions. Bitcoin custody should never sacrifice decentralization, always be confident and reliable.",
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

      <LocalLink to="/pricing" className="mt-24.5 px-7 py-4 mx-auto bg-zinc-800 rounded-sm text-white text-base font-bold leading-none">
        <Translate>View our plans</Translate>
      </LocalLink>
    </div>
  )
}
