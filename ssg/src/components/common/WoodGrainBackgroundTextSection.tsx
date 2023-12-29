export const WoodGrainBackgroundTextSection = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <div className="container mx-auto">
    <div className="pb-15 lg:px-19 lg:py-27 md:px-15 relative rounded-sm px-5 pt-10 sm:px-10 md:py-20">
      <img
        loading="lazy"
        src={require("@site/static/img/common/woodGrain.webp").default}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="text-3.5-4.5 text-center leading-[1.5] text-white text-opacity-90">
        {children}
      </div>
    </div>
  </div>
)
