import React, { ReactNode } from "react"
import clsx from "clsx"
import ErrorBoundary from "@docusaurus/ErrorBoundary"
import {
  SkipToContentFallbackId,
  ThemeClassNames,
} from "@docusaurus/theme-common"
import { useKeyboardNavigation } from "@docusaurus/theme-common/internal"
import SkipToContent from "@theme/SkipToContent"
import AnnouncementBar from "@theme/AnnouncementBar"
import Navbar from "@theme/Navbar"
import Footer from "@theme/Footer"
import LayoutProvider from "@theme/Layout/Provider"
import ErrorPageContent from "@theme/ErrorPageContent"
import type { Props } from "@theme/Layout"
import styles from "./styles.module.css"
import { translate } from "@docusaurus/Translate"
import { PageMetadata } from "./PageMetadata"

export default function Layout(
  props: Props & {
    hiddenNavBar?: boolean
  },
): JSX.Element {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
    hiddenNavBar,
  } = props

  useKeyboardNavigation()

  return (
    <LayoutProvider>
      <PageMetadata
        title={title}
        keywords={[
          translate({ message: "Mixin" }),
          translate({ message: "Bitcoin" }),
          translate({ message: "Ethereum" }),
          translate({ message: "MobileCoin" }),
          translate({ message: "Mixin Network" }),
          translate({ message: "Mixin Messenger" }),
          translate({ message: "Signal" }),
        ]}
        description={
          description ||
          translate({
            message:
              "Mixin Network is a free and lightning fast peer-to-peer transactional network for digital assets. Launched in 2017, the network is now securing more than $1B BTC, ETH and other popular cryptocurrencies.",
          })
        }
      />

      <SkipToContent />

      <AnnouncementBar />

      {!hiddenNavBar && <Navbar />}

      <div
        id={SkipToContentFallbackId}
        className={clsx(
          ThemeClassNames.wrapper.main,
          styles.mainWrapper,
          wrapperClassName,
        )}
      >
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
          {children}
        </ErrorBoundary>
      </div>

      {!noFooter && <Footer />}
    </LayoutProvider>
  )
}
