import clsx from "clsx"

const GrayBackgroundWrapper = ({ children, bgClassName }: { children: React.ReactNode; bgClassName?: string }) => {
  return (
    <div className="relative sm:last:children:mt-25">
      <img loading="lazy" src={require("@site/static/img/common/bg_gray.webp").default} className={clsx("absolute w-full -z-1 hidden sm:block", bgClassName)} />
      {children}
    </div>
  )
}

export default GrayBackgroundWrapper
