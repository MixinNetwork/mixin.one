"use client"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import NextArrow from "./nextArrow.svg"
import { useState } from "react"
import clsx from "clsx"

const Item = ({ content, name, title }: { content: string; name: string; title: string }) => (
  <div className="keen-slider__slide pl-16.5 pr-8.5">
    <div className="text-white text-lg font-normal leading-9">{content}</div>
    <div className="mt-20 text-white text-xl font-medium leading-tight">{name}</div>
    <div className="mt-4 text-zinc-300 text-base font-normal leading-none">{title}</div>
  </div>
)

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <Item
          content={"Mixin Safe provides a complete suite of decentralized solutions to help custody my Bitcoin wealth, no sacrifice of the Bitcoin decentralized nature."}
          name={"Thorb"}
          title={"Founder and CEO, MixPay"}
        />
        <Item
          content={"Mixin Safe provides a complete suite of decentralized solutions to help custody my Bitcoin wealth, no sacrifice of the Bitcoin decentralized nature."}
          name={"Thorb"}
          title={"Founder and CEO, MixPay"}
        />
        <Item
          content={"Mixin Safe provides a complete suite of decentralized solutions to help custody my Bitcoin wealth, no sacrifice of the Bitcoin decentralized nature."}
          name={"Thorb"}
          title={"Founder and CEO, MixPay"}
        />
        <Item
          content={"Mixin Safe provides a complete suite of decentralized solutions to help custody my Bitcoin wealth, no sacrifice of the Bitcoin decentralized nature."}
          name={"Thorb"}
          title={"Founder and CEO, MixPay"}
        />
        <Item
          content={"Mixin Safe provides a complete suite of decentralized solutions to help custody my Bitcoin wealth, no sacrifice of the Bitcoin decentralized nature."}
          name={"Thorb"}
          title={"Founder and CEO, MixPay"}
        />
      </div>
      <div className="flex mx-auto items-center w-fit space-x-6.5 mt-6.5">
        <button className="click-area-4" onClick={() => instanceRef.current?.prev()}>
          <NextArrow className="rotate-180" />
        </button>

        <div className="flex items-center w-fit space-x-4">
          {Array(instanceRef.current?.track.details.slides.length ?? 0)
            .fill(0)
            .map((_, index) => (
              <button
                key={index}
                className={clsx("w-1.5 h-1.5 rounded-full click-area-2 transition-all", currentSlide === index ? "bg-blue-500" : "bg-zinc-300")}
                onClick={() => instanceRef.current?.moveToIdx(index)}
              />
            ))}
        </div>

        <button className="click-area-4" onClick={() => instanceRef.current?.next()}>
          <NextArrow />
        </button>
      </div>
    </>
  )
}

export default Slider
