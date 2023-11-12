import { NavBar } from "@/component/NavBar"
import { Locales } from "@/i18n/i18n-types"
import { i18nObject } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import { useMemo } from "react"
import { FAQ } from "../../../component/FAQ"
import PageHeader from "../../../component/route/PageHeader"
import { replace } from "../../../helper/replace"
import { Intro } from "./Intro"

export default function Root({
  params: { locale },
}: {
  params: {
    locale: Locales
  }
}) {
  loadLocale(locale)
  const LL = i18nObject(locale)

  const title = useMemo(
    () =>
      replace("We believe hold crypto shouldn't be so hard and expensive", [
        {
          match: "hold crypto",
          replace: (part) => <span className="text-blue-500">{part}</span>,
        },
      ]),
    []
  )

  return (
    <>
      <NavBar LL={LL} locale={locale} />
      <PageHeader description="We go out of our way to ensure that you have the utmost privacy.">{title}</PageHeader>
      <Intro />
      <FAQ />
    </>
  )
}
