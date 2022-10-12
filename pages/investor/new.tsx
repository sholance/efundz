import { useEffect, useState } from 'react';
import { supabase } from '../../utils/client';
import { useRouter } from "next/router";
import { type } from 'os';

function NewInvestor() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const Router = useRouter();

    const [company, setCompany] = useState({
        cname: "",
    });
    const [data, setData] = useState({
        title: "",
        company_id: 1,
        description: "",
        type: "",
    });

    const handelChange = (e: { target: { name: any; value: any; }; }) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handelCompanyChange = (e: { target: { name: any; value: any; }; }) => {
        setCompany({ ...company, [e.target.name]: e.target.value });
    };

    const handelSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (!data.title || !data.description || !data.type) {
            setError("Field can not be empty !");
            return;
        }
        const cres = await supabase.from("p_companies").insert([company])
        const res = await supabase.from("p_jobs").insert([data]);

        if (res.error) {
            setError(res.error.message + " !");
            // toast.error(`${res.error.message}! error`);
        }
        if (cres.error) {
            setError(cres.error.message + " !");
        }
        if (res.data) {
            setSuccess("Entry created. Redirecting to profile.");
            setTimeout(() => {
                Router.push("/company/create");
            }, 3000);
        }
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
                    <h1 className="font-semibold">Complete Investor Application</h1>
                    <div className="space-y-2">
                        <p>Full Name:</p>
                        <input
                            value={data.title}
                            onChange={handelChange}
                            type="text"
                            name="title"
                            className="w-full px-3 py-3 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
                        />
                    </div>
                    <div className="space-y-2">
                        <p>Email</p>
                        <input
                            value={data.description}
                            onChange={handelChange}
                            type="mail"
                            name="description"
                            className="w-full px-3 py-3 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
                        />
                    </div>
                    <div className="space-y-2">
                        <p>Bio</p>
                        <textarea
                            defaultValue={company.cname}
                            onChange={handelCompanyChange}
                            name="cname"
                            className="w-full px-3 leading-10 min-h-full bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
                        />
                    </div>
                    <div className="space-y-2">
                        <p>Profile Picture</p>
                        <input
                            value={data.description}
                            onChange={handelChange}
                            type="file"
                            name="description"
                            className="w-full px-3 py-1 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
                        />
                    </div>
                    <div className="space-y-2">
                        <p>Source Of Funds</p>
                        <input
                            value={data.type}
                            onChange={handelChange}
                            type="text"
                            name="type"
                            className="w-full px-3 py-3 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
                        />
                    </div>
                    <input
                        type="submit"
                        value="Set User Profile"
                        className="block w-full p-3 rounded-sm text-sm text-white bg-black outline-none cursor-pointer"
                    />
                </form>
            </section>
        </>

    );
}
export default NewInvestor