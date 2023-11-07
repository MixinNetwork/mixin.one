import Image from "next/image"
import { LLProps } from "../../i18n/custom"
import MixinIcon from "@/svg/mixin.svg"
import clsx from "clsx"
import Hamburger from "./hamburger.svg"

export const NavBar = ({
  LL,
  type,
}: LLProps & {
  type?: "white"
}) => (
  <div className="px-6 py-2.5 sm:py-5 sm:px-7.5 flex flex-row space-x-2 items-center container mx-auto">
    <MixinIcon className={clsx(type && "fill-white fill-op-90")} />
    <div className={clsx("grow text-lg font-semibold", type && "text-white text-opacity-90")}>{LL.mixin()}</div>
    <button className="sm:hidden">
      <Hamburger className={clsx(type && "fill-white fill-op-90")} />
    </button>
    <div className={clsx("hidden sm:flex shrink-0 flex-row items-center space-x-4.5 text-sm font-normal", type && "text-white")}>
      <a>Technology</a>
      <a>Pricing</a>
      <a>Company</a>
      <a className="px-6 py-3 bg-white rounded text-zinc-800 text-sm font-medium leading-none ml-10!">Get Started</a>
    </div>
  </div>
)
