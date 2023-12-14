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
    <div className="grid grid-cols-[1fr_0.5fr] gap-y-20 sm:col-span-2 md:grid-cols-[1fr_1fr_0.5fr] md:gap-y-10">
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
            {title && (
              <div className="mb-2 text-base font-normal text-white">
                {title}
              </div>
            )}
            {links.map((link) => (
              <Link
                key={link.label}
                {...link}
                className="block text-sm font-normal leading-tight text-white text-opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )
      })}
    </div>
  )
}
