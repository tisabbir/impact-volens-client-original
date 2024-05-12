import { fromJSON } from "postcss";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Register = () => {

  const {createUser} = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.url.value;
    const password = form.password.value;

    createUser(email, password)
    .then((userCredential) => {
      const user =userCredential.user;
      console.log(user);
    })
    .catch((err)=>{
      console.log(err);
    })

    console.log('register', name, email, photoUrl, password);
  }


    return (
        <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img
              className="max-w-lg rounded-lg"
              src="https://i.ibb.co/JdRj4K0/girl-with-backpack-sunset-generative-al.jpg"
            />
          </div>

          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-center mt-4 text-2xl font-bold">Register Now</h1>
            <form onSubmit={handleRegister} className="card-body">
                
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="url"
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
                  name="password"
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
                <h1 className="text-center mb-2">Already a member of us? <Link to={'/login'} className="text-blue-500">Login Now</Link></h1>
                
                <button className="btn bg-green-500 text-white">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;