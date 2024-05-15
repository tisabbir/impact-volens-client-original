import axios from "axios";
import { useEffect, useState } from "react";
import AddVolunteerNeed from "./AddVolunteerNeed";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";


const AddVolunteerNeeds = () => {

    const [posts, setPosts] = useState([]);

    const {layout} = useAuth();
    console.log('layout from main', layout);

    useEffect(()=>{
        axios.get('https://impact-volens-server.vercel.app/public', {withCredentials:true})
        .then(res => {
            // console.log('volunteer need posts', res.data);
            setPosts(res.data)
        })
    },[])

    return (
        <div>
           {
            layout ? 
           

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                posts.map((post, index)=><AddVolunteerNeed key={index} post={post} />)
            }
            </div> 

            : 

            <div> <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Title</th>
                  <th>Category</th>
                 
                  <th>Number of Volunteers</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{post.title}</td>
                    <td>{post.category}</td>
                    
                    <td>{post.deadline}</td>
  
                    <td>
                      <Link to={`/post/${post._id}`}
                        
                        className="btn bg-green-400 text-white"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
   }


        </div>
    );
};

export default AddVolunteerNeeds;