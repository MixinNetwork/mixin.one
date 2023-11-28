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
    <div className="flex ml-16.5 sm:ml-24 items-center w-fit h-fit space-x-6.5 mt-6.5">
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
  <div className="pl-16.5 pr-8.5 sm:pl-24 sm:pr-20 md:pr-16 lg:pr-30 h-full flex flex-col justify-between gap-y-20">
    <div className="text-white text-lg font-normal leading-9">{content}</div>
    <div>
      <div className=" text-white text-xl font-medium leading-tight">{name}</div>
      <div className="mt-4 text-zinc-300 text-base font-normal leading-none">{title}</div>
    </div>
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
          message: "We need the contributions of everyone in this ecosystem - large and small - to bring out the full potential of the technology that Satoshi proposed.",
        }),
        name: translate({
          message: "Lyric",
        }),
        title: translate({
          message: "Founder and CEO, Pando",
        }),
      },
    ].map((item) => <Item key={item.content} {...item} />),
  }
  return (
    <>
      <SectionTitle>
        <Translate>Hear from our customers</Translate>
      </SectionTitle>
      <div className="container mx-auto md:grid md:grid-cols-[645fr_315fr] lg:grid-cols-[762fr_432fr] overflow-hidden md:mb-45 mb-25">
        <img
          loading="lazy"
          src={require("@site/static/img/common/hearFromOurCustomers.webp").default}
          className="aspect-375/250 sm:aspect-664/443 md:aspect-315/364 lg:aspect-432/500 md:order-last object-cover w-full h-full"
        />
        <div className="bg-[#333] pt-15 sm:pt-10 lg:pt-15 pb-13 sm:pb-20 md:pb-10 lg:pb-20 flex flex-col overflow-hidden h-full">
          <QuotationMark className="sm:w-12 sm:h-9 ml-9.5 lg:ml-12" />
          <Carousel {...props} className="grow children:h-full" customButtonGroup={<ButtonGroup {...props} />} />
        </div>
      </div>
    </>
  )
}
