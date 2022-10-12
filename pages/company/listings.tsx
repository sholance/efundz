import React, { useState, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import providerContext from '../../context/context'
import 'react-toastify/dist/ReactToastify.css'
import kaikas from '../../public/kaikas.jpeg'
import Image from 'next/image'
import FundProgress from '../../components/progress'
import useSWR from 'swr';
import LoadingList from './loading'

// const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

const Companies = () => {
    const { data, error } = useSWR("/api/base"
        // ,fetcher, {
        //     suspense: true
        // }

    );
    interface Data {
        progress: number,
        id: number,
        image: {
            url: string
        },
        name: string,
        fullDesc: string
    }

    interface Company {
        [key: string]: Data
    }

    return (
        <>
            {data && data.company.map((company: any) => (
                <>
                    <div className=" w-auto">
                        <div className="flex flex-row">
                            <div className="border-2  border-indigo-50 hover:border-indigo-200 p-4 m-1 mt-3 p-5 flex flex-col w-full transition ease-in-out duration-400 delay-100 hover:-translate-y-2  place-content-between shadow">
                                <div className="flex space-x-4" >
                                    <div className="rounded-full bg-slate-200 h-10 w-10">
                                        <Image src={kaikas} alt="logo" />
                                    </div>
                                    <div className="flex-1 space-y-6 py-1">
                                        <p>{company.name}</p>
                                        <div className="space-y-3">
                                            <div className=" gap-4">
                                                <p>{company.desc}</p>
                                            </div>
                                            <p>
                                                {company.fullDesc}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 py-2">
                                            <div className="h-2 col-span-2">
                                                <div>
                                                    <FundProgress progress={company.progress} />
                                                </div>
                                            </div>
                                            <div className="h-2 col-span-1 w-max">
                                                {company.progress < 100 ? (<button className="border px-2 rounded hover:bg-indigo-500 p-1 W-100 border-indigo bg-indigo-900 text-white font-light">
                                                    Join Round
                                                </button>) : (
                                                    <button className="border rounded p-1 px-2 border-indigo bg-indigo-300 hover:bg-indigo-500 text-white font-light">
                                                        Round Full
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))}
            {error && <div> Failed to Load</div>
            }
        </>
    )
}
const Listing = () => {
    const {
        web3,
        caver,
        ethProvider,
        klaytnProvider,
        metamaskAddress,
        kaikasAddress,
        currentWallet,
    } = useContext(providerContext)
    const [progressBar, setProgressBar] = useState<number>(70)
    const { data, error } = useSWR("/api/base");

    //Handle the error state
    // if (error) return <div>Failed to load </div>;
    //Handle the loading state
    // if (!data) return <div>Loading...</div>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file

    return (<>
        {!metamaskAddress ? (
            <LoadingList />
        ) : (
            <Companies />
        )}

    </>
    )
}

export default Listing