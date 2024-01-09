import { translate } from "@docusaurus/Translate"

const StatisticGridItem = ({
  title,
  description,
}: {
  title: string
  description: string
}) => (
  <div className="flex-center aspect-square flex-col space-y-2 bg-white sm:aspect-auto">
    <div className="text-8-13.5 text-#000 font-semibold">{title}</div>
    <div className="text-#000 text-3-4 text-op-70 px-2 text-center font-normal">
      {description}
    </div>
  </div>
)

export const StatisticGridSection = () => (
  <div className="bg-#D9D9D9">
    <div className="sm:py-17.5 sm:divide-x-1 bg-#D9D9D9 grid grid-cols-2 gap-[1px] sm:grid-cols-4 sm:divide-zinc-300 sm:divide-opacity-50 sm:bg-white">
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
