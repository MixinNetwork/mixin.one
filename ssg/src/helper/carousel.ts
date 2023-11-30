import React from "react"
import { ButtonGroupProps, CarouselInternalState, CarouselProps } from "react-multi-carousel"

export interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string
}
interface Table {
  [key: number]: number
}
function getOriginalIndexLookupTableByClones(slidesToShow: number, childrenArr: any[]): Table {
  if (childrenArr.length > slidesToShow * 2) {
    const table: Table = {}
    const firstBeginningOfClones = childrenArr.length - slidesToShow * 2
    const firstEndOfClones = childrenArr.length - firstBeginningOfClones
    let firstCount = firstBeginningOfClones
    for (let i = 0; i < firstEndOfClones; i++) {
      table[i] = firstCount
      firstCount++
    }
    const secondBeginningOfClones = childrenArr.length + firstEndOfClones
    const secondEndOfClones = secondBeginningOfClones + childrenArr.slice(0, slidesToShow * 2).length
    let secondCount = 0
    for (let i = secondBeginningOfClones; i <= secondEndOfClones; i++) {
      table[i] = secondCount
      secondCount++
    }
    const originalStart = firstEndOfClones
    const originalEnd = secondBeginningOfClones
    let originalCounter = 0
    for (let i = originalStart; i < originalEnd; i++) {
      table[i] = originalCounter
      originalCounter++
    }
    return table
  } else {
    const table: Table = {}
    const totalSlides = childrenArr.length * 3 // the original children array gets clone 3 times.
    let count = 0
    for (let i = 0; i < totalSlides; i++) {
      table[i] = count
      count++
      if (count === childrenArr.length) {
        count = 0
      }
    }
    return table
  }
}

function getOriginalCounterPart(index: number, { slidesToShow, currentSlide }: { slidesToShow: number; currentSlide: number; totalItems: number }, childrenArr: any[]): number {
  // this function is only used for "infinite and showDots are true";
  if (childrenArr.length > slidesToShow * 2) {
    const originalCounterPart = index + slidesToShow * 2
    return originalCounterPart
  } else {
    if (currentSlide >= childrenArr.length) {
      return childrenArr.length + index
    } else {
      return index
    }
  }
}
interface NextSlidesTable {
  [key: number]: number
}
function getLookupTableForNextSlides(numberOfDotsToShow: number, state: CarouselInternalState, props: CarouselProps, childrenArr: any[]): NextSlidesTable {
  const table: NextSlidesTable = {}
  const slidesToSlide = getSlidesToSlide(state, props)
  Array(numberOfDotsToShow)
    .fill(0)
    .forEach((_, i) => {
      const nextSlide = getOriginalCounterPart(i, state, childrenArr)
      if (i === 0) {
        table[0] = nextSlide
      } else {
        const prevIndex = i - 1
        const now = table[prevIndex] + slidesToSlide!
        table[i] = now
      }
    })
  return table
}

function getSlidesToSlide(state: CarouselInternalState, props: CarouselProps): number {
  const { domLoaded, slidesToShow, containerWidth, itemWidth } = state
  const { deviceType, responsive } = props
  let slidesToScroll = props.slidesToSlide || 1
  const domFullyLoaded = Boolean(domLoaded && slidesToShow && containerWidth && itemWidth)
  const ssr = props.ssr && props.deviceType && !domFullyLoaded
  if (ssr) {
    Object.keys(responsive).forEach((device) => {
      const { slidesToSlide } = responsive[device]
      if (deviceType === device && slidesToSlide) {
        slidesToScroll = slidesToSlide
      }
    })
  }
  if (domFullyLoaded) {
    Object.keys(responsive).forEach((item) => {
      const { breakpoint, slidesToSlide } = responsive[item]
      const { max, min } = breakpoint
      if (slidesToSlide && window.innerWidth >= min && window.innerWidth <= max) {
        slidesToScroll = slidesToSlide
      }
    })
  }
  return slidesToScroll
}

const prepareCarouselData = (props: CarouselButtonGroupProps & CarouselProps) => {
  const {
    carouselState,
    carouselState: { slidesToShow, currentSlide },
  } = props

  const slidesToSlide = getSlidesToSlide(carouselState, props)
  const childrenArr = React.Children.toArray(props.children)
  let numberOfDotsToShow: number
  if (!props.infinite) {
    numberOfDotsToShow = Math.ceil((childrenArr.length - slidesToShow) / slidesToSlide!) + 1
  } else {
    numberOfDotsToShow = Math.ceil(childrenArr.length / slidesToSlide!)
  }

  const nextSlidesTable = getLookupTableForNextSlides(numberOfDotsToShow, carouselState, props, childrenArr)
  const lookupTable = getOriginalIndexLookupTableByClones(slidesToShow, childrenArr)
  const currentSlides = lookupTable[currentSlide]

  const dots = Array(numberOfDotsToShow)
    .fill(0)
    .map((_, index) => {
      let isActive
      let nextSlide: number
      if (!props.infinite) {
        const maximumNextSlide = childrenArr.length - slidesToShow
        const possibleNextSlides = index * slidesToSlide!
        const isAboutToOverSlide = possibleNextSlides > maximumNextSlide
        nextSlide = isAboutToOverSlide ? maximumNextSlide : possibleNextSlides
        isActive = nextSlide === currentSlide || (currentSlide > nextSlide && currentSlide < nextSlide + slidesToSlide! && currentSlide < childrenArr.length - slidesToShow)
      } else {
        nextSlide = nextSlidesTable[index]
        const cloneIndex = lookupTable[nextSlide]
        isActive = currentSlides === cloneIndex || (currentSlides >= cloneIndex && currentSlides < cloneIndex + slidesToSlide!)
      }
      return {
        index,
        isActive,
        handleClick: () => props.goToSlide(nextSlide),
      }
    })

  return {
    next: props.next,
    previous: props.previous,
    dots,
  }
}

export default prepareCarouselData
