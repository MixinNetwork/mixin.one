import { NavBar } from "@/component/NavBar"
import { Locales } from "@/i18n/i18n-types"
import { i18nObject } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import { HearFromOurCustomers } from "../../../../component/HearFromOurCustomers"
import { MoreFeatures } from "../../../../component/MoreFeatures"
import PageHeader from "../../../../component/route/PageHeader"
import { Section1 } from "./Section1"
import Image from "next/image"

const GDPR = () => {
  return (
    <div className="bg-slate-100 pt-20 pb-40">
      <div className="px-10">
        <div className="text-center text-zinc-800 text-3xl font-medium leading-10">隐私合规</div>
        <div className="mt-7.5 text-center text-zinc-800 text-opacity-70 text-sm font-normal leading-snug">
          我们的内部隐私程序是根据欧盟 GDPR 制定的，以确保我们客户的隐私。 我们将继续改进隐私框架并持续满足其他合规要求。 欲了解更多信息，请参阅我们的隐私声明。
        </div>
      </div>
      <div className="px-5 mt-21">
        <div className="aspect-335/158 relative">
          <Image src={"/privacy/GDPR.png"} alt={"GDPR"} fill />
        </div>
      </div>
    </div>
  )
}

export default function Root({
  params: { locale },
}: {
  params: {
    locale: Locales
  }
}) {
  loadLocale(locale)
  const LL = i18nObject(locale)

  return (
    <>
      <NavBar LL={LL} locale={locale} />
      <PageHeader title={"Privacy by Design"} description="We go out of our way to ensure that you have the utmost privacy." />
      <Section1 />
      <GDPR />
      <HearFromOurCustomers />
      <MoreFeatures omit={"Privacy"} />
    </>
  )
}
