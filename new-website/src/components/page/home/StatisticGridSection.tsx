import { translate } from "@docusaurus/Translate"

const StatisticGridItem = ({ title, description }: { title: string; description: string }) => (
  <div className="aspect-square sm:aspect-auto flex-center flex-col space-y-2 bg-zinc-100">
    <div className="text-slate-900 text-3xl sm:text-4xl font-semibold">{title}</div>
    <div className="text-[#333] px-2 text-center text-opacity-70 text-xs sm:text-sm font-normal">{description}</div>
  </div>
)

export const StatisticGridSection = () => (
  <div className="bg-zinc-100">
    <div className="bg-opacity-50 grid grid-cols-2 sm:grid-cols-4 bg-zinc-300 sm:bg-opacity-100 sm:bg-zinc-100 sm:py-17.5 sm:divide-opacity-50 sm:divide-x-1 sm:divide-zinc-300 gap-[1px] container mx-auto">
      <StatisticGridItem
        title={translate({
          message: "2017",
        })}
        description={translate({
          message: "Since",
        })}
      />
      <StatisticGridItem
        title={translate({
          message: "$1B+",
        })}
        description={translate({
          message: "AUM",
        })}
      />
      <StatisticGridItem
        title={translate({
          message: "$1T+",
        })}
        description={translate({
          message: "Transaction Volume",
        })}
      />
      <StatisticGridItem
        title={translate({
          message: "$1M+",
        })}
        description={translate({
          message: "Customers",
        })}
      />
    </div>
  </div>
)
