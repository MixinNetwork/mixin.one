const GrayBackgroundWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative sm:last:children:mt-25">
      <img src={require("@site/static/img/common/bg_gray.webp").default} className="absolute w-full -z-1 hidden sm:block" />
      {children}
    </div>
  )
}

export default GrayBackgroundWrapper
