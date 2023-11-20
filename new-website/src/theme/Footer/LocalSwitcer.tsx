import React from "react"
import { useLocation } from "@docusaurus/router"
import { useAlternatePageUtils } from "@docusaurus/theme-common/internal"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import DropdownIcon from "@site/static/img/common/dropdown.svg"
import DropdownNavbarItem from "@theme/NavbarItem/DropdownNavbarItem"

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
    return {
      label: localeConfigs[locale]!.label,
      lang: localeConfigs[locale]!.htmlLang,
      to,
      target: "_self",
      autoAddBaseUrl: false,
      // selected: locale === currentLocale,
      className: "text-white! text-opacity-60 text-base font-medium",
    }
  })

  return (
    <div className="[&>*]:block [&>*]:px-0! [&_ul]:bg-white [&_ul]:bg-opacity-20">
      <DropdownNavbarItem
        className="w-fit py-1.5 pl-5 pr-2 bg-white bg-opacity-20 text-white text-opacity-60 text-base font-medium rounded-sm space-x-3.5 after:hidden!"
        items={localeItems}
        label={
          <>
            <span className="" lang={currentLocale}>
              {localeConfigs[currentLocale]!.label}
            </span>
            <DropdownIcon className="align-middle stroke-white stroke-op-20" />
          </>
        }
      />
    </div>
  )
}
