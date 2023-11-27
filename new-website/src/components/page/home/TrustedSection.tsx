import Translate from "@docusaurus/Translate"
import SectionTitle from "../../common/SectionTitle"

const TrustedItem = ({ name, icon }: { name: string; icon: string }) => (
  <div className="space-y-3 max-w-26">
    <img loading="lazy" src={require("@site/static/img/page/home/trusted/" + icon).default} alt={name} className="mx-auto aspect-square w-15 object-cover" />
    <div className="text-center text-white text-xs font-medium leading-3">{name}</div>
  </div>
)

export const TrustedSection = () => (
  <div className="bg-zinc-800 pt-5 pb-40 sm:pb-20 px-5 text-white">
    <SectionTitle
      className="text-white!"
      descriptionClassName="text-white! text-opacity-60!"
      description={<Translate>We have an ongoing security audit process that keeps all Mixin infrastructures secured.</Translate>}
    >
      <Translate>Trusted by</Translate>
    </SectionTitle>
    <div className="max-w-230 mx-auto grid grid-cols-3 mt-5 sm:mt-15 sm:grid-cols-6 px-5 gap-y-15 gap-x-12.5 sm:gap-x-17">
      <TrustedItem name={"MixPay"} icon={"mixPay.webp"} />
      <TrustedItem name={"Pando Proto"} icon={"pandoProto.webp"} />
      <TrustedItem name={"ExinPool"} icon={"exinPool.webp"} />
      <TrustedItem name={"BigONE"} icon={"bigONE.webp"} />
      <TrustedItem name={"B.Watch"} icon={"bWatch.webp"} />
      <TrustedItem name={"OptionDance"} icon={"optionDance.webp"} />
    </div>
  </div>
)
