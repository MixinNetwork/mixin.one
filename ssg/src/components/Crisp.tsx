import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { useEffect } from "react"

export default function Root() {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext()

  useEffect(() => {
    // @ts-ignore
    window.CRISP_RUNTIME_CONFIG = {
      locale: currentLocale,
    }
    // @ts-ignore
    window.$crisp = []
    // @ts-ignore
    window.CRISP_WEBSITE_ID = "52662bba-be49-4b06-9edc-7baa9a78f714"
    ;(function () {
      const s = document.createElement("script")
      s.src = "https://client.crisp.chat/l.js"
      s.async = true
      document.getElementsByTagName("head")[0].appendChild(s)
    })()
  }, [currentLocale])

  return <></>
}
