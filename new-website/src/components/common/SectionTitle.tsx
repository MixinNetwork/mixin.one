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
    <div className={clsx("container mx-auto py-15 space-y-5 sm:space-y-6.25 md:space-y-7.5 lg:space-y-10", className)}>
      <div className={clsx("text-center text-[#333] text-7 sm:text-8 lg:text-9 text-3xl font-medium title-container", titleClassName)}>{children}</div>
      {description && <div className={clsx("text-center text-[#333] text-opacity-66 text-base font-normal leading-normal title-container", descriptionClassName)}>{description}</div>}
    </div>
  )
}
