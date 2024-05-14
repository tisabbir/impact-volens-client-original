import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const MyVolunteerRequestPosts = () => {

    const {user} = useAuth();
    const [myRequests, setMyRequests] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/request')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMyRequests(data.filter((request)=>request.volunteerEmail === user.email));

        })
    },[user.email])

    console.log('myRequests', myRequests);

    // const {_id, thumbnail, title, category, location, numberOfVolunteer} = myRequests;

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
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {


            fetch(`http://localhost:5000/request/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Spot has been deleted.",
                        icon: "success"
                      });
                const remaining = myRequests.filter(request => request._id !== id);
                setMyRequests(remaining)
                }
                
               
            })
          
        }
      });
    }


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
                        <button
                          onClick={() => handleDelete(request._id)}
                          className="btn bg-red-400 text-white"
                        >
                          Delete
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
