import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import kaikas from '../public/kaikas.jpeg'
import metamask from '../public/metamask.png'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import HeroHead from '../components/HeroHead'

const Jobs: NextPage = () => {
  return (<>
    <HeroHead heroText="Klaytn Job Posts" />
    <div className="flex flex-col items-start mx-10 w-100">
      <div className="border-2 p-4 m-1 mt-3 p-5 flex flex-col w-full transition ease-in-out duration-400 delay-100 hover:-translate-y-2  place-content-between shadow">
        <Link href="/job" passHref>
          <div className="flex">
            <Image src={kaikas} width="32px" height="32px" alt='logo' />
            <p className="text-3xl mx-4 cursor-pointer">Job Post
            </p>
          </div>
        </Link>
        <p className="text-sm  mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt dolorum porro ex soluta error quaerat est praesentium,
          voluptate sapiente. Accusantium suscipit eveniet doloremque eius quas rem delectus
          dignissimos optio repudiandae.
        </p>
        <div className="mt-3"><span className="text-xl">
          Smart Contract Developer
        </span>
          <span className="mx-6"> Location: Remote</span>
          <span className="mx-5"> Salary: $100-150k </span>
        </div>
      </div>
      <div className="border-2 p-4 m-1 mt-3 p-5 flex flex-col w-full transition ease-in-out duration-400 delay-100 hover:-translate-y-2  place-content-between shadow">
        <Link href="/job">
          <div className="flex">
            <Image src={metamask} width="32px" height="32px" />
            <p className="text-3xl mx-4 cursor-pointer">Job Post 2
            </p>
          </div>
        </Link>
        <p className="text-sm  mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt dolorum porro ex soluta error quaerat est praesentium,
          voluptate sapiente. Accusantium suscipit eveniet doloremque eius quas rem delectus
          dignissimos optio repudiandae.
        </p>
        <div className="mt-3"><span className="text-xl">
          Frontend Developer
        </span>
          <span className="mx-6"> Location: Korea</span>
          <span className="mx-5"> Salary: $100-150k </span>
        </div>
      </div>
      <div className="border-2 p-4 m-1 text-2xl flex w-full place-content-between">
        Jobs
      </div>
      <div className="border-2 p-4 m-1 text-2xl flex w-full place-content-between">
        Jobs
      </div>
      <div className="border-2 p-4 m-1 text-2xl flex w-full place-content-between">
        Jobs
      </div><div className="border-2 p-4 m-1 text-2xl flex w-full place-content-between">
        Jobs
      </div><div className="border-2 p-4 m-1 text-2xl flex w-full place-content-between">
        Jobs
      </div><div className="border-2 p-4 m-1 text-2xl flex w-full place-content-between">
        Jobs
      </div>
    </div>
  </>
  )
}

export default Jobs
