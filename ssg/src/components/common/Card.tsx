import clsx from "clsx"

const Card = ({
  cover,
  title,
  description,
  className,
}: {
  cover: string
  title: React.ReactNode
  description: React.ReactNode
  className?: string
}) => (
  <div
    className={clsx(
      "bg-#F2F2F2 bg-op-50 pt-15-12 pb-20-12 gap-x-0-24 group grid w-full items-center gap-y-10 rounded-sm",
      "odd:pr-0-25.5 odd:pl-0-30.5 sm:odd:grid-cols-[460fr_420fr]",
      "even:pl-0-25.5 even:pr-0-30.5 sm:even:grid-cols-[420fr_460fr]",
      className,
    )}
  >
    <img
      loading="lazy"
      src={cover}
      className="w-full group-odd:sm:order-last"
      width={460}
      height={300}
    />

    <div className="px-4-0 space-y-4">
      <div className="text-5-8 font-medium">{title}</div>
      <div className="text-#333 text-3.5-4 leading-[1.5] text-opacity-80">
        {description}
      </div>
    </div>
  </div>
)

export default Card
