import Image from "next/image"
import clsx from "clsx"

export const SupportedAssetSection = async () => {
  const {
    data: assets,
  }: {
    data: {
      name: string
      symbol: string
      icon_url: string
      chain_id: string
    }[]
  } = await (await fetch("https://api.mixin.one/network/assets/top")).json()

  const array = Array.from(
    assets
      .filter((asset) => !/(Pando Rings|4swap |ExinSwap |Pando Innovation ETF|LP Token)/i.test(asset.name) && asset.chain_id !== "17f78d7c-ed96-40ff-980c-5dc62fecbc85")
      .reduce((acc, cur) => acc.set(cur.icon_url, cur), new Map())
      .values()
  )

  const chunkSize = Math.ceil(array.length / 3)

  const result: {
    symbol: string
    icon_url: string
  }[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize)
    result.push(chunk)
  }

  const length = result.map((item) => item.length).reduce((acc, cur) => Math.min(acc, cur), Infinity)
  result.forEach((item) => (item.length = length))

  return (
    <div className="pt-20 pb-40">
      <div className="rw-10 mx-auto container text-center text-zinc-800 text-3xl font-medium leading-10">Supported Assets and Protocols</div>
      <div className="mt-5 rw-10 mx-auto container text-center text-zinc-800 text-opacity-60 text-base font-normal leading-normal">
        We support over 3,400 tokens and 48 chains, including popular layer 1 and layer 2
      </div>
      <div className="space-y-7 pt-15 sm:pt-20">
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
                <div key={i + "-" + asset.symbol} className="relative shrink-0 aspect-square">
                  <Image src={asset.icon_url} alt={asset.symbol} fill />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
