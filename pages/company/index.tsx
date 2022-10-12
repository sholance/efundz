import { useEffect, useState } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import { Fieldset, Button, useToasts, Input, Loading, Image, Radio, Page, Textarea } from '@geist-ui/react';
import { supabase } from '../../utils/client';
import { definitions } from '../../lib/definitions';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthSession } from '@supabase/supabase-js'
import { useRouter } from "next/router";


const Company: NextPage = () => {
    // eslint-disable-next-line
    const { register: r1, handleSubmit: h1, formState: f1 } = useForm<{ name: string }>();
    const { register: r2, handleSubmit: h2, formState: f2 } = useForm<{ description: string }>();
    const { register: r3, handleSubmit: h3, formState: f3 } = useForm<{ demo: string }>();
    const { register: r4, handleSubmit: h4, formState: f4 } = useForm<{ logo_url: string }>();
    const [company, setCompany] = useState<definitions['company'] | null>(null);
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
                const { data, error } = await supabase.from<definitions['company']>('company').select().eq('id', user!.id)
                    ;
                ;
                if (!company?.updated_at) {
                    Router.push("/company/new");
                }
                if (error) return setError(error.message);
                if (data) {
                    setCompany(data[0]);
                }
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateName: SubmitHandler<{ name: string }> = async ({ name }) => {
        if (name === company?.name || (name === '' && company?.name === null))
            return setSuccess('Your account name was updated successfully');
        const { data, error } = await supabase
            .from<definitions['company']>('company')
            // @ts-expect-error: undefined not supported for psql
            .update({ username: username || null })
            .match({ email: company?.email });
        if (error) return setToast({ text: error.message, type: 'error' });
        if (data) {
            setSuccess('Your company name was updated successfully');
            setCompany(data[0]);
        }
    };
    const updateBio: SubmitHandler<{ description: string }> = async ({ description }) => {
        if (description === company?.description || (description === '' && company?.description === null))
            return setSuccess('Your company description was updated successfully');
        const { data, error } = await supabase
            .from<definitions['company']>('company')
            // @ts-expect-error: undefined not supported for psql
            .update({ description: description || null })
            .match({ email: company?.email });
        if (error) return setToast({ text: error.message, type: 'error' });
        if (data) {
            setSuccess('Your company description was updated successfully');
            setCompany(data[0]);
        }
    };
    const updateAch: SubmitHandler<{ demo: string }> = async ({ demo }) => {
        if (demo === company?.demo || (demo === '' && company?.demo === null))
            return setSuccess('Your company demo was updated successfully');
        const { data, error } = await supabase
            .from<definitions['company']>('company')
            // @ts-expect-error: undefined not supported for psql
            .update({ demo: demo || null })
            .match({ email: company?.email });
        if (error) return setError(error.message);
        if (data) {
            setSuccess('Your comapny demo was updated successfully');
            setCompany(data[0]);
        }
    };
    const updateAvatar: SubmitHandler<{ logo_url: string }> = async ({ logo_url }) => {
        if (logo_url === company?.logo_url || (logo_url === '' && company?.logo_url === null))
            return setError('Your company logo was updated successfully');
        const { data, error } = await supabase
            .from<definitions['company']>('company')
            // @ts-expect-error: undefined not supported for psql
            .update({ logo_url: logo_url || null })
            .match({ email: company?.email });
        if (error) return setError(error.message);
        if (data) {
            setSuccess('Your company logo was updated successfully');
            setCompany(data[0]);
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

                {company ? (
                    <div className="grid gap-5">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Fieldset>
                                <Fieldset.Title>Company Name:</Fieldset.Title>
                                <Fieldset.Subtitle>
                                    Please the name of your company.
                                </Fieldset.Subtitle>
                                <div className="max-w-sm sm:max-w-full">
                                    <Input
                                        width="50%"
                                        // status={f1.errors.username && 'error'}
                                        initialValue={company.name}
                                        {...r1('name', { maxLength: 32 })}
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
                            <Fieldset.Title>Company Contact Email Address</Fieldset.Title>
                            <Fieldset.Subtitle>
                                Your account email address
                            </Fieldset.Subtitle>
                            <div className="max-w-sm sm:max-w-full">
                                <input id="email" type="text" value={company.email} disabled />
                            </div>
                        </Fieldset>
                        <Fieldset >
                            <div className="float-left">
                                <Image
                                    src={`${company.logo_url}`}
                                    height={10}
                                    width={10}
                                    alt="logo_url"
                                />
                                {/* <iframe width="420" height="315"
                                    src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
                                </iframe> */}
                            </div>
                            <Fieldset.Title>Company Logo</Fieldset.Title>
                            <Fieldset.Subtitle>
                                Tip: Upload a company logo
                            </Fieldset.Subtitle>
                            <Input
                                width="60%"
                                // status={f1.errors.username && 'error'}
                                initialValue={company.logo_url}
                            // {...r2('description', { maxLength: 150 })}
                            />
                            <Fieldset.Footer>
                                <div className="flex max-w-sm sm:max-w-full">
                                    <p>
                                        Update company logo.
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
                                <Fieldset.Title>description</Fieldset.Title>
                                <Fieldset.Subtitle>
                                    Update company description
                                </Fieldset.Subtitle>
                                <div className="max-w-sm sm:max-w-full">
                                    <Textarea
                                        width="60%"
                                        // status={f1.errors.username && 'error'}
                                        initialValue={company.description}
                                        {...r2('description', { maxLength: 150 })}
                                    />
                                </div>
                                <Fieldset.Footer>
                                    <Fieldset.Footer>
                                        <Button auto type="secondary" onClick={h2(updateBio)}>
                                            Update description
                                        </Button>
                                    </Fieldset.Footer>
                                </Fieldset.Footer>
                            </Fieldset>
                        </form>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Fieldset>
                                <Fieldset.Title>demo</Fieldset.Title>
                                <Fieldset.Subtitle>
                                    add demo for potential investors
                                </Fieldset.Subtitle>
                                <div className="max-w-sm sm:max-w-full">
                                    <Textarea
                                        width="60%"
                                        // status={f1.errors.username && 'error'}
                                        initialValue={company.demo}
                                        {...r3('demo', { maxLength: 150 })}
                                    />
                                </div>
                                <Fieldset.Footer>
                                    <Fieldset.Footer>
                                        <Button auto type="secondary" onClick={h3(updateAch)}>
                                            Update demo
                                        </Button>
                                    </Fieldset.Footer>
                                </Fieldset.Footer>
                            </Fieldset>
                        </form>
                        <Fieldset.Subtitle>
                            Last Update
                        </Fieldset.Subtitle>
                        <div className="max-w-sm sm:max-w-full">
                            <input id="email" type="text" value={company.updated_at} disabled />
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

export default Company;