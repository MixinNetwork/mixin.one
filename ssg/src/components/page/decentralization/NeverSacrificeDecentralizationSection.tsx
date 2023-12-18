import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../common/SectionTitle"
import GrayBackgroundWrapper from "../../common/GrayBackground"

const Item = ({
  cover,
  description,
}: {
  cover: string
  description: string
}) => (
  <div className="rounded-sm bg-white shadow">
    <img
      loading="lazy"
      src={require("@site/static/img/page/decentralization/" + cover).default}
      alt={description}
      className="aspect-335/250 w-full"
    />
    <div className="p-5 pb-8 text-base font-normal leading-relaxed text-[#333] sm:px-10 sm:pb-12 sm:pt-6 md:pb-16 lg:pb-24">
      {description}
    </div>
  </div>
)

export const NeverSacrificeDecentralizationSection = () => (
  <>
    <SectionTitle
      description={translate({
        message:
          "Never worry about losing your keys or centralized evil custody.",
      })}
    >
      <Translate>Never Sacrifice Decentralization</Translate>
    </SectionTitle>

    <GrayBackgroundWrapper>
      <div className="pb-15 container mx-auto grid gap-5 px-5 sm:grid-cols-2">
        <Item
          cover={"1.1.webp"}
          description={translate({
            message:
              "Born after the 2008 economy crisis originated from the centralized financial system, Bitcoin is believed to be the ultimate solution to the future of human finance. Decentralization is in the blood of nature of Bitcoin, it's not something can be a trade-off.",
          })}
        />
        <Item
          cover={"1.2.webp"}
          description={translate({
            message: `The saying "Not your keys, not your coins" is a cornerstone principle for Bitcoin enthusiasts who embrace its decentralized nature. Though managing private keys may present a challenge, we should remain steadfast in avoiding centralized firms as custodians for Bitcoin holdings.`,
          })}
        />
      </div>
    </GrayBackgroundWrapper>
  </>
)
