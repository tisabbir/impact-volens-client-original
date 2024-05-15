import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet";

const BeAVolunteer = () => {
  const post = useLoaderData();

  const {user} = useAuth();
  // console.log(post);

  const volunteerName = user.displayName;
  const volunteerEmail = user.email;
  const {
    
    thumbnail,
    title,
    description,
    category,
    location,
    numberOfVolunteer,
    deadline,
  } = post;

  const handleRequest = (e) => {
    e.preventDefault();
    const form = e.target;
    const suggestion = form.suggestion.value;
    const status = form.status.value;

    const volunteerRequest = {  volunteerName,
        volunteerEmail,
        thumbnail,
        title,
        description,
        category,
        location,
        numberOfVolunteer,
        deadline,
        suggestion,
        status
    }

    // console.log(volunteerRequest);

    axios.post('https://impact-volens-server.vercel.app/request', volunteerRequest, {withCredentials : true})
        .then(() => {
            // console.log(res.data);
            Swal.fire({
                title: "Request Added",
                text: "Successfully Added a Volunteer Request Post",
                imageUrl: "https://i.ibb.co/bsVz8fp/success-Register.jpg",
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: "Custom image"
              })
        })
        .catch(err => {
            console.log(err);
        })

  }

  return (
    <div className="mt-12">

<Helmet>
        <title>Be a Voluntee || Impact Volens</title>
      </Helmet>
      <div className="flex justify-around items-center flex-col lg:flex-row">
        <div className="flex-1 m-4">
          <img
            className="rounded-lg mx-auto h-full object-cover"
            src={thumbnail}
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-center">Be a Volunteer</h1>

          <form
            onSubmit={handleRequest}
            className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <label className="input input-bordered flex items-center gap-2 lg:col-span-2">
              Post Title
              <input
                type="text"
                name="title"
                className="grow"
                defaultValue={title}
                disabled
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Category
              <input
                type="text"
                name="category"
                className="grow"
                defaultValue={category}
                disabled
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Location
              <input
                type="text"
                name="location"
                className="grow"
                defaultValue={location}
                disabled
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              No. of volunteers needed
              <input
                type="number"
                name="number"
                className="grow"
                defaultValue={numberOfVolunteer}
                disabled
              />
            </label>

            <div className="flex gap-2 items-center">
              <h1 className="text-md text-gray-400 ">Deadline: {deadline}</h1>
            </div>

            <label className="input input-bordered flex items-center gap-2">
              Volunteer Name
              <input
                type="text"
                defaultValue={user.displayName}
                name="name"
                className="grow"
                disabled
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Volunteer Email
              <input
                type="text"
                defaultValue={user.email}
                name="email"
                className="grow"
                disabled
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              Suggestion
              <input type="text" name="suggestion" className="grow" />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              Status
              <input
                type="text"
                defaultValue="requested"
                name="status"
                className="grow"
                disabled
              />
            </label>

            
            <textarea
              className="textarea col-span-2"
              defaultValue={"Description : " + description}
              disabled
            ></textarea>

            <input
              type="submit"
              value={"Request"}
              className="btn btn-full lg:col-span-2 bg-indigo-600 text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BeAVolunteer;
