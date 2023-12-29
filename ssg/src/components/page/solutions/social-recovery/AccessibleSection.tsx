import React from "react"
import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"
import Verified from "@site/static/img/page/solutions/social-recovery/verified.svg"
import clsx from "clsx"

const LargeItem = ({
  avatar,
  title,
  description,
  className,
}: {
  avatar: string
  title: string
  description: string
  className?: string
}) => (
  <div className={clsx("bg-#F2F2F2 row-span-2 px-5 pb-24 pt-10", className)}>
    <img
      loading="lazy"
      src={
        require("@site/static/img/page/solutions/social-recovery/" + avatar)
          .default
      }
      width={100}
      height={100}
    />
    <div className="text-6 mt-8">{title}</div>
    <div className="text-3.5-4 text-#333 text-op-80 mt-3 leading-[1.5]">
      {description}
    </div>
  </div>
)

const SmallItem = ({
  avatar,
  name,
  id,
  content,
  time,
  className,
}: {
  avatar: string
  name: string
  id: string
  content: string
  time: string
  className?: string
}) => (
  <div className={clsx("bg-#F2F2F2 px-5 pb-16 pt-10", className)}>
    <div className="grid grid-cols-[auto_auto_1fr] items-center gap-y-2.5">
      <img
        loading="lazy"
        src={
          require("@site/static/img/page/solutions/social-recovery/" + avatar)
            .default
        }
        width={46}
        height={46}
        className="row-span-2 mr-3"
      />
      <div className="text-4.5">{name}</div>
      <Verified className="ml-2" />
      <div className="text-#333 text-op-66 col-span-2">@{id}</div>
    </div>

    <div className="text-5 text-#333 text-op-80 mt-4 leading-[1.5]">
      {content}
    </div>
    <div className="text-#333 text-op-33 mt-3">{time}</div>
  </div>
)

export const AccessibleSection = () => (
  <>
    <SectionTitle
      description={
        <Translate>
          {
            "Next-gen security leverages MPC cryptography instead of seed phrases or private keys."
          }
        </Translate>
      }
    >
      <Translate>Mixin wallet makes crypto accessible</Translate>
    </SectionTitle>
    <div
      className={clsx(
        "mx-a container grid auto-rows-fr gap-5  pb-20",
        "sm:grid-cols-2",
        "md:grid-cols-3",
      )}
    >
      <LargeItem
        avatar="2.1.webp"
        title={translate({
          message: "James Howells: 7,500 Bitcoin",
        })}
        description={translate({
          message:
            "James Howells had 7,500 Bitcoins on an hard drive that he bought in 2010. Unfortunately, in 2013 he threw the hard drive in the trash can and didn’t realize what he had done for months. After that, he tried to search through the landfill with no luck.",
        })}
      />

      <LargeItem
        avatar="2.2.webp"
        title={translate({
          message: "Campbell Simpson: 1,400 Bitcoin",
        })}
        description={translate({
          message:
            "Campbell Simpson purchased 1,400 bitcoin for $25 in 2010. Unfortunately, he threw out his hard drive after breaking up with his girlfriend. A mistake that at todays value cost him about $70 million dollars.",
        })}
      />
      <SmallItem
        avatar={"2.3.webp"}
        name={translate({
          message: "MMCrypto",
        })}
        id={translate({
          message: "MMCrypto",
        })}
        content={translate({
          message:
            "I’ll admit: approximately 2 month ago I lost 3 #Bitcoin by not backing up a private key. (Painful)",
        })}
        time={translate({
          message: "Aug 14, 2021",
        })}
      />
      <SmallItem
        avatar={"2.4.webp"}
        name={translate({
          message: "Shehan",
        })}
        id={translate({
          message: "TheCryptoCPA",
        })}
        content={translate({
          message:
            "If you ever feel bad , just know that one of my clients lost ZB worth of BTC . He / she can see the balance on the wallet , but ...",
        })}
        time={translate({
          message: "Aug 14, 2021",
        })}
      />
      <LargeItem
        avatar="2.5.webp"
        title={translate({
          message: "Stefan Thomas: 7,002 Bitcoin",
        })}
        description={translate({
          message:
            "Stefan Thomas from San Francisco, owns 7,002 bitcoins worth around $346 million dollars. His bitcoins were stored on a digital wallet which he lost the password to. He thinks he still has the password to his lost bitcoin on a IronKey encrypted flash drive. The IronKey flash drive gives you 10 password guesses to decrypt the data. After that it deletes...",
        })}
      />
      <LargeItem
        avatar="2.6.webp"
        title={translate({
          message: "Brad Yasar: A few thousand bitcoin",
        })}
        description={translate({
          message:
            "Brad Yasar has lost a few thousand bitcoin and spend hundreds of hours trying to recover them. Fortunately he didn’t lose all of the bitcoin he mined back in the day and seems to be doing quite well.",
        })}
      />
      <SmallItem
        avatar={"2.7.webp"}
        name={translate({
          message: "Sanity Spa",
        })}
        id={translate({
          message: "sanityspa",
        })}
        content={translate({
          message:
            "1 once deleted a wallet . dat file containing 70 BTC . Lessons Iearned : ( 1 ) stop using Shift ＋ DEL to delete files...",
        })}
        time={translate({
          message: "Aug 14, 2021",
        })}
      />
      <SmallItem
        avatar={"2.8.webp"}
        name={translate({
          message: "Almad",
        })}
        id={translate({
          message: "MadiniT4",
        })}
        content={translate({
          message:
            "My neighbor girlfriend deleted his Bitcoin wallet app with $ 10k inside cuz she was trying to download Tiktok and Playstore ...",
        })}
        time={translate({
          message: "Aug 14, 2021",
        })}
      />
    </div>
  </>
)
