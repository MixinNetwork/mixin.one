import clsx from "clsx"

export const SpecialLayoutItem = ({
  title,
  description,
  cover,
  coverClassName,
  points,
}: {
  title: React.ReactNode
  description: React.ReactNode
  cover: string
  coverClassName: string
  points: {
    title: string
    description: React.ReactNode
    icon: React.ReactNode
  }[]
}) => (
  <div className="group">
    <div className="text-center text-[#333] title-container text-3xl font-medium leading-10">{title}</div>
    <div className="mt-5 text-center text-[#333] title-container text-opacity-70 text-base font-normal leading-normal">{description}</div>
    <div className="mt-10 sm:mt-19 md:mt-27 lg:mt-35  grid items-center gap-10 sm:gap-32 sm:grid-cols-2">
      <img loading="lazy" src={cover} className={clsx("w-full self-start object-cover sm:group-odd:order-last", coverClassName)} />

      <div className="space-y-16">
        {points.map(({ title, description, icon }) => (
          <div key={title} className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-x-4 gap-y-5">
            {icon}
            <div className="text-[#333] text-xl font-medium leading-snug">{title}</div>
            <div className="col-span-2 text-[#333] text-opacity-80 text-base font-normal leading-relaxed">{description}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export const SpecialLayout = ({ children }) => <div className="pt-25 pb-45 container mx-auto px-5 space-y-45">{children}</div>
