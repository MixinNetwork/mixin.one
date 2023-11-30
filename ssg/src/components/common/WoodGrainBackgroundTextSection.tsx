export const WoodGrainBackgroundTextSection = ({ children }: { children: React.ReactNode }) => (
  <div className="container mx-auto">
    <div className="relative rounded-sm px-5 pt-10 pb-15 lg:px-19 lg:py-27 md:py-20 md:px-15 sm:px-10">
      <img loading="lazy" src={require("@site/static/img/common/woodGrain.webp").default} className="object-cover absolute inset-0 h-full w-full -z-10" />
      <div className="text-white text-opacity-90 text-center text-base font-normal leading-relaxed">{children}</div>
    </div>
  </div>
)
