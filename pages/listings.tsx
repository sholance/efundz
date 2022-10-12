import type { NextPage } from 'next'
import Listing from "./company/listings"
import 'react-toastify/dist/ReactToastify.css'
import HeroHead from '../components/HeroHead'

const Listings: NextPage = () => {
  return <>
    <HeroHead heroText="Invest in registered listings" />
    {/* <div className=" flex flex-row w-full p-10">
        <Company />
      </div> */}
    <div className=" flex flex-row w-full p-10">
      <Listing />
    </div>
  </>
}

export default Listings


// const Listings: NextPage = () => {
//   return <>
//     <HeroHead heroText="Registered Listings" />
//     <div className="flex flex-col items-start w-100">
//       {/* <div className=" flex flex-row w-full p-10">
//         <Company />
//       </div> */}
//       <div className=" flex flex-row w-full p-10">
//         <div className="border-2  border-indigo-50 hover:border-indigo-200 p-4 m-1 mt-3 p-5 flex flex-col w-full transition ease-in-out duration-400 delay-100 hover:-translate-y-2  place-content-between shadow">
//           <Listing />
//         </div>
//         <div className="border-2  border-indigo-50 hover:border-indigo-200 p-4 m-1 mt-3 p-5 flex flex-col w-full transition ease-in-out duration-400 delay-100 hover:-translate-y-2  place-content-between shadow">
//           <Listing />
//         </div>
//         <div className="border-2  border-indigo-50 hover:border-indigo-200 p-4 m-1 mt-3 p-5 flex flex-col w-full transition ease-in-out duration-400 delay-100 hover:-translate-y-2  place-content-between shadow">
//           <Listing />
//         </div>
//       </div>
//       <div className=" flex flex-row w-full p-10">
//         <div className="border-2  border-indigo-50 hover:border-indigo-200 p-4 m-1 mt-3 p-5 flex flex-col w-full transition ease-in-out duration-400 delay-100 hover:-translate-y-2  place-content-between shadow">
//           <Listing />
//         </div>
//         <div className="border-2  border-indigo-50 hover:border-indigo-200 p-4 m-1 mt-3 p-5 flex flex-col w-full transition ease-in-out duration-400 delay-100 hover:-translate-y-2  place-content-between shadow">
//           <Listing />
//         </div>
//         <div className="border-2  border-indigo-50 hover:border-indigo-200 p-4 m-1 mt-3 p-5 flex flex-col w-full transition ease-in-out duration-400 delay-100 hover:-translate-y-2  place-content-between shadow">
//           <Listing />
//         </div>
//       </div>
//     </div>

//   </>
// }