import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { supabase } from "../../utils/client";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const user = supabase.auth.user();
    if (user) {
      Router.push("/");
    }
  }, []);

  const handleSignUp = async () => {
    if (email === "" || password === "" || passwordConfirm === "") {
      setError("Please fill in all fields");
      return;
    } else if (password !== passwordConfirm) {
      setError("Passwords do not match");
      return;
    }
    if (type === "") {
      setError("Please select a user type (company or investor).");
      return;
    }
    setLoading(true);
    const { user, session, error } = await supabase.auth.signUp(
      {
        email: email,
        password: password,
      },
      {
        data: {
          type: type,
          profile_id: null,
        },
      }
    );
    if (error) {
      setLoading(false);
      console.log(error.message);
    }
    if (user) {
      setLoading(false);
      console.log(user);
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
      setSuccess("Check your email to confirm your registration.");
      // Router.reload(window.location.pathname);
    }
  };
  return (
    <div className="form-control w-full">
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
        placeholder="Enter new Password*"
        className="input input-bordered w-full my-2 p-2"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password*"
        className="input input-bordered w-full my-2 p-2"
        required
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <div className="flex items-center text-white gap-5">
        <div>Register as: </div>
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="radio-6"
            className="radio radio-secondary"
            value="company"
            checked={type === "company"}
            onChange={() => setType("company")}
          />
          <span className="label-text pl-3">Company</span>
        </label>
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="radio-6"
            className="radio radio-secondary"
            value="investor"
            checked={type === "investor"}
            onChange={() => setType("investor")}
          />
          <span className="label-text pl-3">Investor</span>
        </label>
      </div>
      <input
        type="submit"
        value={loading ? "Loading..." : "Register"}
        onClick={handleSignUp}
        className="btn btn-info mt-3 bg-black text-white p-2 px-6"
      />
      {error && (
        <div className="absolute bottom-0 right-0 p-4 w-fit bg-black flex items-center justify-start gap-2">
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
      <div className="mt-3">
        Existing User?{" "}
        <Link href="/auth?type=login" passHref>
          <span className="text-secondary cursor-pointer">Login here</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
