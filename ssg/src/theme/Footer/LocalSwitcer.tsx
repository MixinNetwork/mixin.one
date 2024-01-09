import React from "react"
import { useLocation } from "@docusaurus/router"
import { useAlternatePageUtils } from "@docusaurus/theme-common/internal"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import DropdownIcon from "@site/static/img/common/dropdown.svg"
import DropdownNavbarItem from "@theme/NavbarItem/DropdownNavbarItem"
import Cookies from "js-cookie"
import clsx from "clsx"

export function LocalSwitcer({}) {
  const {
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext()
  const alternatePageUtils = useAlternatePageUtils()
  const { search, hash } = useLocation()

  const localeItems = locales.map((locale) => {
    const baseTo = `pathname://${alternatePageUtils.createUrl({
      locale,
      fullyQualified: false,
    })}`
    // preserve ?search#hash suffix on locale switches
    const to = `${baseTo}${search}${hash}`
    const lang = localeConfigs[locale]!.htmlLang
    return {
      label: localeConfigs[locale]!.label,
      lang: lang,
      to,
      target: "_self",
      autoAddBaseUrl: false,
      // selected: locale === currentLocale,
      className: "text-white! text-op-60 text-3.5-4 font-medium",
      onClick: () => {
        Cookies.set("lang", lang)
      },
    }
  })

  return (
    <div
      className={clsx(
        "w-fit",
        "[&>*]:block! [&>*]:px-0!",
        "![&_ul]:translate-y-[4.5px] [&_ul]:pe-8.5 [&_ul]:top-full [&_ul]:min-w-fit [&_ul]:rounded-sm [&_ul]:bg-white [&_ul]:bg-opacity-20",
      )}
    >
      <DropdownNavbarItem
        className="after:hidden! text-3.5-4 text-op-60 w-fit space-x-3.5 rounded-sm bg-white bg-opacity-20 py-1.5 pl-5 pr-2 font-medium text-white"
        items={localeItems}
        label={
          <>
            <span className="" lang={currentLocale}>
              {localeConfigs[currentLocale]!.label}
            </span>
            <DropdownIcon className="stroke-op-20 stroke-white align-middle" />
          </>
        }
      />
    </div>
  )
}
