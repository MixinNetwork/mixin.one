import Logo from "@theme/Logo"
import Hamburger from "@site/static/img/common/nav/hamburger.svg"

import React, { ComponentType, SVGProps } from "react"
import Link from "@docusaurus/Link"
import clsx from "clsx"
import Arrow from "@site/static/img/common/nav/arrow.svg"
import Translate from "@docusaurus/Translate"

import Contact from "@site/static/img/common/nav/contact.svg"
import About from "@site/static/img/common/nav/about.svg"

interface NavItemLinkProps {
  label: string
  to: Parameters<typeof Link>[0]["to"]
  className?: string
  groups?: never
}

interface NavItemGroupProps {
  label: string
  groups: {
    label: string
    items: {
      label: string
      to: Parameters<typeof Link>[0]["to"]
      description: string
      icon: ComponentType<SVGProps<SVGSVGElement>>
    }[]
  }[]

  to?: never
  className?: never
}

type NavItemProps = NavItemLinkProps | NavItemGroupProps

const Item = (data: NavItemProps) => {
  if (data.groups?.length) {
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
          <div className="bg-white px-2.5 pb-10 shadow-xl">
            {data.groups.map((data) => (
              <>
                <div className="pt-7.5 ms-5 text-xs font-normal uppercase text-[#333] text-opacity-70">
                  {data.label}
                </div>
                <div className="mt-4 space-y-1">
                  {data.items.map((item) => {
                    return (
                      <Link
                        key={item.label}
                        to={item.to}
                        className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-x-5 gap-y-2.5 rounded-sm px-5 pb-2.5 pt-3.5 hover:bg-zinc-100"
                      >
                        <item.icon className="row-span-2" />
                        <div className="text-sm font-medium leading-tight text-[#333]">
                          {item.label}
                        </div>
                        <div className="text-xs font-normal leading-none text-[#333] text-opacity-70">
                          <Translate>{item.description}</Translate>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    )
  }
  return <Link {...data}>{data.label}</Link>
}

const MobileItem = (data: NavItemProps) => {
  const defaultClassName = "text-[#333] text-sm font-normal"
  if (data.groups?.length) {
    return (
      <div key={data.label}>
        <details name="nav" className="not-default group peer">
          <summary
            className={clsx(
              "flex flex-row items-center justify-between px-6 py-8",
            )}
          >
            <div className={clsx(defaultClassName)}>{data.label}</div>
            <Arrow className="transition-all duration-300 group-open:-rotate-180" />
          </summary>
        </details>

        <div className="peer-open:children:border-op-100 grid grid-rows-[0fr] transition-all duration-300 peer-open:grid-rows-[1fr]">
          <div className="border-op-0 overflow-hidden border-t border-[#F2F2F2]  transition-all duration-300">
            {data.groups.map((data) => (
              <div key={data.label}>
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
            ))}
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
  const leftItems: NavItemProps[] = [
    {
      label: "Technology",
      to: "/how-it-secures",
    },
    {
      label: "Pricing",
      to: "/pricing",
    },
    {
      label: "Company",
      groups: [
        {
          label: "Company",
          items: [
            {
              label: "Contact Us",
              to: "/contact",
              description: "If you have any questions, please contact us",
              icon: Contact,
            },
            {
              label: "About Us",
              to: "/about",
              description: "Mixin helps you secure and grow your wealth",
              icon: About,
            },
          ],
        },
      ],
    },
  ]

  const rightItems: NavItemProps[] = [
    {
      label: "Get Started",
      to: "/pricing",
      className:
        "px-6 py-3 dark:bg-white dark:text-zinc-800 bg-zinc-800 text-white rounded-sm font-medium leading-none",
    },
  ]
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

      <details className="peer">
        <summary className={clsx("click-area-4 sm:hidden", "")}>
          <Hamburger className="dark:fill-op-90 dark:fill-white" />
        </summary>
      </details>

      <div className="sm:grid-rows-[0fr]! z-100 absolute inset-x-0 top-full grid grid-rows-[0fr] transition-all duration-300 peer-open:grid-rows-[1fr]">
        <div className="divide-y-1 divide-solid divide-[#F2F2F2] overflow-hidden bg-white">
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
