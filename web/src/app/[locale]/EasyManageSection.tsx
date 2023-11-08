import Image from "next/image"
import { LLProps } from "@/i18n/custom"
import { Locales } from "@/i18n/i18n-types"

const EasyManageItem = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="grid grid-cols-[auto_1fr] gap-y-4 gap-x-5">
    <div className="w-12 h-12 bg-white shadow rounded-lg flex-center row-span-2">
      <Image src={icon} alt={"icon"} width={24} height={24} />
    </div>
    <div className="text-zinc-800 text-base font-medium leading-tight">{title}</div>
    <div className="text-zinc-800 text-opacity-70 text-sm font-normal leading-tight">{description}</div>
  </div>
)

export const EasyManageSection = ({ LL, locale }: LLProps) => (
  <div className="py-20 px-5 sm:pt-25 sm:pb-30 container mx-auto">
    <div className="text-center text-zinc-800 text-3xl font-medium leading-10">We Make Managing Digital Assets Easy</div>
    <div className="mt-5 text-center text-zinc-800 text-opacity-60 text-base sm:text-sm font-normal leading-normal">6 key features to allow hassle-free day-to-day management</div>
    <div className="mt-20 aspect-335/183 relative">
      <Image fill src={`/home/assets_${locale}.webp`} alt={""} />
    </div>

    <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-11 md:gap-x-9 gap-y-13 px-5">
      <EasyManageItem key="Dashboard" title={"Dashboard"} description={"Easily view your assets distribution any where, anytime"} icon="/home/easy/dashboard.svg" />
      <EasyManageItem key="Downloadable history" title={"Downloadable history"} description={"Make account reconciliation easy and fiexible"} icon="/home/easy/downloadableHistory.svg" />
      <EasyManageItem key="Joint" title={"Joint"} description={"Manage assets with your family, friends and colleagues"} icon="/home/easy/joint.svg" />
      <EasyManageItem key="Batch transfer" title={"Batch transfer"} description={"Send thousands of transaction in a few minitus"} icon="/home/easy/batchTransfer.svg" />
      <EasyManageItem key="Whitelist" title={"Whitelist"} description={"Cater to your internal risk control needs"} icon="/home/easy/whitelist.svg" />
      <EasyManageItem key="Notification" title={"Notification"} description={"Timely participation in funding approval"} icon={"/home/easy/notification.svg"} />
    </div>

    <a className="mt-20 sm:mt-15 rw-10 sm:w-fit sm:px-7 mx-auto py-4 flex-center bg-zinc-700 rounded-sm text-white text-sm font-medium leading-snug">View our plans</a>
  </div>
)
