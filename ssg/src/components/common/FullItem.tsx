import clsx from "clsx"

const FullItem = ({
  cover,
  title,
  description,
  link,
  className,
}: {
  cover: string
  title: string
  description: string
  link?: {
    href: string
    text: string
  }
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
        <div className="space-y-4">
          <div className="text-5-8 font-medium">{title}</div>
          <div className="text-#333 text-3.5-4 leading-[1.5] text-opacity-80">
            {description}
          </div>
          {link && (
            <a
              href={link.href}
              className="!mt-15 !sm:mt-10 block bg-[#333] py-4 text-center text-white  sm:w-fit sm:px-7"
            >
              {link.text}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default FullItem
