import Translate, { translate } from "@docusaurus/Translate"
import LocalLink from "../../common/LocaleLink"
import SectionTitle from "../../common/SectionTitle"

const ProductCard = ({
  title,
  description,
  cover,
}: {
  title: string
  description: string
  cover: string
}) => (
  <div className="overflow-hidden rounded-lg bg-white shadow-lg">
    <img
      loading="lazy"
      src={require("@site/static/img/page/home/product/" + cover).default}
      alt={title}
      className="aspect-335/225"
    />

    <div className="space-y-3 px-5 py-6 pb-11 sm:pb-6">
      <div className="text-xl font-medium leading-tight text-[#333]">
        {title}
      </div>
      <div className="text-sm font-normal leading-snug text-[#333] text-opacity-80">
        {description}
      </div>
    </div>
  </div>
)

export const MainProductSection = () => {
  return (
    <div className="pb-45 sm:pb-35 flex flex-col items-center bg-slate-100 bg-opacity-40 px-5">
      <SectionTitle
        description={
          <Translate>
            Our products are decentralized, privacy focused and reliable.
          </Translate>
        }
      >
        <Translate>Core Products</Translate>
      </SectionTitle>
      <div className="container grid gap-x-3 gap-y-5 sm:grid-cols-3">
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
          description={translate({
            message:
              "We strive to build the safest products to grow your crypto wealth, with the highest standard of decentralized custodian powered by Mixin Safe.",
          })}
          cover={"wealth.webp"}
        />
      </div>

      <LocalLink
        to="/pricing"
        className="mt-24.5 mx-auto rounded-sm bg-zinc-800 px-7 py-4 text-base font-medium leading-none text-white"
      >
        <Translate>Start for Free</Translate>
      </LocalLink>
    </div>
  )
}
