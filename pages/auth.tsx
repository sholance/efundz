import Link from "next/link";
import React, { useState } from "react";
import type { NextPage, GetServerSideProps } from 'next';
import { useRouter } from "next/router";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { supabase } from "../utils/client";
import Head from "next/head";

const Auth = () => {
  const router = useRouter();
  const { type } = router.query;
  return (
    <div>

      <Head>
        <title>Authentication</title>
      </Head>
      <div className="container mx-auto flex justify-center items-stretch mt-24 min-h-[60vh] ">
        <div className=" w-2/4 shadow-xl  rounded-xl bg-pink-700 p-5">
          <div className="tabs flex justify-center p-3">
            <a
              className={`tab tab-bordered font-semibold px-3 text-xl border rounded text-white cursor-pointer ${type === "login" ? "" : "tab-active"
                }`}
              onClick={() => router.push("/auth?type=register")}
            >
              Register
            </a>
            <p className="px-5 text-xl">OR</p>
            <a
              className={`tab tab-bordered font-semibold px-3 border rounded text-xl text-white cursor-pointer  ${type === "register" ? "" : "tab-active"
                }`}
              onClick={() => router.push("/auth?type=login")}
            >
              Login
            </a>
          </div>
          {type === "login" ? <Login /> : <Register />}
        </div>

      </div>
    </div >
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = await supabase.auth.api.getUserByCookie(context.req);

  if (user) return { props: {}, redirect: { destination: '/profile', permanent: false } };

  return { props: {} };
};

export default Auth;
