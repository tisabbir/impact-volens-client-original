import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyVolunteerRequestPosts = () => {
  const { user } = useAuth();
  const [myRequests, setMyRequests] = useState([]);
//   console.log('the user from my need volunteer post', user.email);
  const url = `https://impact-volens-server.vercel.app/request?email=${user?.email}`;

  useEffect(() => {
    // fetch("https://impact-volens-server.vercel.app/request")
    fetch(url, {credentials:'include'})
      .then((res) => res.json())
      .then((data) => {
        // console.log('my requests',data);
        // setMyRequests(
        //   data.filter((request) => request.volunteerEmail === user.email)
        // );
        setMyRequests(data)
      });
  }, [url, user.email]);

//   console.log("myRequests", myRequests);

  // const {_id, thumbnail, title, category, location, numberOfVolunteer} = myRequests;

  if (myRequests.length === 0) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-center mb-2">
          My Volunteer Request Posts
        </h1>
        <p className="text-center mb-6">
          Thanks For your contribution to the world
        </p>
        <h1 className="text-xl font-bold text-center">Nothing Here...</h1>
        
        <img
          className="w-1/2 object-cover mx-auto mt-6 rounded-lg"
          src="https://i.ibb.co/58NM4j1/6915284.jpg"
          alt=""
        />
      </div>
    );
  }

  const handleDelete = (id) => {
    //handle delete
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://impact-volens-server.vercel.app/request/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Spot has been deleted.",
                icon: "success",
              });
              const remaining = myRequests.filter(
                (request) => request._id !== id
              );
              setMyRequests(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mt-12">
      <h1 className="text-3xl font-bold text-center mb-2">
        My Volunteer Request Posts
      </h1>
      <p className="text-center mb-6">
        Thanks For your contribution to the world
      </p>

      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Category</th>
                <th>location</th>
                <th>Number of Volunteers</th>
                <th>Feedback</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {myRequests.map((request, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{request.title}</td>
                  <td>{request.category}</td>
                  <td>{request.location}</td>
                  <td>{request.numberOfVolunteer}</td>
                  <td>
                    <Link to={`/feedback/${request._id}`} className="btn btn-info text-white">
                      Feedback
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(request._id)}
                      className="btn bg-red-400 text-white"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyVolunteerRequestPosts;
