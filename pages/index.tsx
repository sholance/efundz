import type { NextPage } from 'next'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Hero from '../components/Hero'
import HeroHead from '../components/HeroHead'

const Home: NextPage = () => {
  return (<>
    <HeroHead heroText="Funding and Equity Distribution Made Easier" />
    <Hero
      heroText="Decentralised Startup Funding and Equity Distribution For Startups running on Web2 Or Web3"
      heroSubText="Power your funding rounds and share profits easier with Klaytn"
    />
  </>
  )
}

export default Home
