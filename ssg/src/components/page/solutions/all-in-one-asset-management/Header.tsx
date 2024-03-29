import React from "react"
import Translate from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"

export const Header = () => (
  <>
    <SectionTitle
      description={
        <Translate>
          {
            "Since 2017, we have supported 48 blockchains and 2200+ tokens, including Ethereum-compatible layer 1 and layer 2 networks."
          }
        </Translate>
      }
      large
    >
      <Translate>
        All-in-one wallet suite for comprehensive asset management
      </Translate>
    </SectionTitle>
    <img
      loading="lazy"
      src={
        require("@site/static/img/page/solutions/all-in-one-asset-management/1.1.webp")
          .default
      }
      width={1194}
      height={480}
      className="mx-a !sm:block container mb-10 !hidden"
    />
    <img
      loading="lazy"
      src={
        require("@site/static/img/page/solutions/all-in-one-asset-management/1.1.0.webp")
          .default
      }
      width={288}
      height={192}
      className="mx-a !sm:hidden container mb-10"
    />
  </>
)
