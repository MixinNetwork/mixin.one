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
    <div className="pt-5 pb-40">
      <SectionTitle description={<Translate>We support over 3,400 tokens and 48 chains, including popular layer 1 and layer 2.</Translate>}>
        <Translate>Supported Assets and Protocols</Translate>
      </SectionTitle>
      <div className="space-y-7 sm:pt-20">
        {result.map((chunk, i) => (
          <div key={i} className="relative overflow-hidden h-14 sm:h-19">
            <div
              className={clsx(
                "flex flex-row gap-x-5.5 sm:gap-x-8 md:gap-x-11.5 absolute top-0 bottom-0",
                "animate-marquee sm:animate-marquee-sm md:animate-marquee-md",
                i === 1 && "animate-direction-reverse!"
              )}
            >
              {[...chunk, ...chunk].map((asset, i) => (
                <img loading="lazy" key={i + "-" + asset.symbol} src={asset.icon_url} alt={asset.symbol} className="shrink-0 aspect-square h-full" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
