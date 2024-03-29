import React from "react"
import Translate from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"
import clsx from "clsx"
import Svg1 from "@site/static/img/page/solutions/custody/1.2.svg"
import Svg2 from "@site/static/img/page/solutions/custody/1.3.svg"
import Svg3 from "@site/static/img/page/solutions/custody/1.4.svg"
import { WoodGrainItem } from "../../../common/WoodGrainItem"

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
      className={clsx(
        "mx-a mt-5-12 pb-15 gap-5-12 container grid",
        "md:grid-cols-3",
      )}
    >
      <WoodGrainItem
        icon={<Svg1 />}
        title={<Translate>Two-of-three custody</Translate>}
        description={
          <Translate>
            {
              "A total of three keys control your vault, with two of those keys required to approve a spend."
            }
          </Translate>
        }
        background={1}
      />
      <WoodGrainItem
        icon={<Svg2 />}
        title={<Translate>You hold two of your keys</Translate>}
        description={
          <Translate>
            {
              "With two keys, you're in total control of your bitcoin. Keep each key in a separate location."
            }
          </Translate>
        }
        background={2}
      />
      <WoodGrainItem
        icon={<Svg3 />}
        title={<Translate>We secure a recovery key</Translate>}
        description={
          <Translate>
            {
              "With only one key, we can't move your bitcoin, but we can collaborate to move bitcoin if you lose a key."
            }
          </Translate>
        }
        background={3}
      />
    </div>
  </>
)
