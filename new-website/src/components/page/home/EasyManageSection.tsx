import Translate, { translate } from "@docusaurus/Translate"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import LocalLink from "../../common/LocaleLink"
import SectionTitle from "../../common/SectionTitle"

const EasyManageItem = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-y-3 gap-x-5">
    <img
      loading="lazy"
      src={require("@site/static/img/page/home/easy/" + icon).default}
      alt={"icon"}
      className="w-6 h-6 bg-white p-3 lg:p-4.5 box-content shadow-lg shadow-blue-600 shadow-opacity-10 rounded-lg flex-center row-span-2"
    />
    <div className="text-[#333] text-base font-medium leading-tight">{title}</div>
    <div className="text-[#333] text-opacity-70 text-sm font-normal leading-tight">{description}</div>
  </div>
)

export const EasyManageSection = () => {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext()
  console.log("currentLocale", currentLocale)
  return (
    <div className="py-5 px-5 sm:pt-10 sm:pb-30 container mx-auto">
      <SectionTitle description={<Translate>6 key features to allow hassle-free day-to-day management.</Translate>}>
        <Translate>Easy Digital Assets Management</Translate>
      </SectionTitle>
      <img loading="lazy" src={require(`@site/static/img/page/home/assets_${currentLocale}.webp`).default} alt={""} className="mt-5 aspect-335/183 relative" />

      <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-11 md:gap-x-9 gap-y-13 px-5">
        <EasyManageItem
          key="Dashboard"
          title={translate({ message: "Dashboard" })}
          description={translate({ message: "Easily view your assets distribution anywhere and anytime." })}
          icon="dashboard.svg"
        />
        <EasyManageItem
          key="Own Your Data"
          title={translate({
            message: "Own Your Data",
          })}
          description={translate({
            message: "Download all your account and transaction history conveniently.",
          })}
          icon="downloadableHistory.svg"
        />
        <EasyManageItem
          key="Joint Accounts"
          title={translate({
            message: "Joint Accounts",
          })}
          description={translate({ message: "Manage assets with your family, friends and colleagues" })}
          icon="joint.svg"
        />
        <EasyManageItem
          key="Batch Transactions"
          title={translate({
            message: "Batch Transactions",
          })}
          description={translate({ message: "Send thousands of transactions in a few minutes" })}
          icon="batchTransfer.svg"
        />
        <EasyManageItem
          key="Whitelist"
          title={translate({
            message: "Whitelist",
          })}
          description={translate({
            message: "Cater to your internal risk control needs with receivers whitelist.",
          })}
          icon="whitelist.svg"
        />
        <EasyManageItem
          key="Notification"
          title={translate({
            message: "Notification",
          })}
          description={translate({
            message: "Get notified whenever anything happens to your accounts.",
          })}
          icon={"notification.svg"}
        />
      </div>

      <LocalLink to="/pricing" className="mt-20 sm:mt-15 rw-10 sm:w-fit sm:px-7 mx-auto py-4 flex-center bg-zinc-700 rounded-sm text-white font-medium leading-snug">
        <Translate>Start for Free</Translate>
      </LocalLink>
    </div>
  )
}
