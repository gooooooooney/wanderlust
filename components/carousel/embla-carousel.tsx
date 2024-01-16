/* eslint-disable @next/next/no-img-element */
"use client"


import Image from 'next/image'
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import Autoplay from "embla-carousel-autoplay"

import AutoHeight from 'embla-carousel-auto-height'

import {
  DotButton,
} from './dot-button'
import "./base.css"
import "./embla.css"
import { Banner } from '@prisma/client'

type EmblaCarousel = typeof useEmblaCarousel

type EmblaOptionsType = Parameters<EmblaCarousel>[0]
type EmblaCarouselType = NonNullable<ReturnType<EmblaCarousel>[1]>



type CarouselBannersProps = {
  banners: Banner[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<CarouselBannersProps> = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(), AutoHeight()])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])


  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div className='theme-light relative'>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {props.banners.map((banner, index) => (
              <div className="embla__slide" key={banner.id}>
                {/* <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div> */}
                <img
                  className="h-80 lg:h-[40rem] w-full object-cover block"
                  src={banner.imageSrc}
                  alt="Your alt text"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default EmblaCarousel



