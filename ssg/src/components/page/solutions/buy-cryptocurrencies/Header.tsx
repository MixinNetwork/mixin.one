import React from "react"
import Translate, { translate } from "@docusaurus/Translate"
import replace from "../../../../helper/replace"
import clsx from "clsx"

export const Header = () => {
  const keyword = translate({
    message: "buy crypto",
  })
  return (
    <div
      className={clsx(
        "mt-15 container mx-auto grid justify-items-center gap-y-20 ",
        "sm:mt-30 sm:mt-25",
        "md:gap-x-0-35.5 md:grid-cols-2",
      )}
    >
      <div className={clsx("space-y-10 text-center", "md:my-a md:text-start")}>
        <div
          className={clsx(
            "text-8 font-medium",
            "sm:text-11",
            "md:text-16 md:leading-[1.125]",
          )}
        >
          {replace(
            translate(
              {
                message: "Instantly {keyword} with decentralized",
              },
              {
                keyword: keyword,
              },
            ),
            [
              {
                match: keyword,
                replace(part) {
                  return <span className="text-blue-500">{part}</span>
                },
              },
            ],
          )}
        </div>
        <div className="text-#333 text-op-80">
          <Translate>
            Buying crypto with credit or debit card on Mixin app is easy and
            safe.
          </Translate>
        </div>
      </div>
      <img
        loading="lazy"
        src={
          require("@site/static/img/page/solutions/buy-cryptocurrencies/1.1.webp")
            .default
        }
        width={1587}
        height={1554}
        className={clsx("max-w-140", "md:max-w-a w-full")}
      />
    </div>
  )
}
