import React, { useRef, useState } from "react"
import SectionTitle from "../../common/SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"
import clsx from "clsx"
import { toast } from "sonner"
import DropdownIcon from "@site/static/img/common/dropdown.svg"
import tw from "tailwind-styled-components"

const Item = ({
  children,
  isError,
}: {
  children: React.ReactNode
  isError: boolean
}) => (
  <div
    className={clsx(
      "text-3.5 space-y-2.5 font-normal transition-all",
      isError ? "text-red" : "text-#000 text-op-70 ",
    )}
  >
    {children}
  </div>
)
const Input = tw.input`p-4 w-full rounded-sm border border-zinc-800`

export const Section = () => {
  const [error, setError] = useState<"name" | "email" | "message">()

  const nameRef = useRef<HTMLInputElement>(null)
  const businessTypeRef = useRef<HTMLSelectElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  return (
    <>
      <SectionTitle large>
        <Translate>Contact Us</Translate>
      </SectionTitle>
      <div className="pb-45 container mx-auto grid gap-y-10 sm:grid-cols-2">
        <img
          loading="lazy"
          src={require("@site/static/img/page/contact/1.webp").default}
          className="aspect-375/425 h-full w-full object-cover sm:aspect-auto sm:flex-1"
        />
        <div className="sm:flex-1 sm:p-5 sm:shadow">
          <div className="space-y-6">
            <Item isError={error === "name"}>
              <div>
                <Translate>Name (required)</Translate>
              </div>
              <Input
                ref={nameRef}
                type="text"
                inputMode="text"
                className={clsx(error === "name" && "border-red")}
              />
            </Item>

            <Item isError={false}>
              <div>
                <Translate>Business Type (required)</Translate>
              </div>
              <div className="relative">
                <DropdownIcon className="absolute-vertical-center z-1 right-4 stroke-black" />
                <select
                  ref={businessTypeRef}
                  className="relative z-0 w-full appearance-none rounded-sm border border-zinc-800 p-4"
                >
                  <option value="exchange">
                    <Translate>Exchange</Translate>
                  </option>
                  <option value="fund">
                    <Translate>Fund</Translate>
                  </option>
                  <option value="project">
                    <Translate>DAO</Translate>
                  </option>
                  <option value="otc">
                    <Translate>OTC</Translate>
                  </option>
                  <option value="payment">
                    <Translate>Payment</Translate>
                  </option>
                  <option value="mining">
                    <Translate>Mining Pool</Translate>
                  </option>
                  <option value="other">
                    <Translate>Other</Translate>
                  </option>
                </select>
              </div>
            </Item>
            <Item isError={error === "email"}>
              <div>
                <Translate>Email (required)</Translate>
              </div>
              <Input
                ref={emailRef}
                type="text"
                inputMode="email"
                className={clsx(error === "email" && "border-red")}
              />
            </Item>
            <Item isError={error === "message"}>
              <div>
                <Translate>Message (required)</Translate>
              </div>
              <Input
                $as={"textarea"}
                ref={messageRef as any}
                placeholder={translate({
                  message: "How can we help you?",
                })}
                type="text"
                inputMode="text"
                className={clsx(
                  "min-h-40",
                  error === "message" && "border-red",
                )}
              />
            </Item>
          </div>

          <button
            className="text-4 mt-10 w-full rounded-sm bg-[#000] py-4 text-center font-normal text-white"
            onClick={async () => {
              const name = nameRef.current?.value.trim()
              const businessType = businessTypeRef.current?.value
              const email = emailRef.current?.value.trim()
              const message = messageRef.current?.value.trim()

              if (!name) {
                setError("name")
                return
              }

              if (
                !/[\w'.%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4}/.test(
                  email || "",
                )
              ) {
                setError("email")
                return
              }

              if (!message) {
                setError("message")
                return
              }

              setError(undefined)

              toast.promise(
                fetch("https://safe-api.mixin.zone/customer_services", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    full_name: name,
                    email,
                    business: businessType,
                    message,
                  }),
                }).then((res) => {
                  if (!res.ok) throw new Error("error")
                  return true
                }),
                {
                  loading: translate({
                    message: "Loading...",
                  }),
                  success: () => {
                    nameRef.current!.value = ""
                    emailRef.current!.value = ""
                    messageRef.current!.value = ""

                    return translate({
                      message: "Your message has been sent successfully.",
                    })
                  },
                  error: () =>
                    translate({
                      message: "Unknown error, please try again later.",
                    }),
                },
              )
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  )
}
