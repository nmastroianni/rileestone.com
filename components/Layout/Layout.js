import * as React from 'react'
import Navbar from './Navbar'
// import Footer from './Footer'
import { BsArrowReturnLeft } from 'react-icons/bs'
// import Consent from './Consent'

const Layout = ({ children, data: { sitelogo } }) => {
  return (
    <div className="relative">
      <ul id="nav-access" className="relative mx-auto">
        <li>
          <a
            href="#main-content"
            className="absolute -top-20 z-50 inline-block w-full transform bg-opacity-30 text-center text-2xl transition-all duration-500 ease-in-out focus:translate-y-20 sm:left-1/4 sm:w-1/2"
          >
            Skip to main content{' '}
            <span className="rounded-sm px-3 py-0 text-base text-gray-800">
              Return
              <BsArrowReturnLeft className="ml-1 inline h-3 w-3 text-gray-800" />
            </span>
          </a>
        </li>
      </ul>
      <div className="flex min-h-screen flex-col">
        <header>
          <Navbar sitelogo={sitelogo} />
        </header>
        <main id="main-content">{children}</main>
        {/* <Footer />
        <Consent /> */}
      </div>
    </div>
  )
}
export default Layout
