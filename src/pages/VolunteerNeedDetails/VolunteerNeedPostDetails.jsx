import { Link, useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { Helmet } from "react-helmet";

const VolunteerNeedPostDetails = () => {
  const post = useLoaderData();
  // console.log(post);

  const {
    _id,
    name,
    email,
    thumbnail,
    title,
    description,
    category,
    location,
    numberOfVolunteer,
    deadline,
  } = post;

  return (
    <div>
        <Helmet>
        <title>Volunteer Need Details || Impact Volens</title>
      </Helmet>
      <div className="p-5 mx-auto sm:p-10 md:p-16 bg-white text-gray-800">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={thumbnail}
            alt=""
            className="w-full h-60 sm:h-96 bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-white">
            <div className="space-y-2">
              <div className="flex flex-wrap gap-4 justify-around"><button className="btn btn-outline btn-accent btn-xs">{category}</button>
              <button className="btn btn-outline btn-info btn-xs"><CiLocationOn /> {location}</button>
              <button className="btn btn-outline btn-primary btn-xs">{numberOfVolunteer} Volunteer Needed</button>
              
              </div>
              <div className="flex justify-end">
              <button className="btn btn-error btn-xs text-white">Deadline : {deadline}</button>
              </div>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
               {title}
              </a>
              <p className="text-xs text-gray-500">
                Organizer : {name} || Email : {email}
              </p>
            </div>
            <div className="text-gray-800">
              <p>{description}</p>
            </div>
            <div>
                <Link to={`/be/${_id}`} className="btn bg-indigo-600 text-white w-full mt-8">Be a Volunteer</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNeedPostDetails;
