import React, { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { supabase } from "../../utils/client";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const user = supabase.auth.user();
    if (user) {
      Router.push("/profile");
    }
  }, []);

  const handleLogin = async () => {
    if (email === "" || password === "") {
      setError("Please fill in all fields");
      return;
    }
    setLoading(true);
    const { user, session, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });
    if (error) {
      setLoading(false);
      setPassword("");
      setError(error.message);
    }
    if (user) {
      setLoading(false);
      Router.push("/profile");
    }
  };
  return (
    <div className="form-control w-full mt-2">
      <input
        type="email"
        placeholder="Email Address*"
        className="input input-bordered w-full my-2 p-2"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password*"
        className="input input-bordered w-full my-2 p-2"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="submit"
        value={loading ? "Loading..." : "Login"}
        className="btn btn-info mt-3 bg-black text-white p-2 px-6"
        onClick={handleLogin}
      />
      {error && (
        <div className="absolute bottom-0 right-0 p-4 w-fit bg-black flex items-center justify-start gap-2">
          <div className="text-red-500">
          </div>
          <p className="text-[0.8rem] text-red-500">{error}</p>
        </div>
      )}

      <div className="mt-3">
        New User?{" "}
        <Link href="/auth?type=register" passHref>
          <span className="text-secondary cursor-pointer">Register here</span>
        </Link>
      </div>
    </div>
  );
};


export default Login;
