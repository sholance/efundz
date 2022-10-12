import React, { useContext, useState } from 'react'
import providerContext from '../../context/context'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import kaikas from '../../public/kaikas.jpeg'
import Image from 'next/image'

const Investor = () => {
    const {
        web3,
        caver,
        ethProvider,
        klaytnProvider,
        metamaskAddress,
        kaikasAddress,
        currentWallet,
    } = useContext(providerContext)
    const [loading, setLoading] = useState<boolean>(true)
    return (<> {!metamaskAddress ? (
        <div>
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div>
            <div className="flex space-x-4">
                <div className="bg-slate-200 h-10 w-10">
                    <Image src={kaikas} alt="logo" />
                </div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2">
                        <p> Investor Fundzz</p>
                    </div>
                    <div className="space-y-3">
                        <p>

                        </p>
                        <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )}
    </>

    )
}



export default Investor;