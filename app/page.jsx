import Head from "next/head"
import Navbar from "./components/Navbar/Navbar"
import BodyContainer from './components/BodyContainer/BodyContainer'
import WhoIAm from "./components/AboutMe/WhoIAm"
import Tech from "./components/Tech/Tech"
import Portfolio from "./components/Port/Portfolio"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pablo García Portfolio</title>
        <meta></meta>
        <link rel='icon' href="" />
      </Head>
      
    <main className="bg-white px-10 md:px-20 lg:px-40">
      <section className="min-h-screen ">
        <Navbar />
        <BodyContainer />
        <WhoIAm />
        <Tech />
        <Portfolio />
      </section>

    </main>
    </div>

  )
}
