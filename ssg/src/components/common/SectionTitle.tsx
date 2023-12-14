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
        "py-15 sm:space-y-6.25 md:space-y-7.5 container mx-auto space-y-5 lg:space-y-10",
        className,
      )}
    >
      <div
        className={clsx(
          "text-7 sm:text-8 lg:text-9 title-container text-center text-3xl font-medium text-[#333]",
          titleClassName,
        )}
      >
        {children}
      </div>
      {description && (
        <div
          className={clsx(
            "text-opacity-66 title-container text-center text-base font-normal leading-normal text-[#333]",
            descriptionClassName,
          )}
        >
          {description}
        </div>
      )}
    </div>
  )
}
