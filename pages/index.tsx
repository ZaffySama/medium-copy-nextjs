import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Middle from '../components/middle'

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium 100%</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />
      <Middle />

      {/* Posts */}

      
    </div>
  )
}

export default Home
