import React from "react"
import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"
import FullItem from "../../../common/FullItem"

const Item = ({
  cover,
  title,
  description,
}: {
  cover: string
  title: string
  description: string
}) => (
  <div className="even:bg-#F2F2F2 even:bg-op-50 group w-full">
    <div className="mx-a pt-15 gap-y-15 container grid items-center gap-x-10  pb-20 md:grid-cols-2 md:gap-x-20">
      <img
        loading="lazy"
        src={
          require("@site/static/img/page/solutions/custody/" + cover).default
        }
        width={335}
        height={224}
        className="w-full md:group-odd:order-last"
      />
      <div>
        <div className="text-5.5 sm:text-6.7 md:text-7.8 lg:text-9 font-medium">
          {title}
        </div>
        <div className="text-3.5-4 text-#333 text-op-80 mt-7 leading-[1.5]">
          {description.split("\n").map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export const FeatureSection = () => (
  <>
    <SectionTitle
      description={
        <Translate>{"A non-custodial wallet, you control your private keys."}</Translate>
      }
      className="!mb-0"
    >
      <Translate>Own Your Coins</Translate>
    </SectionTitle>
    <div className="even:children:bg-#F2F2F2">
      <FullItem
        cover={
          require("@site/static/img/page/solutions/custody/2.1.webp").default
        }
        title={translate({
          message: "Multisig Management",
        })}
        description={translate({
          message: `Most Bitcoin losses occur due to poor management of private keys. If you want to store Bitcoins for a long time, a multisig wallet is essential. Our design of multisig significantly improves this situation: The Bitcoin address is controlled by 3 private keys, with the owner and members jointly controlling 2 of the 3 keys.`,
        })}
      />
      <FullItem
        cover={
          require("@site/static/img/page/solutions/custody/2.2.webp").default
        }
        title={translate({
          message: "Approval Process",
        })}
        description={translate({
          message: `Every transaction requires approval from the members and owner to take effect. Suspicious transactions are rejected during the approval process.`,
        })}
      />
      <FullItem
        cover={
          require("@site/static/img/page/solutions/custody/2.3.webp").default
        }
        title={translate({
          message: "Simple Collaboration",
        })}
        description={translate({
          message: `Complexity brings risks. Your family, friends, and colleagues do not need specialized knowledge of cryptocurrencies. Through secure and private communication in Mixin Messenger, they can participate in asset management securely with a 6-digit PIN code. By setting emergency contacts, the risk of single point of failure is further reduced.`,
        })}
      />
      <FullItem
        cover={
          require("@site/static/img/page/solutions/custody/2.4.webp").default
        }
        title={translate({
          message: "Asset Segregation",
        })}
        description={translate({
          message: `Our multi-safe design helps you achieve asset segregation. You can create multiple safes for different purposes and set different members for each safe. With asset segregation, different members only have access to their designated safes, further enhances the privacy and security of your assets.`,
        })}
      />
    </div>
  </>
)
