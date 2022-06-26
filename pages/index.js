import Head from 'next/head'
import Image from 'next/image'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Search from '../components/Search'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ListingCompany - Connect </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Search />
      <div style={{margin: "20px 0px"}}></div>
      <Categories />
      <Footer />
    </div>
  )
}
