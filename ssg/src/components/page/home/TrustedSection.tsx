import Translate from "@docusaurus/Translate"
import SectionTitle from "../../common/SectionTitle"

const TrustedItem = ({ name, icon }: { name: string; icon: string }) => (
  <div className="space-y-3">
    <img
      loading="lazy"
      src={require("@site/static/img/page/home/trusted/" + icon).default}
      alt={name}
      className="w-15 mx-auto aspect-square object-cover"
    />
    <div className="text-3-4 text-op-90 text-center font-medium leading-3 text-white">
      {name}
    </div>
  </div>
)

export const TrustedSection = () => (
  <div className="md:pb-35 bg-#000 pb-40 pt-5 text-white sm:pb-20 md:pt-10">
    <SectionTitle
      titleClassName="text-white!"
      descriptionClassName="text-white! text-op-60!"
      description={
        <Translate>
          Mixin powers leading organizations from Payment to DAOs, and beyond.
        </Translate>
      }
    >
      <Translate>Trusted by</Translate>
    </SectionTitle>
    <div className="gap-y-15 lg:max-w-240 container mx-auto mt-5 grid grid-cols-3 place-items-center items-center justify-between sm:flex">
      <TrustedItem name={"MixPay"} icon={"mixPay.webp"} />
      <TrustedItem name={"Pando Proto"} icon={"pandoProto.webp"} />
      <TrustedItem name={"ExinPool"} icon={"exinPool.webp"} />
      <TrustedItem name={"BigONE"} icon={"bigONE.webp"} />
      <TrustedItem name={"B.Watch"} icon={"bWatch.webp"} />
      <TrustedItem name={"OptionDance"} icon={"optionDance.webp"} />
    </div>
  </div>
)
