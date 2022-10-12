import { useEffect, useState } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import { Fieldset, Button, useToasts, Input, Loading, Image, Radio, Page, Textarea } from '@geist-ui/react';
import { supabase } from '../../utils/client';
import { definitions } from '../../lib/definitions';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthSession } from '@supabase/supabase-js'
import { useRouter } from "next/router";


const Profile: NextPage = () => {
    const { register: r1, handleSubmit: h1, formState: f1 } = useForm<{ username: string }>();
    const { register: r2, handleSubmit: h2, formState: f2 } = useForm<{ bio: string }>();
    const { register: r3, handleSubmit: h3, formState: f3 } = useForm<{ achievements: string }>();
    const { register: r4, handleSubmit: h4, formState: f4 } = useForm<{ avatar_url: string }>();
    const [profile, setProfile] = useState<definitions['profiles'] | null>(null);
    const [, setToast] = useToasts();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [session, setSession] = useState<AuthSession | null>(null)
    const Router = useRouter();


    useEffect(() => {
        (async () => {
            const user = supabase.auth.user();
            if (!user) {
                Router.push("/auth");
            }
            if (user) {
                const { data, error } = await supabase.from<definitions['profiles']>('profiles').select().eq('id', user!.id)
                    ;
                ;
                if (error) return setError(error.message);
                if (data) {
                    setProfile(data[0]);
                }
            }
            // if (!profile?.id) {
            //     Router.push("/profile/new");
            // }

        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateName: SubmitHandler<{ username: string }> = async ({ username }) => {
        if (username === profile?.username || (username === '' && profile?.username === null))
            return setSuccess('Your account name was updated successfully');
        const { data, error } = await supabase
            .from<definitions['profiles']>('profiles')
            // @ts-expect-error: undefined not supported for psql
            .update({ username: username || null })
            .match({ email: profile?.email });
        if (error) return setToast({ text: error.message, type: 'error' });
        if (data) {
            setSuccess('Your account name was updated successfully');
            setProfile(data[0]);
        }
    };
    const updateBio: SubmitHandler<{ bio: string }> = async ({ bio }) => {
        if (bio === profile?.bio || (bio === '' && profile?.bio === null))
            return setSuccess('Your account bio was updated successfully');
        const { data, error } = await supabase
            .from<definitions['profiles']>('profiles')
            // @ts-expect-error: undefined not supported for psql
            .update({ bio: bio || null })
            .match({ email: profile?.email });
        if (error) return setToast({ text: error.message, type: 'error' });
        if (data) {
            setSuccess('Your account bio was updated successfully');
            setProfile(data[0]);
        }
    };
    const updateAch: SubmitHandler<{ achievements: string }> = async ({ achievements }) => {
        if (achievements === profile?.achievements || (achievements === '' && profile?.achievements === null))
            return setSuccess('Your achievements was updated successfully');
        const { data, error } = await supabase
            .from<definitions['profiles']>('profiles')
            // @ts-expect-error: undefined not supported for psql
            .update({ achievements: achievements || null })
            .match({ email: profile?.email });
        if (error) return setError(error.message);
        if (data) {
            setSuccess('Your achievements was updated successfully');
            setProfile(data[0]);
        }
    };
    const updateAvatar: SubmitHandler<{ avatar_url: string }> = async ({ avatar_url }) => {
        if (avatar_url === profile?.avatar_url || (avatar_url === '' && profile?.avatar_url === null))
            return setError('Your profile avatar was updated successfully');
        const { data, error } = await supabase
            .from<definitions['profiles']>('profiles')
            // @ts-expect-error: undefined not supported for psql
            .update({ avatar_url: avatar_url || null })
            .match({ email: profile?.email });
        if (error) return setError(error.message);
        if (data) {
            setSuccess('Your profile avatar was updated successfully');
            setProfile(data[0]);
        }
    };

    return (
        <>

            <Page className="grid three-one gap-5">
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

                {profile ? (
                    <div className="grid gap-5">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Fieldset>
                                <Fieldset.Title>Account Name</Fieldset.Title>
                                <Fieldset.Subtitle>
                                    Please enter your full name, or a display name you are comfortable with.
                                </Fieldset.Subtitle>
                                <div className="max-w-sm sm:max-w-full">
                                    <Input
                                        width="50%"
                                        // status={f1.errors.username && 'error'}
                                        initialValue={profile.username}
                                        {...r1('username', { maxLength: 32 })}
                                    />
                                </div>
                                <Fieldset.Footer>
                                    <Fieldset.Footer>
                                        <Button auto type="secondary" onClick={h1(updateName)}>
                                            Update
                                        </Button>
                                    </Fieldset.Footer>
                                </Fieldset.Footer>
                            </Fieldset>
                        </form>
                        <Fieldset>

                            <Fieldset.Title>Contact Email Address</Fieldset.Title>
                            <Fieldset.Subtitle>
                                Your account email address
                            </Fieldset.Subtitle>
                            <div className="max-w-sm sm:max-w-full">
                                <input id="email" type="text" value={profile.email} disabled />
                            </div>
                        </Fieldset>
                        <Fieldset >
                            <div className="float-left">
                                <Image
                                    src={`${profile.avatar_url}`}
                                    height={10}
                                    width={10}
                                    alt="avatar"
                                />
                            </div>
                            <Fieldset.Title>Profile Picture</Fieldset.Title>
                            <Fieldset.Subtitle>
                                Tip: Upload a professional picture
                            </Fieldset.Subtitle>
                            <Input
                                width="60%"
                                // status={f1.errors.username && 'error'}
                                initialValue={profile.avatar_url}
                            // {...r2('bio', { maxLength: 150 })}
                            />
                            <Fieldset.Footer>
                                <div className=" flex max-w-sm sm:max-w-full">
                                    <p>
                                        Update profile picture.
                                    </p>
                                </div>

                                <Fieldset.Footer>
                                    <Button auto type="secondary" onClick={h4(updateAvatar)}>
                                        Update
                                    </Button>
                                </Fieldset.Footer>
                            </Fieldset.Footer>
                        </Fieldset>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Fieldset>
                                <Fieldset.Title>Bio</Fieldset.Title>
                                <Fieldset.Subtitle>
                                    Update your bio
                                </Fieldset.Subtitle>
                                <div className="max-w-sm sm:max-w-full">
                                    <Textarea
                                        width="60%"
                                        // status={f1.errors.username && 'error'}
                                        initialValue={profile.bio}
                                        {...r2('bio', { maxLength: 150 })}
                                    />
                                </div>
                                <Fieldset.Footer>
                                    <Fieldset.Footer>
                                        <Button auto type="secondary" onClick={h2(updateBio)}>
                                            Update Bio
                                        </Button>
                                    </Fieldset.Footer>
                                </Fieldset.Footer>
                            </Fieldset>
                        </form>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Fieldset>
                                <Fieldset.Title>Achievements</Fieldset.Title>
                                <Fieldset.Subtitle>
                                    Fill or Update Acheivements
                                </Fieldset.Subtitle>
                                <div className="max-w-sm sm:max-w-full">
                                    <Textarea
                                        width="60%"
                                        // status={f1.errors.username && 'error'}
                                        initialValue={profile.achievements}
                                        {...r3('achievements', { maxLength: 150 })}
                                    />
                                </div>
                                <Fieldset.Footer>
                                    <Fieldset.Footer>
                                        <Button auto type="secondary" onClick={h3(updateAch)}>
                                            Update Achievements
                                        </Button>
                                    </Fieldset.Footer>
                                </Fieldset.Footer>
                            </Fieldset>
                        </form>
                        <Fieldset.Subtitle>
                            Last Update
                        </Fieldset.Subtitle>
                        <div className="max-w-sm sm:max-w-full">
                            <input id="email" type="text" value={profile.updated_at} disabled />
                        </div>
                    </div>
                ) : (
                    <div className="h-20">
                        <Loading className="h-20" />
                    </div>
                )}
            </Page>
        </>
    );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const user = supabase.auth.user();

//     if (!user) return { props: {}, redirect: { destination: '/auth', permanent: false } };

//     return { props: { user } };
// };

export default Profile;