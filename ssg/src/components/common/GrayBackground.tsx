import clsx from "clsx"

const GrayBackgroundWrapper = ({
  children,
  bgClassName,
}: {
  children: React.ReactNode
  bgClassName?: string
}) => {
  return (
    <div className="sm:last:children:mt-25 relative">
      <img
        loading="lazy"
        src={require("@site/static/img/common/bg_gray.webp").default}
        className={clsx("-z-1 absolute hidden w-full sm:block", bgClassName)}
      />
      {children}
    </div>
  )
}

export default GrayBackgroundWrapper
