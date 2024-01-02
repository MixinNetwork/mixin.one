import clsx from "clsx"

const FullItem = ({
  cover,
  title,
  description,
  children,
  className,
}: {
  cover: string
  title?: string
  description?: string
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <div
      key={title}
      className={clsx("group ", "pt-15-33.5 pb-20-33.5", className)}
    >
      <div
        className={clsx(
          "mx-a !sm:px-11.7 !md:px-13.3 !lg:px-15 container px-10",
          "gap-10-20 grid items-center",
          "sm:group-odd:grid-cols-[508fr_528fr]",
          "sm:group-even:grid-cols-[528fr_508fr]",
        )}
      >
        <img
          loading="lazy"
          src={cover}
          className="w-full sm:group-odd:order-last"
          width={528}
          height={352}
        />
        {(title || description) && (
          <div className="space-y-4">
            {title && <div className="text-5-8 font-medium">{title}</div>}
            {description && (
              <div className="text-#333 text-3.5-4 leading-[1.5] text-opacity-80">
                {description}
              </div>
            )}
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

export default FullItem
