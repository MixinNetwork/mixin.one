import Image from "next/image"

export const TrySafeSection = () => (
  <div className="relative">
    <Image src={"/home/trySafeBg.svg"} alt={"try safe background"} fill className="-z-10 object-cover" />
    <div className="pt-20 pb-30 px-2.5 grid md:grid-cols-2 container mx-auto">
      <div className="relative aspect-355/204 md:aspect-657/376 md:order-last">
        <Image src={"/home/trySafe.webp"} alt={"try safe"} fill />
      </div>
      <div className="md:flex md:flex-col md:justify-between px-10 md:px-0">
        <div className="mt-17.5 md:mt-0 md:w-fit mx-auto text-white text-3xl font-medium leading-10">{"Don't Miss Your Chance to Inherit Bitcoin"}</div>
        <div className="mt-7 md:mt-0 md:w-fit mx-auto text-white text-sm font-normal leading-normal">
          Book a demo to see how Mixin Safe can create wallets and support multi-party approval transfers, and ask us which solution is right for you.
        </div>
        <a className="mt-7 md:mt-0 w-fit py-4 px-7 bg-white bg-opacity-95 rounded-sm flex-center text-zinc-800 text-base font-medium leading-none">Schedule a demo</a>
      </div>
    </div>
  </div>
)
