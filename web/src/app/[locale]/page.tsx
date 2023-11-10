import Image from "next/image"
import { replace } from "@/helper/replace"
import { LLProps } from "@/i18n/custom"
import { i18nObject, locales } from "@/i18n/i18n-util"
import { FAQ } from "../../component/FAQ"
import { AuditReportSection } from "./AuditReportSection"
import { TrustedSection } from "./TrustedSection"
import { SupportedAssetSection } from "./SupportedAssetSection"
import { EasyManageSection } from "./EasyManageSection"
import { MainProductSection } from "./MainProductSection"
import { FeatureCardSection } from "./FeatureCardSection"
import { SolutionSection } from "./SolutionSection"
import { StatisticGridSection } from "./StatisticGridSection"
import { NavBar } from "@/component/NavBar"
import { Locales } from "../../i18n/i18n-types"
import { loadLocale } from "../../i18n/i18n-util.sync"

const Header = ({ LL, locale }: LLProps) => {
  const title = replace(LL.home.title(), [
    {
      match: LL.home.titleKeyword(),
      replace: (match) => <span className="text-blue-500">{match}</span>,
    },
  ])

  return (
    <div className="bg-gradient-to-b from-[#171924] to-[#222C3F] sm:bg-none sm:relative">
      <Image src="/home/bgHeader.webp" alt={"header"} fill className="object-cover -z-10 hidden sm:block" />
      <NavBar LL={LL} locale={locale} type="white" />
      <div className="px-10 pt-15 pb-19 sm:pt-12.5 md:pt-20 lg:pt-54 sm:pb-16.5 sm:pb-32.5 lg:pb-79 sm:text-center container mx-auto">
        <div className="text-white text-4xl sm:text-5xl font-normal leading-[48px]">{title}</div>
        <div className="mt-7.5 sm:mt-6 md:mt-8 lg:mt-12 text-white text-opacity-80 text-sm font-normal leading-snug">{LL.home.description()}</div>

        <div className="mt-24.5 sm:mt-12.5 md:mt-18.5 lg:mt-21.5 grid gap-y-5 gap-x-7.5 sm:grid-cols-2 sm:w-fit mx-auto">
          <a className="order-last sm:order-none sm:w-57.5 h-12 bg-neutral-100 rounded-sm text-black text-sm font-medium uppercase flex-center">{LL.home.getStarted()}</a>
          <a className="sm:w-57.5 h-12 rounded-sm border border-neutral-100 text-white text-sm font-medium w-full uppercase flex-center">{LL.home.bookConsultation()}</a>
        </div>
      </div>
    </div>
  )
}

export default function Home({
  params: { locale },
}: {
  params: {
    locale: Locales
  }
}) {
  loadLocale(locale)
  const LL = i18nObject(locale)
  const llProps: LLProps = { LL, locale }
  return (
    <>
      <Header {...llProps} />
      <StatisticGridSection />
      <SolutionSection {...llProps} />
      <FeatureCardSection {...llProps} />
      <MainProductSection />
      <EasyManageSection {...llProps} />
      <SupportedAssetSection />
      <TrustedSection />
      <AuditReportSection />
      <FAQ />
    </>
  )
}
