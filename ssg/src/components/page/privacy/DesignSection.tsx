import React from "react"
import SectionTitle from "../../common/SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"
import Checked from "@site/static/img/common/checked.svg"
import GrayBackgroundWrapper from "../../common/GrayBackground"
import clsx from "clsx"

import GridIcon1 from "@site/static/img/page/privacy/1.1.2.svg"
import GridIcon2 from "@site/static/img/page/privacy/1.1.3.svg"
import GridIcon3 from "@site/static/img/page/privacy/1.1.4.svg"
import GridIcon4 from "@site/static/img/page/privacy/1.1.5.svg"
import FullItem from "../../common/FullItem"

const ListSection = () => {
  return (
    <div className="pb-25">
      <Item
        title={<Translate>Asset Privacy</Translate>}
        description={
          <Translate>
            The types and quantities of assets in your wallet are only known to
            you.
          </Translate>
        }
        itemClassName="odd:bg-#F2F2F2"
        points={[
          {
            cover: "1.2.1.webp",
            title: translate({
              message: "Balance Privacy",
            }),
            content: translate({
              message:
                "When your crypto assets are recharged into the Mixin wallet, only you have the right to view the types and specific amounts of assets in the wallet. Because the recharge address and withdrawal address of the wallet are not the same address, other third parties cannot infer the actual types and quantities of assets in your wallet through the recharge address or withdrawal address on the chain.",
            }),
          },
          {
            cover: "1.2.2.webp",
            title: translate({
              message: "Loss Protection",
            }),
            content: translate({
              message:
                "If you lose the owner's private key of Mixin Safe vault, you can contact the Mixin team to recover the vault assets. At the same time, you don't have to worry about the leakage of asset information due to the leakage of private keys. The person who gets your private key cannot view the types and quantities of assets through the private key.",
            }),
          },
          {
            cover: "1.2.3.webp",
            title: translate({
              message: "Inheritance Privacy",
            }),
            content: translate({
              message:
                "Using Mixin Safe to host assets and using inheritance services can ensure that your wealth is successfully inherited to the next generation. Inheritance is solid privacy protection, and the heir and executor of the property cannot know in advance the types and quantities of assets to be inherited, nor can they infer all assets from the transfer records on the blockchain.",
            }),
          },
        ]}
      />
      <Item
        title={<Translate>Transfer Privacy</Translate>}
        description={
          <Translate>
            Enhance UTXO transfer privacy through CryptoNote technology.
          </Translate>
        }
        itemClassName="even:bg-#F2F2F2"
        points={[
          {
            cover: "1.3.1.webp",
            title: translate({
              message: "Privacy Transfer",
            }),
            content: translate({
              message:
                "Enhance UTXO transfer privacy through CryptoNote technology, only the two parties to the transaction know, and the Mixin Network full node cannot know the two parties to the transaction, and cannot infer the specific two parties to the transaction based on the transaction itself.",
            }),
          },
          {
            cover: "1.3.2.webp",
            title: translate({
              message: "Regulatory Compliance",
            }),
            content: translate({
              message:
                "The dual-key structure of the Mixin Network multi-chain ledger ensures asset anonymity while meeting compliance requirements. Users can actively provide their own viewkey for accountants to query, which can be used for tax reporting and accounting audits, etc., and assets will not be transferred.",
            }),
          },
        ]}
      />
    </div>
  )
}

const Item = ({
  title,
  description,
  points,
  itemClassName,
}: {
  title: React.ReactNode
  description?: React.ReactNode
  points: {
    cover: string
    title: string
    content: string
  }[]
  itemClassName?: string
}) => (
  <div className="gap-5-10 grid items-center pb-20">
    <SectionTitle description={description} className="!mb-0">
      {title}
    </SectionTitle>
    <div className="">
      {points.map(({ cover, title, content }) => (
        <FullItem
          cover={require("@site/static/img/page/privacy/" + cover).default}
          title={title}
          description={content}
          className={itemClassName}
        />
      ))}
    </div>
  </div>
)

function GridSection({}) {
  return (
    <div className="pb-15 sm:pb-30 sm:pb-25 lg:pb-30 lg:gap-y-7.5 lg:gap-x-12.5 mx-a container grid gap-5 sm:grid-cols-[13fr_20fr_13fr] lg:grid-cols-[296fr_502fr_296fr]">
      <div className="order-0 sm:px-30 lg:px-9.5 sm:space-y-15 space-y-10 rounded-sm bg-white px-5 pb-16 pt-8 shadow-[0_4px_20px_0_rgba(43,89,255,0.06)] sm:order-1 sm:row-span-2 sm:px-6 sm:pt-10">
        <div className="text-7 text-#333 text-center font-medium">
          <Translate>Information Privacy</Translate>
        </div>
        <img
          loading="lazy"
          src={require("@site/static/img/page/privacy/1.1.1.webp").default}
          className="aspect-290/250 w-full"
        />
      </div>
      <GridItem cover={<GridIcon1 />} className="sm:order-0 order-1">
        <Translate>
          All messages, audios, photos, and files are end-to-end encrypted
        </Translate>
      </GridItem>
      <GridItem cover={<GridIcon2 />} className="order-2">
        <Translate>
          Stay connected to your family, friends, and coworker by group chat
        </Translate>
      </GridItem>
      <GridItem cover={<GridIcon3 />} className="order-3">
        <Translate>
          Enhance privacy by turning on the disappearing messages feature
        </Translate>
      </GridItem>
      <GridItem cover={<GridIcon4 />} className="order-4">
        <Translate>
          We can't read your messages or listen to your calls, nor can anyone
          else
        </Translate>
      </GridItem>
    </div>
  )
}

const GridItem = ({
  cover,
  children,
  className,
}: {
  cover: React.ReactNode
  children: React.ReactNode
  className?: string
}) => (
  <div
    className={clsx(
      "pb-11.5 sm:p-7.5 sm:pb-21 sm:pb-6.5 grid place-items-center gap-y-5 rounded-sm bg-white p-5 shadow-[0_4px_20px_0_rgba(43,89,255,0.06)] sm:px-5 sm:pt-9 lg:px-7",
      className,
    )}
  >
    {cover}
    <div className="text-#333 text-4 text-center font-normal">{children}</div>
  </div>
)

export const DesignSection = () => {
  return (
    <>
      <SectionTitle
        description={
          <Translate>
            We go out of our way to ensure that you have the utmost privacy.
          </Translate>
        }
      >
        <Translate>Privacy by Design</Translate>
      </SectionTitle>
      <GrayBackgroundWrapper bgClassName="block!">
        <div className="mt-15">
          <GridSection />
          <ListSection />
        </div>
      </GrayBackgroundWrapper>
    </>
  )
}
