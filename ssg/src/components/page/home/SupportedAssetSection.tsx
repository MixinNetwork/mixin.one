import Translate from "@docusaurus/Translate"
import { usePluginData } from "@docusaurus/useGlobalData"
import clsx from "clsx"
import SectionTitle from "../../common/SectionTitle"

export const SupportedAssetSection = () => {
  const result = usePluginData("docusaurus-plugin-mixin-assets") as {
    symbol: string
    icon_url: string
  }[][]

  return (
    <div className="pb-40 pt-5">
      <SectionTitle
        description={
          <Translate>
            Mixin supports all popular blockchains, thousands of tokens and more
            integrations ongoing.
          </Translate>
        }
      >
        <Translate>Supported Assets and Protocols</Translate>
      </SectionTitle>
      <div className="space-y-7 sm:pt-20">
        {result.map((chunk, i) => (
          <div key={i} className="sm:h-19 relative h-14 overflow-hidden">
            <div
              className={clsx(
                "gap-x-5.5 md:gap-x-11.5 absolute bottom-0 top-0 flex flex-row sm:gap-x-8",
                "animate-marquee sm:animate-marquee-sm md:animate-marquee-md",
                i === 1 && "animate-direction-reverse!",
              )}
            >
              {[...chunk, ...chunk].map((asset, i) => (
                <img
                  loading="lazy"
                  key={i + "-" + asset.symbol}
                  src={asset.icon_url}
                  alt={asset.symbol}
                  className="aspect-square h-full shrink-0"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
