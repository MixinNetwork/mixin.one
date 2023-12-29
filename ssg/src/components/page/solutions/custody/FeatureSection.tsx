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
        <div className="prose mt-7">
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
          message: `Most of the loss of Bitcoin is due to the owner's poor management of their private keys. If you want to store Bitcoin for a long time, multi-signature wallets are essential. The dual multi-signature we designed significantly improves this situation:
The Bitcoin address of the vault is controlled by 3 private keys, and the owner and co-managers jointly control 2 of the 3 private keys.
Co-manager private keys are jointly controlled by MPC-TSS technology, which supports up to 16 people to jointly manage the same vault at the same time. Each transaction requires the signature of any M of N co-managers to obtain the complete co-manager private key signature.`,
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
          message: `We have designed a complete approval process for the vault transfer. Each transfer needs to be approved by the vault co-managers first, and then approved by the vault owner to take effect. All suspicious transactions will be rejected in the approval process. The vault co-managers are designed to only participate in asset management, but cannot conspire to steal assets, because all transactions face the final approval of the vault owner.
Our perfect notification service allows the vault owner and vault co-managers to receive notifications that need to be approved for the first time, and reduce the problem of untimely approval through repeated regular notifications, effectively improving the efficiency of approval.`,
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
          message: `Complexity is a hidden danger. Your family, friends, and colleagues do not need professional cryptocurrency knowledge. Through Mixin Messenger's secure and private information communication, through the 6-digit password to securely participate in asset management, and through setting emergency contacts to avoid further reducing the risk of single point of failure.`,
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
