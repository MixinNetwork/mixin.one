import Logo from "@theme/Logo"
import Hamburger from "@site/static/img/common/nav/hamburger.svg"

import React from "react"
import Link from "@docusaurus/Link"
import clsx from "clsx"
import { NavbarItem, useThemeConfig } from "@docusaurus/theme-common"
import { splitNavbarItems } from "@docusaurus/theme-common/internal"
import useBaseUrl from "@docusaurus/useBaseUrl"
import Arrow from "@site/static/img/common/nav/arrow.svg"

const Item = (data: NavbarItem) => {
  if (data.items?.length) {
    return (
      <div className="group relative click-area-4">
        {data.label}
        <div className={clsx("absolute -left-7.5 pt-6 w-98 rounded-sm transition-all group-hover:op-100 group-hover:pointer-events-auto", "opacity-0 pointer-events-none")}>
          <div className="pt-7.5 pb-10 px-2.5 bg-white">
            <div className="ms-5 text-zinc-800 text-opacity-70 text-xs font-normal uppercase">{data.label}</div>
            <div className="mt-4 space-y-1">
              {data.items.map((item) => {
                const { label, icon, to, description } = item as {
                  label: string
                  icon: string
                  to: string
                  description: string
                }

                return (
                  <Link key={label} to={to} className="px-5 pt-3.5 pb-2.5 hover:bg-zinc-100 rounded-lg group/item grid gap-x-5 gap-y-2.5 grid-cols-[auto_1fr]">
                    <img src={useBaseUrl(icon)} width={24} height={24} className="row-span-2" />
                    <div className="text-zinc-800 text-sm font-medium leading-tight group-hover/item:text-blue-500">{label}</div>
                    <div className="text-zinc-800 text-opacity-70 text-xs font-normal leading-none">{description}</div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
  return <Link {...data}>{data.label}</Link>
}

const MobileItem = (data: NavbarItem) => {
  const defaultClassName = "text-zinc-800 text-sm font-normal"
  if (data.items?.length) {
    const id = "nav-" + data.label
    return (
      <div>
        <input id={id} type="checkbox" className="hidden peer" />
        <label htmlFor={id} className={clsx("group py-8 px-6 flex flex-row justify-between peer-checked:svg:-rotate-180")}>
          <div className={clsx("group-hover:text-zinc-200", defaultClassName)}>{data.label}</div>
          <Arrow className="transition-all duration-300" />
        </label>

        <div className="grid grid-rows-[0fr] transition-all duration-500 peer-checked:grid-rows-[1fr] peer-checked:children:border-t-1">
          <div className="overflow-hidden">
            <div className="text-zinc-800 text-opacity-70 text-xs font-normal uppercase pb-5 px-6 pt-8">{data.label}</div>
            <div>
              {data.items.map((item) => (
                <Link key={item.label} {...item} className="block py-3.5 px-7 text-zinc-800 hover:text-blue-500 hover:bg-zinc-100 text-sm font-medium leading-tight">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Link {...data} className={clsx("py-8 px-6 block", defaultClassName)}>
      {data.label}
    </Link>
  )
}

export default function Navbar({ dark }: { dark?: boolean }): JSX.Element {
  const {
    navbar: { items },
  } = useThemeConfig()
  const [leftItems, rightItems] = splitNavbarItems(items)
  // default class navbar
  return (
    <nav className={clsx("relative px-6 py-2.5 sm:py-5 sm:px-7.5 flex flex-row justify-between gap-x-2 items-center container mx-auto", dark && "dark")}>
      <span className="md:basis-1/3">
        <Logo />
      </span>

      <span className="hidden sm:flex flex-row justify-end items-center space-x-14 text-sm grow md:basis-1/3 dark:text-white">
        {leftItems.map((item) => {
          return <Item key={item.label} {...item} />
        })}
      </span>

      <span className="hidden sm:flex flex-row justify-end items-center space-x-14 text-sm shrink-0 ml-10! md:ml-0 md:basis-1/3 dark:text-white">
        {rightItems.map((item) => {
          return (
            <Link key={item.label} {...item}>
              {item.label}
            </Link>
          )
        })}
      </span>

      <input id="nav" type="checkbox" className="hidden peer" />
      <label htmlFor="nav" className="sm:hidden click-area-4">
        <Hamburger className="dark:fill-white dark:fill-op-90" />
      </label>

      <div className="absolute top-full inset-x-0 grid grid-rows-[0fr] transition-all duration-300 peer-checked:grid-rows-[1fr] z-100">
        <div className="overflow-hidden bg-white divide-solid divide-y-1">
          {leftItems.map((item) => (
            <MobileItem key={item.label} {...item} />
          ))}

          {rightItems.map((item) => (
            <Link key={item.label} {...item} className="block p-6 ">
              <div className="w-fit py-2.5 px-7 bg-zinc-800 rounded-sm text-white text-base font-medium leading-none">{item.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
