import React from "react"
import SectionTitle from "../../common/SectionTitle"
import Translate from "@docusaurus/Translate"
import GrayBackgroundWrapper from "../../common/GrayBackground"

import Icon1 from "@site/static/img/page/about/1.1.svg"
import Icon2 from "@site/static/img/page/about/1.2.svg"
import Icon3 from "@site/static/img/page/about/1.3.svg"

const Item = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
}) => (
  <>
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] place-items-start items-start gap-2.5 sm:gap-x-5">
      {icon}

      <div className="text-5.5 sm:text-8 lg:text-10 text-#000 font-medium">
        {title}
      </div>
      <div className="text-#000 text-4 text-op-75 font-normal leading-[1.5]">
        {description}
      </div>
    </div>
  </>
)

export const CryptoEaseSection = () => {
  const svgClassName =
    "w-9 h-9 p-3 lg:w-12 lg:h-12 lg:p-4 box-content row-span-full bg-white rounded-lg"
  return (
    <>
      <SectionTitle
        description={
          <Translate>Mixin team helps you better manage your wealth.</Translate>
        }
        large
      >
        <Translate>About Us</Translate>
      </SectionTitle>
      <GrayBackgroundWrapper bgClassName="block!">
        <div className="mt-15! md:mt-20! pb-30 container mx-auto grid gap-x-6 gap-y-10  md:grid-cols-3">
          <Item
            icon={<Icon1 className={svgClassName} />}
            title={<Translate>2017</Translate>}
            description={
              <Translate>
                Founded in Christmas 2017 as a small team of less than 20
                people, our mission is to provide convenience, security and
                privacy in digital assets and messages.
              </Translate>
            }
          />
          <Item
            icon={<Icon2 className={svgClassName} />}
            title={<Translate>1M+</Translate>}
            description={
              <Translate>
                More than 1,000,000 customers use Mixin products and services to
                manage and grow their wealth. Mixin is deeply loved by our
                customers for its safety and ease of use.
              </Translate>
            }
          />
          <Item
            icon={<Icon3 className={svgClassName} />}
            title={<Translate>$1B+</Translate>}
            description={
              <Translate>
                The Mixin team assists customers in managing more than US$1
                billion in crypto assets. The service is reliable and
                battle-tested, which is deeply trusted by our customers.
              </Translate>
            }
          />
        </div>
      </GrayBackgroundWrapper>
    </>
  )
}
