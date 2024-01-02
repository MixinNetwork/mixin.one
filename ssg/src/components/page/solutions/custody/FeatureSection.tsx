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
        <Translate>{"Self-hosted wallet, you own the private key."}</Translate>
      }
      className="!mb-0"
    >
      <Translate>Own your assets</Translate>
    </SectionTitle>
    <div className="even:children:bg-#F2F2F2">
      <FullItem
        cover={
          require("@site/static/img/page/solutions/custody/2.1.webp").default
        }
        title={translate({
          message: "Multi-signature custody",
        })}
        description={translate({
          message: `Most Bitcoins are lost due to owners mismanaging their private keys. If you want to store Bitcoins for a long time, a multi-signature wallet is essential. The double multi-signature we designed significantly improves this situation. Bitcoin address of the vault Controlled by 3 private keys, the owner and co-manager jointly control 2 of the 3 private keys.`,
        })}
      />
      <FullItem
        cover={
          require("@site/static/img/page/solutions/custody/2.2.webp").default
        }
        title={translate({
          message: "Approval process",
        })}
        description={translate({
          message: `We have designed a complete approval process for the vault transfer. Each transfer needs to be approved by the vault co-manager before it can take effect. All suspicious transactions will be rejected in the approval process. The vault co-manager is designed to only participate in asset management, but cannot conspire to steal assets, because all transactions face the final approval of the vault owner.`,
        })}
      />
      <FullItem
        cover={
          require("@site/static/img/page/solutions/custody/2.3.webp").default
        }
        title={translate({
          message: "Simple collaboration",
        })}
        description={translate({
          message: `Complexity is a hidden danger. Your family, friends, and colleagues do not need professional cryptocurrency knowledge. Through Mixin Messenger's secure and private information communication, they can safely participate in asset management through a 6-digit password, and set emergency contacts to avoid further reducing the risk of single point of failure.`,
        })}
      />
      <FullItem
        cover={
          require("@site/static/img/page/solutions/custody/2.4.webp").default
        }
        title={translate({
          message: "Asset isolation",
        })}
        description={translate({
          message: `Our multi-vault design can help you isolate assets, establish multiple vaults according to usage, and set different co-managers for different vaults. Asset isolation can further enhance the privacy and security of assets.`,
        })}
      />
    </div>
  </>
)
