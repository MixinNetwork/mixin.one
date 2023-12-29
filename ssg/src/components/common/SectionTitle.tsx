import clsx from "clsx"

export default function SectionTitle({
  children,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: {
  children: React.ReactNode
  description?: React.ReactNode
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}) {
  return (
    <div
      className={clsx(
        "container mx-auto",
        "my-15 sm:mt-30 sm:mb-25 space-y-5",
        className,
      )}
    >
      <div
        className={clsx(
          "title-container text-center",
          "text-7-12 font-medium leading-[1.4]",
          titleClassName,
        )}
      >
        {children}
      </div>
      {description && (
        <div
          className={clsx(
            "text-opacity-66 text-#333 leading-[1.5]",
            "title-container text-3.5-4 text-center",
            descriptionClassName,
          )}
        >
          {description}
        </div>
      )}
    </div>
  )
}
