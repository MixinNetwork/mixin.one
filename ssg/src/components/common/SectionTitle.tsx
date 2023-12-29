import clsx from "clsx"

export default function SectionTitle({
  children,
  description,
  className,
  titleClassName,
  descriptionClassName,
  large,
}: {
  children: React.ReactNode
  description?: React.ReactNode
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  large?: boolean
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
          "title-container text-center font-medium",
          !large && "text-7-12",
          large && "text-8-15",
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
