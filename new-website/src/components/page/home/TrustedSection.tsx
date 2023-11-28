import Translate from "@docusaurus/Translate"
import SectionTitle from "../../common/SectionTitle"

const TrustedItem = ({ name, icon }: { name: string; icon: string }) => (
  <div className="space-y-3">
    <img loading="lazy" src={require("@site/static/img/page/home/trusted/" + icon).default} alt={name} className="mx-auto aspect-square w-15 object-cover" />
    <div className="text-center text-white text-xs font-medium leading-3">{name}</div>
  </div>
)

export const TrustedSection = () => (
  <div className="bg-zinc-800 pt-5 pb-40 sm:pb-20 text-white">
    <SectionTitle
      titleClassName="text-white!"
      descriptionClassName="text-white! text-opacity-60!"
      description={<Translate>Mixin powers leading organizations from Payment to DAOs, and beyond.</Translate>}
    >
      <Translate>Trusted by</Translate>
    </SectionTitle>
    <div className="mx-auto w-fit grid grid-cols-3 justify-between items-center place-items-center mt-5 sm:mt-15 sm:grid-cols-6 gap-x-8 gap-y-15 sm:gap-x-6 md:gap-x-15.5 sm:px-12 md:px-0">
      <TrustedItem name={"MixPay"} icon={"mixPay.webp"} />
      <TrustedItem name={"Pando Proto"} icon={"pandoProto.webp"} />
      <TrustedItem name={"ExinPool"} icon={"exinPool.webp"} />
      <TrustedItem name={"BigONE"} icon={"bigONE.webp"} />
      <TrustedItem name={"B.Watch"} icon={"bWatch.webp"} />
      <TrustedItem name={"OptionDance"} icon={"optionDance.webp"} />
    </div>
  </div>
)
