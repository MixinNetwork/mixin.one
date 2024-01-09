import Translate, { translate } from "@docusaurus/Translate"
import LocalLink from "../../common/LocaleLink"
import SectionTitle from "../../common/SectionTitle"
import Arrow from "@site/static/img/page/home/product/arrow.svg"

const ProductCard = ({
  title,
  description,
  cover,
  href,
}: {
  title: string
  description: string
  cover: string
  href: string
}) => (
  <a
    className="flex flex-col overflow-hidden rounded-lg bg-white shadow"
    href={href}
  >
    <img
      loading="lazy"
      src={require("@site/static/img/page/home/product/" + cover).default}
      alt={title}
      className="aspect-335/225"
    />

    <div className="sm:space-y-6.2 md:space-y-9.3 lg:space-y-12.5 flex grow flex-col justify-between space-y-3 px-5 py-6">
      <div className="space-y-3">
        <div className="text-#000 text-5 font-medium leading-tight">
          {title}
        </div>
        <div className="text-#000 text-3.5 text-op-70 font-normal leading-[1.5]">
          {description}
        </div>
      </div>
      <div className="text-3.5 flex items-center font-medium">
        <Translate>View Product</Translate>
        <Arrow className="ml-2" />
      </div>
    </div>
  </a>
)

export const MainProductSection = () => {
  return (
    <div className="pb-45 sm:pb-35 bg-#F2F2F2 bg-op-50 flex flex-col items-center px-5">
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
          href="https://messenger.mixin.one/"
        />

        <ProductCard
          key="Mixin Safe"
          title={"Mixin Safe"}
          description={translate({
            message:
              "Mixin Safe provides the general public with cutting-edge Bitcoin custody solutions. Bitcoin custody should never sacrifice decentralization, always be confidence and reliability.",
          })}
          cover={"safe.webp"}
          href="https://safe.mixin.one/"
        />
        <ProductCard
          key="Mixin Wealth"
          title={"Mixin Wealth"}
          description={translate({
            message:
              "We strive to build the safest products to grow your crypto wealth, with the highest standard of decentralized custodian powered by Mixin Safe.",
          })}
          cover={"wealth.webp"}
          href="https://wealth.mixin.one/"
        />
      </div>

      <LocalLink
        to="/pricing"
        className="mt-24.5 text-3.5-4 mx-auto rounded-sm bg-zinc-800 px-7 py-4 font-medium text-white"
      >
        <Translate>Start for Free</Translate>
      </LocalLink>
    </div>
  )
}
