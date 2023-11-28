import React from "react"
import SectionTitle from "../../common/SectionTitle"
import Translate from "@docusaurus/Translate"
import GrayBackgroundWrapper from "../../common/GrayBackground"

import Icon1 from "@site/static/img/page/about/1.1.svg"
import Icon2 from "@site/static/img/page/about/1.2.svg"
import Icon3 from "@site/static/img/page/about/1.3.svg"

const Item = ({ icon, title, description }: { icon: React.ReactNode; title: React.ReactNode; description: React.ReactNode }) => (
  <>
    <div className="grid items-start place-items-start gap-2.5 sm:gap-x-5 grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      {icon}

      <div className="text-[#333] text-5.5 sm:text-8 lg:text-10 font-medium">{title}</div>
      <div className="text-[#333] text-opacity-75 text-sm font-normal">{description}</div>
    </div>
  </>
)

export const CryptoEaseSection = () => {
  const svgClassName = "w-9 h-9 p-3 lg:w-12 lg:h-12 lg:p-4 box-content row-span-full bg-white rounded-lg"
  return (
    <>
      <SectionTitle description={<Translate>We go out of our way to ensure that you have the utmost privacy.</Translate>}>
        <Translate>We believe hold crypto shouldn't be so hard and expensive</Translate>
      </SectionTitle>
      <GrayBackgroundWrapper bgClassName="block!">
        <div className="mt-15! md:mt-20! container mx-auto px-5 grid gap-y-10 gap-x-6 pb-30 md:grid-cols-3">
          <Item
            icon={<Icon1 className={svgClassName} />}
            title={<Translate>2017</Translate>}
            description={
              <Translate>Founded in Christmas 2017 as a small team of less than 20 people, our mission is to provide convenience, security and privacy in digital assets and messages.</Translate>
            }
          />
          <Item
            icon={<Icon2 className={svgClassName} />}
            title={<Translate>1M+</Translate>}
            description={
              <Translate>More than 1 million users use Mixin Safe-driven social, wallet, DeFi, games and other products, which are deeply loved by users for their safety and ease of use.</Translate>
            }
          />
          <Item
            icon={<Icon3 className={svgClassName} />}
            title={<Translate>$1B+</Translate>}
            description={
              <Translate>
                The Mixin team assists users in managing more than US$1 billion in assets. The service is stable and there have been no security incidents, which is deeply trusted by users.
              </Translate>
            }
          />
        </div>
      </GrayBackgroundWrapper>
    </>
  )
}
