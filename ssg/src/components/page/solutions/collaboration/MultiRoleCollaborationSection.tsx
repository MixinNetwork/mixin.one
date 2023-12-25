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
      <div className="text-6 mt-11.5 mt-9 font-medium">{title}</div>
      <div className="mt-5">{description}</div>
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
              "The establishment of multiple roles facilitates institutions to establish customisable workflows according to their needs, allowing them to work more efficiently, and support operation scaling. Creators will be able to create a segregation of duties by managing users and assigning permissions and roles."
            }
          </Translate>
        }
      >
        <Translate>Multi-Role Collaboration</Translate>
      </SectionTitle>
      <img
        src={
          require("@site/static/img/page/solutions/collaboration/2.1.webp")
            .default
        }
        width={335}
        height={181}
        className="mx-a container px-5"
      />

      <div
        className={clsx(
          "mx-a mt-15 pb-15 container grid gap-5 px-5",
          "gap-5 lg:gap-12",
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
