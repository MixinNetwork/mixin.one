import clsx from "clsx"
import { Children } from "react"
import { LLProps } from "@/i18n/custom"
import Image from "next/image"
import Mixin from "@/svg/mixin.svg"
import { TrySafeSection } from "./TrySafeSection"
import DropArrow from "@/svg/dropArrow.svg"

const LinkList = ({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) => (
  <div className={clsx("space-y-4", className)}>
    <div className="text-white text-base font-normal mb-2">{title}</div>
    {Children.map(children, (child) => (
      <div className="text-white text-opacity-70 text-sm font-normal leading-tight">{child}</div>
    ))}
  </div>
)

const AddressItem = ({ name, address, className }: { name: string; address: string; className?: string }) => (
  <div className={clsx("space-y-3 col-span-2 sm:col-span-1", className)}>
    <div className="text-white text-base font-normal">{name}</div>
    <div className="text-white text-opacity-60 text-sm font-normal leading-tight">{address}</div>
  </div>
)

const AddressSection = ({ LL }: LLProps) => (
  <div className="mt-15 gap-y-7 gap-x-10 grid grid-cols-[0.5fr_1fr] sm:grid-cols-[1fr_auto]">
    <AddressItem
      className="order-0"
      name={"🇭🇰 Mixin Ltd"}
      address={"Mixin Ltd, a Hong Kong-based company. Mixin Ltd's office address is 12th Floor, Santai Building, 137-139 Connaught Road, Hong Kong."}
    />
    <AddressItem
      className="order-1 sm:order-2"
      name={"🇵🇱 Mixin Route LLC"}
      address={
        "Mixin Route sp. z o.o., a subsidiary of Mixin Ltd, Mixin Route Sp. z o.o. is a company registered in Street BARTYCKA 22B, office 21A, city WARSZAWA, index 00-716, country POLAND(Registration No.0001030006)."
      }
    />
    <Image src="/PCIDSS.svg" width={82} height={32} alt={"PCIDSS"} className="order-2 sm:order-1 my-auto" />
    <Image src="/GDPR.svg" width={82} height={34} alt={"GDPR"} className="order-3 my-auto" />
  </div>
)

const Footer = ({ LL }: LLProps) => {
  return (
    <>
      <TrySafeSection />
      <div className="bg-neutral-800">
        <div className="pt-25 pb-45 sm:pb-40 px-10 md:px-0 container mx-auto">
          <div className="grid gap-y-20 grid-cols-[1fr_0.5fr] sm:grid-cols-[1fr_1fr_0.5fr] md:grid-cols-[1fr_1fr_1fr_0.5fr] md:gap-x-20 pb-15 border-b border-black border-opacity-20">
            <div className="col-span-2 sm:col-span-1 order-1">
              <div className="flex-center w-fit space-x-2">
                <Mixin className="fill-white fill-op-90" />
                <div className="text-white text-lg font-semibold">{LL.mixin()}</div>
              </div>
              <div className="mt-4 text-white text-opacity-60 text-sm font-normal leading-tight">Copyright 2023, Mixin.All rights reserved.</div>
            </div>

            <div className="relative w-fit">
              <DropArrow className="absolute-vertical-center right-2 stroke-white stroke-op-70 z-10" />
              <select className="col-span-2 sm:col-span-1 order-2 sm:order-4 md:order-5 h-fit mt-auto w-fit bg-white bg-opacity-20 rounded-sm pl-5 pr-7 py-2 appearance-none text-white text-opacity-70 text-base font-medium">
                <option>English</option>
                <option>中文</option>
              </select>
            </div>

            <LinkList title={"Products"} className="order-3 sm:order-2">
              <a>Mixin Messenger</a>
              <a>Mixin Safe</a>
              <a>Mixin Wealth</a>
            </LinkList>

            <LinkList title={"Social"} className="order-4 sm:order-3 md:order-6">
              <a>Twitter</a>
              <a>Medium</a>
              <a>Reddit</a>
            </LinkList>

            <LinkList title={"Developer"} className="order-5 md:order-3 md:row-span-2">
              <a>Developer Center</a>
              <a>Open Source</a>
              <a>Mixin Route</a>
              <a>Mixin Messenger</a>
              <a>Mixin Network</a>
              <a>Mixin Trusted Group</a>
              <a>Mixin Virtual Machine</a>
              <a>Throttled Identity Protocol</a>
            </LinkList>

            <LinkList title={"Company"} className="order-6 md:order-4 md:row-span-2">
              <a>Our Mission</a>
              <a>Our Customers</a>
              <a>Contact Us</a>
              <a>Media Kit</a>
              <a>Join us</a>
              <a>Licenses</a>
              <a>Privacy Police</a>
              <a>Terms of Use</a>
            </LinkList>
          </div>
          <AddressSection LL={LL} />
        </div>
      </div>
    </>
  )
}

export default Footer
