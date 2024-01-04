import React from "react"
import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"
import replace from "../../../../helper/replace"

export const Header = () => {
  const keyword = translate({
    message: "transactions signed",
  })
  return (
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
            keyword: <span className="text-blue-500">transactions signed</span>,
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
}
