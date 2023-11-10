import { NavBar } from "@/component/NavBar"
import { Locales } from "@/i18n/i18n-types"
import { i18nObject } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import PageHeader from "../../../component/route/PageHeader"
import { FAQ } from "../../../component/FAQ"
import { Section1 } from "./Section1"
import { Section2 } from "./Section2"
import { Section3 } from "./Section3"
import { Section4 } from "./Section4"

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
      <PageHeader title={"How it Secures"} description="We never invent our own cryptographic techniques" />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <FAQ className="bg-slate-100" />
    </>
  )
}
