import React from "react"
import SectionTitle from "../../common/SectionTitle"
import Translate from "@docusaurus/Translate"

const Item = ({ title, description }: { title: React.ReactNode; description: React.ReactNode }) => (
  <>
    <div>
      <div className="text-center text-neutral-800 text-3xl font-medium">{title}</div>
      <div className="mt-4 text-center text-zinc-800 text-opacity-80 text-sm font-normal leading-snug">{description}</div>
    </div>
    <div className="my-10 mx-auto w-28 h-px bg-zinc-800 bg-opacity-30 sm:my-0 sm:w-px sm:h-28 sm:my-auto sm:last:hidden sm:mx-10 md:mx-20"></div>
  </>
)

export const CryptoEaseSection = () => {
  return (
    <>
      <SectionTitle description={<Translate>We go out of our way to ensure that you have the utmost privacy.</Translate>}>
        <Translate>We believe hold crypto shouldn't be so hard and expensive</Translate>
      </SectionTitle>
      <div className="mt-5 px-10 grid pb-30 sm:pb-40 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <Item
          title={<Translate>2017</Translate>}
          description={
            <Translate>Founded in Christmas 2017 as a small team of less than 20 people, our mission is to provide convenience, security and privacy in digital assets and messages.</Translate>
          }
        />
        <Item
          title={<Translate>1M+</Translate>}
          description={
            <Translate>More than 1 million users use Mixin Safe-driven social, wallet, DeFi, games and other products, which are deeply loved by users for their safety and ease of use.</Translate>
          }
        />
        <Item
          title={<Translate>$1B+</Translate>}
          description={
            <Translate>
              The Mixin team assists users in managing more than US$1 billion in assets. The service is stable and there have been no security incidents, which is deeply trusted by users.
            </Translate>
          }
        />
      </div>
    </>
  )
}
