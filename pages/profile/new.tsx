import { useEffect, useState } from 'react';
import { supabase } from '../../utils/client';
import { useRouter } from "next/router";
import { definitions } from '../../lib/definitions'
import { AuthSession } from '@supabase/supabase-js'


function NewProfile({ session }: { session: AuthSession }) {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const Router = useRouter();

    const [data, setData] = useState({
        username: "",
        email: "",
        bio: "",
        avatar_url: "",
        achievements: "",
    });


    async function updateProfile() {
        try {
            const user = supabase.auth.user();
            if (!user) {
                Router.push("/auth");
            }
            const updates = {
                id: user!.id,
                username: data.username,
                email: data.email,
                bio: data.bio,
                avatar_url: data.avatar_url,
                achievements: data.achievements,
                updated_at: new Date(),
            };

            const pres = await supabase.from('profiles').upsert(updates);
            if (pres.error) {
                setError(pres.error.message + " !");
                // toast.error(`${res.error.message}! error`);
            }

            if (!data.username || !data.email || !data.bio || !data.avatar_url || !data.achievements) {
                setError("Field can not be empty !");
                return;
            }
            if (pres.data) {
                setSuccess("Entry created. Redirecting to profile.");
                setTimeout(() => {
                    Router.push("/profile");
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

        updateProfile()
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
                    <h1 className="font-semibold">Update Your Profile</h1>
                    <div className="space-y-2">
                        <p>Name:</p>
                        <input
                            value={data.username}
                            onChange={handelChange}
                            type="text"
                            name="username"
                            className="w-full px-3 py-3 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
                        />
                    </div>
                    <div className="space-y-2">
                        <p>Email</p>
                        <input
                            value={data.email}
                            onChange={handelChange}
                            type="mail"
                            name="email"
                            className="w-full px-3 py-3 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
                        />
                    </div>
                    <div className="space-y-2">
                        <p>Bio</p>
                        <textarea
                            defaultValue={data.bio}
                            onChange={handelChange}
                            name="bio"
                            className="w-full px-3 leading-10 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
                        />
                    </div>
                    <div className="space-y-2">
                        <p>Profile Picture</p>
                        <input
                            value={data.avatar_url}
                            onChange={handelChange}
                            type="file"
                            name="avatar_url"
                            className="w-full px-3 py-1 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
                        />
                    </div>
                    <div className="space-y-2">
                        <p>What have you acheived recently?</p>
                        <input
                            value={data.achievements}
                            onChange={handelChange}
                            type="text"
                            name="achievements"
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
export default NewProfile