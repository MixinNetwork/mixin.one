import Image from "next/image"
import { replace } from "@/helper/replace"
import { LLProps, loadI18nObject } from "../../i18n/custom"
import { Locales } from "../../i18n/i18n-types"
import clsx from "clsx"
import BasicLayout from "../../component/route/basic_layout"
import { i18nObject, locales } from "../../i18n/i18n-util"
import { loadLocale } from "../../i18n/i18n-util.sync"

const NavBar = ({ LL }: LLProps) => (
  <div className="px-6 py-2.5 sm:py-5 sm:px-7.5 flex flex-row space-x-2 items-center container mx-auto">
    <Image src="/mixin.svg" width={25} height={19} alt={"Mixin"} />
    <div className="grow text-white text-opacity-90 text-lg font-semibold">{LL.mixin()}</div>
    <button className="sm:hidden">
      <Image src="/hamburger.svg" width={24} height={24} alt={"Menu"} />
    </button>
    <div className="hidden sm:flex shrink-0 flex-row items-center space-x-4.5 text-white text-sm font-normal">
      <a>Technology</a>
      <a>Pricing</a>
      <a>Company</a>
      <a className="px-6 py-3 bg-white rounded text-zinc-800 text-sm font-medium leading-none ml-10!">Get Started</a>
    </div>
  </div>
)
const Header = ({ LL }: LLProps) => {
  const title = replace(LL.home.title(), [
    {
      match: LL.home.titleKeyword(),
      replace: (match) => <span className="text-blue-500">{match}</span>,
    },
  ])

  return (
    <div className="bg-gradient-to-b from-[#171924] to-[#222C3F] sm:bg-none sm:relative">
      <Image src="/home/bgHeader.webp" alt={"header"} fill className="object-cover -z-10 hidden sm:block" />
      <NavBar LL={LL} />
      <div className="px-10 pt-15 pb-19 sm:pt-12.5 md:pt-20 lg:pt-54 sm:pb-16.5 sm:pb-32.5 lg:pb-79 sm:text-center container mx-auto">
        <div className="text-white text-4xl sm:text-5xl font-normal leading-[48px]">{title}</div>
        <div className="mt-7.5 sm:mt-6 md:mt-8 lg:mt-12 text-white text-opacity-80 text-sm font-normal leading-snug">{LL.home.description()}</div>

        <div className="mt-24.5 sm:mt-12.5 md:mt-18.5 lg:mt-21.5 grid gap-y-5 gap-x-7.5 sm:grid-cols-2 sm:w-fit mx-auto">
          <a className="order-last sm:order-none sm:w-57.5 h-12 bg-neutral-100 rounded-sm text-black text-sm font-medium uppercase flex-center">{LL.home.getStarted()}</a>
          <a className="sm:w-57.5 h-12 rounded-sm border border-neutral-100 text-white text-sm font-medium w-full uppercase flex-center">{LL.home.bookConsultation()}</a>
        </div>
      </div>
    </div>
  )
}

const StatisticGridItem = ({ title, description }: { title: string; description: string }) => (
  <div className="aspect-square sm:aspect-auto flex-center flex-col space-y-2 bg-zinc-100">
    <div className="text-slate-900 text-3xl sm:text-4xl font-semibold">{title}</div>
    <div className="text-zinc-800 px-10 text-center text-opacity-70 text-xs sm:text-sm font-normal">{description}</div>
  </div>
)

const StatisticGridSection = () => (
  <div className="bg-zinc-100">
    <div className="bg-opacity-50 grid grid-cols-2 sm:grid-cols-4 bg-zinc-300 sm:bg-opacity-100 sm:bg-zinc-100 sm:py-17.5 sm:divide-opacity-50 sm:divide-x-1 sm:divide-zinc-300 gap-[1px] container mx-auto">
      <StatisticGridItem key="Since" title={"2017"} description={"Since"} />
      <StatisticGridItem key={"Assets under management"} title={"$1B+"} description={"Assets under management"} />
      <StatisticGridItem key={"Per day transaction volume"} title={"1B"} description={"Per day transaction volume"} />
      <StatisticGridItem key={"Customers"} title={"1M+"} description={"Customers"} />
    </div>
  </div>
)

