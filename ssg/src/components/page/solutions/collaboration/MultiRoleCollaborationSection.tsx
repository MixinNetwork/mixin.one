import React, { ReactNode } from "react"
import Translate from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"
import Svg1 from "@site/static/img/page/solutions/collaboration/2.2.svg"
import Svg2 from "@site/static/img/page/solutions/collaboration/2.3.svg"
import Svg3 from "@site/static/img/page/solutions/collaboration/2.4.svg"
import clsx from "clsx"

const Item = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: ReactNode
  description: ReactNode
}) => {
  return (
    <div
      className={clsx(
        "border-#D9D9D9 bg-#F2F2F2 bg-op-50 border px-5 pb-8 pt-10",
        "lg:pb-22.5",
      )}
    >
      {icon}
      <div className="text-5-6 mt-11.5 mt-9 font-medium">{title}</div>
      <div className="text-3.5-4 text-#333 text-op-80 mt-4 leading-[1.5]">
        {description}
      </div>
    </div>
  )
}

export const MultiRoleCollaborationSection = () => {
  return (
    <>
      <SectionTitle
        description={
          <Translate>
            {
              "Creators will be able to create a segregation of duties by managing users and assigning permissions and roles."
            }
          </Translate>
        }
      >
        <Translate>Multi-Role Collaboration</Translate>
      </SectionTitle>
      <div className="mx-a container">
        <img
          loading="lazy"
          src={
            require("@site/static/img/page/solutions/collaboration/2.1.webp")
              .default
          }
          width={250}
          height={131}
          className="bg-#F2F2F2 px-5-25 py-2.5-15 w-full"
        />
      </div>

      <div
        className={clsx(
          "mx-a mt-5-12 pb-15 gap-5-12 container grid",
          "md:grid-cols-3",
        )}
      >
        <Item
          icon={<Svg1 />}
          title={<Translate>Two-of-three custody</Translate>}
          description={
            <Translate>
              {
                "A total of three keyscontrol your vault, withtwo of those keysrequired to approve a spend."
              }
            </Translate>
          }
        />
        <Item
          icon={<Svg2 />}
          title={<Translate>You hold two of your keys</Translate>}
          description={
            <Translate>
              {
                "With two keys, you're intotal control of yourbitcoin. Keep each key ina separate location."
              }
            </Translate>
          }
        />
        <Item
          icon={<Svg3 />}
          title={<Translate>We secure arecovery key</Translate>}
          description={
            <Translate>
              {
                "With only one key, wecan't move your bitcoin,but we can collaborate tomove bitcoin if you lose akey."
              }
            </Translate>
          }
        />
      </div>
    </>
  )
}
