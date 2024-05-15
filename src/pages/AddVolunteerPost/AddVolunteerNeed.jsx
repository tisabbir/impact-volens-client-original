import { Link } from "react-router-dom";


const AddVolunteerNeed = ({post}) => {
    
    const {_id, title, thumbnail , category, deadline} = post;
   
  return (
    
   
         <div>
           <div className="max-w-xs rounded-md shadow-md bg-white text-gray-800 mx-auto">
             <img
               src={thumbnail || 'https://picsum.photos/id/1/200/300'}
               alt=""
               className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
             />
             <div className="flex flex-col justify-between p-6 space-y-8">
               <div className="space-y-2">
                 <h2 className="text-xl font-semibold tracking-wide">
                   {title}
                 </h2>
                 <p className="text-gray-800">
                  Category: {category}
                 </p>
                 <p className="text-red-800">
                  Deadline: {deadline}
                 </p>
               </div>
               <Link to={`/post/${_id}`}
                 type="button"
                 className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-indigo-500 text-white hover:bg-indigo-400"
               >
                 View Details
               </Link>
             </div>
           </div>
         </div>
     


  );
};

export default AddVolunteerNeed;
