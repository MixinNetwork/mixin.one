import React from "react"

import { LogoAndCopyright } from "./LogoAndCopyright"
import { LocalSwitcer } from "./LocalSwitcer"
import { Links } from "./Links"
import { Addresses } from "./Addresses"

function Footer(): JSX.Element | null {
  return (
    <footer className="dark bg-neutral-800">
      <div className="pt-25 pb-45 gap-y-25 container mx-auto grid px-10 sm:grid-cols-3 sm:gap-x-4 sm:pb-40">
        <div className="w-fit space-y-20">
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
