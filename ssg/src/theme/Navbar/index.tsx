import Logo from "@theme/Logo"
import Hamburger from "@site/static/img/common/nav/hamburger.svg"

import React from "react"
import Link from "@docusaurus/Link"
import clsx from "clsx"
import { NavbarItem, useThemeConfig } from "@docusaurus/theme-common"
import { splitNavbarItems } from "@docusaurus/theme-common/internal"
import useBaseUrl from "@docusaurus/useBaseUrl"
import Arrow from "@site/static/img/common/nav/arrow.svg"
import Translate from "@docusaurus/Translate"

const Item = (data: NavbarItem) => {
  if (data.items?.length) {
    return (
      <div className="click-area-4 group relative">
        <div className="cursor-pointer group-hover:opacity-80">
          {data.label}
        </div>

        <div
          className={clsx(
            "-left-7.5 w-98 group-hover:op-100 absolute z-10 rounded-sm pt-6 transition-all group-hover:pointer-events-auto",
            "pointer-events-none opacity-0",
          )}
        >
          <div className="pt-7.5 bg-white px-2.5 pb-10 shadow-xl">
            <div className="ms-5 text-xs font-normal uppercase text-[#333] text-opacity-70">
              {data.label}
            </div>
            <div className="mt-4 space-y-1">
              {data.items.map((item) => {
                const { label, icon, to, description } = item as {
                  label: string
                  icon: string
                  to: string
                  description: string
                }

                return (
                  <Link
                    key={label}
                    to={to}
                    className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-x-5 gap-y-2.5 rounded-sm px-5 pb-2.5 pt-3.5 hover:bg-zinc-100"
                  >
                    <img
                      loading="lazy"
                      src={useBaseUrl(icon)}
                      width={24}
                      height={24}
                      className="row-span-2"
                    />
                    <div className="text-sm font-medium leading-tight text-[#333]">
                      {label}
                    </div>
                    <div className="text-xs font-normal leading-none text-[#333] text-opacity-70">
                      <Translate>{description}</Translate>
                    </div>
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
  const defaultClassName = "text-[#333] text-sm font-normal"
  if (data.items?.length) {
    const id = "nav-" + data.label
    return (
      <div>
        <input id={id} type="checkbox" className="hidden! peer" />
        <label
          htmlFor={id}
          className={clsx(
            "peer-checked:svg:-rotate-180 not-default group flex flex-row justify-between px-6 py-8",
          )}
        >
          <div className={clsx(defaultClassName)}>{data.label}</div>
          <Arrow className="transition-all duration-300" />
        </label>

        <div className="peer-checked:children:border-op-100 grid grid-rows-[0fr] transition-all duration-300 peer-checked:grid-rows-[1fr]">
          <div className="border-t-1 border-op-0 overflow-hidden border-zinc-200 transition-all duration-300">
            <div className="px-6 pb-5 pt-8 text-xs font-normal uppercase text-[#333] text-opacity-70">
              {data.label}
            </div>
            <div>
              {data.items.map((item) => (
                <Link
                  key={item.label}
                  {...item}
                  className="block px-7 py-3.5 text-sm leading-tight text-[#333]"
                >
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
    <Link {...data} className={clsx("block px-6 py-8", defaultClassName)}>
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
    <nav
      className={clsx(
        "sm:px-7.5 container relative mx-auto flex flex-row items-center justify-between gap-x-2 px-6 py-2.5 sm:py-5",
        dark && "dark",
      )}
    >
      <span className="md:basis-1/3">
        <Logo />
      </span>

      <span className="hidden! sm:flex! grow flex-row items-center justify-end space-x-14 text-sm dark:text-white md:basis-1/3 md:justify-center">
        {leftItems.map((item) => {
          return <Item key={item.label} {...item} />
        })}
      </span>

      <span className="hidden! sm:flex! ml-10 shrink-0 flex-row items-center justify-end space-x-14 text-sm dark:text-white md:ml-0 md:basis-1/3">
        {rightItems.map((item) => {
          return (
            <Link key={item.label} {...item}>
              {item.label}
            </Link>
          )
        })}
      </span>

      <input id="nav" type="checkbox" className="hidden! peer" />
      <label htmlFor="nav" className="click-area-4 sm:hidden">
        <Hamburger className="dark:fill-op-90 dark:fill-white" />
      </label>

      <div className="sm:grid-rows-[0fr]! z-100 absolute inset-x-0 top-full grid grid-rows-[0fr] transition-all duration-300 peer-checked:grid-rows-[1fr]">
        <div className="divide-y-1 divide-solid divide-zinc-200 overflow-hidden bg-white">
          {leftItems.map((item) => (
            <MobileItem key={item.label} {...item} />
          ))}

          {rightItems.map((item) => (
            <Link key={item.label} {...item} className="block p-6 ">
              <div className="w-fit rounded-sm bg-zinc-800 px-7 py-2.5 text-base font-medium leading-none text-white">
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
