import { Locales, TranslationFunctions } from "./i18n-types"
import { i18nObject, locales } from "./i18n-util"
import { loadLocale } from "./i18n-util.sync"

export interface LLProps {
  LL: TranslationFunctions
  locale: Locales
}

export const loadI18nObject = (args: IArguments) => {
  for (let i = 0; i < args.length; i++) {
    const argument = args[i]

    if (typeof argument !== "object") continue
    if (!("params" in argument)) continue
    if (typeof argument.params !== "object") continue
    if (!("locale" in argument.params)) continue
    if (!locales.includes(argument.params.locale)) continue

    loadLocale(argument.params.locale)
    return i18nObject(argument.params.locale)
  }

  throw new Error("No locale found in arguments")
}
