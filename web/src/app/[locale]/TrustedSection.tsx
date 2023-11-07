import Image from "next/image"
const TrustedItem = ({ name, icon }: { name: string; icon: string }) => (
  <div className="space-y-3">
    <Image src={"/home/trusted/" + icon} alt={name} width={60} height={60} className="mx-auto" />
    <div className="text-center text-white text-xs font-medium leading-3">{name}</div>
  </div>
)

export const TrustedSection = () => (
  <div className="bg-zinc-800 pt-20 pb-40 sm:pb-20 px-5 text-white">
    <div className="text-center text-3xl font-medium leading-10">Trusted by</div>
    <div className="mt-5 text-center text-white text-opacity-60 text-base sm:text-sm font-normal leading-normal">Mixin Safe powers leading organizations from Payment to DAOs, and beyond</div>
    <div className="container mx-auto grid grid-cols-3 mt-20 sm:mt-15 sm:grid-cols-6 px-5 gap-y-15 gap-x-12.5 sm:gap-x-10">
      <TrustedItem name={"MixPay"} icon={"mixPay.webp"} />
      <TrustedItem name={"Pando Proto"} icon={"pandoProto.webp"} />
      <TrustedItem name={"ExinPool"} icon={"exinPool.webp"} />
      <TrustedItem name={"BigONE"} icon={"bigONE.webp"} />
      <TrustedItem name={"B.Watch"} icon={"bWatch.webp"} />
      <TrustedItem name={"OptionDance"} icon={"optionDance.webp"} />
    </div>
  </div>
)
