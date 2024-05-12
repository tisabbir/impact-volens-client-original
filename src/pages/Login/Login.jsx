
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
const Login = () => {

  const {login, logInWithGoogle, logInWithGithub, setUser} = useAuth();

  const handleInput = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email,password);

    //login
    login(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('logged in', user);

      Swal.fire({
        title: "Successfully Logged In",
        text: "Explore the world with Impact Volens.",
        imageUrl: "https://i.ibb.co/bsVz8fp/success-Register.jpg",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image"
      })
      
    })
    .catch((error) => {
      console.log(error);
    });
    
  }

  const handleGoogleLogIn = () => {
      logInWithGoogle()
      .then(res=>{
        console.log(res.user);
        setUser(res.user)
      })
      .catch(err =>{
        console.log(err);
      })
  }
  const handleGithubLogIn = () => {
      logInWithGithub()
      .then(res=>{
        console.log(res.user);
        setUser(res.user)
      })
      .catch(err =>{
        console.log(err);
      })
  }

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
            <form onSubmit={handleInput} className="card-body">
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
                <h1 className="text-center mb-2">New Here? <Link to={'/register'} className="text-blue-500">Register Now</Link></h1>
                
                <button className="btn bg-green-500 text-white">Login</button>
                <div className="text-center space-y-2 mt-4 ">
                  <button onClick={handleGoogleLogIn} className="btn w-full"> <FaGoogle />Login With Google</button>
                  <button onClick={handleGithubLogIn} className="btn w-full"> <FaGithub /> Login With Github</button>
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
