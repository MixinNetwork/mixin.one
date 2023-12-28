import clsx from "clsx"

export default function SectionTitle({
  children,
  description,
  className,
  titleClassName,
  descriptionClassName,
  mode = "small",
}: {
  children: React.ReactNode
  description?: React.ReactNode
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  mode?: "large" | "small"
}) {
  return (
    <div
      className={clsx(
        "container mx-auto",
        mode == "small" &&
          "my-15 sm:mt-30 sm:mb-25 sm:space-y-6.25 md:space-y-7.5 space-y-5 lg:space-y-10",
        mode == "large" && "my-15 space-y-10",
        className,
      )}
    >
      <div
        className={clsx(
          "title-container text-center",
          mode == "small" && "text-7 sm:text-8 lg:text-9 text-3xl font-medium",
          mode == "large" &&
            "text-8 sm:text-11 md:text-15 text-#333 font-medium",
          titleClassName,
        )}
      >
        {children}
      </div>
      {description && (
        <div
          className={clsx(
            "text-opacity-66 text-#333 leading-[1.5]",
            mode == "small" && "title-container text-center text-base",
            mode == "large" && "title-container text-center",
            descriptionClassName,
          )}
        >
          {description}
        </div>
      )}
    </div>
  )
}
