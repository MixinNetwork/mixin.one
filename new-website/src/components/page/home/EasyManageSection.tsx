import Translate, { translate } from "@docusaurus/Translate"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

const EasyManageItem = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="grid grid-cols-[auto_1fr] gap-y-4 gap-x-5">
    <img src={require("@site/static/img/page/home/easy/" + icon).default} alt={"icon"} className="w-6 h-6 bg-white p-3 lg:p-4.5 box-content shadow-lg rounded-lg flex-center row-span-2" />
    <div className="text-zinc-800 text-base font-medium leading-tight">{title}</div>
    <div className="text-zinc-800 text-opacity-70 text-sm font-normal leading-tight">{description}</div>
  </div>
)

export const EasyManageSection = () => {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext()
  console.log("currentLocale", currentLocale)
  return (
    <div className="py-20 px-5 sm:pt-25 sm:pb-30 container mx-auto">
      <div className="text-center text-zinc-800 text-3xl font-medium leading-10">
        <Translate>We Make Managing Digital Assets Easy</Translate>
      </div>
      <div className="mt-5 text-center text-zinc-800 text-opacity-60 text-base sm:text-sm font-normal leading-normal">
        <Translate>6 key features to allow hassle-free day-to-day management</Translate>
      </div>
      <img src={require(`@site/static/img/page/home/assets_${currentLocale}.webp`).default} alt={""} className="mt-20 aspect-335/183 relative" />

      <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-11 md:gap-x-9 gap-y-13 px-5">
        <EasyManageItem
          key="Dashboard"
          title={translate({ message: "Dashboard" })}
          description={translate({ message: "Easily view your assets distribution any where, anytime" })}
          icon="dashboard.svg"
        />
        <EasyManageItem
          key="Downloadable history"
          title={translate({
            message: "Downloadable history",
          })}
          description={translate({
            message: "Make account reconciliation easy and fiexible",
          })}
          icon="downloadableHistory.svg"
        />
        <EasyManageItem
          key="Joint"
          title={translate({
            message: "Joint",
          })}
          description={translate({ message: "Manage assets with your family, friends and colleagues" })}
          icon="joint.svg"
        />
        <EasyManageItem
          key="Batch transfer"
          title={translate({
            message: "Batch transfer",
          })}
          description={translate({ message: "Send thousands of transaction in a few minitus" })}
          icon="batchTransfer.svg"
        />
        <EasyManageItem
          key="Whitelist"
          title={translate({
            message: "Whitelist",
          })}
          description={translate({
            message: "Cater to your internal risk control needs",
          })}
          icon="whitelist.svg"
        />
        <EasyManageItem
          key="Notification"
          title={translate({
            message: "Notification",
          })}
          description={translate({
            message: "Timely participation in funding approval",
          })}
          icon={"notification.svg"}
        />
      </div>

      <a className="mt-20 sm:mt-15 rw-10 sm:w-fit sm:px-7 mx-auto py-4 flex-center bg-zinc-700 rounded-sm text-white text-sm font-medium leading-snug">
        <Translate>View our plans</Translate>
      </a>
    </div>
  )
}