const SolutionSection = () => (
  <>
    <div className="mt-30 sm:mt-25 mx-10 sm:mx-13 text-center text-neutral-800 text-2xl sm:text-xl font-medium">
      Provide the general public with state-of-the-art crypto financial services solutions.
    </div>
    <div className="pt-15 pb-20 sm:pb-22.5 px-10 grid gap-y-5 gap-x-8 sm:grid-cols-2 w-full sm:w-fit sm:mx-auto">
      <a className="sm:px-10 h-12 flex-center bg-neutral-800 rounded-sm text-white text-base font-medium">How it Secure</a>
      <a className="sm:px-10 h-12 rounded-sm border flex-center border-neutral-800 text-black text-base font-medium ">Pricing & Plans</a>
    </div>
  </>
)

const FeatureCard = ({ title, description, subDescription, background }: { title: string; description: string; subDescription: string; background: string }) => {
  return (
    <a className="aspect-335/255 relative py-4 px-5 first:sm:col-span-2 first:sm:aspect-664/261">
      <Image className="absolute -z-20 object-cover" fill src={background} alt={title} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black from-opacity-90 via-black via-opacity-17 to-transparent" />
      <div className="text-white text-lg font-medium leading-tight">{title}</div>
      <div className="mt-3 text-white text-opacity-80 text-sm font-normal leading-snug">{description}</div>
      <div className="mt-5 shadow justify-start items-center gap-2 inline-flex">
        <div className="text-white text-base font-medium leading-none">{subDescription} →</div>
      </div>
    </a>
  )
}

const FeatureCardSection = () => {
  return (
    <div className="grid gap-y-5 px-5 py-20 sm:grid-cols-2 sm:gap-3 sm:pt-22.5 sm:pb-45 container mx-auto">
      <FeatureCard
        key="Decentralized"
        title="Decentralized"
        description="Not your keys, not your coins. Though managing private keys may present a challenge, we should remain steadfast in avoiding centralized firms as custodians for Bitcoin holdings."
        subDescription="Learn Decentralization"
        background="/home/feature/decentralized.webp"
      />

      <FeatureCard
        key="Confident"
        title="Confident"
        description="Mixin Safe offers a comprehensive suite of solutions to help Bitcoin investors confidently hold."
        subDescription="See the Solutions"
        background="/home/feature/confident.webp"
      />

      <FeatureCard
        key="Reliable"
        title="Reliable"
        description="Employing the latest innovations in the industry while still leveraging Bitcoin’s proven cryptography."
        subDescription="Bitcoin Technology"
        background="/home/feature/reliable.webp"
      />
      <FeatureCard
        key="Privacy"
        title="Privacy"
        description="We ensure you have maximum privacy by integrating various advanced technologies."
        subDescription="Privacy Technology"
        background="/home/feature/privacy.webp"
      />

      <FeatureCard
        key="Compliant"
        title="Compliant"
        description="Mixin Safe offers a comprehensive suite of solutions to help Bitcoin investors confidently hold."
        subDescription="See the Solutions"
        background="/home/feature/compliant.webp"
      />
    </div>
  )
}

const ProductCard = ({ title, description, cover }: { title: string; description: string; cover: string }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="aspect-335/224 relative">
      <Image fill src={cover} alt={title} />
    </div>

    <div className="aspect-335/210 pt-6 px-5 space-y-3">
      <div className="text-zinc-800 text-xl font-medium leading-tight">{title}</div>
      <div className="text-zinc-800 text-opacity-80 text-sm font-normal leading-snug">{description}</div>
    </div>
  </div>
)

