import React from "react"
import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"
import clsx from "clsx"
import FullItem from "../../../common/FullItem"

export const StepsSection = () => {
  const stepGenerator = (item: string, i: number) => (
    <div className="flex-center w-fit gap-x-4">
      <div className="bg-#333 flex-center text-3.5 h-5 w-5 shrink-0 rounded-full text-white">
        {i + 1}
      </div>
      {item}
    </div>
  )

  return (
    <div
      className={clsx(
        "bg-#F2F2F2 mt-20",
        "pb-70 sm:pb-61.7 md:pb-53.3 lg:pb-45",
      )}
    >
      <SectionTitle
        description={
          <Translate>
            {
              "When you lose your phone with Mixin Messenger installed, you can not only re-login by replacing the SIM card, but also re-gain control of the wallet by logging in with the emergency contact set in advance."
            }
          </Translate>
        }
        className="!mb-10"
      >
        <Translate>Recover with Emergency Contacts</Translate>
      </SectionTitle>
      <div className={clsx("")}>
        <FullItem
          cover={
            require("@site/static/img/page/solutions/social-recovery/3.1.webp")
              .default
          }
          title={translate({
            message: "Set emergency contacts",
          })}
        >
          <div className="mt-7.5 space-y-5">
            {[
              translate({
                message:
                  "Invite your family or friends to install Mixin Messenger and add each other",
              }),
              translate({
                message: "Set your family and friends as emergency contacts",
              }),
            ].map(stepGenerator)}
          </div>
        </FullItem>
        <FullItem
          cover={
            require("@site/static/img/page/solutions/social-recovery/3.2.webp")
              .default
          }
          title={translate({
            message: "Transfer privacy",
          })}
        >
          <div className="mt-7.5 space-y-5">
            {[
              translate({
                message:
                  "Install Mixin Messenger on a new device and enter the old phone number",
              }),
              translate({
                message:
                  "Ask the emergency contact to get the verification code",
              }),
              translate({
                message: "Change the phone number of the current account",
              }),
            ].map(stepGenerator)}
          </div>
        </FullItem>
      </div>
    </div>
  )
}
