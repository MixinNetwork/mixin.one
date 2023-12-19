import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { useEffect } from "react"

export default function Root() {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext()

  useEffect(() => {
    import("crisp-sdk-web").then(({ Crisp }) => {
      Crisp.configure("52662bba-be49-4b06-9edc-7baa9a78f714", {
        autoload: true,
        locale: currentLocale,
      })
    })
  }, [currentLocale])

  return <></>
}
