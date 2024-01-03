import Logo from "@theme/Logo"
import Hamburger from "@site/static/img/common/nav/hamburger.svg"
import React, { ComponentType, SVGProps } from "react"
import Link from "@docusaurus/Link"
import clsx from "clsx"
import Arrow from "@site/static/img/common/nav/arrow.svg"
import Translate, { translate } from "@docusaurus/Translate"
import Contact from "@site/static/img/common/nav/contact.svg"
import About from "@site/static/img/common/nav/about.svg"
import MPC from "@site/static/img/common/nav/1.1.1.svg"
import Buy from "@site/static/img/common/nav/1.1.2.svg"
import Social from "@site/static/img/common/nav/1.1.3.svg"
import AllInOne from "@site/static/img/common/nav/1.1.4.svg"
import Custody from "@site/static/img/common/nav/1.2.1.svg"
import Collaboration from "@site/static/img/common/nav/1.2.2.svg"
import Staking from "@site/static/img/common/nav/1.2.3.svg"
import Recovery from "@site/static/img/common/nav/1.2.5.svg"
import Inheritance from "@site/static/img/common/nav/1.2.6.svg"

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
      to?: Parameters<typeof Link>[0]["to"]
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
        <div className="cursor-pointer font-medium group-hover:opacity-80">
          {data.label}
        </div>

        <div
          className={clsx(
            "group-hover:op-100 absolute z-10 rounded-sm pt-6 transition-all group-hover:pointer-events-auto",
            "pointer-events-none opacity-0",
            data.groups.find((data) => data.items.length > 2)
              ? "w-130-200 -left-45-7.5 "
              : "w-65-100 -left-30-7.5 ",
          )}
        >
          <div className="bg-white px-5 pb-10 shadow">
            {data.groups.map((data) => (
              <>
                <div className="pt-7.5 text-#333 text-3 ms-5 font-normal uppercase text-opacity-70">
                  {data.label}
                </div>
                <div
                  className={clsx(
                    "mt-4 grid space-y-1",
                    data.items.length > 2 && "grid-cols-2",
                  )}
                >
                  {data.items.map((item) => {
                    const containerClassName =
                      "grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-x-5 gap-y-2.5 rounded-lg px-5 py-3 hover:bg-zinc-100"

                    const children = (
                      <>
                        <item.icon className="row-span-2 h-7" />
                        <div className="flex-center text-#333 text-3.5 w-fit space-x-2.5 font-medium">
                          <div>{item.label}</div>
                          {!item.to && (
                            <div className="text-3 text-op-66 text-#333 w-fit shrink-0 bg-[#F2F2F2] px-2.5 py-1">
                              <Translate>Coming Soon</Translate>
                            </div>
                          )}
                        </div>

                        <div className="text-#333 text-3 font-normal text-opacity-70">
                          {item.description}
                        </div>
                      </>
                    )

                    if (!item.to)
                      return (
                        <span
                          key={item.label}
                          className={clsx(containerClassName, "cursor-default")}
                        >
                          {children}
                        </span>
                      )

                    return (
                      <Link
                        key={item.label}
                        to={item.to}
                        className={containerClassName}
                      >
                        {children}
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
  return (
    <Link {...data} className={clsx("font-medium", data.className)}>
      {data.label}
    </Link>
  )
}

const MobileItem = (data: NavItemProps) => {
  const defaultClassName = "text-#333 text-3.5 font-normal"
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
          <div className="border-op-0 border-#F2F2F2 overflow-hidden border-t transition-all duration-300">
            {data.groups.map((data) => (
              <div key={data.label}>
                <div className="text-#333 text-3 px-6 pb-5 pt-8 font-normal uppercase text-opacity-70">
                  {data.label}
                </div>
                <div>
                  {data.items.map((item) => {
                    const containerClassName =
                      "flex items-center space-x-2.5 px-7 py-3.5 text-3.5 text-#333"
                    const children = (
                      <>
                        <div>{item.label}</div>
                        {!item.to && (
                          <div className="text-3 text-op-66 text-#333 w-fit bg-[#F2F2F2] px-2.5 py-1">
                            <Translate>Coming Soon</Translate>
                          </div>
                        )}
                      </>
                    )

                    if (!item.to)
                      return (
                        <span
                          key={item.label}
                          className={clsx(containerClassName, "cursor-default")}
                        >
                          {children}
                        </span>
                      )

                    return (
                      <Link
                        key={item.label}
                        {...item}
                        className="text-#333 text-3.5 flex items-center space-x-2.5 px-7 py-3.5"
                      >
                        <div>{item.label}</div>
                        {!item.to && (
                          <div className="text-3 text-op-66 text-#333 w-fit bg-[#F2F2F2] px-2.5 py-1">
                            <Translate>Coming Soon</Translate>
                          </div>
                        )}
                      </Link>
                    )
                  })}
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
      label: translate({ message: "Solutions" }),
      groups: [
        {
          label: translate({ message: "Individuals" }),
          items: [
            {
              label: translate({ message: "MPC Wallet" }),
              to: "/solutions/mpc-wallet",
              description: translate({
                message: "MPC Self-Custodial Wallet.",
              }),
              icon: MPC,
            },

            {
              label: translate({ message: "Buy Cryptocurrencies" }),
              to: "/solutions/buy-cryptocurrencies",
              description: translate({
                message: "Buy cryptocurrencies with your bank card.",
              }),
              icon: Buy,
            },
            {
              label: translate({ message: "Social Recovery" }),
              to: "/solutions/social-recovery",
              description: translate({
                message:
                  "Regain control of your assets through emergency contacts.",
              }),
              icon: Social,
            },
            {
              label: translate({ message: "All-in-One Asset Management" }),
              to: "/solutions/all-in-one-asset-management",
              description: translate({
                message: "Manage multiple blockchain assets with one wallet.",
              }),
              icon: AllInOne,
            },
          ],
        },
        {
          label: translate({ message: "Family & business" }),
          items: [
            {
              label: translate({ message: "Custody" }),
              to: "/solutions/custody",
              description: translate({
                message: "Self-custody multi-signature cold wallet.",
              }),
              icon: Custody,
            },

            {
              label: translate({ message: "Collaboration" }),
              to: "/solutions/collaboration",
              description: translate({
                message: "Manage funds with family, friends and colleagues.",
              }),
              icon: Collaboration,
            },
            {
              label: translate({ message: "Staking" }),
              description: translate({
                message: "Earn node rewards by staking.",
              }),
              icon: Staking,
            },
            {
              label: translate({ message: "Collateralized Loans" }),
              description: translate({
                message: "Collateralize your crypto assets to get loans.",
              }),
              icon: Collaboration,
            },
            {
              label: translate({ message: "Recovery" }),
              description: translate({
                message: "Recover your assets in a decentralized way.",
              }),
              icon: Recovery,
            },
            {
              label: translate({ message: "Inheritance" }),
              description: translate({
                message:
                  "Protect your bitcoin wealth and pass it on to your descendants.",
              }),
              icon: Inheritance,
            },
          ],
        },
      ],
    },
    {
      label: translate({
        message: "Technology",
      }),
      to: "/how-it-secures",
    },
    {
      label: translate({
        message: "Pricing",
      }),
      to: "/pricing",
    },
    {
      label: translate({ message: "Company" }),
      groups: [
        {
          label: translate({ message: "Company" }),
          items: [
            {
              label: translate({ message: "Contact Us" }),
              to: "/contact",
              description: translate({
                message: "If you have any questions, please contact us",
              }),
              icon: Contact,
            },
            {
              label: translate({ message: "About Us" }),
              to: "/about",
              description: translate({
                message: "Mixin helps you secure and grow your wealth",
              }),
              icon: About,
            },
          ],
        },
      ],
    },
  ]

  const rightItems: NavItemProps[] = [
    {
      label: translate({
        message: "Get Started",
      }),
      to: "/pricing",
      className:
        "px-6 py-3 dark:bg-white text-3.5-4 dark:text-zinc-800 bg-zinc-800 text-white rounded-sm font-medium",
    },
  ]
  return (
    <nav
      className={clsx(
        "sm:px-7.5 container relative mx-auto flex flex-row items-center justify-between gap-x-2 px-6 py-2.5 sm:py-5",
        dark && "dark",
      )}
    >
      <Logo />

      <span className="hidden! sm:flex! children:shrink-0 space-x-6-14 text-3.5 grow flex-row items-center justify-end md:justify-center dark:text-white">
        {leftItems.map((item) => {
          return <Item key={item.label} {...item} />
        })}
      </span>

      <span className="hidden! sm:flex! children:shrink-0 space-x-6-14 text-3.5 ml-10 shrink-0 flex-row items-center justify-end md:ml-0 dark:text-white">
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
              <div className="text-3.5-4 w-fit rounded-sm bg-zinc-800 px-7 py-2.5 font-medium text-white">
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
