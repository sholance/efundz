import { useEffect, useState, useContext } from 'react';
import { supabase } from '../../utils/client';
import { useRouter } from "next/router";
import { type } from 'os';
import { AuthSession } from '@supabase/supabase-js'
import { createRound } from '../../utils/caver';
import { ToastContainer, toast } from 'react-toastify'
import providerContext from '../../context/context'

interface props {
    roundCreate: any
}

function NewCompany({ session }: { session: AuthSession }) {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [connectedAddress, setConnectedAddress] = useState();
    const { caver, metamaskAddress, kaikasAddress } = useContext(providerContext)
    const Router = useRouter();


    const [data, setData] = useState({
        name: "",
        description: "",
        logo_url: "",
        address: "",
        demo: "",
    });

    async function updateCompany() {
        try {
            const user = supabase.auth.user();
            if (!user) {
                Router.push("/auth");
            }

            createRound(
                data.name,
                "",
                data.logo_url,
                data.description,
                "",
                data.demo,
                data.address,
            )

            const updates = {
                id: user!.id,
                name: data.name,
                description: data.description,
                logo_url: data.logo_url,
                address: data.address,
                demo: data.demo,
                updated_at: new Date(),
            };


            const pres = await supabase.from('company').upsert(updates);
            if (pres.error) {
                setError(pres.error.message + " !");
                // toast.error(`${res.error.message}! error`);
            }

            if (!data.name || !data.description || !data.address || !data.logo_url || !data.demo) {
                setError("Field can not be empty !");
                return;
            }
            if (pres.data) {
                setSuccess("Entry created. Redirecting to your company Page.");
                setTimeout(() => {
                    Router.push("/company");
                }, 3000);
            }
        }
        catch {
        }
    }

    const handelChange = (e: { target: { name: any; value: any; }; }) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handelSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        updateCompany()
    };

    return (
        <>
            <section>
                {error && (
                    <div className="absolute bottom-0 right-0 p-4 w-fit bg-black h-fit flex items-center justify-start gap-2">
                        <div className="text-red-500">
                        </div>
                        <p className="text-[0.8rem] text-red-500">{error}</p>
                    </div>
                )}

                {success && (
                    <div className="absolute bottom-0 right-0 p-4 w-fit bg-black flex items-center justify-start gap-2">
                        <div className="text-green-500">
                        </div>
                        <p className="text-[0.8rem] text-green-500">{success}</p>
                    </div>
                )}

                <form className="max-w-md mx-auto space-y-4 py-10" onSubmit={handelSubmit}>
                    <h1 className="font-semibold">Create Company Profile</h1>
                    <div className="space-y-2">
                        <p>Company Name:</p>
                        <input
                            value={data.name}
                            onChange={handelChange}
                            type="text"
                            name="name"
                            className="w-full px-3 py-3 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
                        />
                    </div>

                    <div className="space-y-2">
                        <p>Company Description</p>
                        <textarea
                            defaultValue={data.description}
                            onChange={handelChange}
                            name="description"
                            className="w-full px-3 leading-10 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
                        />
                    </div>
                    <div className="space-y-2">
                        <p>Company logo</p>
                        <input
                            value={data.logo_url}
                            onChange={handelChange}
                            type="file"
                            name="logo_url"
                            className="w-full px-3 py-1 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
                        />
                    </div>
                    <div className="space-y-2">
                        <p>Klay Wallet Address</p>
                        <input
                            value={data.address}
                            onChange={handelChange}
                            type="text"
                            name="address"
                            className="w-full px-3 py-3 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
                        />
                    </div>
                    <div className="space-y-2">
                        <p>Video Url or Demo</p>
                        <input
                            value={data.demo}
                            onChange={handelChange}
                            type="url"
                            name="demo"
                            placeholder='https://example.com'
                            className="w-full px-3 py-3 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
                        />
                    </div>
                    <input
                        type="submit"
                        value="Create Company"
                        className="block w-full p-3 rounded-sm text-sm text-white bg-black outline-none cursor-pointer"
                    />
                </form>
            </section>
        </>

    );
}
export default NewCompany