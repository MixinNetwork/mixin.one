import React from "react"
import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"
import clsx from "clsx"

import Checked from "@site/static/img/common/checked.svg"

const Itme = ({
  cover,
  name,
  steps,
}: {
  cover: string
  name: string
  steps: string[]
}) => (
  <div
    className={clsx(
      "gap-y-15 group grid items-center",
      "sm:grid-cols-2",
      "sm:gap-x-6.7 md:gap-x-13.3 gap-x-0 lg:gap-x-20",
    )}
  >
    <img
      loading="lazy"
      src={
        require("@site/static/img/page/solutions/social-recovery/" + cover)
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
        {steps.map((item) => {
          return (
            <div className="leading-6.5 flex gap-4">
              <Checked className="h-6.5 shrink-0" />
              <div>{item}</div>
            </div>
          )
        })}
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
          {
            "When you lose your phone with Mixin Messenger installed, you can not only re-login by replacing the SIM card, but also re-gain control of the wallet by logging in with the emergency contact set in advance."
          }
        </Translate>
      }
    >
      <Translate>Recover with Emergency Contacts</Translate>
    </SectionTitle>
    <div className={clsx("mx-a space-y-30 container grid ")}>
      <Itme
        cover="3.1.webp"
        name={translate({
          message: "Set emergency contacts",
        })}
        steps={[
          translate({
            message:
              "Invite your family or friends to install Mixin Messenger and add each other",
          }),
          translate({
            message: "Set your family and friends as emergency contacts",
          }),
        ]}
      />
      <Itme
        cover="3.2.webp"
        name={translate({
          message: "Transfer privacy",
        })}
        steps={[
          translate({
            message:
              "Install Mixin Messenger on a new device and enter the old phone number",
          }),
          translate({
            message: "Ask the emergency contact to get the verification code",
          }),
          translate({
            message: "Change the phone number of the current account",
          }),
        ]}
      />
    </div>
  </div>
)
