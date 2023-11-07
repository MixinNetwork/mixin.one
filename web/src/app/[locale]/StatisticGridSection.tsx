const StatisticGridItem = ({ title, description }: { title: string; description: string }) => (
  <div className="aspect-square sm:aspect-auto flex-center flex-col space-y-2 bg-zinc-100">
    <div className="text-slate-900 text-3xl sm:text-4xl font-semibold">{title}</div>
    <div className="text-zinc-800 px-10 text-center text-opacity-70 text-xs sm:text-sm font-normal">{description}</div>
  </div>
)

export const StatisticGridSection = () => (
  <div className="bg-zinc-100">
    <div className="bg-opacity-50 grid grid-cols-2 sm:grid-cols-4 bg-zinc-300 sm:bg-opacity-100 sm:bg-zinc-100 sm:py-17.5 sm:divide-opacity-50 sm:divide-x-1 sm:divide-zinc-300 gap-[1px] container mx-auto">
      <StatisticGridItem key="Since" title={"2017"} description={"Since"} />
      <StatisticGridItem key={"Assets under management"} title={"$1B+"} description={"Assets under management"} />
      <StatisticGridItem key={"Per day transaction volume"} title={"1B"} description={"Per day transaction volume"} />
      <StatisticGridItem key={"Customers"} title={"1M+"} description={"Customers"} />
    </div>
  </div>
)
