import { Locales, TranslationFunctions } from "../i18n/i18n-types"
import { i18nObject } from "../i18n/i18n-util"
import { loadLocale } from "../i18n/i18n-util.sync"

export const genStaticParams = (locales: Locales[], slug: string, path: string) => {
  const paths = path
    .split("/")
    .map((item) => item.trim())
    .filter(Boolean)

  return [undefined, ...locales].map((locale) => ({
    [slug]: locale ? [locale, ...paths] : paths,
  }))
}

export const getLocalePath = (locales: Locales[], pathParams: string[] = []): [Locales, TranslationFunctions, string] => {
  let locale: Locales = "en"
  let path = "/" + pathParams.join("/")

  if (pathParams.length && locales.includes(pathParams[0] as any)) {
    locale = pathParams.shift() as Locales
    path = "/" + pathParams.join("/")
  }

  loadLocale(locale)
  const LL = i18nObject(locale)
  return [locale, LL, path]
}
