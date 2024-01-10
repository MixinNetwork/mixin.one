import SectionTitle from "./SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"
import QuotationMark from "@site/static/img/common/quotationMark.svg"
import Carousel, { CarouselProps } from "react-multi-carousel"
import React from "react"
import NextArrow from "@site/static/img/common/nextArrow.svg"
import clsx from "clsx"
import prepareCarouselData, {
  CarouselButtonGroupProps,
} from "../../helper/carousel"
const ButtonGroup = (props: CarouselButtonGroupProps & CarouselProps) => {
  const { next, previous, dots } = prepareCarouselData(props)

  return (
    <div className="space-x-6.5 mt-6.5 ml-8-32 flex h-fit w-fit items-center">
      <button className="click-area-4" onClick={previous}>
        <NextArrow className="rotate-180" />
      </button>

      <div className="flex w-fit items-center space-x-4">
        {dots.map(({ index, isActive, handleClick }) => {
          return (
            <button
              key={index}
              className={clsx(
                "click-area-2 h-1.5 w-1.5 rounded-full transition-all",
                isActive ? "bg-blue-500" : "bg-white",
              )}
              onClick={handleClick}
            />
          )
        })}
      </div>

      <button className="click-area-4" onClick={next}>
        <NextArrow />
      </button>
    </div>
  )
}
const Item = ({
  content,
  name,
  title,
}: {
  content: string
  name: string
  title: string
}) => (
  <div className="ml-8-32 mr-8-32 flex h-full flex-col justify-between gap-y-20">
    <div className="text-4-4.5 text-op-90 font-normal leading-9 text-white">
      {content}
    </div>
    <div>
      <div className="text-4-5 font-medium leading-tight text-white">
        {name}
      </div>
      <div className="text-4 text-op-66 mt-4 font-normal text-white">
        {title}
      </div>
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
          message:
            "Mixin Safe provides a complete suite of decentralized solutions to help custody my Bitcoin wealth, no sacrifice of the Bitcoin decentralized nature.",
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
          message:
            "We need the contributions of everyone in this ecosystem - large and small - to bring out the full potential of the technology that Satoshi proposed.",
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
      <div className="md:mb-45 mb-25 container mx-auto overflow-hidden md:grid md:grid-cols-[645fr_315fr] lg:grid-cols-[762fr_432fr]">
        <img
          loading="lazy"
          src={
            require("@site/static/img/common/hearFromOurCustomers.webp").default
          }
          className="aspect-375/250 sm:aspect-664/443 md:aspect-315/364 lg:aspect-432/500 h-full w-full object-cover md:order-last"
        />
        <div className="pt-15 lg:pt-15 pb-13 flex h-full flex-col overflow-hidden bg-[#000] sm:pb-20 sm:pt-10 md:pb-10 lg:pb-20">
          <QuotationMark className="ml-8-12 h-4.5-8.75 w-6-12 mb-2.5-0" />
          <Carousel
            {...props}
            className="children:h-full grow"
            customButtonGroup={<ButtonGroup {...props} />}
          />
        </div>
      </div>
    </>
  )
}
