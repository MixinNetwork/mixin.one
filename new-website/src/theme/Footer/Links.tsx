import React from "react"
import { FooterLinkItem, useThemeConfig } from "@docusaurus/theme-common"
import Link from "@docusaurus/Link"
import clsx from "clsx"

export function Links() {
  const {
    footer: { links },
  } = useThemeConfig()

  const [link1, link2, link3, link4] = links

  return (
    <div className="grid gap-y-20 md:gap-y-10 grid-cols-[1fr_0.5fr] md:grid-cols-[1fr_1fr_0.5fr] sm:col-span-2">
      {[
        {
          className: "order-1",
          link: link1,
        },
        {
          className: "order-2 md:order-last",
          link: link2,
        },
        {
          className: "order-3 md:row-span-2",
          link: link3,
        },
        {
          className: "order-4 md:row-span-2",
          link: link4,
        },
      ].map(({ link, className }) => {
        const isArray = Array.isArray(link)
        const title = isArray ? null : (link.title as string | null)
        const links = (isArray ? link : link.items) as FooterLinkItem[]

        return (
          <div key={title} className={clsx("space-y-4", className)}>
            {title && <div className="text-white text-base font-normal mb-2">{title}</div>}
            {links.map((link) => (
              <Link key={link.label} {...link} className="text-white text-opacity-70 text-sm font-normal leading-tight block hover:text-op-100">
                {link.label}
              </Link>
            ))}
          </div>
        )
      })}
    </div>
  )
}
