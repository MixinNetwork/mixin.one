import React from "react"
import Translate from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"

export const Header = () => (
  <>
    <SectionTitle
      description={
        <Translate>
          {
            "Stop wrangling signers, squinting at addresses, and spending hours creating transactions. Start executing fast."
          }
        </Translate>
      }
      large
    >
      <Translate
        values={{
          keyword: (
            <span className="text-blue-500">
              <Translate>transactions signed</Translate>
            </span>
          ),
        }}
      >
        {"Get your multisig {keyword} and executed fast"}
      </Translate>
    </SectionTitle>

    <img
      loading="lazy"
      src={
        require("@site/static/img/page/solutions/collaboration/1.1.webp")
          .default
      }
      width={331}
      height={173}
      className="mx-a pb-30 container"
    />
  </>
)
