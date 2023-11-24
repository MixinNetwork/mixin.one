import React from "react"
import Link from "@docusaurus/Link"
import useBaseUrl from "@docusaurus/useBaseUrl"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { useThemeConfig, type NavbarLogo } from "@docusaurus/theme-common"
import ThemedImage from "@theme/ThemedImage"
import type { Props } from "@theme/Logo"
import clsx from "clsx"

import CustomLogo from "@site/static/img/logo.svg"

export default function Logo(props: Props): JSX.Element {
  const {
    siteConfig: { title },
  } = useDocusaurusContext()
  const {
    navbar: { title: navbarTitle, logo },
  } = useThemeConfig()

  const { imageClassName, titleClassName, ...propsRest } = props
  const logoLink = useBaseUrl(logo?.href || "/")

  // If visible title is shown, fallback alt text should be
  // an empty string to mark the logo as decorative.
  const fallbackAlt = navbarTitle ? "" : title

  // Use logo alt text if provided (including empty string),
  // and provide a sensible fallback otherwise.
  const alt = logo?.alt ?? fallbackAlt

  return (
    <Link
      to={logoLink}
      {...propsRest}
      {...(logo?.target && { target: logo.target })}
      className={clsx("flex-center w-fit space-x-2 decoration-0! dark:text-white dark:text-op-90 hover:text-black hover:text-op-100", props.className)}
    >
      <CustomLogo className={clsx("dark:fill-white dark:fill-op-90", props.imageClassName)} />
      {navbarTitle != null && <b className={clsx("text-lg font-semibold", props.titleClassName)}>{navbarTitle}</b>}
    </Link>
  )
}
