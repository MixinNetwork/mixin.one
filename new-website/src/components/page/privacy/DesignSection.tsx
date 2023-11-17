import React from "react"
import SectionTitle from "../../common/SectionTitle"
import Translate from "@docusaurus/Translate"
import Checked from "@site/static/img/common/checked.svg"

const Item = ({ cover, title, points, description }: { cover: string; title: React.ReactNode; description?: React.ReactNode; points: React.ReactNode[] }) => (
  <div className="grid items-center gap-15 sm:grid-cols-2 group">
    <img src={require("@site/static/img/page/privacy/" + cover).default} className="aspect-335/225 m-auto w-full sm:flex-1 sm:group-odd:order-last" />
    <div className="sm:flex-1">
      <div className="text-zinc-800 text-xl font-medium leading-snug">{title}</div>
      {description && <div className="mt-5 text-zinc-800 text-base font-normal leading-relaxed">{description}</div>}
      <div className="mt-7 grid grid-cols-[auto_1fr] gap-x-4 gap-y-7">
        {points.map((point) => (
          <>
            <Checked className="mt-1" />
            <div className="text-zinc-800 text-base font-normal leading-relaxed">{point}</div>
          </>
        ))}
      </div>
    </div>
  </div>
)

export const DesignSection = () => {
  return (
    <>
      <SectionTitle description={<Translate>We go out of our way to ensure that you have the utmost privacy.</Translate>}>
        <Translate>Privacy by Design</Translate>
      </SectionTitle>
      <div className="mt-15 container mx-auto px-5 pb-40 gap-30 grid">
        <Item
          cover="1.1.webp"
          title={<Translate>Information Privacy</Translate>}
          points={[
            <Translate>All messages are end-to-end encrypted, including text, photos, files and calls</Translate>,
            <Translate>By opening the timed message function of the chat, you can get more privacy protection</Translate>,
            <Translate>Group chat allows you to easily and freely keep in touch with family, friends and colleagues</Translate>,
          ]}
        />

        <Item
          cover="1.2.webp"
          title={<Translate>Asset Privacy</Translate>}
          points={[
            <Translate>If you lose the owner's private key of Mixin Safe vault, the types and quantities of your assets will not be leaked.</Translate>,
            <Translate>The types and quantities of assets in your Mixin Messenger wallet cannot be deduced from the recharge address or withdrawal address on the chain.</Translate>,
            <Translate>
              The heir and executor of the property cannot know in advance the types and quantities of assets to be inherited, nor can they infer all assets from the transfer records on the
              blockchain.
            </Translate>,
          ]}
        />

        <Item
          cover="1.3.webp"
          title={<Translate>Transfer Privacy</Translate>}
          points={[
            <Translate>Enhance UTXO transfer privacy through CryptoNote technology</Translate>,
            <Translate>
              Through CryptoNote technology, UTXO transfer privacy is enhanced, and only the two parties to the transaction know that the Mixin Network full node cannot know the two parties to the
              transaction, and cannot infer the specific two parties to the transaction based on the transaction itself.
            </Translate>,
          ]}
        />
      </div>
    </>
  )
}
