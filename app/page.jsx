import Head from "next/head"
import Navbar from "./components/Navbar/Navbar"
import BodyContainer from './components/BodyContainer/BodyContainer'
import WhoIAm from "./components/AboutMe/WhoIAm"
export default function Home() {
  return (
    <div>
      <Head>
        <title>Pablo García Portfolio</title>
        <meta></meta>
        <link rel='icon' href="" />
      </Head>
      
    <main className="bg-white px-10 ">
      <section className="min-h-screen ">
        <Navbar />
        <BodyContainer />
        <WhoIAm />
      </section>

    </main>
    </div>

  )
}
