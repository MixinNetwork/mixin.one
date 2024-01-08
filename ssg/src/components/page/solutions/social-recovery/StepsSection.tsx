import React from "react"
import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"
import clsx from "clsx"
import FullItem from "../../../common/FullItem"

export const StepsSection = () => {
  const stepGenerator = (item: string, i: number) => (
    <div className="flex-center w-fit gap-x-4">
      <div className="bg-#000 flex-center text-3.5 h-5 w-5 shrink-0 rounded-full leading-[1.5] text-white">
        {i + 1}
      </div>
      <div className="text-3.5-4">{item}</div>
    </div>
  )

  return (
    <div className={clsx("bg-#F2F2F2 mt-20", "pb-20-30")}>
      <SectionTitle
        description={
          <Translate>
            {
              "When your device is accidentally lost, you can regain control of the wallet by logging in through a pre-set emergency contact."
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
            message: "Set Emergency Contacts",
          })}
        >
          <div className="mt-7.5 space-y-5">
            {[
              translate({
                message:
                  "Invite your family or friends to install Mixin Messenger and add each other",
              }),
              translate({
                message: "Set your family or friends as emergency contacts",
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
            message: "Login with Emergency Contacts",
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
                message: "Enter the wallet's PIN to confirm asset security, and update the current account's phone number to the new one.",
              }),
            ].map(stepGenerator)}
          </div>
        </FullItem>
      </div>
    </div>
  )
}
