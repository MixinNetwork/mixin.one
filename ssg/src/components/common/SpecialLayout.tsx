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
    <div className="title-container text-#333 text-7.5 text-center font-medium leading-10">
      {title}
    </div>
    <div className="title-container text-#333 text-4 mt-5 text-center font-normal leading-[1.5] text-opacity-70">
      {description}
    </div>
    <div className="sm:mt-19 md:mt-27 lg:mt-35 sm:gap-18  md:gap-26 mt-10 grid items-center gap-10 sm:grid-cols-2 lg:gap-32">
      <img
        loading="lazy"
        src={cover}
        className={clsx(
          "w-full self-start object-cover sm:group-odd:order-last",
          coverClassName,
        )}
      />

      <div className="space-y-16">
        {points.map(({ title, description, icon }) => (
          <div
            key={title}
            className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-x-4 gap-y-5"
          >
            {icon}
            <div className="text-#333 text-5 font-medium leading-[1.5]">
              {title}
            </div>
            <div className="text-#333 text-4 col-span-2 font-normal leading-[1.5] text-opacity-80">
              {description}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export const SpecialLayout = ({ children }) => (
  <div className="pt-25 pb-45 space-y-45 container mx-auto ">{children}</div>
)
