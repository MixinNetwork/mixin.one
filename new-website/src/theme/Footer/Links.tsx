import React from "react"
import { FooterLinkItem, useThemeConfig } from "@docusaurus/theme-common"
import Link from "@docusaurus/Link"

export function Links() {
  const {
    footer: { links },
  } = useThemeConfig()
  return (
    <div className="grid gap-y-20 grid-cols-[1fr_0.5fr] sm:col-span-2">
      {links.map((link) => {
        const title = "title" in link && link.title
        const links: FooterLinkItem[] = "title" in link ? link.items : link
        return (
          <div key={title} className="space-y-4">
            {title && <div className="text-white text-base font-normal mb-2">{title}</div>}
            {links.map((link) => (
              <Link key={link.label} {...link} className="text-white text-opacity-70 text-sm font-normal leading-tight block">
                {link.label}
              </Link>
            ))}
          </div>
        )
      })}
    </div>
  )
}
