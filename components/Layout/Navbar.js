import { PrismicLink } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import Head from 'next/head'
import Link from 'next/link'
import * as React from 'react'
import Headroom from 'react-headroom'

const Navbar = ({ sitelogo }) => {
  return (
    <Headroom>
      <div className="mx-auto flex items-center justify-between py-3 px-2 md:px-6">
        <PrismicNextImage field={sitelogo} width={60} layout="fixed" />
        <h1>Rilee Stone</h1>
        <div className="dropdown relative">
          <button
            type="button"
            className="dropdown-toggle
          flex
          items-center
          whitespace-nowrap
          rounded
          bg-blue-600
          px-6
          py-2.5
          text-xs
          font-medium
          uppercase
          leading-tight text-white
          shadow-md transition duration-150 ease-in-out
          hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
          focus:shadow-lg
          focus:outline-none
          focus:ring-0
          active:bg-blue-800
          active:text-white
          active:shadow-lg"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown Link
          </button>
        </div>
      </div>
    </Headroom>
  )
}

export default Navbar
