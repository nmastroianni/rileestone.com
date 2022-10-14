import * as React from 'react'
import { SliceZone } from '@prismicio/react'
import Head from 'next/head'
import { createClient } from '../prismicio'
import { components } from '../slices'
import Layout from '../components/Layout/Layout'

export default function Home({ page, siteMetadata }) {
  console.log('HOMEPAGE ==> ', siteMetadata)
  return (
    <Layout {...siteMetadata}>
      <Head>
        <title>SITE TITLE GOES HERE</title>
      </Head>
      <div className="grid grid-cols-1 gap-y-4 md:gap-y-0">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </Layout>
  )
}

/**
 * It fetches the homepage and main navigation from Prismic, and then returns them as props
 * @returns The props object is being returned.
 */
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const siteMetadata = await client.getSingle('sitemetadata')
  const page = await client.getSingle('homepage', {
    // fetchLinks: [
    //   'series.seriesname',
    //   'series.boxsetlink',
    //   'series.seriesimage',
    // ],
  })
  // const navigation = await client.getSingle('main_navigation')

  return {
    props: {
      // navigation,
      page,
      siteMetadata,
    },
  }
}
