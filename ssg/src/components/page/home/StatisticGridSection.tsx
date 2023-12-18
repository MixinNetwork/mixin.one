import { translate } from "@docusaurus/Translate"

const StatisticGridItem = ({
  title,
  description,
}: {
  title: string
  description: string
}) => (
  <div className="flex-center aspect-square flex-col space-y-2 bg-zinc-100 sm:aspect-auto">
    <div className="text-3xl font-semibold text-slate-900 sm:text-4xl">
      {title}
    </div>
    <div className="px-2 text-center text-xs font-normal text-[#333] text-opacity-70 sm:text-sm">
      {description}
    </div>
  </div>
)

export const StatisticGridSection = () => (
  <div className="bg-zinc-100">
    <div className="sm:py-17.5 sm:divide-x-1 container mx-auto grid grid-cols-2 gap-[1px] bg-zinc-300 bg-opacity-50 sm:grid-cols-4 sm:divide-zinc-300 sm:divide-opacity-50 sm:bg-zinc-100 sm:bg-opacity-100">
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
          message: "1M+",
        })}
        description={translate({
          message: "Customers",
        })}
      />
    </div>
  </div>
)
