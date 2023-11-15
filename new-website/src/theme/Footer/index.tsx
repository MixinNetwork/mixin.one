import React from "react"

import { LogoAndCopyright } from "./LogoAndCopyright"
import { LocalSwitcer } from "./LocalSwitcer"
import { Links } from "./Links"
import { Addresses } from "./Addresses"

function Footer(): JSX.Element | null {
  return (
    <footer className="bg-neutral-800 dark">
      <div className="container mx-auto pt-25 pb-45 sm:pb-40 px-10 grid gap-y-25 sm:grid-cols-3 sm:gap-x-4">
        <div className="space-y-20 w-fit">
          <LogoAndCopyright />
          <LocalSwitcer />
        </div>
        <Links />
        <Addresses />
      </div>
    </footer>
  )
}

export default React.memo(Footer)
