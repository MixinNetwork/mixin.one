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
        "mt-15-30 mb-15-25",
        !large && "space-y-5",
        large && "space-y-7",
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
            "text-opacity-66 text-#000 leading-[1.5]",
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
