import React, { useRef, useState } from "react"
import SectionTitle from "../../common/SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"
import clsx from "clsx"
import { toast } from "sonner"
import DropdownIcon from "@site/static/img/common/dropdown.svg"
import tw from "tailwind-styled-components"

const Item = ({ children, isError }: { children: React.ReactNode; isError: boolean }) => (
  <div className={clsx("text-sm font-normal space-y-2.5 transition-all", isError ? "text-red" : "text-zinc-800 text-opacity-80 ")}>{children}</div>
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
      <SectionTitle>
        <Translate>Contact Us</Translate>
      </SectionTitle>
      <div className="container mx-auto grid sm:grid-cols-2 gap-y-10 pb-45">
        <img src={require("@site/static/img/page/contact/1.webp").default} className="aspect-375/425 sm:aspect-auto w-full h-full object-cover sm:flex-1" />
        <div className="px-8 sm:flex-1 sm:shadow-lg">
          <div className="space-y-6">
            <Item isError={error === "name"}>
              <div>Name (required)</div>
              <Input ref={nameRef} type="text" inputMode="text" className={clsx(error === "name" && "border-red")} />
            </Item>

            <Item isError={false}>
              <div>Business Type (required)</div>
              <div className="relative">
                <DropdownIcon className="absolute-vertical-center right-4 stroke-black z-1" />
                <select ref={businessTypeRef} className="p-4 w-full rounded-sm border border-zinc-800 appearance-none relative z-0">
                  <option value="exchange">Exchange</option>
                  <option value="fund">Fund</option>
                  <option value="project">DAO</option>
                  <option value="otc">OTC</option>
                  <option value="payment">Payment</option>
                  <option value="mining">Mining Pool</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </Item>
            <Item isError={error === "email"}>
              <div>Email (required)</div>
              <Input ref={emailRef} type="text" inputMode="email" className={clsx(error === "email" && "border-red")} />
            </Item>
            <Item isError={error === "message"}>
              <div>Message(required)</div>
              <Input $as={"textarea"} ref={messageRef as any} placeholder="How can we help you?" type="text" inputMode="text" className={clsx("min-h-40", error === "message" && "border-red")} />
            </Item>
          </div>

          <button
            className="mt-10 w-full py-4 bg-neutral-800 rounded-sm text-center text-white text-base font-normal leading-none"
            onClick={async () => {
              const name = nameRef.current?.value.trim()
              const businessType = businessTypeRef.current?.value
              const email = emailRef.current?.value.trim()
              const message = messageRef.current?.value.trim()

              if (!name) {
                setError("name")
                return
              }

              if (!/[\w'.%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4}/.test(email || "")) {
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
                }
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
