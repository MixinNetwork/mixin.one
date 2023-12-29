import React from "react"
import Translate from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"
import Svg1 from "@site/static/img/page/solutions/all-in-one-asset-management/3.1.svg"
import Svg2 from "@site/static/img/page/solutions/all-in-one-asset-management/3.2.svg"
import Svg3 from "@site/static/img/page/solutions/all-in-one-asset-management/3.3.svg"
import Svg4 from "@site/static/img/page/solutions/all-in-one-asset-management/3.4.svg"
import Svg5 from "@site/static/img/page/solutions/all-in-one-asset-management/3.5.svg"
import Svg6 from "@site/static/img/page/solutions/all-in-one-asset-management/3.6.svg"
import clsx from "clsx"

const Item = ({
  icon,
  title,
  className,
}: {
  icon: React.ReactNode
  title: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={clsx(
        "pb-17.5 text-3.5-4 space-y-5 bg-white px-5 pt-5 text-center shadow",
        className,
      )}
    >
      {icon}
      <div>{title}</div>
    </div>
  )
}

export const AllInOneSolution = () => (
  <div className="bg-#F2F2F2 bg-op-50">
    <SectionTitle
      description={
        <Translate>
          {
            "Rich robot ecology meets various needs such as trading, fixed investment, earning coins, options, etc."
          }
        </Translate>
      }
    >
      <Translate>All in one product and service</Translate>
    </SectionTitle>
    <div className="mx-a gap-x-12.5 pb-45 container grid items-center gap-y-5 md:grid-cols-[296fr_505fr_296fr]">
      <img
        loading="lazy"
        src={
          require("@site/static/img/page/solutions/all-in-one-asset-management/3.1.webp")
            .default
        }
        width={505}
        height={654}
        className="max-w-100 mx-a w-full px-2.5 md:order-2 md:row-span-3 md:max-w-full md:p-0"
      />
      <Item
        icon={<Svg1 />}
        title={
          <Translate>
            Read-only authz prevents stolen assets from malicious approvals
          </Translate>
        }
        className="mt-10 md:order-1 md:mt-0"
      />

      <Item
        icon={<Svg2 />}
        title={
          <Translate>
            No need to install/uninstall, no storage used, directly open and use
          </Translate>
        }
        className="md:order-3"
      />

      <Item
        icon={<Svg3 />}
        title={
          <Translate>
            Purchase products or services in any cryptocurrency with no fees
          </Translate>
        }
        className="md:order-4"
      />

      <Item
        icon={<Svg4 />}
        title={
          <Translate>
            {
              "Support to interact with bots via flexible interfaces and conversations"
            }
          </Translate>
        }
        className="md:order-5"
      />

      <Item
        icon={<Svg5 />}
        title={
          <Translate>
            {
              "The seamless authentication and notification make the PX complete"
            }
          </Translate>
        }
        className="md:order-6"
      />

      <Item
        icon={<Svg6 />}
        title={
          <Translate>
            {
              "The bots provide information, trading, games, tools, you name it."
            }
          </Translate>
        }
        className="md:order-7"
      />
    </div>
  </div>
)
