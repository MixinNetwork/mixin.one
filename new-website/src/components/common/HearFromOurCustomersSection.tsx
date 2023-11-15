import SectionTitle from "./SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"
import QuotationMark from "@site/static/img/common/quotationMark.svg"
import Carousel, { CarouselProps } from "react-multi-carousel"
import React from "react"

import NextArrow from "@site/static/img/common/nextArrow.svg"
import clsx from "clsx"
import prepareCarouselData, { CarouselButtonGroupProps } from "../../helper/carousel"
const ButtonGroup = (props: CarouselButtonGroupProps & CarouselProps) => {
  const { next, previous, dots } = prepareCarouselData(props)

  return (
    <div className="flex mx-auto items-center w-fit h-fit mx-auto space-x-6.5 mt-6.5">
      <button className="click-area-4" onClick={previous}>
        <NextArrow className="rotate-180" />
      </button>

      <div className="flex items-center w-fit space-x-4">
        {dots.map(({ index, isActive, handleClick }) => {
          return <button key={index} className={clsx("w-1.5 h-1.5 rounded-full click-area-2 transition-all", isActive ? "bg-blue-500" : "bg-zinc-300")} onClick={handleClick} />
        })}
      </div>

      <button className="click-area-4" onClick={next}>
        <NextArrow />
      </button>
    </div>
  )
}
const Item = ({ content, name, title }: { content: string; name: string; title: string }) => (
  <div className="pl-16.5 pr-8.5">
    <div className="text-white text-lg font-normal leading-9">{content}</div>
    <div className="mt-20 text-white text-xl font-medium leading-tight">{name}</div>
    <div className="mt-4 text-zinc-300 text-base font-normal leading-none">{title}</div>
  </div>
)

export const HearFromOurCustomersSection = () => {
  const props: CarouselProps = {
    responsive: {
      mobile: {
        breakpoint: { max: Infinity, min: 0 },
        items: 1,
      },
    },
    ssr: true,
    infinite: true,
    keyBoardControl: true,
    renderButtonGroupOutside: true,
    removeArrowOnDeviceType: "mobile",
    deviceType: "mobile",
    children: [
      {
        content: translate({
          message: "Mixin Safe provides a complete suite of decentralized solutions to help custody my Bitcoin wealth, no sacrifice of the Bitcoin decentralized nature.",
        }),
        name: translate({
          message: "Thorb",
        }),
        title: translate({
          message: "Founder and CEO, MixPay",
        }),
      },
      {
        content: translate({
          message: "foo Mixin Safe provides a complete suite of decentralized solutions to help custody my Bitcoin wealth, no sacrifice of the Bitcoin decentralized nature.",
        }),
        name: translate({
          message: "foo Thorb",
        }),
        title: translate({
          message: "foo Founder and CEO, MixPay",
        }),
      },
      {
        content: translate({
          message: "bar Mixin Safe provides a complete suite of decentralized solutions to help custody my Bitcoin wealth, no sacrifice of the Bitcoin decentralized nature.",
        }),
        name: translate({
          message: "bar Thorb",
        }),
        title: translate({
          message: "bar Founder and CEO, MixPay",
        }),
      },
    ].map((item) => <Item key={item.content} {...item} />),
  }
  return (
    <>
      <SectionTitle>
        <Translate>Hear from our customers</Translate>
      </SectionTitle>
      <div className="container mx-auto sm:flex flex-row-reverse overflow-hidden sm:pb-45 pb-25">
        <img src={require("@site/static/img/common/hearFromOurCustomers.png").default} className="aspect-375/250 sm:aspect-430/500 object-cover w-full sm:w-fit" />
        <div className="bg-zinc-800 pt-15 pb-13 basis-2/3 overflow-hidden">
          <QuotationMark className="ml-9.5" />
          <Carousel {...props} customButtonGroup={<ButtonGroup {...props} />} />
        </div>
      </div>
    </>
  )
}