const MainProductSection = () => {
  return (
    <div className="flex flex-col items-center bg-slate-100 bg-opacity-40 pt-25 pb-45 px-5 sm:pb-35">
      <div className="text-zinc-800 text-[28px] font-medium">Our Main Products</div>
      <div className="mt-5 text-zinc-800 text-opacity-60 text-base font-normal leading-normal">Our product is decentralized, safer, stronger and cheaper</div>
      <div className="mt-15 grid gap-y-5 gap-x-3 sm:grid-cols-3 container">
        <ProductCard
          key="Mixin Messenger"
          title={"Mixin Messenger"}
          description={
            "The open source decentralized MPC multi-currency wallet supports end-to-end encrypted chat, free transfers to contacts, legal currency deposits, social recovery and other functions."
          }
          cover={"/home/product/messenger.webp"}
        />

        <ProductCard
          key="Mixin Safe"
          title={"Mixin Safe"}
          description={"Mixin Safe provides the general public with cutting-edge Bitcoin custody solutions. Bitcoin custody should never sacrifice decentralization, always be confident and reliable."}
          cover={"/home/product/safe.webp"}
        />
        <ProductCard
          key="Mixin Wealth"
          title={"Mixin Wealth"}
          description={"We strive to build the safest products to grow your crypto wealth, with the highest standard of decentralized custodian powered by Mixin Safe."}
          cover={"/home/product/wealth.webp"}
        />
      </div>

      <a className="mt-24.5 px-7 py-4 mx-auto bg-zinc-800 rounded-sm text-white text-base font-bold leading-none">View our plans</a>
    </div>
  )
}

const EasyManageItem = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="grid grid-cols-[auto_1fr] gap-y-4 gap-x-5">
    <div className="w-12 h-12 bg-white shadow rounded-lg flex-center row-span-2">
      <Image src={icon} alt={"icon"} width={24} height={24} />
    </div>
    <div className="text-zinc-800 text-base font-medium leading-tight">{title}</div>
    <div className="text-zinc-800 text-opacity-70 text-sm font-normal leading-tight">{description}</div>
  </div>
)

