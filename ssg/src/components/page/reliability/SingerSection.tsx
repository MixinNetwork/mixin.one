import Translate, { translate } from "@docusaurus/Translate"

import TitleIcon1 from "@site/static/img/page/reliability/3.1.2.svg"
import TitleIcon2 from "@site/static/img/page/reliability/3.2.2.svg"
import TitleIcon3 from "@site/static/img/page/reliability/3.3.2.svg"
import TitleIcon4 from "@site/static/img/page/reliability/3.4.2.svg"
import TitleIcon5 from "@site/static/img/page/reliability/3.5.2.svg"
import TitleIcon6 from "@site/static/img/page/reliability/3.6.2.svg"
import TitleIcon8 from "@site/static/img/page/reliability/3.8.2.svg"
import TitleIcon9 from "@site/static/img/page/reliability/3.9.2.svg"

import GridIcon1 from "@site/static/img/page/reliability/3.1.1.svg"
import GridIcon2 from "@site/static/img/page/reliability/3.2.1.svg"
import GridIcon3 from "@site/static/img/page/reliability/3.3.1.svg"
import GridIcon4 from "@site/static/img/page/reliability/3.4.1.svg"
import GridIcon5 from "@site/static/img/page/reliability/3.5.1.svg"
import GridIcon6 from "@site/static/img/page/reliability/3.6.1.svg"
import GridIcon7 from "@site/static/img/page/reliability/3.7.1.svg"
import GridIcon8 from "@site/static/img/page/reliability/3.8.1.svg"
import GridIcon9 from "@site/static/img/page/reliability/3.9.1.svg"
import GridIcon10 from "@site/static/img/page/reliability/3.10.svg"

import { CardSectionLayout } from "../../common/CardSectionLayout"

export const SingerSection = () => {
  return (
    <CardSectionLayout
      title={translate({
        message: "Reliable Singer",
      })}
      description={translate({
        message:
          "We are working on getting support of Mixin Safe in more software and hardware wallets.",
      })}
      items={[
        {
          icon: GridIcon1,
          title: <TitleIcon1 />,
          description: translate({
            message:
              "Bitcoin Core connects to the Bitcoin peer-to-peer network to download and fully validate blocks and transactions.",
          }),
        },
        {
          icon: GridIcon2,
          title: <TitleIcon2 />,
          description: translate({
            message:
              "Mornin Key is an open source decentralized key manager that helps users truly control and protect their data.",
          }),
        },
        {
          icon: GridIcon3,
          title: <TitleIcon3 />,
          description: translate({
            message:
              "Mixin Messenger is an open-source cryptocurrency wallet and signal protocol messenger.",
          }),
        },
        {
          icon: GridIcon4,
          title: <TitleIcon4 />,
          description: translate({
            message:
              "Coldcard is an easy to use, ultra-secure, open-source and affordable hardware wallet that is easy to back up via an encrypted microSD card.",
          }),
        },
        {
          icon: GridIcon5,
          title: <TitleIcon5 />,
          description: translate({
            message:
              "Blockstream Jade is an easy-to-use, purely open-source hardware wallet that offers advanced security for your Bitcoin and Liquid assets.",
          }),
        },
        {
          icon: GridIcon6,
          title: <TitleIcon6 />,
          description: translate({
            message:
              "Ledger's hardware wallets are multicurrency wallets that are used to store private keys for cryptocurrencies offline.",
          }),
        },
        {
          icon: GridIcon7,
          title: (
            <img
              loading="lazy"
              src={
                require("@site/static/img/page/reliability/3.7.2.webp").default
              }
              width={190}
              height={18}
            />
          ),
          description: translate({
            message:
              "DIY airgapped hardware wallet that uses QR codes for communication with the host.",
          }),
        },
        {
          icon: GridIcon8,
          title: <TitleIcon8 />,
          description: translate({
            message:
              "The goal of SeedSigner is to lower the cost and complexity of Bitcoin multi-signature wallet use.",
          }),
        },
        {
          icon: GridIcon9,
          title: <TitleIcon9 />,
          description: translate({
            message:
              "One of the simplest hardware wallet for beginners, BitBox02 boasts a fast setup, microSD backup, in-app guide, and intuitive touch sliders.",
          }),
        },
        {
          icon: GridIcon10,
          title: <Translate>More Coming Soon</Translate>,
          description: translate({
            message:
              "Soon we will support more software and hardware wallets to manage Holder Key signatures.",
          }),
        },
      ]}
    />
  )
}
