import React from "react"
import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"
import clsx from "clsx"

const Itme = ({
  cover,
  name,
  content,
}: {
  cover: string
  name: string
  content: string
}) => (
  <div
    className={clsx(
      "gap-y-15 group grid items-center",
      "sm:grid-cols-2",
      "sm:gap-x-6.7 md:gap-x-13.3 gap-x-0 lg:gap-x-20",
    )}
  >
    <img
      src={
        require("@site/static/img/page/solutions/collaboration/" + cover)
          .default
      }
      width={335}
      height={224}
      className="w-full group-odd:order-last"
    />

    <div className="sm:space-y-9.7 md:space-y-12.3 lg:space-y-15 space-y-7">
      <div
        className={clsx(
          "font-medium",
          "text-5.5 sm:text-5.7 md:text-5.8 lg:text-6",
        )}
      >
        {name}
      </div>
      <div
        className={clsx(
          "grid",
          "sm:gap-y-8.3 md:gap-y-9.7 gap-y-7 lg:gap-y-11",
        )}
      >
        <div>{content}</div>
      </div>
    </div>
  </div>
)

export const StepsSection = () => (
  <div
    className={clsx("bg-#F2F2F2 mt-20", "pb-70 sm:pb-61.7 md:pb-53.3 lg:pb-45")}
  >
    <SectionTitle
      description={
        <Translate>
          Quickly approve and execute your multi-signature transactions.
        </Translate>
      }
    >
      <Translate>Notification Service</Translate>
    </SectionTitle>
    <div className={clsx("mx-a space-y-30 container grid ")}>
      <Itme
        cover="3.1.webp"
        name={translate({
          message: "crafted Notifications",
        })}
        content={translate({
          message:
            "Login to Safe dashboard, create a Safe, be set as a co-signer, approve transactions, recover Safe, etc. All related people will receive notifications, and the content of the notifications is clear at a glance.",
        })}
      />
      <Itme
        cover="3.2.webp"
        name={translate({
          message: "Repeated Notifications",
        })}
        content={translate({
          message:
            "Repeated notifications will be sent automatically by Mixin Messenger and SMS bot until your transaction is executed, so you don't need to manually remind the co-signers.",
        })}
      />
    </div>
  </div>
)
