import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const UpdatePost = () => {
  const post = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
  console.log("update page theke", post);
    // const {user} = useAuth();
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
  } = post;

  const handleUpdatePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedName = form.name.value;
    const updatedEmail = form.email.value;
    const updatedTitle = form.title.value;
    const updatedThumbnail = form.thumbnail.value;
    const updatedDescription = form.description.value;
    const updatedCategory = form.category.value;
    const updatedLocation = form.location.value;
    const updatedNumberOfVolunteer = form.number.value;
    const updatedDeadline = startDate;

    const updatedPost = {updatedName, updatedEmail, updatedTitle, updatedThumbnail, updatedDescription, updatedCategory,updatedLocation, updatedNumberOfVolunteer, updatedDeadline};
    console.log(updatedPost);

    fetch(`http://localhost:5000/post/${_id}`, {
        credentials : 'include',
        method : "PUT",
        headers : {
            'content-type' : "application/json"
        },
        body: JSON.stringify(updatedPost)

    }, )
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount>0){
            //update the state
            Swal.fire({
                title: "Successfully Updated",
                text: "You have successfully updated the post",
                imageUrl: "https://i.ibb.co/bsVz8fp/success-Register.jpg",
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: "Custom image",
              });
            
        }
    })

  };
  return (
    <div>
        
      <div className="mt-12">
      <Helmet>
        <title>Update || Impact Volens</title>
      </Helmet>
        <div className="flex justify-around items-center flex-col lg:flex-row">
          <div className="flex-1 m-4">
            <img
              className="rounded-lg mx-auto h-full object-cover"
              src="https://i.ibb.co/Nt6VByz/Wavy-Tech-01-Single-10.jpg"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-center">
              Update Your Volunteer Need Post
            </h1>

            <form
              onSubmit={handleUpdatePost}
              className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <label className="input input-bordered flex items-center gap-2">
                Thumbnail Url
                <input type="text" name="thumbnail" className="grow" defaultValue={thumbnail} />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                Post Title
                <input type="text" name="title" className="grow" defaultValue={title} />
              </label>
              <label className="input input-bordered flex items-center gap-2 lg:col-span-2">
                Description
                <input type="text" name="description" className="grow " defaultValue={description} />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Category
                <input defaultValue={category} type="text" name="category" className="grow" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Location
                <input defaultValue={location} type="text" name="location" className="grow" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                No. of volunteers needed
                <input defaultValue={numberOfVolunteer} type="number" name="number" className="grow" />
              </label>

              <div className="flex gap-2 items-center">
                <h1 className="text-lg font-bold">Deadline:</h1>
                <DatePicker
                  showIcon
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>

              <label className="input input-bordered flex items-center gap-2">
                Organizer Name
                <input
                  type="text"
                  defaultValue={name}
                  name="name"
                  className="grow"
                  disabled
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Organizer Email
                <input
                  type="text"
                  defaultValue={email}
                  name="email"
                  className="grow"
                  disabled
                />
              </label>

              <input
                type="submit"
                value={"Update Post"}
                className="btn btn-full lg:col-span-2 bg-indigo-600 text-white"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
