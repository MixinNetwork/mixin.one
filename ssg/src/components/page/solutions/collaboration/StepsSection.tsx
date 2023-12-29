import React from "react"
import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"
import clsx from "clsx"
import FullItem from "../../../common/FullItem"

export const StepsSection = () => (
  <div>
    <SectionTitle
      description={
        <Translate>
          Quickly approve and execute your multi-signature transactions.
        </Translate>
      }
      className="!mb-0"
    >
      <Translate>Notification Service</Translate>
    </SectionTitle>
    <div className="even:children:bg-#F2F2F2">
      <FullItem
        cover={
          require("@site/static/img/page/solutions/collaboration/3.1.webp")
            .default
        }
        title={translate({
          message: "crafted Notifications",
        })}
        description={translate({
          message:
            "Login to Safe dashboard, create a Safe, be set as a co-signer, approve transactions, recover Safe, etc. All related people will receive notifications, and the content of the notifications is clear at a glance.",
        })}
      />
      <FullItem
        cover={
          require("@site/static/img/page/solutions/collaboration/3.2.webp")
            .default
        }
        title={translate({
          message: "Repeated Notifications",
        })}
        description={translate({
          message:
            "Repeated notifications will be sent automatically by Mixin Messenger and SMS bot until your transaction is executed, so you don't need to manually remind the co-signers.",
        })}
      />
    </div>
  </div>
)
