// @ts-nocheck
/* eslint-disable */

'use client'

import Head from 'next/head'

import { useNotionDataBaseContext } from '@hooks/useNotionDataBaseContext'

export default function Home () {
  const data = useNotionDataBaseContext()
  console.log(data);
  return (
    <div>
      <Head>
        <title>Welcome To Remote Roll</title>
        <meta name="description" content="Remote Roll provides on-demand content production teams" />
      </Head>

      {data?.pagesIsLoading ? (
        <p>loading</p>
      ) :
        data?.pages?.map(({ type, value }, i) => {
          const elements = {
            heading_2: <h2 key={i}>{value}</h2>,
            heading_3: <h3 key={i}>{value}</h3>,
            paragraph: <p key={i}>{value}</p>,
          }
          return elements[type]
        })
      }

      <hr/>

      <iframe src="https://www.behance.net/embed/project/188357593?ilo0=1" height="316" width="404" allowFullScreen frameBorder="0" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin" />
      <iframe src="https://www.behance.net/embed/project/187079199?ilo0=1" height="316" width="404" allowFullScreen frameBorder="0" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin" />
      <iframe src="https://www.behance.net/embed/project/148810415?ilo0=1" height="316" width="404" allowFullScreen frameBorder="0" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin" />
    </div>
  )
}
