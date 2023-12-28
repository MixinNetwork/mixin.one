import clsx from "clsx"

const FullItem = ({
  cover,
  title,
  description,
  className,
}: {
  cover: string
  title: string
  description: string
  className?: string
}) => {
  return (
    <div
      key={title}
      className={clsx("group ", "pt-15-33.5 pb-20-33.5", className)}
    >
      <div
        className={clsx(
          "mx-a px-0-10 container",
          "gap-10-20 grid items-center",
          "group-odd:grid-cols-[508fr_528fr]",
          "group-even:grid-cols-[528fr_508fr]",
        )}
      >
        <img
          loading="lazy"
          src={cover}
          className="w-full sm:group-odd:order-last"
          width={528}
          height={352}
        />
        <div className="space-y-4">
          <div className="text-5-8 font-medium">{title}</div>
          <div className="text-#333 text-3.5-4 text-opacity-80">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullItem
