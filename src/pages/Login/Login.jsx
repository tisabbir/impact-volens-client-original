
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img
              className="max-w-lg"
              src="https://i.ibb.co/0257RHK/Blogging-bro.png"
            />
          </div>

          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-center mt-4 text-2xl font-bold">Login Now</h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <h1 className="text-center mb-2">New Here? <Link to={'/register'} className="text-blue-500">Register Now</Link></h1>
                
                <button className="btn bg-green-500 text-white">Login</button>
                <div className="text-center space-y-2 mt-4 ">
                  <button className="btn w-full"> <FaGoogle />Login With Google</button>
                  <button className="btn w-full"> <FaGithub /> Login With Github</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
