import type { NextPage } from 'next'
import Investor from "./investor/investor"
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HeroHead from '../components/HeroHead'

const Investors: NextPage = () => {
  return (
    <>
      <HeroHead heroText="Top Investors" />

      <div className="flex flex-col items-start w-100">
        <div className=" flex flex-row w-full p-10">
          <div className="border-2 h-96 p-4 m-1 mt-3 p-5 flex flex-col w-full transition ease-in-out duration-400 delay-100 hover:-translate-y-2  place-content-between shadow">
            <Investor />
          </div>
          <div className="border-2 p-4 m-1 mt-3 p-5 flex flex-col w-full transition ease-in-out duration-400 delay-100 hover:-translate-y-2  place-content-between shadow">
            <Investor />
          </div>
        </div>
        <div className=" flex flex-row w-full p-10">
          <div className="border-2 p-4 m-1 flex flex-col w-full transition ease-in-out duration-400 delay-100 hover:-translate-y-2  place-content-between shadow">
            <Investor />
          </div>
          <div className="border-2 p-4 m-1 flex flex-col w-full transition ease-in-out duration-400 delay-100 hover:-translate-y-2  place-content-between shadow">
            <Investor />
          </div>
        </div>
      </div>
    </>
  )
}

export default Investors
