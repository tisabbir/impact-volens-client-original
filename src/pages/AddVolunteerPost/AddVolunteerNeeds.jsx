import axios from "axios";
import { useEffect, useState } from "react";
import AddVolunteerNeed from "./AddVolunteerNeed";


const AddVolunteerNeeds = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/post', {withCredentials:true})
        .then(res => {
            console.log('volunteer need posts', res.data);
            setPosts(res.data)
        })
    },[])

    return (
        <div>
           
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {
                posts.map((post, index)=><AddVolunteerNeed key={index} post={post} />)
            }

           
            </div>
        </div>
    );
};

export default AddVolunteerNeeds;