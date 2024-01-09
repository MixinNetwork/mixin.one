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

      <div className="text-3.5 text-op-60 mt-4 font-normal leading-tight text-white">
        {copyright}
      </div>
    </div>
  )
}
