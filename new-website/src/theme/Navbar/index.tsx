import Logo from "@theme/Logo"
import Hamburger from "@site/static/img/common/nav/hamburger.svg"

import React from "react"
import Link from "@docusaurus/Link"
import clsx from "clsx"
import { useThemeConfig } from "@docusaurus/theme-common"
import { splitNavbarItems } from "@docusaurus/theme-common/internal"

function useNavbarItems() {
  return useThemeConfig().navbar.items
}

export default function Navbar({ dark }: { dark?: boolean }): JSX.Element {
  const items = useNavbarItems()
  const [leftItems, rightItems] = splitNavbarItems(items)
  // default class navbar
  return (
    <nav className={clsx("px-6 py-2.5 sm:py-5 sm:px-7.5 flex flex-row justify-between space-x-2 items-center container mx-auto", dark && "dark")}>
      <span className="md:basis-1/3">
        <Logo />
      </span>

      <span className="hidden sm:flex flex-row justify-end items-center space-x-4.5 text-sm grow md:basis-1/3 dark:text-white">
        {leftItems.map((item) => {
          return (
            <Link key={item.label} {...item}>
              {item.label}
            </Link>
          )
        })}
      </span>

      <span className="hidden sm:flex flex-row justify-end items-center space-x-4.5 text-sm shrink-0 ml-10! md:ml-0 md:basis-1/3 dark:text-white">
        {rightItems.map((item) => {
          return (
            <Link key={item.label} {...item}>
              {item.label}
            </Link>
          )
        })}
      </span>

      <button className="sm:hidden">
        <Hamburger className="dark:fill-white dark:fill-op-90" />
      </button>
    </nav>
  )
}
