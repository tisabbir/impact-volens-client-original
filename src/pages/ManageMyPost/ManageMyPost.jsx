import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageMyPost = () => {
  const { user } = useAuth();
  // console.log(user.email);

  const [myPosts, setMyPosts] = useState([]);

  //useEffect
  useEffect(() => {
    fetch("http://localhost:5000/post")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setMyPosts(data.filter((post) => post.email === user.email));
      })
      .catch((err) => console.log(err));
  }, [user.email]);

  console.log(myPosts);

  if(myPosts.length ===0){
    return <div>
        <h1 className="text-2xl font-bold text-center">Nothing Here</h1>
        <p className="text-center">Please add some volunteer need post first</p>
        <img className="w-1/2 mx-auto mt-6 rounded-lg" src="https://i.ibb.co/58NM4j1/6915284.jpg" alt="" />
    </div>
  }

  const handleDelete = (id) => {

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


            fetch(`http://localhost:5000/post/${id}`, {
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
                const remaining = myPosts.filter(spot => spot._id !== id);
                setMyPosts(remaining)
                }
                
               
            })
          
        }
      });
}

  return (
    <div>
      {" "}
      <div>
        <div className="mt-12 width-fixer">
          <h1 className="text-3xl font-bold text-center mb-2">
            My Need Volunteer Posts
          </h1>
          <p className="text-center mb-6">Please wait for the volunteers to contribute on your project</p>

          <div>
            <div className="overflow-x-auto">
              <table className="table table-xs">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Deadline</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {myPosts.map((post, index) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{post.title}</td>
                      <td>{post.category}</td>
                      <td>{post.deadline}</td>
                      <td>
                        <Link
                          to={"/update"}
                          className="btn bg-green-400 text-white"
                        >
                          Update
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(post._id)}
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
      </div>
    </div>
  );
};

export default ManageMyPost;