const EasyManageSection = ({ LL, locale }: LLProps & { locale: Locales }) => (
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

const SupportedAssetSection = async () => {
  const {
    data: assets,
  }: {
    data: {
      name: string
      symbol: string
      icon_url: string
      chain_id: string
    }[]
  } = await (await fetch("https://api.mixin.one/network/assets/top")).json()

  const array = Array.from(
    assets
      .filter((asset) => !/(Pando Rings|4swap |ExinSwap |Pando Innovation ETF|LP Token)/i.test(asset.name) && asset.chain_id !== "17f78d7c-ed96-40ff-980c-5dc62fecbc85")
      .reduce((acc, cur) => acc.set(cur.icon_url, cur), new Map())
      .values()
  )

  const chunkSize = Math.ceil(array.length / 3)

  const result: {
    symbol: string
    icon_url: string
  }[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize)
    result.push(chunk)
  }

  const length = result.map((item) => item.length).reduce((acc, cur) => Math.min(acc, cur), Infinity)
  result.forEach((item) => (item.length = length))

  return (
    <div className="pt-20 pb-40">
      <div className="rw-10 mx-auto container text-center text-zinc-800 text-3xl font-medium leading-10">Supported Assets and Protocols</div>
      <div className="mt-5 rw-10 mx-auto container text-center text-zinc-800 text-opacity-60 text-base font-normal leading-normal">
        We support over 3,400 tokens and 48 chains, including popular layer 1 and layer 2
      </div>
      <div className="space-y-7 pt-15 sm:pt-20">
        {result.map((chunk, i) => (
          <div key={i} className="relative overflow-hidden h-14 sm:h-19">
            <div
              className={clsx(
                "flex flex-row gap-x-5.5 sm:gap-x-8 md:gap-x-11.5 absolute top-0 bottom-0",
                "animate-marquee sm:animate-marquee-sm md:animate-marquee-md",
                i === 1 && "animate-direction-reverse!"
              )}
            >
              {[...chunk, ...chunk].map((asset, i) => (
                <div key={i + "-" + asset.symbol} className="relative shrink-0 aspect-square">
                  <Image src={asset.icon_url} alt={asset.symbol} fill />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const TrustedItem = ({ name, icon }: { name: string; icon: string }) => (
  <div className="space-y-3">
    <Image src={"/home/trusted/" + icon} alt={name} width={60} height={60} className="mx-auto" />
    <div className="text-center text-white text-xs font-medium leading-3">{name}</div>
  </div>
)

const TrustedSection = () => (
  <div className="bg-zinc-800 pt-20 pb-40 sm:pb-20 px-5 text-white">
    <div className="text-center text-3xl font-medium leading-10">Trusted by</div>
    <div className="mt-5 text-center text-white text-opacity-60 text-base sm:text-sm font-normal leading-normal">Mixin Safe powers leading organizations from Payment to DAOs, and beyond</div>
    <div className="container mx-auto grid grid-cols-3 mt-20 sm:mt-15 sm:grid-cols-6 px-5 gap-y-15 gap-x-12.5 sm:gap-x-10">
      <TrustedItem name={"MixPay"} icon={"mixPay.webp"} />
      <TrustedItem name={"Pando Proto"} icon={"pandoProto.webp"} />
      <TrustedItem name={"ExinPool"} icon={"exinPool.webp"} />
      <TrustedItem name={"BigONE"} icon={"bigONE.webp"} />
      <TrustedItem name={"B.Watch"} icon={"bWatch.webp"} />
      <TrustedItem name={"OptionDance"} icon={"optionDance.webp"} />
    </div>
  </div>
)

// Audit Report
const AuditReportSection = () => (
  <div className="bg-zinc-100 bg-opacity-50">
    <div className="pt-20 sm:pt-50 pb-40 sm:pb-20 px-5 md:py-27 text-center md:text-start container mx-auto grid gap-y-20 gap-x-27.5 md:grid-cols-2">
      <div className="flex flex-col justify-between md:py-12.5">
        <div>
          <div className="text-zinc-800 text-3xl font-medium leading-10">Audit Report</div>
          <div className="mt-5 text-zinc-800 text-opacity-60 text-base font-normal leading-normal">Mixin Safe powers leading organizations from Payment to DAOs, and beyond</div>
        </div>

        <a className="md:block hidden w-fit px-7 py-4 flex-center bg-zinc-700 rounded-sm text-white text-sm font-medium leading-snug">View security audits</a>
      </div>

      <div className="container mx-auto grid grid-cols-2 gap-4">
        {Array(4)
          .fill(undefined)
          .map((_, i) => (
            <div key={i} className="aspect-square relative bg-white rounded-lg shadow">
              <Image src={`/home/audit/${i}.webp`} alt="audit" fill />
            </div>
          ))}
      </div>

      <a className="md:hidden mt-10 sm:mt-12.5 rw-10 sm:w-fit sm:px-7 mx-auto py-4 flex-center bg-zinc-700 rounded-sm text-white text-sm font-medium leading-snug">View security audits</a>
    </div>
  </div>
)

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="px-2.5 border-b border-neutral-200 container mx-auto">
    <input id={question} type="checkbox" className="hidden peer" />
    <label htmlFor={question} className="pt-9 pb-5.5 cursor-pointer flex flex-row justify-between items-start">
      <div className="text-zinc-800 text-base font-medium leading-normal">{question}</div>
      <Image src={"/home/faq/arrow.svg"} width={18} height={18} alt={""} className="mt-1 [input:checked~label>&]:-rotate-180 transition-all duration-500" />
    </label>
    <div className="grid grid-rows-[0fr] transition-all duration-500 peer-checked:grid-rows-[1fr]">
      <div className="overflow-hidden">
        <div className="mb-3.5 text-zinc-800 text-opacity-75 text-sm font-normal leading-tight cursor-default">{answer}</div>
      </div>
    </div>
  </div>
)

const FAQ = () => {
  return (
    <div className="pt-20 sm:pt-30 pb-40 sm:pb-45 px-5">
      <div className="text-center text-zinc-800 text-3xl font-medium leading-10">Frequently Asked Questions</div>
      <div className="mt-5 mb-11 sm:mb-20 text-center text-zinc-800 text-opacity-60 text-base sm:text-sm font-normal leading-normal">
        {"Don't hesitate to contact us if you can't find your answers here"}
      </div>
      <FAQItem
        question={"ls Mixin Safe really decentralized?"}
        answer={
          "Yes,Mixin Safe uses both MPC and native Bitcoin multisig script to provide trulydecentralized Bitcoin wallet service. Together with the timelockfeaturein Bitcoin script, only the user owns the private key to control the wallet and no one else has the ability to spend the coins.timelockfeaturein Bitcoin script, only the user owns the private key to control the wallet and no one else has"
        }
      />

      <FAQItem
        question={"ls Mixin Safe really decentralized? ls Mixin Safe really decentralized?"}
        answer={
          "Yes,Mixin Safe uses both MPC and native Bitcoin multisig script to provide trulydecentralized Bitcoin wallet service. Together with the timelockfeaturein Bitcoin script, only the user owns the private key to control the wallet and no one else has the ability to spend the coins.timelockfeaturein Bitcoin script, only the user owns the private key to control the wallet and no one else has"
        }
      />
      <FAQItem
        question={"ls Mixin Safe really decentralized? 1"}
        answer={
          "Yes,Mixin Safe uses both MPC and native Bitcoin multisig script to provide trulydecentralized Bitcoin wallet service. Together with the timelockfeaturein Bitcoin script, only the user owns the private key to control the wallet and no one else has the ability to spend the coins.timelockfeaturein Bitcoin script, only the user owns the private key to control the wallet and no one else has"
        }
      />
      <FAQItem
        question={"ls Mixin Safe really decentralized? 2"}
        answer={
          "Yes,Mixin Safe uses both MPC and native Bitcoin multisig script to provide trulydecentralized Bitcoin wallet service. Together with the timelockfeaturein Bitcoin script, only the user owns the private key to control the wallet and no one else has the ability to spend the coins.timelockfeaturein Bitcoin script, only the user owns the private key to control the wallet and no one else has"
        }
      />
    </div>
  )
}

const TrySafeSection = () => (
  <div className="relative">
    <Image src={"/home/trySafeBg.svg"} alt={"try safe background"} fill className="-z-10 object-cover" />
    <div className="pt-20 pb-30 px-2.5 grid md:grid-cols-2 container mx-auto">
      <div className="relative aspect-355/204 md:aspect-657/376 md:order-last">
        <Image src={"/home/trySafe.webp"} alt={"try safe"} fill />
      </div>
      <div className="md:flex md:flex-col md:justify-between px-10 md:px-0">
        <div className="mt-17.5 md:mt-0 md:w-fit mx-auto text-white text-3xl font-medium leading-10">{"Don't Miss Your Chance to Inherit Bitcoin"}</div>
        <div className="mt-7 md:mt-0 md:w-fit mx-auto text-white text-sm font-normal leading-normal">
          Book a demo to see how Mixin Safe can create wallets and support multi-party approval transfers, and ask us which solution is right for you.
        </div>
        <a className="mt-7 md:mt-0 w-fit py-4 px-7 bg-white bg-opacity-95 rounded-sm flex-center text-zinc-800 text-base font-medium leading-none">Schedule a demo</a>
      </div>
    </div>
  </div>
)

export async function generateStaticParams() {
  return [{ index: [] }, { index: ["en"] }, { index: ["zh"] }]
}

export default function Home({
  params: { index },
}: {
  params: {
    index?: ["" | Locales]
  }
}) {
  console.log("index", index)
  const locale = index?.[0] || "en"
  loadLocale(locale)
  const LL = i18nObject(locale)

  return (
    <BasicLayout LL={LL} locale={locale}>
      <Header LL={LL} />
      <StatisticGridSection />
      <SolutionSection />
      <FeatureCardSection />
      <MainProductSection />
      <EasyManageSection LL={LL} locale={locale} />
      <SupportedAssetSection />
      <TrustedSection />
      <AuditReportSection />
      <FAQ />
      <TrySafeSection />
    </BasicLayout>
  )
}
