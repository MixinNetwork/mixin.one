import React from "react"
import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"
import clsx from "clsx"

const Item = ({
  cover,
  background,
  title,
  description,
  className,
  coverClassName,
}: {
  cover: string
  background: string
  title: string
  description: string
  className?: string
  coverClassName?: string
}) => {
  return (
    <div
      className={clsx(
        "pt-15 relative flex flex-col gap-y-5 overflow-hidden bg-[#F2F2F2] px-4 pb-20",
        "sm:pl-15 sm:pt-12.5 sm:pb-6.5 sm:h-124.25 sm:justify-between sm:pr-10",
        "md:h-88 md:px-10 md:py-5",
        "lg:h-110 lg:pb-6.5 lg:p-10",
        className,
      )}
    >
      <img
        loading="lazy"
        src={
          require("@site/static/img/page/solutions/mpc-wallet/" + background)
            .default
        }
        className="fill op-0 sm:op-100 pointer-events-none"
      />
      <img
        loading="lazy"
        src={
          require("@site/static/img/page/solutions/mpc-wallet/" + cover).default
        }
        width={1098}
        height={678}
        className={clsx(
          "z-1 w-full object-contain sm:order-last sm:self-end",
          "sm:w-94",
          "md:w-68.75 md:absolute md:bottom-3 md:right-3",
          "lg:w-94 lg:bottom-6.5 lg:right-10",
          coverClassName,
        )}
      />
      <div className="z-1">
        <div className="text-5.5 sm:text-8 font-medium">{title}</div>
        <div className="text-3.5-4 text-#000 text-op-80 mt-4 leading-[1.5]">
          {description}
        </div>
      </div>
    </div>
  )
}

export const Header = () => (
  <>
    <SectionTitle
      description={translate({
        message:
          "Using MPC technology for wallets offers several advantages, including eliminating the need to trust third parties, enhanced data privacy, increased accuracy, the removal of single points of failure, increased difficulty for hackers, and reduced reliance on cold storage.",
      })}
      large
    >
      <Translate>What are the benefits of MPC wallets?</Translate>
    </SectionTitle>
    <div className="container mx-auto grid gap-5  pb-40 md:grid-cols-2">
      <Item
        cover="1.1.webp"
        background="1.6.webp"
        title={translate({ message: "Eliminate Third-Party Trust" })}
        description={translate({
          message:
            "Data can be shared in a distributed manner without any third parties",
        })}
      />

      <Item
        cover="1.2.webp"
        background="1.7.webp"
        title={translate({ message: "Increased Data Privacy" })}
        description={translate({
          message:
            "Data is encrypted at rest and in transit so no private information is revealed or compromised",
        })}
      />

      <Item
        cover="1.3.webp"
        background="1.8.webp"
        title={translate({ message: "Reduced Reliance on Cold Storage" })}
        description={translate({
          message:
            "Users can only hold their assets online and no longer need cold-storage devices",
        })}
        className={clsx(
          "!sm:h-160",
          "!md:h-88 md:gap-x-18 md:col-span-full md:flex-row",
          "!lg:h-110 lg:gap-x-25",
        )}
        coverClassName={clsx(
          "!md:w-90 !md:static !md:self-center",
          "!lg:w-122",
        )}
      />

      <Item
        cover="1.4.webp"
        background="1.9.webp"
        title={translate({ message: "Removal of SPOF" })}
        description={translate({
          message: "Private keys are not stored in one single place",
        })}
      />

      <Item
        cover="1.5.webp"
        background="1.10.webp"
        title={translate({ message: "Increased Hacking Difficulty" })}
        description={translate({
          message:
            "A hacker would need to attack multiple parties across systems and locations",
        })}
      />
    </div>
  </>
)
