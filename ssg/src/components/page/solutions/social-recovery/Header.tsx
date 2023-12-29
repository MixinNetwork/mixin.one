import React from "react"
import Translate from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"

export const Header = () => (
  <>
    <SectionTitle
      description={
        <Translate>
          {
            "Most users lose their cryptocurrency assets not because they are stolen, but because the owner does not manage their private keys well. 3.7 million bitcoins may be lost forever and cannot be recovered. Mixin Wallet can set up emergency contacts to recover potential loss risks, with high security and simple settings to avoid single point of failure."
          }
        </Translate>
      }
      large
    >
      <Translate>
        Why we need wide adoption of social recovery wallets?
      </Translate>
    </SectionTitle>
    <img
      loading="lazy"
      src={
        require("@site/static/img/page/solutions/social-recovery/1.1.webp")
          .default
      }
      width={335}
      height={135}
      className="mx-a !sm:block container mb-40 !hidden"
    />

    <img
      loading="lazy"
      src={
        require("@site/static/img/page/solutions/social-recovery/1.1.0.webp")
          .default
      }
      width={288}
      height={192}
      className="mx-a !sm:hidden container mb-40"
    />
  </>
)
