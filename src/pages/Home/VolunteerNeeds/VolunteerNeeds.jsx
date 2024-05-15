import axios from "axios";
import { useEffect, useState } from "react";
import VolunteerNeed from "./VolunteerNeed";
import { Link } from "react-router-dom";


const VolunteerNeeds = () => {

    const [needs, setNeeds] = useState([]);

    useEffect(()=>{
        axios.get('https://impact-volens-server.vercel.app/need')
        .then(res => {
            // console.log('volunteer needs', res.data);
            setNeeds(res.data)
        })
    },[])

    return (
        <div>
           <h1 className="text-5xl text-center font-bold mt-12 mb-6">Volunteer Needs</h1>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {
                needs.map((need, index)=><VolunteerNeed key={index} need={need} />)
            }

           
            </div>
            <Link to={'/need'} className="btn bg-indigo-600 text-white text-center mx-auto flex justify-center mt-6 w-1/3">See All</Link>
        </div>
    );
};

export default VolunteerNeeds;