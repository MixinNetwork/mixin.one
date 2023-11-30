import React from "react"
import { useThemeConfig } from "@docusaurus/theme-common"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Logo from "@theme/Logo"

export function LogoAndCopyright() {
  const { footer } = useThemeConfig()
  if (!footer) {
    return null
  }
  const { copyright } = footer
  return (
    <div>
      <Logo />

      <div className="mt-4 text-white text-opacity-60 text-sm font-normal leading-tight">{copyright}</div>
    </div>
  )
}
