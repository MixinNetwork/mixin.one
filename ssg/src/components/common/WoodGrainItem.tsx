export const WoodGrainItem = ({
  icon,
  title,
  description,
  background,
}: {
  icon: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
  background: 1 | 2 | 3
}) => {
  return (
    <div className="relative">
      <img
        loading="lazy"
        src={
          require(
            "@site/static/img/common/wood_grain_item/" + background + ".webp",
          ).default
        }
        className="fill object-cover"
      />

      <div className="border-px px-4-6 pt-6-10 h-full border-[#D9D9D9] bg-[#F2F2F280] pb-10">
        {icon}
        <div className="text-5-6 mt-11.5 font-medium">{title}</div>
        <div className="text-#000 text-op-70 text-3.5-4 mt-5 leading-[1.5]">
          {description}
        </div>
      </div>
    </div>
  )
}
