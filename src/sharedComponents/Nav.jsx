import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Nav = () => {
  const { logOut, user, setUser, setLoading } = useAuth();

  console.log('user from navbar', user);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser(null)
        setLoading(false)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your have been logged out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navBar = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/need"}>Need Volunteer</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navBar}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost text-xl md:text-2xl lg:text-3xl"
          >
            Impact Volens
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navBar}</ul>
        </div>
        <div className="navbar-end">
          <div>
            {user ? (
              <div className="flex gap-3 items-center ">
                <details className="dropdown">
  <summary className="m-1 btn btn-ghost">

              <div>
              <div className="relative">
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="rounded-full w-10 h-10 peer"
                  />
                  <div className="hidden peer-hover:flex hover:flex absolute">
                    <h1 className="text-xl p-2 w-[100px] mt-2 bg-gray-200 z-10 rounded-lg">{user?.displayName}</h1>
                  </div>
                </div>
              </div>

  </summary>
  <ul className="p-2 shadow menu dropdown-content z-[10] bg-base-100 rounded-box w-52">
    <Link className="hover:bg-gray-300 p-2 rounded-lg" to={'/add'}>Add Volunteer Post</Link>
    <Link className="hover:bg-gray-300 p-2 rounded-lg" to={'/manage'}>Manage My Post</Link>
  </ul>
</details>

                <a className="btn" onClick={handleLogOut}>
                  Log Out
                </a>
              </div>
            ) : (
              <NavLink to={"/login"} className="btn">
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
