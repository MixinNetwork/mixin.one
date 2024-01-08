import Translate from "@docusaurus/Translate"
import SectionTitle from "../../common/SectionTitle"
import Icon1 from "@site/static/img/page/technology/5.2.svg"
import Icon2 from "@site/static/img/page/technology/5.3.svg"
import Icon3 from "@site/static/img/page/technology/5.4.svg"
import Icon4 from "@site/static/img/page/technology/5.5.svg"
import { ReactNode } from "react"

const Item = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: ReactNode
  description: ReactNode
}) => (
  <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-4">
    {icon}
    <div className="text-4.5-6 font-medium">{title}</div>
    <div className="text-#333 text-op-80 text-3.5 col-span-full leading-[1.5]">
      {description}
    </div>
  </div>
)

export const ServiceSecurity = () => (
  <>
    <SectionTitle
      description={
        <Translate>
          Based on our decentralized network and wallets, developers have built
          many popular products and services.
        </Translate>
      }
    >
      <Translate>Service Security</Translate>
    </SectionTitle>
    <div className="mx-a container">
      <img
        loading="lazy"
        width={3096}
        height={1410}
        src={require("@site/static/img/page/technology/5.1.webp").default}
        className="sm:px-10.3 md:px-15.7 lg:px-21 sm:py-8.7 md:py-12.3 mx-a bg-[#F2F2F2] py-5 lg:py-16"
      />

      <div className="gap-x-0-25 mx-a px-4-10 grid gap-y-10 pt-10 sm:grid-cols-2">
        <Item
          icon={<Icon1 />}
          title={<Translate>Asset Segregation</Translate>}
          description={
            <Translate>
              User wallet assets and Dapp assets are isolated, and users can
              directly receive assets in their wallets after trading, lending,
              minting, etc.
            </Translate>
          }
        />
        <Item
          icon={<Icon2 />}
          title={<Translate>Code audit</Translate>}
          description={
            <Translate>
              IOActive, LeastAuthority, and SlowMist and other audit companies
              participated in the audit of Dapp projects such as Lack and Rings.
            </Translate>
          }
        />
        <Item
          icon={<Icon3 />}
          title={<Translate>Read-only authorization</Translate>}
          description={
            <Translate>
              Mixin Messenger's read-only authorization ensures that Dapps can
              launch personalized functions based on users, but cannot transfer
              users' assets.
            </Translate>
          }
        />
        <Item
          icon={<Icon4 />}
          title={<Translate>DeFi whitelist</Translate>}
          description={
            <Translate>
              Mixin Safe's DeFi services insist on using DeFi whitelist strategy
              to help users reduce potential risks, such as high-risk
              authorization.
            </Translate>
          }
        />
      </div>
    </div>

    <a
      href="https://developers.mixin.one/docs/dapp/getting-started/create-dapp"
      className="px-13 mt-30 rw-10 mx-auto block bg-[#333] py-4 text-center text-white sm:w-fit"
    >
      <Translate>Create a Dapp</Translate>
    </a>
  </>
)
