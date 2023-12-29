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
        mode == "small" && "my-15 sm:mt-30 sm:mb-25 space-y-5",
        mode == "large" && "my-15 space-y-10",
        className,
      )}
    >
      <div
        className={clsx(
          "title-container text-center",
          mode == "small" && "text-7-12 font-medium leading-[1.4]",
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
            mode == "small" && "title-container text-3.5-4 text-center",
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
