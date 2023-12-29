import React from "react"
import Translate from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"
import clsx from "clsx"
import Svg1 from "@site/static/img/page/solutions/custody/1.2.svg"
import Svg2 from "@site/static/img/page/solutions/custody/1.3.svg"
import Svg3 from "@site/static/img/page/solutions/custody/1.4.svg"

const Item = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
}) => (
  <div className="border-#D9D9D9 bg-#F2F2F2 border px-5 pb-12 pt-6">
    {icon}
    <div className="mt-9.5 text-6 font-medium">{title}</div>
    <div className="mt-5">{description}</div>
  </div>
)

export const Header = () => (
  <>
    <SectionTitle
      description={
        <Translate>
          {
            "Take control of your bitcoin in the safest way possible with our multisig vaults."
          }
        </Translate>
      }
      large
    >
      <Translate>Sleep soundly knowing your bitcoin are secure</Translate>
    </SectionTitle>
    <img
      loading="lazy"
      src={require("@site/static/img/page/solutions/custody/1.1.webp").default}
      width={1194}
      height={520}
      className="mx-a !sm:block container !hidden"
    />
    <img
      loading="lazy"
      src={
        require("@site/static/img/page/solutions/custody/1.1.0.webp").default
      }
      width={288}
      height={192}
      className="mx-a !sm:hidden container"
    />
    <div
      className={clsx("pb-15 mx-a container mt-5 grid gap-5", "md:grid-cols-3")}
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
