import React from 'react'
import { PrismicRichText, PrismicText } from '@prismicio/react'
import ButtonLink from '../../components/ButtonLink'
import { PrismicNextImage } from '@prismicio/next'

const Hero = ({ slice }) => {
  console.log('HERO SLICE SAYS #####> ', slice)
  const {
    variation,
    primary: { heroheadline, heroheadlinespan, heroimage, herobackgroundimage },
    items,
  } = slice
  switch (variation) {
    case 'heroWithImage':
      return (
        <section>
          <div className="bg-rose-50 px-6 py-12 text-center text-gray-800 dark:bg-gradient-to-b dark:from-rose-800 dark:via-rose-900 dark:to-rose-700 md:px-12 lg:text-left">
            <div className="container mx-auto xl:px-32">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="mt-12 lg:mt-0">
                  <h2 className="mx-auto mb-12 max-w-screen-lg text-5xl font-bold tracking-tight dark:text-rose-100 md:text-6xl xl:text-7xl">
                    {heroheadline}{' '}
                    <span className="text-rose-400 dark:text-sky-300">
                      {heroheadlinespan}
                    </span>
                  </h2>
                  <div className="flex flex-col justify-evenly md:flex-row">
                    {items && items.length
                      ? items.map((item, i) => {
                          return (
                            <ButtonLink
                              key={item.herobuttonlink.url + i}
                              {...item}
                            />
                          )
                        })
                      : ``}
                  </div>
                </div>
                <div className="mb-12 rounded-lg shadow-lg lg:mb-0">
                  <PrismicNextImage
                    field={heroimage}
                    layout="responsive"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    case 'heroWithBackgroundImage':
      return (
        <section className="relative max-h-screen overflow-hidden">
          <PrismicNextImage
            field={herobackgroundimage}
            layout="responsive"
            className="absolute inset-0 max-h-screen"
          />
          <div className="absolute inset-0 bg-black bg-opacity-75" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
            <h2 className="mx-auto mb-12 max-w-screen-lg text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              {heroheadline}{' '}
              <span className="text-rose-400">{heroheadlinespan}</span>
            </h2>
            <div className="flex flex-col justify-evenly md:flex-row">
              {items && items.length
                ? items.map((item, i) => {
                    return (
                      <ButtonLink key={item.herobuttonlink.url + i} {...item} />
                    )
                  })
                : ``}
            </div>
          </div>
        </section>
      )
    default:
      return (
        <section>
          <div className="bg-rose-50 py-24 px-6 text-center text-gray-800 dark:bg-gradient-to-b dark:from-rose-800 dark:via-rose-900 dark:to-rose-700 dark:text-white">
            <h2 className="mx-auto mb-12 max-w-screen-lg text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              {heroheadline}{' '}
              <span className="text-rose-400 dark:text-sky-300">
                {heroheadlinespan}
              </span>
            </h2>
            <div className="flex flex-col justify-evenly md:flex-row">
              {items && items.length
                ? items.map((item, i) => {
                    return (
                      <ButtonLink key={item.herobuttonlink.url + i} {...item} />
                    )
                  })
                : ``}
            </div>
          </div>
        </section>
      )
  }
}

export default Hero
