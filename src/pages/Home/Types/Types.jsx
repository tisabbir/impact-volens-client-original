import axios from "axios";
import { useEffect, useState } from "react";
import Type from "./Type";


const Types = () => {

    const [types, setTypes] = useState([]);

    useEffect(()=>{
        axios.get('https://impact-volens-server.vercel.app/types')
        .then(res => {
            // console.log(res.data);
            setTypes(res.data);
        })
    },[])
    
    return (
        <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-12 mb-6">Types of Volunteering We Offer</h1>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {
                types.map((type,index)=><Type key={index} type={type} />)
             }
             </div>
        </div>
    );
};

export default Types;