import Translate, { translate } from "@docusaurus/Translate"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import LocalLink from "../../common/LocaleLink"
import SectionTitle from "../../common/SectionTitle"

const EasyManageItem = ({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: string
}) => (
  <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-x-5 gap-y-3">
    <img
      loading="lazy"
      src={require("@site/static/img/page/home/easy/" + icon).default}
      alt={"icon"}
      className="lg:p-4.5 shadow-opacity-10 flex-center row-span-2 box-content h-6 w-6 rounded-lg bg-white p-3 shadow-lg shadow-blue-600"
    />
    <div className="text-#333 text-4 font-medium leading-tight">{title}</div>
    <div className="text-#333 text-3.5 font-normal leading-[1.5] text-opacity-70">
      {description}
    </div>
  </div>
)

export const EasyManageSection = () => {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext()
  return (
    <div className="sm:pb-30 container mx-auto  py-5 sm:pt-10">
      <SectionTitle
        description={
          <Translate>
            6 key features to allow hassle-free day-to-day management.
          </Translate>
        }
      >
        <Translate>Easy Digital Assets Management</Translate>
      </SectionTitle>
      <img
        loading="lazy"
        src={
          require(`@site/static/img/page/home/assets_${currentLocale}.webp`)
            .default
        }
        alt={""}
        className="aspect-335/183 relative mt-5"
      />

      <div className="gap-y-13 mt-20 grid px-5 sm:grid-cols-2 sm:gap-x-11 md:grid-cols-3 md:gap-x-9">
        <EasyManageItem
          key="Dashboard"
          title={translate({ message: "Dashboard" })}
          description={translate({
            message:
              "Easily view your assets distribution anywhere and anytime.",
          })}
          icon="dashboard.svg"
        />
        <EasyManageItem
          key="Own Your Data"
          title={translate({
            message: "Own Your Data",
          })}
          description={translate({
            message:
              "Download all your account and transaction history conveniently.",
          })}
          icon="downloadableHistory.svg"
        />
        <EasyManageItem
          key="Joint Accounts"
          title={translate({
            message: "Joint Accounts",
          })}
          description={translate({
            message: "Manage assets with your family, friends and colleagues.",
          })}
          icon="joint.svg"
        />
        <EasyManageItem
          key="Batch Transactions"
          title={translate({
            message: "Batch Transactions",
          })}
          description={translate({
            message: "Send thousands of transactions in a few minutes",
          })}
          icon="batchTransfer.svg"
        />
        <EasyManageItem
          key="Whitelist"
          title={translate({
            message: "Whitelist",
          })}
          description={translate({
            message:
              "Cater to your internal risk control needs with receivers whitelist.",
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

      <LocalLink
        to="/pricing"
        className="sm:mt-15 rw-10 flex-center mx-auto mt-20 rounded-sm bg-zinc-700 py-4 font-medium leading-[1.5] text-white sm:w-fit sm:px-7"
      >
        <Translate>Start for Free</Translate>
      </LocalLink>
    </div>
  )
}
