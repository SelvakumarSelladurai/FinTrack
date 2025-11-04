import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/assets/FinTrackLogo.png";

const schema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log("User login:", data);
    alert("Login successful!");
    navigate("/dashboard");
  };

  return (
    <div className="hero min-h-screen bg-base-200 relative">
      <div className="card w-full max-w-md shadow-2xl bg-base-100 relative overflow-hidden py-10 px-8">
        <div className="absolute -top-8 -left-8 w-36 h-36 bg-blue-500 rounded-full blur-2xl opacity-40"></div>

        <figure className="px-10 pt-6 flex justify-center z-10">
          <img
            src={Logo}
            alt="FinTrack Logo"
            className="w-28 h-28 object-contain"
          />
        </figure>

        <h2 className="text-center text-2xl font-bold text-blue-600 mt-4">
          Login
        </h2>

        <div className="card-body z-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className="input input-bordered w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
              />
              {errors.email && (
                <span className="text-error text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
                <Link
                  to="/forgot-password"
                  className="label-text-alt text-blue-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className="input input-bordered w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
              />
              {errors.password && (
                <span className="text-error text-sm mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn w-full border-none text-white text-lg py-3"
                style={{ backgroundColor: "#2563EB" }}
              >
                Sign In
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-blue-500 font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}